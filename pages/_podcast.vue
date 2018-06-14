<template>
    <div>
        <NavBar/>
        <Listing v-if="podcast" v-bind="{details,podcast}"/>
        <Error v-if="!podcast"/>
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
    if (this.podcast) {
      return {
        title: `${this.podcast.collectionName} — PodLink`,
        meta: [
          { hid: 'og:title', property: 'og:title', content: `${this.podcast.collectionName} — PodLink` },
          { hid: 'twitter:title', name: 'twitter:title', content: `${this.podcast.collectionName} — PodLink` },
          { hid: 'description', name: 'description', content: this.details.description },
          { hid: 'og:description', property: 'og:description', content: this.details.description },
          { hid: 'twitter:description', name: 'twitter:description', content: this.details.description },
          { hid: 'og:image', property: 'og:image', content: this.podcast.artworkUrl600 },
          { hid: 'twitter:image', name: 'twitter:image', content: '/apple-touch-icon.png' },
          { 
            hid: 'description', 
            name: 'description', 
            content: this.details.description
          },
          { 
            hid: 'og:title', 
            property: 'og:title', 
            content: `${this.podcast.collectionName} — PodLink`
          },
          { 
            hid: 'og:description', 
            property: 'og:description', 
            content: this.details.description
          },
          { 
            hid: 'og:image', 
            property: 'og:image', 
            content: this.podcast.artworkUrl600
          },
          { 
            hid: 'og:url', 
            property: 'og:url', 
            content: `https://pod.link'${this.$route.fullPath}`
          },
          { 
            hid: 'twitter:title', 
            name: 'twitter:title', 
            content: `${this.podcast.collectionName} — PodLink`
          },
          { 
            hid: 'twitter:description', 
            name: 'twitter:description', 
            content: this.details.description
          },
          { 
            hid: 'twitter:image', 
            name: 'twitter:image', 
            content: this.podcast.artworkUrl600
          },
          { 
            hid: 'profile:username', 
            name: 'profile:username', 
            content: this.podcast.collectionId
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
    try {
      let itunes = await axios.get(`https://itunes.apple.com/lookup?id=${params.podcast}`)
      let podlinkservices = await axios.post('https://podlink-services-develop.herokuapp.com/api/v1/info', {rssUrl: itunes.data.results[0].feedUrl})
      return {
        podcast: itunes.data.results[0],
        details: podlinkservices.data 
      }
    } catch(err) {
      let itunes = await axios.get(`https://itunes.apple.com/lookup?id=${params.podcast}`)
      return {
        podcast: itunes.data.results[0]
      }
    }
  }
 }
</script>