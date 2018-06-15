<template>
  <div class="show-text">
    <h1 class="show-name">{{details.title}}</h1>
    <a v-if="details" class="show-url" :href="details.link">{{details.author}}</a>
    <div v-if="!details" class="show-url" >{{details.author}}</div>
    <div v-if="details" class="show-desc">{{details.description.long}}</div>
  </div>
</template>
<script>
export default {
  name: 'Info',
  props: ['details'],
}
</script>

<style scoped lang="scss">

.show-name {
  font-size: 2em;
  font-weight: 900;
  margin: 1.5rem 0 0;
}

.show-url {
  text-transform: uppercase;
  font-size: .75rem;
  font-weight: 900;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-decoration: none;
  color: var(--brandPrimary);
}

.show-desc {
  margin-top: .5rem;
  font-size: .875rem;
  text-align: left;
  color: var(--brandMuted);
}
</style>
