<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="main" href="/tabs/main">
          <ion-icon :icon="gridOutline" />
          <ion-label>Главная</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="communities" href="/tabs/communities">
          <ion-icon :icon="peopleOutline" />
          <ion-label>Сообщества</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="votes" href="/tabs/votes">
          <ion-icon :icon="checkmarkDoneCircleOutline" />
          <ion-label>Голосования</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { personCircleOutline, peopleOutline, checkmarkDoneCircleOutline, gridOutline } from 'ionicons/icons';

export default defineComponent({
  name: 'TabsPage',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon,
    IonPage,
    IonRouterOutlet },
  setup() {
    return {
      personCircleOutline,
      peopleOutline,
      checkmarkDoneCircleOutline,
      gridOutline
    }
  }
});
</script>
