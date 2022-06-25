<template>
	<ion-card>
		<ion-card-header>
			<ion-card-subtitle>#001</ion-card-subtitle>
			<ion-card-title>2DayQuiz</ion-card-title>
      <ion-card-subtitle>#001</ion-card-subtitle>
		</ion-card-header>

		<!-- First Page -->
		<!-- <ion-card-content>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, dicta! Fuga eveniet ratione, illum nemo omnis quasi aut qui vitae explicabo, accusantium delectus, consectetur quos ad dolores labore itaque autem!
      <ion-button>
    Start
      </ion-button>
    </ion-card-content> -->


		<!-- Question number 1 -->
		<ion-card-content v-if="currentSlide">
    <ion-header>
			<ion-card-subtitle>
				{{ item.question }}
			</ion-card-subtitle>
      </ion-header>
			<section class="content-options">
				<ion-chip v-for="(option, i) in item.options" :key="i">
					<ion-label color="secondary">{{ option }}</ion-label>
				</ion-chip>
			</section>
			<ion-button>Next</ion-button>
		</ion-card-content>
	</ion-card>
</template>

<script>
	import {
		IonCard,
		IonCardContent,
		IonCardHeader,
		IonCardSubtitle,
		IonCardTitle,
		IonButton,
		IonLabel,
		IonTitle,
  IonChip,
    IonHeader
	} from '@ionic/vue';
	import { defineComponent, ref } from 'vue';
	import { dailyQuestions } from '../../models/constants.ts';

	export default defineComponent({
		name: 'CustomCard',
		components: {
			IonCard,
			IonCardContent,
			IonCardHeader,
			IonCardSubtitle,
			IonCardTitle,
			IonButton,
			IonLabel,
      IonChip,
      IonHeader
		},

		setup() {
      console.log(dailyQuestions);
      
      const item = dailyQuestions[0];
      const currentSlide = 'ee';
			return {
        item,
        currentSlide,
			};
		},
	});
</script>
<style lang="scss" scoped>
ion-card{
  height: 60vh;
  width: 90vw;
  padding: 15px;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content:space-around;
	ion-card-content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		ion-button {
			margin: 10px;
			width: 50vh;
			justify-content: center;
      width: 60vw;
		}
		.content-options {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap-reverse;
      justify-content: space-between;
			padding: 3vh;
		}
	}
  }
</style>
