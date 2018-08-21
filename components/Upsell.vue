<template>
  <a class="show-upsell" href="https://plasso.com/s/TbHgLTRPAY/plan/custom_url">
      <a href="https://plasso.com/s/TbHgLTRPAY/plan/custom_url">Claim a personalized URL</a> to make this page even easier to share with your&nbsp;listeners. 
  </a>
</template>
<script>

export default {
  name: 'Upsell'
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
</style>
