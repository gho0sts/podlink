<template>
    <nav class="site-nav">
        <nuxt-link to="/" aria-label="Home" class="nav-logo"><IconLogo /></nuxt-link>
        <SearchBar class="nav-search"/>
        <button @click="$modal.show('prefs')" role="button" aria-label="Preferences" class="nav-settings"><IconGear /></button>
        <Preferences />
        
    </nav>
</template>
<script>
import IconLogo from '~/components/IconLogo.vue'
import IconGear from '~/components/IconGear.vue'
import SearchBar from '~/components/SearchBar.vue'
import Preferences from '~/components/Preferences.vue'

export default {
    name: 'NavBar',
    components: { IconLogo, IconGear, SearchBar, Preferences },
    computed: {
        visibility: {
            get () {
                return this.$store.state.obj.visibility
            },
            set (value) {
                this.$store.commit('updateVisibility', value)
            }
        }
    }
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
    border:none;
    padding:0;
    background:none;
    cursor:pointer;
    grid-area: ⚙️;
    height: 3rem;

    svg {
        fill: var(--brandMuted);
    }

     &:hover svg {
        fill: var(--brandDark);
    }
}
</style>
