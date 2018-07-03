<template>
  <div class="show-share">
    <h2 class="show-subhead">Share</h2>
    <div class="share-row">
      <input onmouseover="this.select()" onmouseleave="this.blur()" v-model="shareableLink" v-clipboard:copy="shareableLink" placeholder="Generating Link...">
      <button class="share-action" type="button" v-clipboard:copy="shareableLink">Copy</button>
      <nuxt-link class="share-action" to="/custom-urls">Customize this URL</nuxt-link>
    </div>
  </div>
</template>
<script>
const redirects = require('../301.json')

export default {
  name: 'Share',
  props: ['iTunesID'],
  data () {
    return {
      shareableLink: `https://pod.link/${this.iTunesID}`,
      redirects
    }
  },
  computed: {
    shareableLink: function () {
      const array = this.redirects
      let path = `/${this.iTunesID}`

      if ( array.contains(`/${this.iTunesID}`) ){
        path = array.find( obj => obj.to === `/${this.iTunesID}` ).from
      }

      return `https://pod.link${path}`
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">

.show-share {
  width: 100%;

  @media screen and (min-width:44rem) {
    display: flex;
    align-items: center;
  }
}

.show-subhead {
  margin: 1.5rem 0 0;

  @media screen and (min-width:44rem) {
    margin: 0 .5rem 0 0;
    font-size: 1.25rem;
  }
}

.share-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (min-width:44rem) {
    flex-wrap: nowrap;
    align-items: center;
    flex: 1;
  }
}

input {
  width: 100%;
  height: 2em;
  font-size: inherit;
  padding: .5em;
  background: no-repeat center right .25rem var(--brandBgTint);
  color: var(--brandMuted);
  color: var(--brandDark);
  border-radius: .25em;
  border: none;
  margin: .5rem 0;
  text-overflow: ellipsis;
  text-align: center;

  @media screen and (min-width:44rem) {
    text-align: left;
    margin: 0;
  }

  &:focus, &:hover {
      outline: none;
      box-shadow: 0 0.5em 1.5em -0.5em var(--brandPrimary);
      background-color: var(--resultHover);
  }
}

.share-action {
  background: var(--brandMuted);
  color: #FFF;
  font-size: .875rem;
  text-decoration: none;
  border: none;
  height: 2rem;
  padding: .5rem 1rem;
  border-radius: .25rem;
  margin: 0 0 0 .5rem;
  border: none;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    background: var(--brandPrimary);
  }
}

</style>
