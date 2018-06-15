<template>
  <main class="show">
    <Artwork v-bind="{show}"/>
    <div class="show-details">
      <Info v-bind="{show}"/>
      <Subscribe v-bind:iTunesID="itunes.collectionId" v-bind:feedUrl="itunes.feedUrl" />
    </div>
    <Listen v-bind="{show}"/>
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
  props: ['itunes','show'],
  components: { Artwork, Info, Subscribe, Listen }
}
</script>

<style scoped lang="scss">

.show {
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
