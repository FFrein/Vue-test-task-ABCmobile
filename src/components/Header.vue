<template>
    <div>
        <div class="header">
            <img class="Menu" src="/menu.png" @click="toggleMenu">
            <img class="Brain" src="/brain.png">
            <p>тест на определение IQ</p>
        </div>
        <div class="burger-menu" v-if="menuOpen">
            <ul>
                <li @click="toggleMenu">
                    <a>
                        <router-link to="/">
                            Главная
                        </router-link>
                    </a>
                </li>
                <li @click="toggleMenu">
                    <a>
                        <router-link class="router__link" to="/#info">
                            Информация о тесте
                        </router-link>
                    </a>
                </li>
                <li @click="toggleMenu">
                    <a>
                        <router-link class="router__link" to="/test">
                            Пройти тест
                        </router-link>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            menuOpen: false 
        };
    },
    methods: {
        toggleMenu() {
            this.menuOpen = !this.menuOpen;  
        }
    }
};
</script>

<style>
.header {
    z-index: 10;
    display: flex;
    align-items: center;
    position: fixed;
    height: 46px;
    background-color: #181818;
    color: #FFC700;
    width: 100%;
}

.Menu {
    padding: 15px 0 15px 15px;
    cursor: pointer; 
}

.Brain {
    margin: 0 9px;
    width: 50px;
}

.header p {
    font-family: "Yeseva One", serif;
    font-size: 20px;
    line-height: 13.86px;
    letter-spacing: 0.05em;
    text-align: left;
}

.burger-menu {
    position: fixed;
    top: 45px;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #181818;
    color: #FFC700;
    z-index: 1000; 
}

.burger-menu ul {
    list-style-type: none;
    padding: 20px;
}

.burger-menu ul li {
    padding: 10px 0;
}

.burger-menu ul li a {
    color: #FFC700;
    text-decoration: none;
    font-size: 18px;
    font-family: "Yeseva One", serif;
    display: block;
    padding: 5px 10px;
}

.burger-menu ul li a:hover {
    background-color: #FFC700;
    color: #181818;
}
</style>
