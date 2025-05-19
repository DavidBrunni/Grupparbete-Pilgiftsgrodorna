<script setup>
defineProps({
    heading: { type: String, default: '' },
    content: { type: String, default: '' },
    image: { type: String, default: '' },
    imageClass: { type: String, default: '' },
});
</script>

<template>
    <section class="info-card">
        <h3>{{ heading }}</h3>
        <p>{{ content }}</p>
        <img :src="image" :class="imageClass" alt="Liten bild på en groda" />
    </section>
</template>

<style scoped lang="scss">
.info-card {
    display: flex;
    flex-direction: column;
    width: 300px;
    padding: 1.5rem;
    position: relative;

    h3 {
        margin-bottom: 1rem;
    }

    p {
        margin-bottom: 2.5rem;
    }
}

@media (min-width: 834px) {
    .info-card {
        width: 620px;
        padding: 2rem 3rem;

        p {
            margin-bottom: 1.5rem;
        }
    }
}

@media (min-width: 1280px) {
    .info-card {
        width: 320px;
        height: 270px;
        padding: 1.5rem 1rem 0 1rem;
        margin-bottom: 20px;
        margin-right: 8px;
    }
}
</style>
