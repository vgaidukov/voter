<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar class="header__toolbar">
        <ion-title class="header__title" size="large">Мои голосования</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Мои голосования</ion-title>
        </ion-toolbar>
      </ion-header>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
  import {defineComponent} from 'vue';
  import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent} from '@ionic/vue';

  export default defineComponent({
    name: 'TabVotes',
    components: {
      IonHeader,
      IonToolbar,
      IonTitle,
      IonContent,
      IonPage
    }
  });
</script>

