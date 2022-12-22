<template>
  <ul class="communities">
    <community-card v-for="(item, index) in items" :key="item" :item="item" :index="index">
    </community-card>
  </ul>
  <ion-infinite-scroll @ionInfinite="loadData($event)">
    <ion-infinite-scroll-content></ion-infinite-scroll-content>
  </ion-infinite-scroll>
</template>

<script lang="ts">
import {defineComponent, reactive} from 'vue';
import {IonInfiniteScroll, IonInfiniteScrollContent} from '@ionic/vue';
import {manOutline} from 'ionicons/icons';
import CommunityCard from "@/components/CommunityCard.vue";

export default defineComponent({
  name: 'CommunityList',
  components: {
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    CommunityCard
  },
  setup: function () {
    const items: string[] = reactive([]);

    const generateItems = () => {
      const count = items.length + 1;
      for (let i = 0; i < 10; i++) {
        items.push(`Сообщество ${count + i}`);
      }
    };

    const loadData = (ev: any) => {
      generateItems();
      setTimeout(() => ev.target.complete(), 100);
    };

    generateItems();

    return {loadData, items, manOutline};
  },
});
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
}

.communities {
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media screen and (min-width: 666.98px) {
  .communities {
    width: 98%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 15px;
  }
}
</style>
