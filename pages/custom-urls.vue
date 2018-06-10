<template>
    <div>
        <NavBar/>
        <div class="upsell">
          <h1>{{heading}}</h1>
          <p>{{description}}</p>
        <a href="https://plasso.com/s/TbHgLTRPAY/plan/custom_url" class="btn-cta">{{cta}}</a>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import NavBar from '~/components/NavBar.vue'

export default {
  name: 'CustomURLs',
  components: { NavBar },
  head () {
    return {
      script: [
        { src: 'https://plasso.com/embed/storefront.1.0.js' },
        { src: '/js/plasso.init.js' }
      ]
    } 
  },
  data () {
    return {
      heading: 'Claim Your Custom URL',
      description: 'PodLink makes sharing a platform-agnostic link to your podcast with new listeners super easy. Claiming a custom URL will make it even easier to share in-person or on your podcast.',
      cta: 'Purchase for $10/year'
    }
  }
 }
</script>
<style scoped>
  .upsell {
    text-align: center;
    padding: 7rem 1.5rem 1.5rem;
  }

  p {
    text-align: left;
    max-width: 29rem;
    margin: 1rem auto 1.5rem;
  }

  .btn-cta {
    display: inline-block;
    background: var(--brandPrimary);
    color: #FFF;
    padding: 1rem 1.5rem;
    border-radius: .25rem;
    text-decoration: none;
    font-size: 1.25rem;
  }
</style>