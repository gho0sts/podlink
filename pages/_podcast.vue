<template>
    <div>
        <NavBar/>
        <Listing v-bind:key="podcast.collectionId" v-bind:podcast="podcast"/>
    </div>
</template>
<script>
import axios from 'axios'
import NavBar from '~/components/NavBar.vue'
import Listing from '~/components/Listing.vue'

export default {
  name: 'Home',
  components: { NavBar, Listing },
  asyncData ({ params }) {
    return axios.get(`https://itunes.apple.com/lookup?id=${params.podcast}`)
      .then((res) => {
        return { podcast: res.data.results[0] }
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
</script>