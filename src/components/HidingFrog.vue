<script setup>
import { ref, defineEmits, defineExpose } from 'vue';

const emit = defineEmits(['found']);
const isVisible = ref(false); // If frog is visible

const frogPosition = ref({});

function setRandomFrogPosition() {
    frogPosition.value = {
        bottom: `${Math.floor(Math.random() * 65) + 5}%`,
        right: `${Math.floor(Math.random() * 85) + 5}%`,
    };
    isVisible.value = false;
}

function foundFrog() {
    isVisible.value = true;
    emit('found');
}

// Expose function so GameView.vue can call it
defineExpose({ setRandomFrogPosition });
</script>

<template>
    <div
        class="frog"
        :class="{ visible: isVisible }"
        :style="{ bottom: frogPosition.bottom, right: frogPosition.right }"
        v-on:mouseover="foundFrog"
    >
        <img
            src="../assets/figma_components/logo.png"
            alt="Groda för spelet 'Hitta grodan'"
        />
    </div>
</template>

<style scoped lang="scss">
.frog {
    position: fixed;
    opacity: 0;
    width: 64px;
    height: 64px;

    img {
        width: 100%;
        height: 100%;
    }
}

.frog.visible {
    opacity: 1;
}
</style>
