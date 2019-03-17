<template>
  <div class="show-info">
    <h1 class="show-title">{{show.title}}</h1>
    <a v-if="show.link" class="show-author" :href="show.link">{{show.author}}</a>
    <span v-if="!show.link" class="show-author">{{show.author}}</span>
    <a v-if="show.paymentLink" class="show-support" :href="show.paymentLink">Support this show</a>
    <ReadMore class="show-description" v-if="show.description.long" v-bind:text="show.description.long" />
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

  @media screen and (min-width:44rem) {
    font-size: 2em;
  }
}

.show-author {
  text-transform: uppercase;
  line-height: 1.125;
  font-weight: 900;
  text-decoration: none;
  color: var(--brandPrimary);

  @media screen and (min-width: 44rem) {
    font-size: .75rem;
  }
}

a.show-author:hover {
  text-decoration: underline;
}

.show-support {
  display: block;
  text-transform: uppercase;
  line-height: 1.125;
  font-weight: 900;
  text-decoration: none;
  color: var(--brandPrimary);
  white-space: nowrap;

  &:hover {
    text-decoration: underline;
  }

  @media screen and (min-width: 44rem) {
    display: inline;
    font-size: .75rem;
    margin-left: 1rem;
    position: relative;

    &:before {
      content: "·";
      color: var(--brandDark);
      position: absolute;
      top: 0;
      bottom: 0;
      left: -1rem;
      width: 1rem;
      text-align: center;
    }
  }
}

.show-description {
  margin-top: .5rem;
  text-align: left;
  color: var(--brandRecessed);

  @media screen and (min-width: 44rem) {
    font-size: .875rem;
  }
}
</style>
