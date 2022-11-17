<template>
  <nav>
    <!-- <router-link to="/">Home</router-link> | -->
    <router-link to="/list">List</router-link> |
    <router-link to="/graph">Graph</router-link> |
    <router-link to="/config">Config</router-link>
    <!-- <router-link to="/addEdit">AddEdit</router-link> | -->
    <!-- <router-link to="/logout">Logout</router-link> -->
  </nav>
  <transition name="fade" mode="out-in">
    <router-view class="view"></router-view>
  </transition>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.fade-enter-active {
    transition: opacity 3s;
    opacity: 0;
  }
  .fade-enter-to {
    opacity: 1;
  }

  .fade-leave-active {
    transition: opacity 3s;
    opacity: 1;
  }
  .fade-leave-to {
    opacity: 0;
  }
</style>


