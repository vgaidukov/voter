<template>
  <ion-card class="card" @click="log">
    <img class="card__image" :src="this.$attrs.imgSrc" alt="image"/>
    <div class="card__badge">
      <ion-icon :icon="manOutline"/>
      <p>{{ community.participants }}</p>
    </div>
    <ion-card-header class="card__header">
      <ion-card-title>{{ community.title }}</ion-card-title>
      <ion-card-subtitle>{{ community.subtitle }}</ion-card-subtitle>
    </ion-card-header>
    <ion-card-content class="card__content">
      <p> Последнее голосование:</p>
      <p style="font-weight: bold"> {{ community.lastVote }}</p>
    </ion-card-content>
  </ion-card>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonIcon
} from '@ionic/vue';
import {manOutline} from 'ionicons/icons';

export default defineComponent({
  name: 'MyCommunityCard',
  props: {
    community: Object,
  },
  components: {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonIcon,
  },
  methods: {
    log: function () {
      console.log(this);
    }
  },
  setup() {
    return {
      manOutline
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

p, ion-icon {
  margin: 0;
  padding: 0;
}

.card {
  min-height: 140px;
  position: relative;
  box-shadow: 3px 3px 7px #666666;
  color: white;
  z-index: 1;
}

.card::before {
  content: "";
  background-color: #000000;
  position: absolute;
  inset: 0 0 0 0;
  opacity: .4;
  z-index: 3;
}

.card__image {
  width: 100%;
  position: absolute;
  top: -70px;
  z-index: 2;
}

.card__header, .card__content {
  z-index: 4;
}

.card__badge {
  padding: 0 5px;
  border-radius: 20px;
  min-width: 40px;
  height: 40px;
  position: absolute;
  top: 15px;
  right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e8c205;
  z-index: 5;

  text-align: center;
  font-weight: bold;
  color: #0d0d0d;
}

@media (prefers-color-scheme: dark) {
  .card {
    box-shadow: none;
  }
}

@media screen and (min-width: 666.98px) {
  ion-card-header.ios {
    padding: 20px 20px 0;
  }

  ion-card-title.ios {
    min-height: 60px;
    font-size: 1.6em;
  }

  ion-card-subtitle.ios {
    min-height: 28px;
  }

  .card__image {
    top: 0;
  }
}
</style>
