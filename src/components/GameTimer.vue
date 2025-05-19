<script setup>
import { ref, computed, onMounted, onUnmounted, watch, defineEmits } from 'vue';

const emit = defineEmits();

const props = defineProps({
    startTimer: Boolean,
});

const timeElapsed = ref(0);
let timer = null;

// Startar timern och uppdaterar tiden varje sekund
const startTimer = () => {
    timer = setInterval(() => {
        timeElapsed.value++;
        emit('time-updated', formattedTime.value);
    }, 1000);
};

// Stoppar timern genom att rensa intervallet
const stopTimer = () => {
    clearInterval(timer);
};

// Återställ timern (nollställ tid)
const resetTimer = () => {
    timeElapsed.value = 0;
};

// Starta timern om startTimer är true
onMounted(() => {
    if (props.startTimer) {
        startTimer();
    }
});

// Pausa eller starta timern om startTimers värde ändras
watch(
    () => props.startTimer,
    (newValue) => {
        if (newValue) {
            resetTimer();
            startTimer();
        } else {
            stopTimer();
        }
    }
);

// Stoppa timern
onUnmounted(() => {
    stopTimer();
});

// Formattera tiden i formatet mm:ss
const formattedTime = computed(() => {
    const minutes = Math.floor(timeElapsed.value / 60);
    const seconds = timeElapsed.value % 60;
    if (minutes === 1) {
        return `${minutes} minut och ${seconds.toString()} sekunder`;
    } else if (minutes > 1) {
        return `${minutes} minuter och ${seconds.toString()} sekunder`;
    } else {
        return `${seconds.toString()} sekunder`;
    }
});
</script>

<template>
    <div class="timer-container">
        <div class="timer">
            <p>Spelad tid:</p>
            <p>{{ formattedTime }}</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
.timer-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    padding-top: 50px;

    .timer {
        background: url('/src/assets/figma_components/wood-sign-big.avif')
            no-repeat center / cover;
        background-size: contain;
        width: 400px;
        height: 75px;

        display: flex;
        flex-direction: column;
        justify-content: center;

        p {
            font-family: $button-font;
            font-size: $button-fs;
            color: #000;
            display: flex;
            justify-content: center;
            text-align: center;
        }
    }
}
</style>
