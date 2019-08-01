<template>
 <v-app style="background-color:#fff">
    <top-nav></top-nav>
    <!-- <hr style="border-top:0.1px solid #efeded;"> -->
    <!-- <tool-bar></tool-bar> -->
    <router-view></router-view>
    <!-- <footer-page></footer-page> -->
  </v-app>
</template>

<script>

import HomeView from './views/HomeView';
import TopNav from './components/topNavBar'
export default {
  name: 'App',
  components: {
    TopNav,
    HomeView
  },
  data: () => ({
    //
  }),
};
</script>
