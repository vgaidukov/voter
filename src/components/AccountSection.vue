<template>
  <section class="section">
    <ion-toolbar>
      <ion-title class="section__title">{{ name }}</ion-title>
    </ion-toolbar>
    <div :class=this.className>
      <slot></slot>
    </div>
  </section>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {
  IonToolbar,
  IonTitle,
} from '@ionic/vue';

export default defineComponent({
  name: 'AccountSection',
  props: {
    name: String,
    className: String,
  },
  components: {
    IonToolbar,
    IonTitle,
  },
});
</script>

<style scoped>
/* iOS places the subtitle above the title */
ion-card-header.ios {
  display: flex;
  flex-flow: column-reverse;
}

ion-card {
  position: relative;
}

ion-badge {
  position: absolute;
  top: 5px;
  right: 5px;
  padding: 10px;
  border-radius: 50%;
  opacity: .9;
}

ion-card-content {
  padding-top: 0;
}

.section__title {
  font-size: 120%;
}

@media (orientation: landscape) {
  .votes-section, .my-communities-section {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
