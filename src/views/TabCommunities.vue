<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar class="header__toolbar">
        <ion-title class="header__title" size="large">Мои сообщества</ion-title>
        <!--        <ion-buttons :collapse="true" slot="primary" class="header__buttons">-->
        <!--          <ion-button class="header__button" fill="outline">-->
        <!--            &lt;!&ndash;            <ion-icon slot="end" :icon="create"></ion-icon>&ndash;&gt;-->
        <!--            <p class="header__button-label">Изменить</p>-->
        <!--          </ion-button>-->
        <!--        </ion-buttons>-->
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Мои сообщества</ion-title>
        </ion-toolbar>
      </ion-header>
        <scroll-section>
        </scroll-section>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent} from '@ionic/vue';
import ScrollSection from "@/components/ScrollSection.vue";

export default defineComponent({
  name: 'TabCommunities',
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    ScrollSection
  }
});
</script>

