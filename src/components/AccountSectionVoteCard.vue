<template>
  <ion-card class="card">
    <div class="card__image-container">
      <img class="card__image" :src="this.$attrs.imgSrc" alt="image"/>
    </div>
    <ion-card-header>
      <ion-card-title>{{ title }}</ion-card-title>
      <ion-card-subtitle>{{ subtitle }}</ion-card-subtitle>
    </ion-card-header>
    <ion-card-content>
      <slot></slot>
    </ion-card-content>
    <div class="card__badge">
      <ion-icon :icon="mailUnreadOutline"/>
    </div>
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
  IonIcon,
} from '@ionic/vue';
import {mailUnreadOutline} from 'ionicons/icons';


export default defineComponent({
  name: 'AccountSectionCard',
  props: {
    title: String,
    subtitle: String,
  },
  components: {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonIcon
  },
  setup() {
    return {
      mailUnreadOutline
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

.card {
  min-height: 140px;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.card::before {
  content: "";
  background-color: black;
  position: absolute;
  inset: 0 0 0 0;
  opacity: .4;
  z-index: 3;
}

.green {
  box-shadow: 1px 1px 80px green;
}

.yellow {
  box-shadow: 0 1px 80px yellow;
}

.red {
  box-shadow: 0 1px 80px red;
}


ion-card-header, ion-card-content {
  z-index: 4;
}

.card__image {
  width: 100%;
  position: absolute;
  top: -170px;
  z-index: 2;
}

.card__badge {
  width: 30px;
  height: 30px;
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  z-index: 6;

  font-size: 1.7em;
  color: white;
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
    top: -70px;
  }
}
</style>
