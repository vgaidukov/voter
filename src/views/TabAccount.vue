<template>
  <ion-page>

    <ion-header :translucent="true">
      <ion-toolbar class="header__toolbar">
        <ion-title class="header__title" size="large">Вадим Г.</ion-title>
        <ion-buttons :collapse="true" slot="primary" class="header__buttons">
          <ion-button class="header__button" fill="outline">
            <ion-icon slot="end" :icon="create"></ion-icon>
            <p class="header__button-label">Изменить</p>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Вадим Г.</ion-title>
          <ion-buttons slot="primary">
            <ion-button fill="outline" class="content-header__button">
              Изменить
              <ion-icon slot="end" :icon="create"></ion-icon>
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>

      <account-section name="Голосования" class-name="votes-section">
        <account-section-card color="success" title="Ждут участия" subtitle="Вы еще не голосовали">
          Card Content
        </account-section-card>
        <account-section-card color="warning" title="Инициированы мной" subtitle="Вы организатор голосований">
          Card Content
        </account-section-card>
        <account-section-card color="danger" title="Требуют выполнения" subtitle="Вы назначены исполнителем">
          Card Content
        </account-section-card>
      </account-section>

      <account-section name="Мои сообщества" class-name="my-communities-section">
        <account-section-card color="primary" title="Рыбинские" subtitle="Братство">
          Последнее голосование:
        </account-section-card>
        <account-section-card color="secondary" title="Московские" subtitle="Товарищество">
          Количество участников:
        </account-section-card>
        <account-section-card color="primary" title="Питерские" subtitle="Коммуна">
          Card Content
        </account-section-card>
      </account-section>

      <account-section name="Все сообщества" class-name="all-communities-section">
        <scroll-section/>
      </account-section>


    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonButtons,
  IonIcon,
} from '@ionic/vue';
import {create} from 'ionicons/icons';

import AccountSection from '@/components/AccountSection.vue';
import AccountSectionCard from '@/components/AccountSectionCard.vue';
import ScrollSection from "@/components/ScrollSection.vue";

export default defineComponent({
  name: 'Tab1Page',
  components: {
    ScrollSection,
    AccountSection,
    AccountSectionCard,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonButton,
    IonButtons,
    IonIcon,
  },
  setup() {
    return {
      create
    }
  }
});
</script>

<style scoped>
/* iOS places the subtitle above the title */
ion-card-header.ios {
  display: flex;
  flex-flow: column-reverse;
}

.header__title.ios {
  font-size: 1.5em;
}

.header__button, .content-header__button {
  margin: 0 15px 5px 0;
}

.header__button.button-outline.ios {
  --border-style: none;
}

.header__button.ios {
  margin: 0 12px 0 0;
}

.ios>.header__button-label {
  display: none;
}
</style>
