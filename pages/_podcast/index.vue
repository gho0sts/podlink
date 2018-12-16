<template>
  <div id="page" :style="cssProps">
    <NavBar/>
    <Listing v-if="show" v-bind="{show,itunes,premium,sharableLink,links}"/>
    <Error v-if="!show"/>
  </div>
</template>
<script>
import axios from 'axios'
import stringify from 'json-stringify-safe'
import NavBar from '~/components/NavBar.vue'
import Listing from '~/components/Listing.vue'
import Error from '~/components/Error.vue'
const redirects = require('~/301.json')

export default {
  name: 'Podcast',
  validate ({ params }) {
    return /^\d+$/.test(params.podcast)
  },   
  components: { NavBar, Listing, Error },
  data () {
    return {
      redirects,
      premium : false,
      links : {}
    }
  },
  head () {
    if (this.itunes) {
      return {
        title: `${this.show.title} — PodLink`,
        meta: [
          { 
            hid: 'og:title', 
            property: 'og:title', 
            content: `${this.show.title} — PodLink`
          },
          { 
            hid: 'twitter:title', 
            name: 'twitter:title', 
            content: `${this.show.title} — PodLink`
          },
          { 
            hid: 'description', 
            name: 'description', 
            content: this.show.description.long
          },
          { 
            hid: 'og:description', 
            property: 'og:description', 
            content: this.show.description.long
          },
          { 
            hid: 'twitter:description', 
            name: 'twitter:description', 
            content: this.show.description.long
          },
          { 
            hid: 'og:image', 
            property: 'og:image', 
            content: this.itunes.artworkUrl600
          },
          { 
            hid: 'twitter:image', 
            name: 'twitter:image', 
            content: this.itunes.artworkUrl600
          },
          { 
            hid: 'og:url', 
            property: 'og:url', 
            content: `https://pod.link'${this.$route.fullPath}`
          },
          { 
            hid: 'og:type', 
            property: 'og:type', 
            content: "profile"
          },
          { 
            hid: 'profile:username', 
            name: 'profile:username', 
            content: this.itunes.collectionId
          }
        ]
      }
    }
  },
  async asyncData({ params }) {
    let itunes = await axios.get(`https://itunes.apple.com/lookup?id=${params.podcast}`)
    let podlinkservices = await axios.post('https://api.pod.link/api/v1/info', {rssUrl: itunes.data.results[0].feedUrl})

    let result = redirects.find( obj => obj.to === `/${itunes.data.results[0].collectionId}` );
    let path = `/${itunes.data.results[0].collectionId}`
    let premium, links;

    if ( result ){
      premium = true;
      path = result.from

      if ( result.links ){
        links = result.links
      }
    }



    return {
      itunes: itunes.data.results[0],
      show: podlinkservices.data,
      premium: premium,
      sharableLink: `https://pod.link${path}`,
      links: links,
    }
  },
  computed: {
    cssProps() { 
      if(this.links) {
        return {
          '--apps': Number(Object.keys(this.links).length) + 9,
        }
      }
      else {
        return {
          '--apps': 9,
        }
      }
    }
	}
 }
</script>
