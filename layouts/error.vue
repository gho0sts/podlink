<template>
  <div>
    <NavBar/>
    <Error/>
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import Error from '~/components/Error.vue'

export default {
  props: ['error'],
  components: { NavBar, Error },
  layout: 'default'
}
</script>