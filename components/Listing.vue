<template>
  <main class="show-details">
    <div class="show-artwork">
      <img :src="podcast.artworkUrl600" v-if="podcast.artworkUrl600" class="show-artwork-blur">
      <img :src="podcast.artworkUrl600" v-if="podcast.artworkUrl600" class="show-artwork-front">
      <svg class="artwork-spacer" width="320" height="320"/>
    </div>
    <div class="show-body">
      <div class="show-text">
        <h1 class="show-name">{{podcast.collectionName}}</h1>
        <a v-if="podcast.feedInfo" class="show-url" :href="podcast.feedInfo">{{podcast.feedInfo.homeUrl}}</a>
        <div v-if="podcast.feedInfo" class="show-desc">{{podcast.feedInfo.desc}}</div>
      </div>
      <h2 v-if="podcast.collectionId" class="show-subhead">Subscribe</h2>
      <div v-if="podcast.collectionId" class="show-buttons">
        <a class="show-link" :href="`https://geo.itunes.apple.com/ca/podcast/feed/id${podcast.collectionId}`"><img src="/images/podcatchers/icon-itunes.svg" class ="app-img" /></a>
        <a class="show-link" :href="podcast.spotifyLink" v-if="podcast.spotifyLink"><img src="/images/podcatchers/icon-spotify.svg" class ="app-img" /></a>
        <a class="show-link" :href="`https://overcast.fm/itunes${podcast.collectionId}`"><img src="/images/podcatchers/icon-overcast.svg" class ="app-img" /></a>
        <a class="show-link" :href="`http://castbox.fm/vic/${podcast.collectionId}`"><img src="/images/podcatchers/icon-castbox.svg" class ="app-img" /></a>
        <a class="show-link" :href="`http://pca.st/itunes/${podcast.collectionId}`"><img src="/images/podcatchers/icon-pocketcasts.svg" class ="app-img" /></a>
        <a class="show-link" :href="`https://castro.fm/itunes/${podcast.collectionId}`"><img src="/images/podcatchers/icon-castro.svg" class ="app-img" /></a>
        <a class="show-link" :href="podcast.feedUrl"><img src="/images/podcatchers/icon-rss.svg" class ="app-img" /></a>
        <a class="show-link" :href="`https://radiopublic.com/${podcast.feedUrl}`"><img src="/images/podcatchers/icon-radiopublic.svg" class ="app-img" /></a>
        <a class="show-link" :href="`breaker:/subscribe/feed/${podcast.feedUrl}`"><img src="/images/podcatchers/icon-breaker.svg" class ="app-img" /></a>
      </div>
      <h2 v-if="podcast.feedInfo" class="show-subhead">Listen</h2>
      <audio v-if="podcast.feedInfo" id="podcast" style="width: 100%;" controls="" preload="none">
        <source :src="podcast.feedInfo.latestEpisode" type="audio/mpeg">
      </audio>
    </div>
  </main>
</template>
<script>
import axios from 'axios'

export default {
  name: 'Listing',

  data () {
    return {
      podcast: {
        'collectionId': null,
        'collectionName': null,
        'feedUrl': null,
        'artworkUrl600': null,
        'links': {
          'itunes': null,
          'spotify': null,
          'overcast': null,
          'castbox': null,
          'pocketcasts': null,
          'castro': null,
          'rss': null,
          'radiopublic': null,
          'breaker': null
        },
        'feedInfo': {
          'homeUrl': null,
          'desc': null,
          'latestEpisode': null
        },
        'spotifyLink': null
      }
    }
  },

  created () {
    this.fetchData()
  },

  watch: {
    '$route': 'fetchData'
  },

  methods: {
    fetchData () {
      axios.get(' https://itunes.apple.com/lookup?id=' + this.$route.params.podcast)
        .then((resp) => {
          this.podcast = resp.data.results[0]
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>

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
  background: rgba(0, 0, 0, 0.07);
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
}
</style>
