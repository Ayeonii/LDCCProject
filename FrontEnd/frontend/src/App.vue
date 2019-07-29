<template>
 <v-app style="background-color:#fff">
    <top-nav></top-nav>
    <hr style="border-top:0.4px solid #efeded;">
    <!-- <tool-bar></tool-bar> -->
    <router-view></router-view>
    <!-- <footer-page></footer-page> -->
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data: () => ({
    //
  }),
};
</script>
