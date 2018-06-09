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
  validate ({ params }) {
    return /^\d+$/.test(params.podcast)
  },   
  name: 'Podcast',
  components: { NavBar, Listing },
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