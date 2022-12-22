<template>
  <ul>
    <my-community-card
      v-for="community in communities"
      :color="community.color"
      :community="community"
      v-bind:key="community"
      :imgSrc="community.imgUrl">
    </my-community-card>
  </ul>
  <ion-fab slot="fixed" vertical="bottom" horizontal="end">
    <ion-fab-button size="small">
      <ion-icon :icon="add"></ion-icon>
    </ion-fab-button>
  </ion-fab>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {manOutline, add} from 'ionicons/icons';
import {IonIcon} from '@ionic/vue';
import MyCommunityCard from "@/components/MyCommunityCard.vue";

export default defineComponent({
  name: 'MyCommunityList',
  components: {
    MyCommunityCard,
    IonIcon

  },
  setup() {
    return {
      manOutline,
      add,
      communities: [
        {
          color: "primary",
          title: "Рыбинские",
          subtitle: "Братство",
          participants: 5,
          lastVote: "Чо с новым годом?",
          imgUrl: "https://picsum.photos/500/500?random=121"
        },
        {
          color: "secondary",
          title: "Московские",
          subtitle: "Товарищество",
          participants: 20,
          lastVote: "Во сколько собираемся в воскр?",
          imgUrl: "https://picsum.photos/500/500?random=123"
        },
        {
          color: "tertiary",
          title: "Питерские",
          subtitle: "Коммуна",
          participants: 1000,
          lastVote: "Го по пифку?",
          imgUrl: "https://picsum.photos/500/500?random=125"
        }]
    };
  }
})
;
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
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
