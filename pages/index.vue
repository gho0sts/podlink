<template>
    <header class="site-intro">
        <h1 class="home-heading"><IconLogo class="home-logo"/> {{title}}</h1>
        <p class="home-desc">{{subtitle}}</p>
        <SearchBar class="home-search"/>
    </header>
</template>
<script>
import IconLogo from '~/components/IconLogo.vue'
import SearchBar from '~/components/SearchBar.vue'

export default {
  name: 'Home',
  components: { IconLogo, SearchBar },
  data () {
    return {
      title: 'PodLink',
      subtitle: 'The easiest way to share podcasts'
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

.home-search {
    width: 100%;
    font-size: 1.5em;
}
</style>
