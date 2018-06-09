<template>
  <div class="error">
    <img src="404.gif">
    <h1>{{message}}</h1>
    </div>
</template>
<script>
export default {
  name: 'Error',
  data () {
    return {
      message: 'Sorry, something’s gone wrong!'
    }
  }
}
</script>
<style>
  .error {
    text-align: center;
    padding: 7rem 1.5rem 1.5rem;
  }
</style>