<template>
  <!-- <v-card height="400px"> -->
    <v-footer
      v-bind="localAttrs"
      :padless="padless"
    >
      <v-card
        flat
        tile
        width="100%"
        class="deep-orange darken-1 text-center"
      >
        <v-card-text>
            <v-icon size="24px">  T G I F</v-icon>
          <!-- </v-btn> -->
             </v-card-text>
 
        <v-divider></v-divider>
        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong style="color :#FFEBEE">롯데 정보통신 신입사원 88기 " L.T.E "</strong>
        </v-card-text>
      </v-card>
    </v-footer>

  <!-- </v-card> -->
</template>

<script>
export default {
data: () => ({
    icons: [
      'home',
      'mail',
      'event',
      'delete',
    ],
    items: [
      'default',
      'absolute',
      'fixed',
    ],
    padless: false,
    variant: 'default',
  }),
  computed: {
    localAttrs () {
      const attrs = {}

      if (this.variant === 'default') {
        attrs.absolute = false
        attrs.fixed = false
      } else {
        attrs[this.variant] = true
      }
      return attrs
    },
  }
}
</script>

<style>
</style>

