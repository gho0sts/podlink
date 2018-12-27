<template>
  <div class="show-share">
    <div class="share-bar">
      <div id="share" v-on:mouseover="selectText" v-on:mouseleave="deselectText" v-clipboard:copy="sharableLink" >{{sharableLink}}</div>
      <button class="action-copy" type="button" v-clipboard:copy="sharableLink">Copy</button>
    </div>
    <a class="social-share" target="_blank" v-tooltip="'Facebook'" alt="Facebook" :href="facebookLink"><IconFacebook /></a>
    <a class="social-share" target="_blank" v-tooltip="'Twitter'" alt="Twitter" :href="twitterLink"><IconTwitter /></a>
    <button class="social-share" type="button" v-tooltip="'Embed'" alt="Embed" v-clipboard:copy="embedCode"><IconCode /></button>
  </div>
</template>
<script>
import IconFacebook from '~/components/IconFacebook.vue'
import IconTwitter from '~/components/IconTwitter.vue'
import IconCode from '~/components/IconCode.vue'

export default {
  name: 'Share',
  components: { IconFacebook, IconTwitter, IconCode },
  props: ['iTunesID','sharableLink','title'],
  computed: {
    facebookLink: function () { return 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(this.sharableLink)},
    twitterLink: function () { return 'https://twitter.com/intent/tweet?url=' + encodeURIComponent(this.sharableLink) + '&via=_PodLink&text=Subscribe%20to%20'+encodeURIComponent(this.title)+'%20in%20your%20preferred%20podcast%20app'},
    embedCode: function () { return '<iframe width="100%" height="113" src="http://pod.link/' + this.iTunesID + '/embed" frameborder="0"></iframe>' }
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
  display: grid;
  grid-gap: .75rem;
  grid-template-columns: 1fr 2rem 2rem 2rem;
}

.share-bar {
  display: flex;
  background: var(--brandBgTint);
  border-radius: var(--borderradius);
  padding: 0 .5rem;
  height: 2rem;

  &:focus, &:hover {
    outline: none;
    transform: translateY(-4px);
    box-shadow: 0 0.75em 1.5em -0.5em var(--brandMuted);
    background-color: var(--resultHover);

    .action-copy {
      color: var(--brandPrimary);
    }
  }
}

#share {
  width: 1px;
  flex: 1;
  font-size: inherit;
  padding: .5em .5em .5em 2em;
  color: var(--brandDark);
  background: no-repeat center left;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><path fill='rgba(0,0,0,.5)' d='M17.88,19.61a4.65,4.65,0,0,1-4-1.49,6,6,0,0,1-.62-.73,7.51,7.51,0,0,1,1.05-.8.8.8,0,0,1,1,.11h0a2.76,2.76,0,0,0,2.24.93h0c1.76-.31,5.1-3.66,5.42-5.42A2.76,2.76,0,0,0,22,10h0a2.77,2.77,0,0,0-2.23-.94A6.8,6.8,0,0,0,17,10.78a6.19,6.19,0,0,0-2.38-.44c1.47-1.61,3.37-3,4.81-3.25a4.62,4.62,0,0,1,4,1.49h0a4.62,4.62,0,0,1,1.49,4C24.45,15.14,20.44,19.15,17.88,19.61ZM7.09,19.42a4.62,4.62,0,0,0,1.49,4h0a4.62,4.62,0,0,0,4,1.49c1.44-.25,3.34-1.64,4.81-3.25A6.19,6.19,0,0,1,15,21.22,6.8,6.8,0,0,1,12.22,23,2.77,2.77,0,0,1,10,22h0a2.76,2.76,0,0,1-.94-2.23c.32-1.76,3.66-5.11,5.42-5.42h0a2.76,2.76,0,0,1,2.24.93h0a.8.8,0,0,0,1,.11,7.51,7.51,0,0,0,1-.8,6,6,0,0,0-.62-.73,4.65,4.65,0,0,0-4-1.49C11.56,12.85,7.55,16.86,7.09,19.42Z'/></svg>");
  background-size: 1.5em;
  border: none;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  margin: 0;

  &:focus {
      outline: none;
  }

  @media screen and (min-width:25rem) {
    text-align: left;
  }
}

.action-copy {
  background: transparent;
  border: none;
  padding: .5rem .5rem .5rem 0;
  cursor: pointer;

  &:focus, &:hover {
    outline: none;
    color: var(--brandPrimary);
  }
}

.social-share, .social-share:link, .social-share:visited {
  -webkit-appearance: none;
  background: var(--brandBgTint);
  color: var(--brandRecessed);
  border-radius: var(--borderradius);
  border: none;
  width: 2rem;
  height: 2rem;
  padding: 0;
  cursor: pointer;

  &:focus, &:hover {
    outline: none;
    transform: translateY(-4px);
    box-shadow: 0 0.75em 1.5em -0.5em var(--brandMuted);
    background-color: var(--resultHover);

    svg {
      fill: var(--brandPrimary);
    }
  }

  svg {
    display: block;
    width: 100%;
    height: auto;
    transition-duration: 0;
  }
}

</style>
