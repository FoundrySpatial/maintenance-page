<template>
    <div
        class="construction-page"
    >
        <img src="/fs-logo.jpg" />
        <p>Foundry Spatial systems are currently undergoing a scheduled infrastructure update.</p>
        <p>During this brief window, our web applications will be temporarily unavailable.</p>
        <p>We expect all systems to be fully operational by {{ completionTime }}.</p>
        <p>
            If you have questions in the meantime, please contact us at
            <a
                :href="'mailto:support@foundryspatial.com'"
            >
                support@foundryspatial.com
            </a>
        </p>
    </div>
</template>

<script setup>

import { ref } from "vue";
import { env } from "./env.js";

const completionTime = ref(env.VITE_TIME_UPDATE_COMPLETE)

</script>

<style>
body,
html {
    font-size: 20px;
    font-family: 'Inter', 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif, 'Inter' !important;
}

.construction-page {
    display: flex;
    flex-direction: column;
    text-align: center;
}

img {
    align-self: center;
    margin-bottom: 2em;
    width: 350px;
}

@media screen and (max-width: 850px) {
        html {
            font-size: 16px;
        }
        img {
            width: 350px;
        }
    }
</style>
