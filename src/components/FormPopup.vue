<script setup>
import WoodButton from './WoodButton.vue';
import { defineProps, defineEmits } from 'vue';

defineProps({
    isVisible: Boolean,
    message: {
        type: String,
        default: '',
    },
});

const emit = defineEmits(['close']);

const close = () => {
    emit('close');
};
</script>

<template>
    <div v-if="isVisible" class="popup-overlay" @click.self="close">
        <div class="popup-content">
            <p>{{ message }}</p>
            <WoodButton label="Stäng" @click="close" />
        </div>
    </div>
</template>

<style scoped lang="scss">
.popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
}

.popup-content {
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
}
</style>
