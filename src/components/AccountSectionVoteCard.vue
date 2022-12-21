<template>
  <ion-card class="card">
    <img class="card__image" :src="this.$attrs.imgSrc" alt="image"/>
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
    // className: String
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
}

.card::before {
  content: "";
  background-color: black;
  position: absolute;
  inset: 0 0 0 0;
  opacity: .4;
  z-index: 2;
}

.green {
  box-shadow: 0 1px 130px green;
}

.yellow {
  box-shadow: 0 1px 130px yellow;
}

.red {
  box-shadow: 0 1px 130px red;
}

ion-card-header, ion-card-content {
  z-index: 3;
}

.card__image {
  width: 100%;
  position: absolute;
  top: -170px;
  z-index: 1;
}

.card__badge {
  /*padding: 3px;*/
  width: 30px;
  height: 30px;
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  z-index: 3;

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
