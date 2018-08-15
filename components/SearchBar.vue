<template>
  <div>
    <input v-model="term" type="search" @input="search" aria-label="Search for a podcast" placeholder="Search for a podcast">
    <transition-group tag="ul" name="results" class="search-results">
      <li v-for="result in results" class="result" :key="result.collectionId">
        <a :href="'/'+result.collectionId" class="result-link">
          <img :src="result.artworkUrl100" class="result-img">
          <div class="result-text">
            <div class="result-name">{{result.collectionName}}</div>
            <div class="result-publisher">{{result.artistName}}</div>
          </div>
        </a>
      </li>
    </transition-group>
    <div class="search-noresults" v-if="noResults && term">
      Sorry, but no results were found.
    </div>
    <div class="search-searching" v-if="searching">
      <i>Searching...</i>
    </div>
  </div>
</template>

<script>
module.exports = {
  name: 'SearchBar',
  data () {
    return {
      term:'',
      results:[],
      noResults:false,
      searching:false
    }
  },
  methods: {
    search:function() {
			this.searching = true;
			fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(this.term)}&limit=10&media=podcast`)
			.then(res => res.json())
			.then(res => {
				this.searching = false;
				this.results = res.results;
				this.noResults = this.results.length === 0;
			});
		}
  }
}
</script>

<style scoped lang="scss">
  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: var(--brandMuted);
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: var(--brandMuted);
  }

  ::-ms-input-placeholder { /* Microsoft Edge */
    color: var(--brandMuted);
  }

  input {
    width: 100%;
    height: 2em;
    font-size: inherit;
    padding: .5em .5em .5em 2.5em;
    background: no-repeat .5em center var(--brandBgTint);
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><path fill='rgba(0,0,0,.5)' d='M14,9a5,5,0,1,0,5,5,5,5,0,0,0-5-5M7,14a7,7,0,1,1,13.0886,3.4561,1.11,1.11,0,0,0,.1365,1.332l3.984,4.007a1,1,0,0,1-1.418,1.41l-3.9695-3.992a1.1117,1.1117,0,0,0-1.3415-.1385A7.0012,7.0012,0,0,1,7,14'/></svg>");
    background-size: 1.5em;
    color: var(--brandDark);
    border-radius: var(--borderradius);
    margin: .5rem 0;
    border: none;
    -webkit-appearance: none;

    &:focus, &:hover {
      outline: none;
      box-shadow: 0 0.5em 1.5em -0.5em var(--brandMuted);
      background-color: var(--resultHover);
    }
  }

  .search-noresults, .search-searching {
    padding: 2rem 0 calc(100vh - 7.625rem);
  }

  .search-results {
    font-size: 1rem;
    list-style: none;
    padding: 0;
    width: 100%;
    max-width: 100vw;
    margin: 0;
    background: var(--brandBackground);

    .site-nav & {
      width: 100vw;
      margin: 0 -5rem;
      max-width: 34rem;

      @media screen and (min-width:44rem) {
        max-width: 51.5rem;
      }
    }

    .site-intro & {
      width: 100vw;
      margin: 0 -1.5rem;
      max-width: 33rem;
    }
  }

  .result {
    display: block;

    &:first-child {
      margin-top: 1rem;
    }
  }

  .result-link {
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 1rem;
    overflow: hidden;
    border-radius: var(--borderradius);
    
    &:hover, &:focus {
      background: var(--resultHover);
      outline: none;
      box-shadow: 0 0.5em 1.5em -0.5em var(--brandMuted);
    }
  }

  .result-img {
    width: 4rem;
    height: 4rem;
    object-fit: cover;
    border-radius: var(--borderradius);
  }

  .result-text {
    padding-left: 1rem;
    width: 100%;
    flex: 1;
    min-width: 0;
  }

  .result-name, .result-publisher {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .result-name {
    font-weight: 900;
    color: var(--brandDark);
  }

  .result-publisher {
    color: var(--brandMuted);
  }
</style>