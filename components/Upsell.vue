<template>
  <a class="show-upsell" href="https://plasso.com/s/TbHgLTRPAY/plan/custom_url">
      <span class="highlight">Claim a personalized URL</span> to make this page even easier to share with your&nbsp;listeners. 
  </a>
</template>
<script>

export default {
  name: 'Upsell',
  head () {
    return {
      script: [
        { src: 'https://plasso.com/embed/storefront.1.0.js' },
        { src: '/js/plasso.init.js' }
      ]
    } 
  },
}
</script>

<style scoped lang="scss">

  .show-upsell {
    border-radius: var(--borderradius);
    box-shadow: 0 0.5em 1.5em -0.5em var(--brandMuted);
    background: #FFF;
    padding: 1.25rem;
    font-size: 14px;
    text-decoration: none;
    color: var(--brandDark);

    &:focus, &:hover {
      outline: none;
      transform: translateY(-4px);
      box-shadow: 0 0.75em 1.5em -0.5em var(--brandMuted);
      background-color: var(--resultHover);

      svg {
        fill: var(--brandPrimary);
      }
    }
  }

  .highlight {
    color: var(--brandPrimary);
    text-decoration: underline;
  }
</style>
