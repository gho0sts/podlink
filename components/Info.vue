<template>
  <div class="show-info">
    <h1 class="show-title">{{show.title}}</h1>
    <a class="show-author" :href="show.link">{{show.author}}</a>
    <div class="show-description">{{show.description.long}}</div>
  </div>
</template>
<script>
export default {
  name: 'Info',
  props: ['show'],
}
</script>

<style scoped lang="scss">

.show-title {
  font-size: 2em;
  font-weight: 900;
  margin: 1.5rem 0 0;
}

.show-author {
  text-transform: uppercase;
  font-size: .75rem;
  font-weight: 900;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-decoration: none;
  color: var(--brandPrimary);

  &:hover {
    text-decoration: underline;
  }
}

.show-description {
  margin-top: .5rem;
  font-size: .875rem;
  text-align: left;
  color: var(--brandMuted);
}
</style>
