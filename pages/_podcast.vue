<template>
    <div>
        <NavBar/>
        <Listing/>
    </div>
</template>
<script>
import NavBar from '~/components/NavBar.vue'
import Listing from '~/components/Listing.vue'

export default {
  name: 'Home',
  components: { NavBar, Listing },
  data () {
    return {
      title: 'PodLink',
      subtitle: 'The easiest way to share podcasts'
    }
  }
}
</script>