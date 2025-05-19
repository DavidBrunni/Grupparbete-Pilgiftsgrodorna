<script setup>
import { ref } from 'vue';
import WoodButton from '../components/WoodButton.vue';

const targetReadMore = ref(null);

const readMore = () => {
    if (targetReadMore.value) {
        let offset;

        if (window.innerWidth < 834) {
            offset = 100;
        } else if (window.innerWidth < 1124) {
            offset = 165;
        } else {
            offset = 50;
        }

        const position =
            targetReadMore.value.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({
            top: position + offset,
            behavior: 'smooth',
        });
    }
};
</script>

<template>
    <section class="welcome-card">
        <h2>Välkommen till Pilgiftsgrodornas fantastiska paradis!</h2>
        <p>Här kan du upptäcka den färgsprakande världen av pilgiftsgrodor!</p>
        <p>Utforska, spela och fascineras av naturens små mästare!</p>

        <div class="welcome-frogs">
            <img
                src="../assets/figma_components/frog-red.avif"
                class="red-frog"
                alt="Liten bild på en groda"
            /><img
                src="../assets/figma_components/frog-yellow-blue.avif"
                class="blueyellow-frog"
                alt="Liten bild på en groda"
            />
        </div>
        <div class="read-more-btn">
            <WoodButton label="Läs mer" @click="readMore" />
            <div ref="targetReadMore" />
        </div>
    </section>
</template>

<style lang="scss" scoped>
.welcome-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 300px;
    margin: 35px 0rem 70px 0rem;
    padding: 1rem;
    position: relative;

    h2 {
        margin: 0.5rem 0px;
    }

    button {
        width: 80px;
    }
}

@media (min-width: 834px) {
    .welcome-card {
        width: 100%;
        padding: 2rem 3rem;
        margin-top: 70px;

        h2 {
            margin-bottom: 1.5rem;
            width: 450px;
        }

        p {
            width: 500px;
            margin-bottom: 1rem;
        }

        button {
            width: 170px;
            height: 80px;
            margin: 2rem 0rem 3rem 0rem;
        }
    }
}

@media (min-width: 1280px) {
    .welcome-card {
        width: 1124px;
        padding: 2.5rem 1rem;
        margin-bottom: 90px;

        h2 {
            width: 700px;
        }
        p {
            width: 700px;
        }

        button {
            margin: 2rem 0rem;
        }
    }
}
</style>
