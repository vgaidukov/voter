<template>
  <ion-card class="section-card">
    <ion-card-header>
      <ion-card-title>{{ title }}</ion-card-title>
      <ion-card-subtitle>{{ subtitle }}</ion-card-subtitle>
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
} from '@ionic/vue';

export default defineComponent({
  name: 'AccountSectionCard',
  props: {
    title: String,
    subtitle: String,
    content: String,
  },
  components: {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
  }
});
</script>

<style scoped>
/* iOS places the subtitle above the title */
ion-card-header.ios {
  display: flex;
  flex-flow: column-reverse;
}

.section-card {
  box-shadow: 3px 3px 7px #666666;
}

@media (prefers-color-scheme: dark) {
  .section-card {
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

  ion-card-content.md{
    /*margin-top: 300px;*/
  }

}
</style>
