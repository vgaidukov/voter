<template>
  <ul class="communities">
    <li class="community" v-for="(item, index) in items" :key="item">
      <div class="badge">
        <ion-icon :icon="manOutline"/>
        <p>10</p>
      </div>
      <img class="community__image" :src="'https://picsum.photos/100/100?random=' + index" alt="avatar"/>
      <div class="community__label">
        <h3 class="community__title">{{ item }}</h3>
        <p class="community__description">Какая-то общедоступная информация о сообществе</p>
      </div>
      <ion-button class="add-button" shape="round" fill="clear">
      </ion-button>
    </li>
  </ul>
  <ion-infinite-scroll @ionInfinite="loadData($event)">
    <ion-infinite-scroll-content></ion-infinite-scroll-content>
  </ion-infinite-scroll>
</template>

<script lang="ts">
import {
  IonButton,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonIcon
} from '@ionic/vue';
import {defineComponent, reactive} from 'vue';
import {manOutline} from 'ionicons/icons';


export default defineComponent({
  name: 'ScrollSection',
  components: {
    IonButton,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    IonIcon
  },
  setup: function () {
    const items: string[] = reactive([]);

    const generateItems = () => {
      const count = items.length + 1;
      for (let i = 0; i < 50; i++) {
        items.push(`Сообщество ${count + i}`);
      }
    };

    const loadData = (ev: any) => {
      generateItems();
      setTimeout(() => ev.target.complete(), 500);
    };

    generateItems();

    return {loadData, items, manOutline};
  },
  methods: {
    console() {
      console.log(1000);
    }
  }
});
</script>

<style scoped>
p, h3, ul, li {
  margin: 0;
  padding: 0;
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

.communities {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.community {
  margin: 12px 0 0 0;
  min-height: 120px;
  width: 92%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  box-shadow: 0 1px 10px #989aa2;
}

.community__label {
  margin: 0 0 0 15px;
}

.community__image {
  margin: 10px;
  padding: 0;
  border-radius: 50%;
  box-shadow: 0 3px 10px #666666;
  position: relative;
}

.community__title {
  font-weight: lighter;
}

.community__description {
  font-size: 80%;
  max-width: 90%;
}

.badge {
  width: 35px;
  height: 35px;
  position: absolute;
  top: 7px;
  left: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 50%;
  box-shadow: 1px 1px 7px #989aa2;
  opacity: .7;
  z-index: 5;

  font-size: .8em;
  text-align: center;
  color: #0d0d0d;
}

@media (prefers-color-scheme: dark) {
  .community__image, .add-button {
    box-shadow: none;
  }

  .community {
    box-shadow: 1px 1px 200px #5598ff;
  }
}

@media (orientation: landscape) {
  .communities {
    width: 98%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 15px;
  }

  .community {
    width: 100%;
  }
}
</style>
