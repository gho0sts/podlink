<template>
  <main class="show">
    <Artwork class="show-media" v-bind="{itunes}"/>
    <div class="show-details">
      <Info class="show-info" v-bind="{show}"/>
      <Subscribe v-bind:iTunesID="itunes.collectionId" v-bind:feedUrl="itunes.feedUrl" />
    </div>
    <Listen v-bind="{show}"/>
    <Share v-bind:iTunesID="itunes.collectionId"/>
  </main>
</template>
<script>
import Artwork from '~/components/Artwork.vue'
import Info from '~/components/Info.vue'
import Subscribe from '~/components/Subscribe.vue'
import Listen from '~/components/Listen.vue'
import Share from '~/components/Share.vue'

export default {
  name: 'Listing',
  props: ['itunes','show'],
  components: { Artwork, Info, Subscribe, Listen, Share }
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

  @supports(padding: max(0px)) {
    padding-left: unquote('max(1.5rem, env(safe-area-inset-left))');
    padding-right: unquote('max(1.5rem, env(safe-area-inset-right))');
  }
}

@media screen and (min-width:44rem) {
  .show {
    display: grid;
    grid-template-columns: 1fr 31rem;
    grid-template-areas: 
      "🖼 ✏️"
      "🎧 🎧"
      "🎉 🎉";
    grid-gap: 1.5rem;
    align-items: flex-start;

    .show-media {
      grid-area: 🖼;
    }

    .show-details {
      grid-area: ✏️;
      text-align: left;
    }

    .show-buttons {
      justify-content: flex-start;
    }
    
    .show-listen {
      grid-area: 🎧;
    }

    .show-share {
      grid-area: 🎉;
    }
  }
}
</style>
