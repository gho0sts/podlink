<template>
  <header class="site-intro">
      <h1 class="home-heading"><IconLogo class="home-logo"/> {{title}}</h1>
      <p class="home-desc">{{subtitle}}</p>
      <div class="purchase-success">
        <h1>Welcome aboard!</h1>
        <p>Hey there,<br/><br/>
        Thanks for joining PodLink Premium. PodLink is a one-person side project and your custom URL will be verified and available soon.
        <br/><br/>
        </p>
        <p v-if="`this.$route.query.alias`">Your new link: <a :href="`${this.alias}`">{{alias}}</a>
        <br/>will soon redirect to <a :href="`${this.standard}`">{{standard}}</a>
        <br/><br/>
        </p>
        <p>If you have any question or feedback, you can email me at <a href="mailto:hello@pod.link" target="_blank">hello@pod.link</a>.
        If you havea a feature suggestion, you can post it on <a href="https://podlink.nolt.io" target="_blank">my public roadmap</a>.
        <br/><br/>
        Regards,<br/>
        Nathan Gathright
        </p>
      </div>
  </header>
</template>
<script>
import IconLogo from '~/components/IconLogo.vue'

export default {
  name: 'Home',
  components: { IconLogo },
  head () {
    return {
      script: [
        { src: '/js/drift.init.js' }
      ]
    } 
  },
  data () {
    return {
      title: 'PodLink',
      subtitle: 'The easiest way to share podcasts',
      standard: `https://pod.link/${this.$route.query.itunes}`,
      alias: `https://pod.link/${this.$route.query.alias}`
    }
  }
}
</script>
<style scoped>
.site-intro {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 7rem 1.5rem 1.5rem;
}

.home-heading {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
}

.home-logo {
  display: block;
  width: 3rem;
  fill: var(--brandPrimary);
}

.home-desc {
  text-align: center;
}

.home-logo svg {
  fill: var(--brandPrimary);
}

.home-logo:hover svg {
  fill: var(--brandDark);
}


.purchase-success {
  border-radius: var(--borderradius);
  box-shadow: 0 0.5em 1.5em -0.5em var(--brandMuted);
  background: #FFF;
  padding: 1.25rem;
  color: var(--brandDark);
  margin-top: 1.25rem;
  max-width: 36rem;
  line-height: 1.5;
}
</style>
