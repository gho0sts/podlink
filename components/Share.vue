<template>
  <div class="show-share">
    <div class="share-row">
      <div class="share-bar">
        <div id="share" v-on:mouseover="selectText" v-on:mouseleave="deselectText" v-clipboard:copy="shareableLink" >{{shareableLink}}</div>
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
    selectText: function (event) {
      window.getSelection().selectAllChildren( document.getElementById('share') );
    },
    deselectText: function (event) {
      window.getSelection().removeAllRanges();
    },
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
  border-radius: var(--borderradius);
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

#share {
  flex: 1;
  font-size: inherit;
  padding: .5em .5em .5em 2em;
  color: var(--brandDark);
  background: no-repeat center left;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><path fill='rgba(0,0,0,.5)' d='M17.88,19.61a4.65,4.65,0,0,1-4-1.49,6,6,0,0,1-.62-.73,7.51,7.51,0,0,1,1.05-.8.8.8,0,0,1,1,.11h0a2.76,2.76,0,0,0,2.24.93h0c1.76-.31,5.1-3.66,5.42-5.42A2.76,2.76,0,0,0,22,10h0a2.77,2.77,0,0,0-2.23-.94A6.8,6.8,0,0,0,17,10.78a6.19,6.19,0,0,0-2.38-.44c1.47-1.61,3.37-3,4.81-3.25a4.62,4.62,0,0,1,4,1.49h0a4.62,4.62,0,0,1,1.49,4C24.45,15.14,20.44,19.15,17.88,19.61ZM7.09,19.42a4.62,4.62,0,0,0,1.49,4h0a4.62,4.62,0,0,0,4,1.49c1.44-.25,3.34-1.64,4.81-3.25A6.19,6.19,0,0,1,15,21.22,6.8,6.8,0,0,1,12.22,23,2.77,2.77,0,0,1,10,22h0a2.76,2.76,0,0,1-.94-2.23c.32-1.76,3.66-5.11,5.42-5.42h0a2.76,2.76,0,0,1,2.24.93h0a.8.8,0,0,0,1,.11,7.51,7.51,0,0,0,1-.8,6,6,0,0,0-.62-.73,4.65,4.65,0,0,0-4-1.49C11.56,12.85,7.55,16.86,7.09,19.42Z'/></svg>");
  background-size: 1.5em;
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
  border-radius: var(--borderradius);
  margin: 0 0 0 .5rem;
  border: none;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    background: var(--brandPrimary);
  }
}

</style>
