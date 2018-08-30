<template>
  <div id="page-embedded">
    <div id="grid">
      <div class="show-media-wrapper">
        <Artwork class="show-media" v-bind="{itunes}"/>
      </div>
      <div class="show-details">
        <a :href="sharableLink" class="credit-tag" alt="PodLink Logo">
          <IconLogo /> 
          <h1 class="show-title">Subscribe to {{itunes.collectionName}}</h1>
        </a>
        <Subscribe class="show-subscribe" v-bind:iTunesID="itunes.collectionId" v-bind:feedUrl="itunes.feedUrl" v-if="links" v-bind:links="links" />
        <Subscribe class="show-subscribe" v-bind:iTunesID="itunes.collectionId" v-bind:feedUrl="itunes.feedUrl" v-if="!links" />
      </div>
    </div>
    
  </div>
</template>
<script>
import axios from 'axios'
import IconLogo from '~/components/IconLogo.vue'
import Artwork from '~/components/Artwork.vue'
import Subscribe from '~/components/EmbeddedSubscribe.vue'
const redirects = require('~/301.json')

export default {
  name: 'EmbeddedPage',
  components: { IconLogo, Artwork, Subscribe },
  data () {
    return {
      redirects
    }
  },
  async asyncData({ params }) {
    let itunes = await axios.get(`https://itunes.apple.com/lookup?id=${params.podcast}`)

    let result = redirects.find( obj => obj.to === `/${itunes.data.results[0].collectionId}` );
    let path = `/${itunes.data.results[0].collectionId}`
    let premium, links;

    if ( result ){
      premium = true;
      path = result.from

      if ( result.links ){
        links = result.links
      }
    }

    return {
      itunes: itunes.data.results[0],
      premium: premium,
      links: links,
      sharableLink: `https://pod.link${path}`,
    }
  }
 }
</script>
<style scoped lang="scss">
  #page-embedded {
    display: inline-block;
    padding: 1rem;
    position: relative;
  }

  #grid {
    display: grid;
    grid-gap: 1rem;
    grid-auto-rows: 1fr;

    @media screen and (min-width:560px) {
      grid-template-columns: 76px 1fr;
      grid-template-areas: "🖼 ✏️";

      .show-media-wrapper {
        grid-area: 🖼;
      }

      .show-details {
        grid-area: ✏️;
      }
    }
  }

  .show-media-wrapper {
    display:none; 

    @media screen and (min-width:560px) {
      display: block;
    }
  }

  .show-title {
    font-size: 18px;
    margin-top: 6px;
    color: #000;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .credit-tag {
    display: flex;
    align-items: flex-start;
    margin: -4px -4px 0;
    color: var(--brandPrimary);
    text-decoration: none;
    max-width: calc(100vw - 26px);

    @media screen and (min-width:560px) {
      max-width: calc(100vw - 118px);
    }

    svg {
      width: 2rem;
      height: auto;
      flex-shrink: 0;
    }
  }
</style>