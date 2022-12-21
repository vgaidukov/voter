<template>
  <section class="section">
    <ion-toolbar>
      <ion-title class="section__title">
        <button class="section__title-button">
          {{ name }}
          <ion-icon :icon="caretForwardOutline"></ion-icon>
<!--          <ion-icon :icon="caretForwardOutline"></ion-icon>-->
<!--          <ion-icon :icon="caretForwardOutline"></ion-icon>-->
        </button>
      </ion-title>
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
  IonIcon
} from '@ionic/vue';
import {caretForwardOutline} from 'ionicons/icons';


export default defineComponent({
  name: 'AccountSection',
  props: {
    name: String,
    className: String,
  },
  components: {
    IonToolbar,
    IonTitle,
    IonIcon
  },
  setup() {
    return {
      caretForwardOutline
    }
  }
});
</script>

<style scoped>
/*ion-card {*/
/*  position: relative;*/
/*  margin: 0;*/
/*}*/

/* iOS places the subtitle above the title */
ion-card-header.ios {
  display: flex;
  flex-flow: column-reverse;
}

ion-toolbar {
  --background: none;
}

ion-title {
  /*display: flex;*/
  padding: 0 20px;
}

ion-icon {
  padding-left: 5px;
}

ion-badge {
  padding: 10px;
  position: absolute;
  top: 5px;
  right: 5px;
  border-radius: 50%;
  opacity: .9;
}

button {
  margin: 0;
  padding: 0;
  background: none;
}

.section__title-button {
  display: flex;
  padding-top: 15px;
  /*justify-content: center;*/
  /*align-items: center;*/


  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  font-size: .7em;
  color: black;
}

@media screen and (min-width: 666.98px) {
  .votes-section, .my-communities-section {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (prefers-color-scheme: dark) {
  .section__title, .section__title-button {
    color: white;
  }
}
</style>
