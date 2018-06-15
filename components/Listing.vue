<template>
  <main class="show-details">
    <Artwork v-if="podcast" v-bind="{podcast}"/>
    <Info v-if="details" v-bind="{podcast,details}"/>
    <Subscribe v-if="podcast" v-bind="{podcast}"/>
    <Listen v-if="details" v-bind="{details}"/>
    <nuxt-link to="/custom-urls" class="custom-url">Customize this URL</nuxt-link>
  </main>
</template>
<script>
import Artwork from '~/components/Artwork.vue'
import Info from '~/components/Info.vue'
import Subscribe from '~/components/Subscribe.vue'
import Listen from '~/components/Listen.vue'

export default {
  name: 'Listing',
  props: ['podcast','details'],
  components: { Artwork, Info, Subscribe, Listen }
}
</script>

<style scoped lang="scss">

.show-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 7rem 1.5rem 1.5rem;
  text-align: center;
}

.custom-url {
  display: block;
  margin: 1.5rem;
  font-size: .75em;
  text-decoration: none;
  color: var(--brandMuted);

  &:hover {
    text-decoration: underline;
  }
}
</style>
