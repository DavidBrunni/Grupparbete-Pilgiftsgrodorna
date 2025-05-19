<script setup>
import { defineProps, defineEmits } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps({
    label: {
        type: String,
        required: true,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    type: {
        type: String,
        default: 'button',
    },
    to: {
        type: String,
        default: '',
    },
    back: {
        type: Boolean,
        default: false,
    },
});

const emit = defineEmits();

const handleClick = (event) => {
    if (props.disabled) {
        return;
    }

    if (props.back) {
        router.back();
    } else if (props.to) {
        router.push(props.to);
    } else {
        emit('click', event);
    }
};
</script>

<template>
    <RouterLink v-if="to" :to="to" class="button">
        <span>{{ label }}</span>
    </RouterLink>

    <button
        v-else
        :class="['button', { disabled: props.disabled }]"
        :disabled="props.disabled"
        :type="type"
        @click="handleClick"
    >
        <span>{{ label }}</span>
    </button>
</template>

<style scoped lang="scss">
.button {
    background: url('/src/assets/figma_components/wood-sign-button.avif')
        no-repeat center / cover;
    border: none;
    width: 117px;
    height: 57px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-align: center;
    font-size: 1rem;
    font-family: 'Luckiest Guy', sans-serif;
    color: #000;
    text-decoration: none;

    &:hover {
        color: red;
    }
}

.button:disabled {
    cursor: not-allowed;
    opacity: 0.5;

    &:hover {
        color: #000;
    }
}

.button span {
    text-align: center;
}
</style>
