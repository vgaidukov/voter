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
        <account-section-vote-card color="success" title="Ждут участия" subtitle="Вы еще не голосовали">
          Card Content
        </account-section-vote-card>
        <account-section-vote-card color="warning" title="Инициированы мной" subtitle="Вы организатор голосований">
          Card Content
        </account-section-vote-card>
        <account-section-vote-card color="danger" title="Требуют выполнения" subtitle="Вы назначены исполнителем">
          Card Content
        </account-section-vote-card>
      </account-section>

      <account-section name="Мои сообщества" class-name="my-communities-section">
        <account-section-community-card
            v-for="community in communities"
            :color="community.color"
            :community="community"
            v-bind:key="community"
            :imgSrc="community.imgUrl">
        </account-section-community-card>
      </account-section>

      <account-section name="Все сообщества" class-name="all-communities-section">
        <scroll-section>
          <ion-button shape="round" fill="clear">
            <ion-icon slot="icon-only" :icon="addOutline"></ion-icon>
          </ion-button>
        </scroll-section>
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
import {create, addOutline} from 'ionicons/icons';

import AccountSection from '@/components/AccountSection.vue';
import AccountSectionCommunityCard from '@/components/AccountSectionCommunityCard.vue';
import ScrollSection from "@/components/ScrollSection.vue";
import AccountSectionVoteCard from "@/components/AccountSectionVoteCard.vue";

export default defineComponent({
  name: 'TabAccount',
  components: {
    ScrollSection,
    AccountSection,
    AccountSectionVoteCard,
    AccountSectionCommunityCard,
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
      create,
      addOutline,
      communities: [
        {
          color: "primary",
          title: "Рыбинские",
          subtitle: "Братство",
          participants: 5,
          lastVote: "Чо с новым годом?",
          imgUrl: "https://picsum.photos/500/500?random=121"
        },
        {
          color: "secondary",
          title: "Московские",
          subtitle: "Товарищество",
          participants: 2,
          lastVote: "Во сколько собираемся в воскр?",
          imgUrl: "https://picsum.photos/500/500?random=123"
        },
        {
          color: "primary",
          title: "Питерские",
          subtitle: "Коммуна",
          participants: 1,
          lastVote: "Го по пифку?",
          imgUrl: "https://picsum.photos/500/500?random=125"
        }]
    }
  },
});
</script>

<style>
/* iOS places the subtitle above the title */
ion-card-header.ios {
  display: flex;
  flex-flow: column-reverse;
}

.header__title.ios {
  font-size: 1.5em;
}

/*.header__button, .content-header__button {*/
/*  margin: 0 15px 25px 0;*/
/*}*/

.header__button.button-outline.ios {
  --border-style: none;
}

ion-button.content-header__button {
  margin: 0 12px 7px 0;
}

.ios > .header__button-label {
  display: none;
}

/*.img {*/
/*  position: absolute;*/
/*  inset: 0 0 0 0;*/
/*  !*border-radius: 50%;*!*/
/*  !*overflow: hidden;*!*/
/*  !*box-shadow: 3px 3px 7px #0d0d0d;*!*/
/*  z-index: 1;*/
/*}*/

/*.img::after {*/
/*  content: "";*/
/*  position: absolute;*/
/*  inset: 10px 0 0 0;*/
/*  background-color: #0d0d0d;*/
/*  opacity: .8;*/
/*  z-index: 2;*/
/*}*/
</style>
