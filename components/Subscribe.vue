<template>
  <div class="show-subscribe">
    <h2 class="show-subhead">Subscribe</h2>
    <div class="show-buttons">
      <a class="show-link" target="_blank" rel="noopener" :href="`https://itunes.apple.com/podcast/id${iTunesID}?mt=2&ct=podlink`" data-ga-category="App Subscribe" data-ga-action="Apple Podcasts" v-tooltip="`Apple Podcasts`"><img class="app-img" alt="Apple Podcasts" src="/images/podcatchers/icon-itunes.svg" /></a>
      <a class="show-link" target="_blank" rel="noopener" :href="googleLink" data-ga-category="App Subscribe" data-ga-action="Google Podcasts" v-tooltip="`Google Podcasts`"><img class="app-img" alt="Google Podcasts" src="/images/podcatchers/icon-googlepodcasts.svg" /></a>
      <a class="show-link" target="_blank" rel="noopener" :href="`${links.spotify}`" v-if="links && links.spotify" data-ga-category="App Subscribe" data-ga-action="Spotify" v-tooltip="`Spotify`"><img class="app-img" alt="Spotify" src="/images/podcatchers/icon-spotify.svg" /></a>
      <a class="show-link" target="_blank" rel="noopener" :href="`https://overcast.fm/itunes${iTunesID}/`" data-ga-category="App Subscribe" data-ga-action="Overcast" v-tooltip="`Overcast`"><img class="app-img" alt="Overcast" src="/images/podcatchers/icon-overcast.svg" /></a>
      <a class="show-link" target="_blank" rel="noopener" :href="`https://castbox.fm/vic/${iTunesID}`" data-ga-category="App Subscribe" data-ga-action="Castbox" v-tooltip="`Castbox`"><img class="app-img" alt="Castbox" src="/images/podcatchers/icon-castbox.svg" /></a>
      <a class="show-link" target="_blank" rel="noopener" :href="`${links.stitcher}`" v-if="links && links.stitcher" data-ga-category="App Subscribe" data-ga-action="Stitcher" v-tooltip="`Stitcher`"><img class="app-img" alt="Stitcher" src="/images/podcatchers/icon-stitcher.svg" /></a>
      <a class="show-link" target="_blank" rel="noopener" :href="`https://pca.st/itunes/${iTunesID}`" data-ga-category="App Subscribe" data-ga-action="Pocket Casts" v-tooltip="`Pocket Casts`"><img class="app-img" alt="Pocket Casts" src="/images/podcatchers/icon-pocketcasts.svg" /></a>
      <a class="show-link" target="_blank" rel="noopener" :href="`https://castro.fm/itunes/${iTunesID}`" data-ga-category="App Subscribe" data-ga-action="Castro" v-tooltip="`Castro`"><img class="app-img" alt="Castro" src="/images/podcatchers/icon-castro.svg" /></a>
      <a class="show-link" target="_blank" rel="noopener" :href="radiopublicLink" data-ga-category="App Subscribe" data-ga-action="RadioPublic" v-tooltip="`RadioPublic`"><img class="app-img" alt="RadioPublic" src="/images/podcatchers/icon-radiopublic.svg" /></a>
      <a class="show-link" target="_blank" rel="noopener" :href="breakerLink" data-ga-category="App Subscribe" data-ga-action="Breaker" v-tooltip="`Breaker`"><img class="app-img" alt="Breaker" src="/images/podcatchers/icon-breaker.svg" /></a>
      <a class="show-link" target="_blank" rel="noopener" :href="`${this.feedUrl}`" data-ga-category="App Subscribe" data-ga-action="RSS" v-tooltip="`RSS`"><img class="app-img" alt="RSS" src="/images/podcatchers/icon-rss.svg" /></a>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Subscribe',
  props: ['iTunesID','feedUrl', 'links'],
  computed: {
    googleLink: function () { return 'https://podcasts.google.com/?feed=' + Buffer.from(this.feedUrl).toString('base64')},
    radiopublicLink: function () { return 'https://radiopublic.com/' + encodeURIComponent(this.feedUrl)},
    breakerLink: function () { 
      if (this.links && this.links.breaker ){
        return this.links.breaker;
      }
      else {
        return 'https://www.breaker.audio/shows?feed_url=' + encodeURIComponent(this.feedUrl)
      }
    },
  }
}
</script>

<style scoped lang="scss">

.show-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 -5px;

  @media screen and (min-width:23rem) {
    margin: 0 auto;
    max-width: calc(var(--apps) / 2 * 64px);
  }

  @media screen and (min-width:44rem) {
    justify-content: flex-start;
    margin: 0 0 0 -5px;
  }

  @media screen and (min-width:55rem) {
    margin: 0 -5px;
    max-width: none;
  }
}

.show-link {
  width: 3rem;
  height: 3rem;
  display: block;
  margin: .25rem;
  border-radius: var(--borderradius);
  overflow: hidden;

  &:hover {
    transform: scale(1.166666667);
  }
}
</style>
