<template>
    <div class="Wrap__FP">
        <div class="FinalPage">
            <h1>
                Ваш результат рассчитан: 
            </h1>
            <p>
                вы относитесь к 3% респондентов, 
                чей уровень интеллекта более чем на 
                15 пунктов отличается от среднего в 
                большую или меньшую сторону! 
            </p>
            <h1>
                Скорее получите свой результат!
            </h1>
            <div class="TextBlock">
                <p>
                В целях защиты персональных 
                данных результат теста, их 
                подробная интерпретация и 
                рекомендации доступны в виде 
                голосового сообщения по звонку с 
                вашего мобильного телефона
                </p>
            </div>
            <div class="TimerBox">
                <p>
                    Звоните скорее, запись доступна всего 
                </p>
                <p>
                    <strong class="Timer">10:00</strong> МИНУТ
                </p>
            </div>
            <div>
                <button class="RedButton" @click="fetchData">
                    <img src="/phone.png">
                    <p>позвонить и прослушать результат </p>
                </button>
            </div>
            <footer class="footer">
                <p>
                    TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN FOLOSIREA LUI DECLARATI CA AVETI 18 ANI IMPLINITI, 
                </p>
            </footer>
        </div>

        <div v-if="data" class="modal">
            <div class="modal-content">
                <span class="close" @click="closeModal">&times;</span>
                <p>Name: {{ data.name }}</p>
                <p>Birth year: {{ data.birth_year }}</p>
                <p>Gender: {{ data.gender }}</p>
                <p>Height: {{ data.height }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: null
        };
    },
    methods: {
        fetchData() {
            const xhr = new XMLHttpRequest();
            xhr.open("GET", "https://swapi.dev/api/people/1/?format=json", true);
            xhr.onload = () => {
                if (xhr.status === 200) {
                    this.data = JSON.parse(xhr.responseText);
                } else {
                    console.error(`Error: ${xhr.status}`);
                }
            };
            xhr.send();
        },
        closeModal() {
            this.data = null;
        }
    }
};
</script>

<style scoped>
.Wrap__FP {
    height: 100vh;
    min-height: 600px;
}
.FinalPage {
    background-image: url("/rain_bk2.png");
}

.FinalPage h1:nth-child(1) {
    font-family: "PT Serif", serif;
    font-size: 15px;
    line-height: 16px;
    letter-spacing: 0.1em;
    text-align: center;
    padding-top: 80px;
}

.FinalPage h1:nth-child(3) {
    font-family: "PT Serif", serif;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.1em;
    text-align: center;
    color: #3BDE7C;
    width: 268px;
    margin: auto;
    margin-top: 22px;
}

.TextBlock {
    display: inline-block;
    background-color: #1C2741;
    border-radius: 10px;
    padding: 15px;
    margin: auto;
    margin-top: 12px;
}

.TimerBox p {
    color: #3BDE7C;
}

.FinalPage p {
    font-family: "PT Serif", serif;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    width: 268px;
    margin: 13px auto 0 auto;
}

.RedButton {
    background-color: #EB1B00;
    color: #FFFFFF;
    width: 290px;
    height: 92px;
    border-radius: 10px;
    display: flex;
    align-items: center; 
    justify-content: center;
    margin: auto;
    margin-top: 6px;
    cursor: pointer;
}

.RedButton img {
    margin: 15px;
}

.RedButton p {
    margin: 15px 15px 15px 15px;
    text-align: left;
    font-family: "Roboto", serif;
    font-size: 15px;
    line-height: 17.58px;
    letter-spacing: 0.05em;
    text-align: left;
}

.footer {
    position: absolute;
    bottom: 10px;
    width: 100%;
}

.footer p {
    font-family: "Roboto";
    font-size: 7px;
    font-weight: 400;
    line-height: 9px;
    letter-spacing: 3px;
    text-align: center;
    opacity: 50%;
}

.modal {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    max-width: 600px;
    color: black;
}

.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}
</style>
