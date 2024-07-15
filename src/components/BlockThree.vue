<template>
    <div class="Wrap_BTr">
        <div class="BlockThree">
            <p>
                Также по результатам теста <strong>ВЫ ПОЛУЧИТЕ</strong> 
                подробные <strong>СОВЕТЫ</strong> по определению наиболее перспективной 
                <strong>ДЛЯ ВАШЕГО ТИПА интеллекта СФЕРЫ ДЕЯТЕЛЬНОСТИ</strong>, которая 
                принесет вам скорейший финансовый результат.
            </p>
            <div class="ImageBlock">
                <img src="/325-01.png">
            </div>
            <div class="ButtonTest">
                <ButtonStartTest />
            </div>
        </div>
    </div>
</template>


<script>

import ButtonStartTest from "./ButtonStartTest.vue"

export default{
    components:{
        ButtonStartTest
    }

}

</script>

<style scoped>
    .Wrap_BTr{
        max-width: 500px;
        margin: auto;
    }
    .BlockThree{
        background-color: #FFFFFF;
    }
    .BlockThree p{
        padding: 38px 11px;
        font-family: "PT Serif", serif;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.05em;
        text-align: left;
        color: #272727;
        max-width: 400px;
        margin: auto;
    }
    .ImageBlock{
        display: grid;
        grid-template-columns: auto; /* Один столбец */
    }
    .ImageBlock img{
        justify-self: center;
    }
    .ButtonTest button{
        display: block;
        margin: auto;
    }
    .ButtonTest {
        padding-bottom: 38px;
    }
</style>