<template>
    <div class="Wrap">
        <div class="BlockOne">
            <h3>Пройдите точный и быстрый</h3>
            <h1>тест на определение IQ</h1>

            <img src="/brain.png">

            <div class="UnderImageBlock">
                <ButtonStartTest class ="ButtonTest"/>
                
                <p>
                    И получите рекомендации по развитию своего интеллекта 
                </p>

                <p>
                    И улучшению финансового благосостояния и личной жизни
                </p>

                <ButtonMoreDetailed class="ButtonMore"/>
            </div>
        </div>
    </div>
</template>

<script>
import ButtonStartTest from './ButtonStartTest.vue';
import ButtonMoreDetailed from './ButtonMoreDetailed.vue';

export default{
    components:{
        ButtonStartTest,
        ButtonMoreDetailed
    },
    data(){
        return{
            FirstTypeQuestions:[
                {question: "question1", answers:["1", "2", "3"]}
            ],
            SecondTypeQuestions:[
                {question: "question2", image:"src", answers:["1", "2", "3"]}
            ],
            ThirdTypeQuestions:[
                {question: "question3", answersImg:["1", "2", "3"]}
            ],
            FourthTypeQuestions:[
                {question: "question4", image:"src", answersImg:["1", "2", "3"]}
            ]
        }
    }
}
</script>

<style scoped>
    .Wrap{
        min-height: 700px;
        background-image: url("/rain_bk2.png");
        height:100vh;
    }
    .BlockOne {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        position: relative; /* Добавляем position: relative; чтобы потом использовать position: absolute; внутри */
    }
    .UnderImageBlock {
        position: absolute;
        bottom: 0; /* Прижимаем блок к нижнему краю */
        width: 100%;
        text-align: center;
        padding-bottom: 20px; /* Добавляем небольшой отступ снизу */
    }
    
    .BlockOne img{
        display: block;
        margin: auto;
        margin-top: 5%;
        max-width: 250px;
    }
    .BlockOne h3{
        font-family: "PT Serif", serif; /* Использование font-family вместо font */
        text-align: center;
        color: #FFFFFF;
        size: 18px;
        padding: 87px 0 0 0;
    }
    .BlockOne h1{
        margin: 20px 0 0 0;
        color:#FFC700;
        text-align: center;
        font-family: "Yeseva One", serif;
        font-size: 30px;
        text-transform: uppercase;
    }
    .BlockOne p{
        font-family: "PT Serif", serif;
        font-size: 15px;
        line-height: 19px;
        letter-spacing: 0.05em;
        text-align: center;
        color: #FFFFFF;
    }
    .BlockOne p:first-of-type{
        margin-top: 22px;
        color: #FFC700;
    }
    .ButtonMore{
        padding: 11px 0;
    }

@media (max-width: 375px) and (max-height: 667px) {
    .ButtonTest{
        margin-top: 5vh;
    }
}

</style>