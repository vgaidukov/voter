<template>
  <ion-app class="page">
    <ion-router-outlet />
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet
  }
});
</script>

<style scoped>
 .page {
   margin: 0 auto;
   max-width: 820px;
   display: flex;
   justify-content: center;
 }
</style>
