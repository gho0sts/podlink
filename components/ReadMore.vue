<template>
  <div id="readmore">
    <p>
      {{ displayText }}
      <button @click="toggle">Read {{ toggled ? 'less' : 'more' }}</button>   
    </p>
  </div>
</template>

<script>
export default {
  name: 'ReadMore',
  props: ['text'],
  data() {
    return {
      toggled: false,
      limit: 100
    };
  },
  computed: {
    displayText() {
      return this.toggled ? this.text : this.truncate(this.text);
    }
  },
  methods: {
    toggle() {
      this.toggled = !this.toggled;
    },
    truncate(text) {
      if (text.length > this.limit) {
        for (let i = this.limit; i > 0; i--) {
          const currChar = text.charAt(i);
          const prevChar = text.charAt(i - 1);
          const prevCharNotPuncuation = prevChar != ',' || prevChar != '.' || prevChar != '.';
          if (currChar === ' ' && prevCharNotPuncuation) {
            return text.substring(0, i) + '...';
          }
        }
      } else {
        return text;
      }
    }
  }
}
</script>
<style scoped>
button {
    padding: 0;
    margin: 0;
    border: none;
    color: var(--brandPrimary);
}
</style>
