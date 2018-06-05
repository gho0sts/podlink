<template>
    <nav class="site-nav">
        <a href="/" class="nav-logo"><IconLogo /></a>
        <SearchBar class="nav-search"/>
        <a href="https://plasso.com/s/TbHgLTRPAY/plan/custom_url" class="nav-settings"><IconGear /></a>
    </nav>
</template>
<script>
import IconLogo from '~/components/IconLogo.vue'
import IconGear from '~/components/IconGear.vue'
import SearchBar from '~/components/SearchBar.vue'

export default {
  name: 'NavBar',
  components: { IconLogo, IconGear, SearchBar },
}
</script>
<style scoped lang="scss">

.site-nav {
    display: grid;
    grid-template-areas: "🎙 🔍 ⚙️";
    grid-template-columns: 3rem 1fr 3rem;
    grid-gap: .5rem;
    width: 100%;
    padding: 1.5rem 1.5rem 0;
    position: absolute;
    z-index: 2;
    background: var(--brandBackground);
}

.nav-logo {
    grid-area: 🎙;

    svg {
        fill: var(--brandPrimary);
    }

    &:hover svg {
        fill: var(--brandDark);
    }
}

.nav-search {
    width: 100%;
    max-width: 30rem;
    grid-area: 🔍;
    font-size: 1rem;
}

.nav-settings {
    grid-area: ⚙️;

    svg {
        fill: var(--brandMuted);
    }

     &:hover svg {
        fill: var(--brandDark);
    }
}

</style>
