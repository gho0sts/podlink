<template>
  <div class="show-info">
    <h1 class="show-title">{{show.title}}</h1>
    <a class="show-author" :href="show.link">{{show.author}}</a>
    <ReadMore class="show-description" v-bind:text="show.description.long" />
  </div>
</template>
<script>
import ReadMore from '~/components/ReadMore.vue'

export default {
  name: 'Info',
  props: ['show'],
  components: { ReadMore }
}
</script>

<style scoped lang="scss">

.show-title {
  font-size: 2.5em;
  line-height: 1.125;
  font-weight: 900;
  margin: 1.5rem 0 0;

  @media screen and (min-width:44rem) {
    font-size: 2em;
    margin: 0;
  }
}

.show-author {
  text-transform: uppercase;
  line-height: 1.125;
  font-weight: 900;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-decoration: none;
  color: var(--brandPrimary);

  &:hover {
    text-decoration: underline;
  }

  @media screen and (min-width: 44rem) {
    white-space: normal;
    font-size: .75rem;
  }
}

.show-description {
  margin-top: .5rem;
  text-align: left;
  color: var(--brandMuted);

  @media screen and (min-width: 44rem) {
    font-size: .875rem;
  }
}
</style>
