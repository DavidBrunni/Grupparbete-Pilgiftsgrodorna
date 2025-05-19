<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

import PopUp from '../components/PopUp.vue';
import GameTimer from '../components/GameTimer.vue';
import HidingFrog from '../components/HidingFrog.vue';
import WoodButton from '../components/WoodButton.vue';
import RedFrog from '@/assets/figma_components/frog-red.avif';

onMounted(() => {
    document.body.classList.add('game-page');
    hidingFrogRef.value?.setRandomFrogPosition();
});

onUnmounted(() => {
    document.body.classList.remove('game-page');
});

const frogIsFound = ref(false);
const hidingFrogRef = ref(null);

const stopTimer = ref(false);
const timerValue = ref('0 sekunder');

function foundFrog() {
    frogIsFound.value = true;
    stopTimer.value = true;
}

function playAgain() {
    frogIsFound.value = false;
    hidingFrogRef.value?.setRandomFrogPosition();
    stopTimer.value = false;
}

const shouldTimerStart = computed(() => !stopTimer.value);
const updateTime = (newTime) => {
    timerValue.value = newTime;
};
</script>

<template>
    <div class="container">
        <GameTimer :startTimer="shouldTimerStart" @time-updated="updateTime" />
        <WoodButton class="back-btn" label="Tillbaka" to="/startGame" />
        <HidingFrog ref="hidingFrogRef" @found="foundFrog" />
        <PopUp
            v-if="frogIsFound"
            class="pop-up"
            heading="Grattis!"
            content="Du hittade grodan!"
            :timer="'Det tog dig ' + timerValue + ' att hitta grodan!'"
            :image="RedFrog"
            imageClass="red-frog"
            closeButton="Spela igen"
            @close="playAgain"
        />
    </div>
</template>

<style scoped lang="scss">
.container {
    width: 100vw;
    height: 100vh;
    position: relative;

    .pop-up {
        position: absolute;
        left: 50%;
        bottom: 30%;
        transform: translate(-50%, -50%);
    }
}
.back-btn {
    position: absolute;
    left: 50%;
    bottom: 70px;
    transform: translateX(-50%);
}
</style>
