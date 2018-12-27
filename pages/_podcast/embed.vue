<template>
  <div id="page-embedded">
    <div class="basic-container" v-if="!premium" >
      <a :href="sharableLink" class="teleport-link" alt="Subscribe" target="_blank">
        <Artwork class="show-media" v-bind="{itunes}"/>
        Subscribe to {{itunes.collectionName}}
      </a>
      <a :href="sharableLink" class="powered-link" alt="PodLink" target="_blank">
        Powered by <IconLogo /> PodLink
      </a>
    </div>
    <div id="grid" v-if="premium">
      <div class="show-media-wrapper">
        <Artwork class="show-media" v-bind="{itunes}"/>
      </div>
      <div class="show-details">
        <a :href="sharableLink" class="credit-tag" alt="PodLink Logo" target="_blank">
          <IconLogo /> 
          <h1 class="show-title">Subscribe via PodLink</h1>
        </a>
        <Subscribe class="show-subscribe" v-bind:iTunesID="itunes.collectionId" v-bind:feedUrl="itunes.feedUrl" v-bind:links="links" />
      </div>
    </div>
    
  </div>
</template>
<script>
import axios from 'axios'
import IconLogo from '~/components/IconLogo.vue'
import Artwork from '~/components/Artwork.vue'
import Subscribe from '~/components/Subscribe.vue'
const redirects = require('~/301.json')

export default {
  name: 'EmbeddedPage',
  components: { IconLogo, Artwork, Subscribe },
  data () {
    return {
      redirects,
      premium : false,
      links : {}
    }
  },
  async asyncData({ params }) {
    let itunes = await axios.get(`https://itunes.apple.com/lookup?id=${params.podcast}`)

    let result = redirects.find( obj => obj.to === `/${itunes.data.results[0].collectionId}` );
    let path = `/${itunes.data.results[0].collectionId}`
    let premium, links, framed;

    if ( result ){
      premium = true;
      path = result.from

      if ( result.links ){
        links = result.links
      }
    }

    // if ( window.location !== window.parent.location ) {
    //   framed = true;
    // } else {
    //   framed = false;
    // }

    return {
      itunes: itunes.data.results[0],
      premium: premium,
      links: links,
      framed: framed,
      sharableLink: `https://pod.link${path}`,
    }
  }
 }
</script>
<style lang="scss">
  body {
    background: transparent!important;
  }

  #page-embedded {
    padding: 1rem;
    position: relative;
    margin: 0 auto;
    max-width: calc( (var(--apps) * 48px) - 8px + 124px);

    #grid {
      display: grid;
      grid-gap: 1rem;
      grid-auto-rows: 1fr;

      @media screen and (min-width:408px) {
        grid-template-columns: 76px 1fr;
        grid-template-areas: "🖼 ✏️";

        .show-media-wrapper {
          grid-area: 🖼;
        }

        .show-details {
          grid-area: ✏️;
          align-self: center;
        }
      }
    }

    .show-media-wrapper {
      display:none; 

      @media screen and (min-width:408px) {
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

    .show-subhead, .show-artwork-blur {
      display: none;
    }

    .show-buttons {
      display: flex;
      flex-wrap: wrap;
      justify-content: left;
      margin: 0 -4px;

      @media screen and (min-width:23rem) {
        max-width: none;
      }
    }

    .show-link {
      width: 3rem;
      height: 3rem;
      display: block;
      padding: .25rem;
      margin: 0;
      border-radius: var(--borderradius);
      overflow: hidden;

      &:hover {
        transform: scale(1.166666667);
      }
    }

    .basic-container {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .show-media {
        width: 2rem;
        margin-right: .5rem;
      }

      .show-artwork-front {
        border-radius: 2px;
      }

      .teleport-link {
        border-radius: var(--borderradius);
        box-shadow: 0 0.5em 1.5em -0.5em var(--brandMuted);
        background: #FFF;
        padding: .5rem;
        text-decoration: none;
        color: var(--brandPrimary);
        display: flex;
        align-items: center;
        font-weight: 700;
        font-size: 1.25rem;

        &:hover {
          color: var(--brandDark);
        }
      }

      .powered-link {
        font-size: .5rem;
        display: block;
        margin-top: .5rem;
        font-weight: 600;
        text-decoration: none;
        color: var(--brandMuted);

        svg {
          width: 2em;
          height: auto;
          flex-shrink: 0;
          display: inline-block;
          
          margin: -.625em;
          margin-right: -.25em;
          margin-left: 0;
        }
      }
    }
  }  
</style>