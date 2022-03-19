<template>
  <v-app>
    <AppBottomBar/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import AppBottomBar from './components/shared/AppBottomBar.vue'

export default {
  name: 'App',
  components: {
    AppBottomBar
  }
};
</script>