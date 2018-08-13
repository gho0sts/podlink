<template>
  <main class="show">
    <Artwork class="show-media" v-bind="{itunes}"/>
    <Info class="show-info" v-bind="{show}"/>
    <Subscribe class="show-subscribe" v-bind:iTunesID="itunes.collectionId" v-bind:feedUrl="itunes.feedUrl" v-if="links" v-bind:links="links" />
    <Subscribe class="show-subscribe" v-bind:iTunesID="itunes.collectionId" v-bind:feedUrl="itunes.feedUrl" v-if="!links" />
    <Listen v-bind="{show}"/>
    <Share v-bind:iTunesID="itunes.collectionId" v-bind:customLink="sharableLink"/>
    <Upsell v-if="!premium"/>
  </main>
</template>
<script>
import Artwork from '~/components/Artwork.vue'
import Info from '~/components/Info.vue'
import Subscribe from '~/components/Subscribe.vue'
import Listen from '~/components/Listen.vue'
import Share from '~/components/Share.vue'
import Upsell from '~/components/Upsell.vue'

export default {
  name: 'Listing',
  props: ['show','itunes','premium','sharableLink','links'],
  components: { Artwork, Info, Subscribe, Listen, Share, Upsell },
}
</script>

<style scoped lang="scss">
$gridgapSM: 2rem;
$gridgapLG: 1.5rem;

.show {
  padding: 7rem 1.5rem 1.5rem;
  text-align: center;
  display: grid;
  grid-gap: $gridgapSM;

  @supports(padding: max(0px)) {
    padding-left: unquote('max(1.5rem, env(safe-area-inset-left))');
    padding-right: unquote('max(1.5rem, env(safe-area-inset-right))');
  }

  @media screen and (min-width:44rem) {
    grid-template-columns: 192px 1fr;
    grid-template-areas: 
      "🖼 ✏️"
      "🖼 🎧"
      "⏯ ⏯"
      "🔗 🔗"
      "🎉 🎉";
    align-items: flex-start;
    grid-gap: $gridgapLG;

    .show-media {
      grid-area: 🖼;
    }

    .show-info {
      grid-area: ✏️;
      text-align: left;
    }

    .show-subscribe {
      grid-area: 🎧;
      text-align: left;
    }

    .show-buttons {
      justify-content: flex-start;
    }
    
    .show-listen {
      grid-area: ⏯;
    }

    .show-share {
      grid-area: 🔗;
    }

    .show-upsell {
      grid-area: 🎉;
    }
  }

  @media screen and (min-width:60rem) {
    grid-template-columns: 256px 1fr;
  }
}
</style>
