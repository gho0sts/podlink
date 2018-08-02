<template>
    <div>
        <NavBar/>
        <Listing v-if="show" v-bind="{show,itunes}"/>
        <Error v-if="!show"/>
    </div>
</template>
<script>
import axios from 'axios'
import stringify from 'json-stringify-safe'
import NavBar from '~/components/NavBar.vue'
import Listing from '~/components/Listing.vue'
import Error from '~/components/Error.vue'

export default {
  name: 'Podcast',
  validate ({ params }) {
    return /^\d+$/.test(params.podcast)
  },   
  components: { NavBar, Listing, Error },
  head () {
    if (this.itunes) {
      return {
        title: `${this.show.title} — PodLink`,
        meta: [
          { hid: 'og:title', property: 'og:title', content: `${this.show.title} — PodLink` },
          { hid: 'twitter:title', name: 'twitter:title', content: `${this.show.title} — PodLink` },
          { hid: 'description', name: 'description', content: this.show.description.long },
          { hid: 'og:description', property: 'og:description', content: this.show.description.long },
          { hid: 'twitter:description', name: 'twitter:description', content: this.show.description.long },
          { hid: 'og:image', property: 'og:image', content: this.itunes.artworkUrl600 },
          { hid: 'twitter:image', name: 'twitter:image', content: '/apple-touch-icon.png' },
          { 
            hid: 'description', 
            name: 'description', 
            content: this.show.description.long
          },
          { 
            hid: 'og:title', 
            property: 'og:title', 
            content: `${this.show.title} — PodLink`
          },
          { 
            hid: 'og:description', 
            property: 'og:description', 
            content: this.show.description.long
          },
          { 
            hid: 'og:image', 
            property: 'og:image', 
            content: this.itunes.artworkUrl600
          },
          { 
            hid: 'og:url', 
            property: 'og:url', 
            content: `https://pod.link'${this.$route.fullPath}`
          },
          { 
            hid: 'twitter:title', 
            name: 'twitter:title', 
            content: `${this.show.title} — PodLink`
          },
          { 
            hid: 'twitter:description', 
            name: 'twitter:description', 
            content: this.show.description.long
          },
          { 
            hid: 'twitter:image', 
            name: 'twitter:image', 
            content: this.itunes.artworkUrl600
          },
          { 
            hid: 'profile:username', 
            name: 'profile:username', 
            content: this.itunes.collectionId
          },
          { 
            hid: 'og:type', 
            property: 'og:type', 
            content: "profile"
          }
        ]
      }
    }
  },
  async asyncData({ params }) {
    let itunes = await axios.get(`https://itunes.apple.com/lookup?id=${params.podcast}`)
    let podlinkservices = await axios.post('https://podlink-backend.herokuapp.com/api/v1/info', {rssUrl: itunes.data.results[0].feedUrl})
    return {
      itunes: itunes.data.results[0],
      show: podlinkservices.data 
    }
  }
 }
</script>