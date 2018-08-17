<template>
  <nav class="site-nav">
    <nuxt-link to="/" aria-label="Home" class="nav-logo"><IconLogo /></nuxt-link>
    <SearchBar class="nav-search"/>
  </nav>
</template>
<script>
import IconLogo from '~/components/IconLogo.vue'
import IconGear from '~/components/IconGear.vue'
import SearchBar from '~/components/SearchBar.vue'

export default {
  name: 'NavBar',
  components: { IconLogo, IconGear, SearchBar }
}
</script>
<style scoped lang="scss">

.site-nav {
  display: grid;
  grid-template-areas: "🎙 🔍";
  grid-template-columns: 3rem 1fr;
  grid-gap: .5rem;
  width: 100%;
  padding: 1.5rem 1.5rem 0;
  position: absolute;
  z-index: 2;
  background: var(--brandBackground);

  @media screen and (min-width:44rem) {
    max-width: calc(var(--apps) * 3.5rem + 19.875rem);
  }

  @supports(padding: max(0px)) {
    padding-left: unquote('max(1.5rem, env(safe-area-inset-left))');
    padding-right: unquote('max(1.5rem, env(safe-area-inset-right))');
  }
}

.nav-logo {
  grid-area: 🎙;
  height: 3rem;

  svg {
    fill: var(--brandPrimary);
  }

  &:hover {
    transform: scale(1.166666667);
  }
}

.nav-search {
  width: 100%;
  // max-width: 30rem;
  grid-area: 🔍;
  font-size: 1rem;
}
</style>
