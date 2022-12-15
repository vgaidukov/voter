<template>
  <ion-card class="card">
    <ion-card-header>
      <ion-card-title>{{ title }}</ion-card-title>
      <ion-card-subtitle>{{ subtitle }}</ion-card-subtitle>
      <div class="card__badge">
<!--        <ion-icon :icon="manOutline"/>-->
        <ion-icon :icon="mailUnreadOutline"/>
      </div>
    </ion-card-header>
    <ion-card-content>
      <slot></slot>
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
  box-shadow: 3px 3px 7px #666666;
  position: relative;
  overflow: visible;
}

.card__badge {
  position: absolute;
  top: -10px;
  right: -7px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  color: #0d0d0d;
  background-color: #5598ff;
  text-align: center;
  font-weight: bold;
  box-shadow: 3px 3px 7px #666666;
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
}
</style>
