<template>
  <main class="show-details">
    <div class="show-artwork">
      <img :src="podcast.artworkUrl600" v-if="podcast.artworkUrl600" :alt="podcast.collectionName" class="show-artwork-blur">
      <img :src="podcast.artworkUrl600" v-if="podcast.artworkUrl600" :alt="podcast.collectionName" class="show-artwork-front">
      <svg class="artwork-spacer" width="320" height="320"/>
    </div>
    <div class="show-body">
      <div class="show-text">
        <h1 class="show-name">{{podcast.collectionName}}</h1>
        <a v-if="details" class="show-url" :href="details.link">{{podcast.artistName}}</a>
        <div v-if="!details" class="show-url" >{{podcast.artistName}}</div>
        <div v-if="details" class="show-desc">{{details.description.long}}</div>
      </div>
      <h2 v-if="podcast.collectionId" class="show-subhead">Subscribe</h2>
      <div v-if="podcast.collectionId" class="show-buttons">
        <a class="show-link" target="_blank" rel="noopener" v-show="$store.state.itunesVisible" :href="itunesLink"><img class="app-img" alt="iTunes" src="/images/podcatchers/icon-itunes.svg" /></a>
        <a class="show-link" target="_blank" rel="noopener" v-show="$store.state.spotifyVisible" :href="podcast.spotifyLink" v-if="podcast.spotifyLink"><img class="app-img" alt="Spotify" src="/images/podcatchers/icon-spotify.svg" /></a>
        <a class="show-link" target="_blank" rel="noopener" v-show="$store.state.overcastVisible" :href="overcastLink"><img class="app-img" alt="Overcast" src="/images/podcatchers/icon-overcast.svg" /></a>
        <a class="show-link" target="_blank" rel="noopener" v-show="$store.state.castboxVisible" :href="castboxLink"><img class="app-img" alt="Castbox" src="/images/podcatchers/icon-castbox.svg" /></a>
        <a class="show-link" target="_blank" rel="noopener" v-show="$store.state.pocketcastsVisible" :href="pocketcastsLink"><img class="app-img" alt="Pocket Casts" src="/images/podcatchers/icon-pocketcasts.svg" /></a>
        <a class="show-link" target="_blank" rel="noopener" v-show="$store.state.castroVisible" :href="castroLink"><img class="app-img" alt="Castro" src="/images/podcatchers/icon-castro.svg" /></a>
        <a class="show-link" target="_blank" rel="noopener" v-show="$store.state.rssVisible" :href="rssLink"><img class="app-img" alt="RSS" src="/images/podcatchers/icon-rss.svg" /></a>
        <a class="show-link" target="_blank" rel="noopener" v-show="$store.state.radiopublicVisible" :href="radiopublicLink"><img class="app-img" alt="RadioPublic" src="/images/podcatchers/icon-radiopublic.svg" /></a>
        <a class="show-link" target="_blank" rel="noopener" v-show="$store.state.breakerVisible" :href="breakerLink"><img class="app-img" alt="Breaker" src="/images/podcatchers/icon-breaker.svg" /></a>
      </div>
      <h2 v-if="podcast.feedInfo" class="show-subhead">Listen</h2>
      <audio v-if="details" id="podcast" style="width: 100%;" controls="" preload="none">
        <source :src="details.episodes[0].enclosure.url" type="audio/mpeg">
      </audio>
    </div>
    <nuxt-link to="/custom-urls" class="custom-url">Customize this URL</nuxt-link>
  </main>
</template>
<script>

export default {
  name: 'Listing',
  props: ['podcast','details'],
  computed: {
    itunesLink: function () { return `https://geo.itunes.apple.com/ca/podcast/feed/id${this.podcast.collectionId}`},
    overcastLink: function () { return `https://overcast.fm/itunes${this.podcast.collectionId}`},
    castboxLink: function () { return `http://castbox.fm/vic/${this.podcast.collectionId}`},
    pocketcastsLink: function () { return `http://pca.st/itunes/${this.podcast.collectionId}`},
    castroLink: function () { return `https://castro.fm/itunes/${this.podcast.collectionId}`},
    breakerLink: function () { return 'breaker://subscribe/feed/' + encodeURIComponent(this.podcast.feedUrl)},
    rssLink: function () { return `${this.podcast.feedUrl}`},
    radiopublicLink: function () { return 'https://radiopublic.com/' + encodeURIComponent(this.podcast.feedUrl)},
  }
}
</script>

<style scoped lang="scss">

.show-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 7rem 1.5rem 1.5rem;
}

.show-artwork {
  position: relative;
  max-width: 20em;
  margin: 0 auto;
}

.show-artwork-blur {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  filter: blur(1em) brightness(.75);
}

.show-artwork-front {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: block;
  z-index: 1;
  border-radius: .5em;
  background: var(--brandBgTint);
}

.artwork-spacer {
  position: relative;
  width: 100%;
  height: auto;
  display: block;
}

.show-body {
  text-align: center;
}

.show-name {
  font-size: 2em;
  font-weight: 900;
  margin: 1.5rem 0 0;
}

.show-url {
  text-transform: uppercase;
  font-size: .75rem;
  font-weight: 900;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-decoration: none;
  color: var(--brandPrimary);
}

.show-desc {
  margin-top: .5rem;
  font-size: .875rem;
  text-align: left;
  color: var(--brandMuted);
}

.show-subhead {
  margin: 1.5rem 0 0;
}

.show-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
}

.show-link {
  width: 3rem;
  height: 3rem;
  display: block;
  margin: .25rem;
  border-radius: .75rem;
  overflow: hidden;

  &:hover {
    transform: scale(1.166666667);
  }
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
