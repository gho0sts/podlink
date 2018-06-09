<template>
    <div>
        <NavBar/>
        <Listing v-bind="{details,podcast}"/>
    </div>
</template>
<script>
import axios from 'axios'
import stringify from 'json-stringify-safe'
import NavBar from '~/components/NavBar.vue'
import Listing from '~/components/Listing.vue'

export default {
  name: 'Home',
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