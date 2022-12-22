<template>
  <li class="community">
    <div class="badge">
      <ion-icon :icon="manOutline"/>
      <p>10</p>
    </div>
    <img class="community__image" :src="'https://picsum.photos/100/100?random=' + this.$attrs.index" alt="avatar"/>
    <div class="community__label">
      <h3 class="community__title">{{ this.$attrs.item }}</h3>
      <p class="community__description">Какая-то общедоступная информация о сообществе</p>
    </div>
    <ion-button class="add-button" shape="round" fill="clear">
    </ion-button>
  </li>
</template>

<script lang="ts">
import {
  IonButton,
  IonIcon
} from '@ionic/vue';
import {defineComponent} from 'vue';
import {manOutline} from 'ionicons/icons';

export default defineComponent({
  name: 'CommunityCard',
  props: {

  },
  components: {
    IonButton,
    IonIcon
  },
  setup: function () {

    return {manOutline};
  },
});
</script>

<style scoped>
p, h3, li, ion-icon {
  margin: 0;
  padding: 0;
}

.community {
  padding-right: 15px;
  margin: 12px 0 0 0;
  min-height: 100px;
  width: 92%;
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 15px;
  box-shadow: 0 1px 10px #989aa2;
  overflow: hidden;
}

.community__label {
  z-index: 3;
}

.community__image {
  margin: 0 15px 0 0;
  padding: 0;
  width: 100px;
  position: relative;
  z-index: 3;
}

.community__title {
  font-weight: bold;
  font-size: 1.1em;
  letter-spacing: -0.5px;
  margin-bottom: 5px;
}

.community__description {
  font-size: 80%;
}

.badge {
  padding: 0 5px;
  border-radius: 20px;
  min-width: 40px;
  height: 40px;
  position: absolute;
  top: 7px;
  left: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  box-shadow: 1px 1px 7px;
  opacity: .7;
  z-index: 4;

  font-size: .8em;
  text-align: center;
  color: #0d0d0d;
}

.add-button {
  padding: 0;
  margin: 0;
  width: 25px;
  height: 25px;
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #5598ff;
  border-radius: 50%;
  box-shadow: 1px 1px 7px #989aa2;
  z-index: 3;
}

.add-button::before {
  position: absolute;
  content: "";
  width: 12px;
  border-bottom: 1px solid white;
}

.add-button::after {
  position: absolute;
  content: "";
  width: 12px;
  border-bottom: 1px solid white;
  rotate: 90deg;
}

@media (prefers-color-scheme: dark) {
  .community__image, .add-button {
    box-shadow: none;
  }

  .community {
    box-shadow: 1px 1px 120px #5598ff;
  }
}

@media screen and (min-width: 666.98px) {
  .community {
    width: 100%;
  }
}
</style>
