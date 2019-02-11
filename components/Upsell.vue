<template>
  <div class="show-upsell">
    <a href="javascript:void(0)" id="checkout-button" data-cb-type="checkout" data-cb-plan-id="premium-annual" data-cb-ga-enabled="true">
      <span class="highlight">Claim a personalized URL</span> to make this page even easier to share with your&nbsp;listeners. 
    </a>
  </div>
</template>
<script>
export default {
  name: 'Upsell',
  head () {
    return {
      script: [
        {
          src: 'https://js.chargebee.com/v2/chargebee.js',
          'data-cb-site' : 'podlink',
          'data-cb-ga-enabled' : 'true'
        }
      ]
    } 
  }
}
</script>

<style scoped lang="scss">

  #checkout-button {
    display: block;
    width: 100%;
    border: none;
    border-radius: var(--borderradius);
    box-shadow: 0 0.5em 1.5em -0.5em var(--brandMuted);
    background: #FFF;
    padding: 1.25rem;
    font-size: 14px;
    text-decoration: none;
    color: var(--brandDark);
    cursor: pointer;

    &:focus, &:hover {
      outline: none;
      transform: translateY(-4px);
      box-shadow: 0 0.75em 1.5em -0.5em var(--brandMuted);
      background-color: var(--resultHover);
    }
  }

  .highlight {
    color: var(--brandPrimary);
    text-decoration: underline;
  }
</style>
