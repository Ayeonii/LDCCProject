<template>
  <div class="about">
    <h1>This is an about page</h1>
     <coverflow :coverList="coverList" :coverWidth="260" :index="2"></coverflow>
  </div>

  
</template>

<script>
import { coverflow } from 'vue-coverflow';
export default {
  
  data(){
    return{

    coverList: [
              {
                cover: 'http://ogu51f989.bkt.clouddn.com/react.png',
                title: 'React'
              }, {
                cover: 'http://ogu51f989.bkt.clouddn.com/angular.png',
                title: 'Angular'
              }, {
                cover: 'http://ogu51f989.bkt.clouddn.com/vue.png',
                title: 'Vue'
              }, {
                cover: 'http://ogu51f989.bkt.clouddn.com/webpack.png',
                title: 'Webpack'
              }, {
                cover: 'http://ogu51f989.bkt.clouddn.com/yarn.png',
                title: 'Yarn'
              }, {
                cover: 'http://ogu51f989.bkt.clouddn.com/node.png',
                title: 'Node'
              }
            ]
          }
        },
        components: {
          coverflow
        },
        methods :{

        }

}
</script>
