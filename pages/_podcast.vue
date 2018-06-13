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
          { hid: 'og:title', name: 'og:title', content: `${this.podcast.collectionName} — PodLink` },
          { hid: 'twitter:title', name: 'twitter:title', content: `${this.podcast.collectionName} — PodLink` },
          { hid: 'description', name: 'description', content: this.details.description },
          { hid: 'og:description', name: 'og:description', content: this.details.description },
          { hid: 'twitter:description', name: 'twitter:description', content: this.details.description },
          { hid: 'og:image', name: 'og:image', content: this.podcast.artworkUrl600 },
          { hid: 'twitter:image', name: 'twitter:image', content: '/apple-touch-icon.png' }
        ]
      }
    }
  },
  async asyncData({ params }) {
    try {
      let itunes = await axios.get(`https://itunes.apple.com/lookup?id=${params.podcast}`)
      let gpodder = await axios.get(`http://gpodder.net/api/2/data/podcast.json?url=${itunes.data.results[0].feedUrl}`)
      return {
        podcast: itunes.data.results[0],
        details: gpodder.data 
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