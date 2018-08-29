<template>
  <div class="show-subscribe">
    <div class="show-buttons">
      <a class="show-link" target="_blank" rel="noopener" :href="`https://geo.itunes.apple.com/ca/podcast/feed/id${iTunesID}`"><img class="app-img" alt="iTunes" src="/images/podcatchers/icon-itunes.svg" /></a>
      <a class="show-link" target="_blank" rel="noopener" :href="googleLink"><img class="app-img" alt="Google Podcasts" src="/images/podcatchers/icon-googlepodcasts.svg" /></a>
      <a class="show-link" target="_blank" rel="noopener" :href="`${links.spotify}`" v-if="links && links.spotify"><img class="app-img" alt="Spotify" src="/images/podcatchers/icon-spotify.svg" /></a>
      <a class="show-link" target="_blank" rel="noopener" :href="`https://overcast.fm/itunes${iTunesID}`"><img class="app-img" alt="Overcast" src="/images/podcatchers/icon-overcast.svg" /></a>
      <a class="show-link" target="_blank" rel="noopener" :href="`https://castbox.fm/vic/${iTunesID}`"><img class="app-img" alt="Castbox" src="/images/podcatchers/icon-castbox.svg" /></a>
      <a class="show-link" target="_blank" rel="noopener" :href="`${links.stitcher}`" v-if="links && links.stitcher"><img class="app-img" alt="Stitcher" src="/images/podcatchers/icon-stitcher.svg" /></a>
      <a class="show-link" target="_blank" rel="noopener" :href="`https://pca.st/itunes/${iTunesID}`"><img class="app-img" alt="Pocket Casts" src="/images/podcatchers/icon-pocketcasts.svg" /></a>
      <a class="show-link" target="_blank" rel="noopener" :href="`https://castro.fm/itunes/${iTunesID}`"><img class="app-img" alt="Castro" src="/images/podcatchers/icon-castro.svg" /></a>
      <a class="show-link" target="_blank" rel="noopener" :href="radiopublicLink"><img class="app-img" alt="RadioPublic" src="/images/podcatchers/icon-radiopublic.svg" /></a>
      <a class="show-link" target="_blank" rel="noopener" :href="breakerLink"><img class="app-img" alt="Breaker" src="/images/podcatchers/icon-breaker.svg" /></a>
      <a class="show-link" target="_blank" rel="noopener" :href="`${this.feedUrl}`"><img class="app-img" alt="RSS" src="/images/podcatchers/icon-rss.svg" /></a>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Subscribe',
  props: ['iTunesID','feedUrl', 'links'],
  computed: {
    googleLink: function () { return 'https://www.google.com/podcasts?feed=' + Buffer.from(this.feedUrl).toString('base64')},
    breakerLink: function () { return 'https://www.breaker.audio/shows?feed_url=' + encodeURIComponent(this.feedUrl)},
    radiopublicLink: function () { return 'https://radiopublic.com/' + encodeURIComponent(this.feedUrl)},
  }
}
</script>

<style scoped lang="scss">

.show-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  margin: 0 -4px;
}

.show-link {
  width: 3rem;
  height: 3rem;
  display: block;
  padding: .25rem;
  border-radius: var(--borderradius);
  overflow: hidden;

  &:hover {
    transform: scale(1.166666667);
  }
}
</style>
