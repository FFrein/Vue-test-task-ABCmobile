<template>
    <router-link class="router__link" to="/test">
        <button class="ButtonStart">Пройти тест</button>
    </router-link>
</template>

<style scoped>
    .router__link {
        display: flex;
        justify-content: center;
        text-decoration: none; 
    }

    .ButtonStart {
        width: 189px;
        height: 41px;
        border: 0px;
        border-radius: 20px;
        background-color: #FFC700;
        font-family: "Merriweather", serif;
        text-transform: uppercase;
        font-size: 14px;
        line-height: 41px; /* Выравнивание высоты кнопки с высотой родительского элемента */
        letter-spacing: 0.1em;
        text-align: center;
        color: #0D0C11;
    }
</style>