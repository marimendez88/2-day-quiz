<template>
  <ion-card>
    <ion-card-header>
      <ion-card-subtitle>#001</ion-card-subtitle>
      <ion-card-title>2DayQuiz</ion-card-title>
    </ion-card-header>

    <ion-card-content>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, dicta! Fuga eveniet ratione, illum nemo omnis quasi aut qui vitae explicabo, accusantium delectus, consectetur quos ad dolores labore itaque autem!
      <ion-button>
        Start
      </ion-button>
    </ion-card-content>
  </ion-card>

</template>

<script>
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CustomCard',
  components: { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle , IonButton},
  setup() {
    return {
    };
  }
});
</script>
<style lang="scss" scoped>
ion-card-content{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ion-button{
  margin: 10px;
  width: 50vh;
  justify-content: center;
}
}


</style>