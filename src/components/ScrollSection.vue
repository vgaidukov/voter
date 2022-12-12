<template>
  <ion-list class="communities">
    <ion-item class="community" v-for="(item, index) in items" :key="item">
      <div class="community">
        <img class="community__image" :src="'https://picsum.photos/100/100?random=' + index" alt="avatar"/>
      </div>
      <div class="community__label">
        <h3 class="community__title">{{ item }}</h3>
        <p class="community__description">Какая-то общедоступная информация о сообществе</p>
      </div>
    </ion-item>
  </ion-list>
  <ion-infinite-scroll @ionInfinite="loadData($event)">
    <ion-infinite-scroll-content></ion-infinite-scroll-content>
  </ion-infinite-scroll>
</template>

<script lang="ts">
import {
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonList,
  IonItem,
} from '@ionic/vue';
import {defineComponent, reactive} from 'vue';

export default defineComponent({
  name: 'ScrollSection',
  components: {
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    IonList,
    IonItem,
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
      console.log(ev);
      generateItems();
      setTimeout(() => ev.target.complete(), 500);
    };

    generateItems();

    return {loadData, items};
  },
  methods: {
    console() {
      console.log(1000);
    }
  }
});
</script>

<style scoped>
p, h3 {
  margin: 0;
  padding: 0;
}

.communities {
  max-width: 98%;
}

.community {
  margin: 0 0 10px 0;
}

.community__label {
  margin: 0 0 0 15px;
}

.community__image {
  margin: 0 15px 0 0;
  padding: 0;
  border-radius: 50%;
  box-shadow: 3px 3px 7px #666666;
}

.community__title {
  font-weight: lighter;
}

.community__description {
  font-size: 80%;
}

@media (prefers-color-scheme: dark) {
  .community__image {
    box-shadow: none;
  }
}

@media (orientation: landscape) {
  .communities {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
