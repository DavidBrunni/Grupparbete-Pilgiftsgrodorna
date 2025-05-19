<script setup>
import WoodButton from '../components/WoodButton.vue';
</script>

<template>
    <main>
        <div class="infogame-container">
            <section class="info-game-card">
                <h2>Hitta pilgiftsgrodan!</h2>
                <p>
                    Som du fått lära dig så tycker pilgiftsgrodan om att
                    utforska. Någonstans i djungeln är det en som är på
                    upptäcktsfärd. Kan du hitta den?
                </p>
                <p>Dra med musen över djungeln för att leta efter grodan!</p>
                <img
                    src="../assets/figma_components/frog-blue.avif"
                    class="blue-frog"
                    alt="Liten bild på en groda"
                />

                <div class="start-game-btn">
                    <WoodButton
                        class="button"
                        label="Starta spelet"
                        to="/game"
                    />
                </div>
            </section>
        </div>
    </main>
</template>

<style lang="scss" scoped>
.infogame-container {
    display: flex;
    justify-content: center;
    align-items: center;

    .info-game-card {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 284px;
        margin: 35px 0rem 70px 0rem;
        padding: 1rem;
        position: relative;

        h2 {
            margin-top: 1.5rem;
            margin-bottom: 2.5rem;
        }

        p {
            margin-bottom: 2rem;
        }
    }

    .start-game-btn {
        background: url(../assets/figma_components/wood-sign-big.avif) no-repeat
            center / cover;
        background-size: contain;
        width: 140px;
        height: 55px;

        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 5px;

        .button {
            background: none;
        }
    }
}

@media (min-width: 834px) {
    .infogame-container {
        .info-game-card {
            width: 445px;
            padding: 2rem;
            margin-top: 70px;

            p {
                margin-bottom: 3rem;
            }
        }

        .start-game-btn {
            width: 170px;
            height: 80px;
        }
    }
}

@media (min-width: 1280px) {
    .infogame-container {
        .info-game-card {
            width: 825px;

            h2 {
                font-size: $h2-fs-desktop;
            }
        }
    }
}
</style>
