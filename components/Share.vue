<template>
  <div class="show-share">
    <label class="show-subhead" for="share">Share</label>
    <div class="share-row">
      <div class="share-bar">
        <input id="share" onmouseover="this.select()" onmouseleave="this.blur()" v-model="shareableLink" v-clipboard:copy="shareableLink" placeholder="Generating Link...">
        <button class="action-copy" type="button" v-clipboard:copy="shareableLink">Copy</button>
      </div>
      <a href="https://plasso.com/s/TbHgLTRPAY/plan/custom_url" class="action-customize">Customize this URL</a>
    </div>
  </div>
</template>
<script>
const redirects = require('../301.json')

export default {
  name: 'Share',
  props: ['iTunesID'],
  head () {
    return {
      script: [
        { src: 'https://plasso.com/embed/storefront.1.0.js' },
        { src: '/js/plasso.init.js' },
        { src: '/js/drift.init.js' }
      ]
    } 
  },
  data () {
    return {
      redirects
    }
  },
  computed: {
    shareableLink: function () {
      const result = this.redirects.find( obj => obj.to === `/${this.iTunesID}` );
      let path = `/${this.iTunesID}`

      if ( result ){
        path = result.from
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
  display: block;
  font-size: 1.5em;
  font-weight: bold;

  @media screen and (min-width:44rem) {
    margin: 0 .5rem 0 0;
    font-size: 1.25rem;
  }
}

.share-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (min-width:30rem) {
    flex-wrap: nowrap;
    align-items: center;
  }

  @media screen and (min-width:44rem) {
    flex: 1;
  }
}

.share-bar {
  width: 100%;
  height: 2em;
  background: var(--brandBgTint);
  border-radius: .25em;
  margin: .5rem 0;
  padding: 0 .5rem;
  display: flex;

  @media screen and (min-width:30rem) {
    margin: 0;
  }

  &:focus, &:hover {
    outline: none;
    box-shadow: 0 0.5em 1.5em -0.5em var(--brandMuted);
    background-color: var(--resultHover);

    .action-copy {
      color: var(--brandPrimary);
    }
  }
}

input {
  flex: 1;
  font-size: inherit;
  padding: .5em .5em .5em 0;
  color: var(--brandDark);
  background: transparent;
  border: none;
  text-overflow: ellipsis;
  text-align: center;
  margin: 0;

  &:focus {
      outline: none;
  }

  @media screen and (min-width:30rem) {
    text-align: left;
  }
}

.action-copy {
    background: transparent;
    border: none;
    padding: .5rem 0;
    cursor: pointer;

    &:focus, &:hover {
      outline: none;
      color: var(--brandPrimary);
  }
}

.action-customize {
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
