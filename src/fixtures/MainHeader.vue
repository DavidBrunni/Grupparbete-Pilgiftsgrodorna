<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <header>
        <img
            class="logo"
            src="../assets/figma_components/full-logo.svg"
            alt="Logga föreställande en blåsvart groda sittandes på en träplanka med texten Pilgiftsgrodan i samma färg som grodan på."
        />

        <nav>
            <div
                class="nav-bg"
                aria-label="Vit planka med trädetaljer på kanterna som utgör bakgrunden till navigationsknappen Hem"
            >
                <RouterLink class="nav-btn" to="/">Hem</RouterLink>
            </div>

            <div
                class="nav-bg"
                aria-label="Vit planka med trädetaljer på kanterna som utgör bakgrunden till navigationsknappen Spel"
            >
                <RouterLink class="nav-btn" to="/startGame">Spel</RouterLink>
            </div>

            <div
                class="nav-bg"
                aria-label="Vit planka med trädetaljer på kanterna som utgör bakgrunden till navigationsknappen Kontakt"
            >
                <RouterLink class="nav-btn" to="/contactView"
                    >Kontakt</RouterLink
                >
            </div>
        </nav>
    </header>
</template>

<style scoped lang="scss">
header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;

    .logo {
        display: inline-block;
        width: 288px;
        height: auto;
        margin-bottom: 15px;
    }

    nav {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;

        .nav-bg {
            background-image: url(../assets/figma_components/nav-button.avif);
            background-size: cover;
            background-position: center;
            width: 90px;
            height: 30px;

            display: flex;
            justify-content: center;
            align-items: center;
            padding-top: 5px;

            .nav-btn {
                font-family: $link-font;
                font-size: $link-fontsize;
                color: $link-color;
                text-decoration: none;
                cursor: pointer;

                &:hover {
                    color: $detail-color;
                }
            }
        }
    }
}

@media (min-width: 834px) {
    header {
        .logo {
            width: 500px;
            margin-bottom: 15px;
        }

        nav {
            gap: 15px;

            .nav-bg {
                width: 140px;
                height: 50px;

                .nav-btn {
                    font-size: $h3-fs-desktop;
                }
            }
        }
    }
}
</style>
