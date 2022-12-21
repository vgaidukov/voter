<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar class="header__toolbar">
        <ion-title class="header__title" size="large">Вадим Г.</ion-title>
        <ion-buttons :collapse="true" slot="primary" class="header__buttons">
          <ion-button class="header__button" fill="outline">
            <ion-icon slot="end" :icon="create"></ion-icon>
<!--            <p class="header__button-label">Изменить</p>-->
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
<!--              Изменить-->
              <ion-icon slot="end" :icon="create"></ion-icon>
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>

      <account-section name="голосования" class-name="votes-section">
        <account-section-vote-card
            color="primary"
            class="green"
            title="Ждут участия"
            subtitle="Вы еще не голосовали"
            imgSrc="https://picsum.photos/500/500?random=523">
          Card Content
        </account-section-vote-card>
        <account-section-vote-card
            color="secondary"
            class="yellow"
            title="Инициированы мной"
            subtitle="Вы организатор голосований"
            imgSrc="https://picsum.photos/500/500?random=322">
          Card Content
        </account-section-vote-card>
        <account-section-vote-card
            color="tertiary"
            class="red"
            title="Требуют выполнения"
            subtitle="Вы назначены исполнителем"
            imgSrc="https://picsum.photos/500/500?random=421">
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
        <scroll-section class="scroll-section">
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
import {create, addOutline, manOutline} from 'ionicons/icons';

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
      manOutline,
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
          color: "tertiary",
          title: "Питерские",
          subtitle: "Коммуна",
          participants: 10,
          lastVote: "Го по пифку?",
          imgUrl: "https://picsum.photos/500/500?random=125"
        }]
    }
  },
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

.button-outline {
/*.header__button.button-outline.ios, .сontent-header__button.button-outline.ios {*/
  --border-style: none;
}

ion-button.content-header__button {
  margin: 0 12px 10px 0;
}

/*.ios > .header__button-label {*/
/*  display: none;*/
/*}*/

.scroll-section {
  display: flex;
  margin: auto;
}
</style>
