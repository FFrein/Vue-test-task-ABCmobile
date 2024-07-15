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

    .ButtonStart{
        width: 189px;
        height: 41px;
        border: 1px solid #FFFFFF; 
        border-radius: 20px; 
        background-color: transparent; 
        color: #FFFFFF; 
        padding: 10px 20px; 
        text-align: center; 
        text-decoration: none; 
        display: inline-block; 
        font-size: 16px; 
        cursor: pointer; 
    }
</style>