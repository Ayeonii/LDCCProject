<template>
 <v-app style="background-color:#fff">
    <top-nav></top-nav>
    <!-- <hr style="border-top:0.1px solid #efeded;"> -->
    <!-- <tool-bar></tool-bar> -->
    <router-view></router-view>
    <foot-nav></foot-nav>
    <!-- <footer-page></footer-page> -->

  </v-app>
</template>

<script>

import HomeView from './views/HomeView';
import TopNav from './components/topNavBar'
import FootNav from './components/FootNavBar'
export default {
  name: 'App',
  components: {
    TopNav,
    HomeView,
    FootNav
  },
  data: () => ({
    //
  }),
};
</script>
