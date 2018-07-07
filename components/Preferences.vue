<template>
  <modal name="prefs" :width="320" height="auto" :scrollable="true">
    <div class="modal-inner">
      <button @click="$modal.hide('prefs')" class="prefs-close"></button>
      <h2 class="prefs-heading">Preferences</h2>
      <p class="prefs-desc">Take control of which apps you want to be shown next time you visit PodLink.</p>
      <ul class="switch-list">
        <li class="switch-list-item">
          <label class="switch-list-label" for="toggle-itunes">
            <img src="/images/podcatchers/icon-itunes.svg" class="switch-app-icon" />
            <span>iTunes</span>
          </label>
          <input class="toggle-checkbox" type="checkbox" id="toggle-itunes" v-model="$store.state.itunesVisible" :value="true">
          <label class="toggle-switch" for="toggle-itunes"></label>
        </li>
        <li class="switch-list-item">
          <label class="switch-list-label" for="toggle-google">
            <img src="/images/podcatchers/icon-googlepodcasts.svg" class="switch-app-icon" />
            <span>Google Podcasts</span>
          </label>
          <input class="toggle-checkbox" type="checkbox" id="toggle-google" v-model="$store.state.googleVisible" :value="true">
          <label class="toggle-switch" for="toggle-google"></label>
        </li>
        <li class="switch-list-item">
          <label class="switch-list-label" for="toggle-overcast">
            <img src="/images/podcatchers/icon-overcast.svg" class="switch-app-icon" />
            <span>Overcast</span>
          </label>
          <input class="toggle-checkbox" type="checkbox" id="toggle-overcast" v-model="$store.state.overcastVisible" :value="true">
          <label class="toggle-switch" for="toggle-overcast"></label>
        </li>
        <li class="switch-list-item">
          <label class="switch-list-label" for="toggle-castbox">
            <img src="/images/podcatchers/icon-castbox.svg" class="switch-app-icon" />
            <span>Castbox</span>
          </label>
          <input class="toggle-checkbox" type="checkbox" id="toggle-castbox" v-model="$store.state.castboxVisible" :value="true">
          <label class="toggle-switch" for="toggle-castbox"></label>
        </li>
        <li class="switch-list-item">
          <label class="switch-list-label" for="toggle-pocketcasts">
            <img src="/images/podcatchers/icon-pocketcasts.svg" class="switch-app-icon" />
            <span>Pocket Casts</span>
          </label>
          <input class="toggle-checkbox" type="checkbox" id="toggle-pocketcasts" v-model="$store.state.pocketcastsVisible" :value="true">
          <label class="toggle-switch" for="toggle-pocketcasts"></label>
        </li>
        <li class="switch-list-item">
          <label class="switch-list-label" for="toggle-castro">
            <img src="/images/podcatchers/icon-castro.svg" class="switch-app-icon" />
            <span>Castro</span>
          </label>
          <input class="toggle-checkbox" type="checkbox" id="toggle-castro" v-model="$store.state.castroVisible" :value="true">
          <label class="toggle-switch" for="toggle-castro"></label>
        </li>
        <li class="switch-list-item">
          <label class="switch-list-label" for="toggle-radiopublic">
            <img src="/images/podcatchers/icon-radiopublic.svg" class="switch-app-icon" />
            <span>RadioPublic</span>
          </label>
          <input class="toggle-checkbox" type="checkbox" id="toggle-radiopublic" v-model="$store.state.radiopublicVisible" :value="true">
          <label class="toggle-switch" for="toggle-radiopublic"></label>
        </li>
        <li class="switch-list-item">
          <label class="switch-list-label" for="toggle-breaker">
            <img src="/images/podcatchers/icon-breaker.svg" class="switch-app-icon" />
            <span>Breaker</span>
          </label>
          <input class="toggle-checkbox" type="checkbox" id="toggle-breaker" v-model="$store.state.breakerVisible" :value="true">
          <label class="toggle-switch" for="toggle-breaker"></label>
        </li>
        <li class="switch-list-item">
          <label class="switch-list-label" for="toggle-rss">
            <img src="/images/podcatchers/icon-rss.svg" class="switch-app-icon" />
            <span>RSS</span>
          </label>
          <input class="toggle-checkbox" type="checkbox" id="toggle-rss" v-model="$store.state.rssVisible" :value="true">
          <label class="toggle-switch" for="toggle-rss"></label>
        </li>
      </ul>
    </div>
  </modal>
</template>
<script>
export default {
  name: 'Preferences',
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
<style lang="scss">
.v--modal {
  background: var(--brandBackground);
  border-radius: .5rem;
}

.modal-inner {
  padding: 1.5rem;
}

.prefs-close {
  position: absolute;
  top: 0; //.875rem
  right: 0; //.875rem
  margin: 0;
  padding: 0;
  border: 0;
  width: 3rem;
  height: 3rem;
  background: no-repeat center;
  background-size: 1.25rem;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8' fill='none' stroke='%23000'><line x1='1' y1='1' x2='7' y2='7' /><line x1='7' y1='1' x2='1' y2='7'/></svg>");
}

.prefs-desc {
  font-size: 14px;
  margin-bottom: .5rem;
}

.switch-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.switch-list-item {
  display: flex;
  align-items: center;
  padding: .25rem 0;
}

.switch-list-label {
  flex: 1;
  display: flex;
  align-items: center;
}

.switch-app-icon {
  display: inline-block;
  width: 2.5rem;
  border-radius: .5rem;
  margin-right: .5rem;
}

.toggle-checkbox {
  opacity: 0;
}

.toggle-switch {
  background: #dcdcdc;
  width: 3.75rem;
  height: 2rem;
  border-radius: 2rem;
  position: relative;

  &:after {
    content: "";
    height: 1.5rem;
    width: 1.5rem;
    border-radius: 100px;
    display: block;
    transition: .15s linear,background-color .15s linear;
    position: absolute;
    left: 5px;
    cursor: pointer;
    top: .25rem;
    box-shadow: 0 1px 4px 0 rgba(0,0,0,.2);
    background-color: #ffffff;
  }

  .toggle-checkbox:checked + & {
    background: #72da65;

    &:after {
      left: calc(100% - 1.5rem - 5px);
    }
  }
}
</style>
