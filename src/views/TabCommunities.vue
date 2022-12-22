<template>
  <ion-page>

    <ion-header :translucent="true">
      <ion-toolbar class="header__toolbar">
        <ion-segment value="self">
          <ion-segment-button value="self">
            <ion-label>Мои сообщества</ion-label>
          </ion-segment-button>
          <ion-segment-button value="all">
            <ion-label>Все сообщества</ion-label>
          </ion-segment-button>
        </ion-segment>
      </ion-toolbar>
      <ion-searchbar></ion-searchbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <community-list></community-list>
      <!--      <my-community-list></my-community-list>-->
    </ion-content>

  </ion-page>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonContent,
  IonSearchbar,
  IonLabel,
  IonSegment,
  IonSegmentButton,
  // IonIcon
} from '@ionic/vue';
import CommunityList from "@/components/CommunityList.vue";
// import MyCommunityList from "@/components/MyCommunityList.vue";
// import {add} from 'ionicons/icons';


export default defineComponent({
  name: 'TabCommunities',
  components: {
    CommunityList,
    // MyCommunityList,
    IonHeader,
    IonToolbar,
    IonContent,
    IonPage,
    IonSearchbar,
    IonLabel,
    IonSegment,
    IonSegmentButton,
    // IonIcon
  },
  setup() {
    return {
      // add
    }
  }
});
</script>

<style scoped>
ion-searchbar .md {
  margin-bottom: 5px;
}

ion-segment {
  margin-top: 10px;
  margin-bottom: 10px;
}

@media (prefers-color-scheme: dark) {
  .ios ion-segment-button::part(indicator-background) {
    background-color: rgba(85, 152, 255, .4);
  }
}
</style>

