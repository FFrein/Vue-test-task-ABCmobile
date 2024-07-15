<template>
    <div class="Wrap">
        <div class="TestPage">
            <Header></Header>
            <div class="questionnaire" v-if="loadingData">
                <div class="Progress">
                    <ProgressBar
                        :totalQuestions="questions.length"
                        :currentQuestionIndex="currentQuestionIndex"
                    ></ProgressBar>
                </div>

                <div v-if="currentQuestionIndex < questions.length">
                    <component 
                        :is="questionComponent" 
                        :key="currentQuestionIndex" 
                        :question="currentQuestion" 
                        @answer="handleAnswer"
                    ></component>

                    <div class="ButtonMenu">
                        <button 
                            v-if="currentQuestionIndex < questions.length - 1" 
                            @click="nextQuestion"
                            class="ButtonNext"
                            :disabled="!isAnswerSelected()"
                        >
                            Далее
                        </button>

                        <button 
                            class="ButtonFinish"
                            v-else 
                            @click="submitQuestionnaire"
                            :disabled="!isAnswerSelected()"
                        >
                            Далее
                        </button>
                    </div>
                </div>

                <div v-if="currentQuestionIndex == questions.length">
                    <h2 class="TexrLoad">Обработка результатов</h2>
                    <Loading/>
                    <p>
                        Определение стиля мышления
                        ..........................
                        ..........................
                        ..........................
                        ..........................
                    </p>
                </div>
            </div>

            <div class="final" v-else>
                <FinalPage/>
            </div>
        </div>
    </div>
</template>

<script>
import TextQuestion from './../components/TextQuestion.vue';
import ImageQuestion from './../components/ImageQuestion.vue';
import TextWithImagesQuestion from './../components/TextWithImagesQuestion.vue';
import ImageWithImagesQuestion from './../components/ImageWithImagesQuestion.vue';
import ProgressBar from './../components/PrograssBar.vue';
import Header from './../components/Header.vue';
import Loading from '@/components/Loading.vue';
import FinalPage from "./FinalPage.vue"

export default {
    data() {
        return {
            questions: [
                {
                    type: 'text',
                    text: 'Ваш пол',
                    options: ['Мужчина', 'Женщина']
                },
                {
                    type: 'text',
                    text: 'Укажите ваш возраст',
                    options: ['До 10', 'От 18 до 28', 'От 29 до 35', 'От 36']
                },
                {
                    type: 'text',
                    text: 'Выберите лишнее',
                    options: ['Дом','Шалаш','Бунгало','Скамейка','Хижина']
                },
                {
                    type: 'text',
                    text: 'Продолжите числовой ряд 18  20  24  32',
                    options: ['62','48','74','57','60','77']
                },
                {
                    type: 'textWithImages',
                    text: 'Выберите цвет, который сейчас наиболее Вам приятен:',
                    images: [
                        { id: 1, url: './../public/questions/color1.png' },
                        { id: 2, url: './../public/questions/color2.png' },
                        { id: 3, url: './../public/questions/color3.png' },
                        { id: 4, url: './../public/questions/color4.png' },
                        { id: 5, url: './../public/questions/color5.png' },
                        { id: 6, url: './../public/questions/color6.png' },
                        { id: 7, url: './../public/questions/color7.png' },
                        { id: 8, url: './../public/questions/color8.png' },
                        { id: 9, url: './../public/questions/color9.png' },
                    ]
                },
                {
                    type: 'image',
                    text: 'Какое определение, по-Вашему, больше подходит к этому геометрическому изображению: ',
                    imageUrl: './../public/questions/prisma.png',
                    options: ['оно остроконечное', 'оно устойчиво', 'оно-находится в состоянии равновесия']
                },
                {
                    type: 'imageWithImages',
                    text: 'Вставьте подходящее число',
                    mainImage: './../public/questions/Star.png',
                    options: [
                        './../public/questions/Star1.png', './../public/questions/Star2.png', './../public/questions/Star3.png',
                        './../public/questions/Star4.png', './../public/questions/Star5.png', './../public/questions/Star6.png',
                    ]
                }
            ],
            currentQuestionIndex: 0,
            answers: [],
            loading: true
        };
    },
    computed: {
        currentQuestion() {
            return this.questions[this.currentQuestionIndex];
        },
        questionComponent() {
            switch (this.currentQuestion.type) {
                case 'text':
                    return 'TextQuestion';
                case 'image':
                    return 'ImageQuestion';
                case 'textWithImages':
                    return 'TextWithImagesQuestion';
                case 'imageWithImages':
                    return 'ImageWithImagesQuestion';
                default:
                    return 'TextQuestion'; // По умолчанию используется текстовый вопрос
            }
        },
        loadingData() {
            return this.loading;
        }
    },
    methods: {
        handleAnswer(answer) {
            // Reset the answer for the current question
            this.answers[this.currentQuestionIndex] = answer;
        },
        nextQuestion() {
            if (this.isAnswerSelected()) {
                this.currentQuestionIndex++;
            } else {
                alert('Выберите ответ на текущий вопрос.');
            }
        },
        submitQuestionnaire() {
            this.currentQuestionIndex++;
            // Обработка отправки ответов, например, сохранение на сервере
            console.log('Answers:', this.answers);
            // Здесь можно добавить логику для отправки ответов на сервер или их обработки
            setTimeout(() => {
                this.loading = false;
            }, 3000);
        },
        isAnswerSelected() {
            // Проверка, выбран ли ответ на текущий вопрос
            return this.answers[this.currentQuestionIndex] !== undefined;
        }
    },
    components: {
        TextQuestion,
        ImageQuestion,
        TextWithImagesQuestion,
        ImageWithImagesQuestion,
        ProgressBar,
        Header,
        Loading,
        FinalPage
    }
};
</script>

<style scoped>
    .Wrap {
        display: block;
        background-image: url("rain_bk2.png");
        background-color: #0E0F13;
        min-height: 600px;
        height: 100vh;
    }
    .TestPage {
        margin: auto;
        position: relative;
    }
    .questionnaire {
        margin: 0 auto;
        text-align: center;
        color: #FFFFFF;
        height: 100vh;
        min-height: 500px;
    }
    .Progress {
        padding-top: 70px;
    }
    .ButtonMenu {
        position: absolute;
        bottom: 20px; /* Расстояние от нижней части страницы */
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .ButtonNext,
    .ButtonFinish {
        width: 189px;
        height: 41px;
        border-radius: 20px;
        opacity: 1;
        background-color: #FFFFFF;
        font-family: "Merriweather", serif;
        font-size: 14px;
        line-height: 17.6px;
        letter-spacing: 0.1em;
        text-align: center;
        margin: 0 auto;
    }
    .ButtonNext:active,
    .ButtonFinish:active {
        background-color: #FFC700;
    }
    .final {
        margin: 0 auto;
        text-align: center;
        background-image: url("rain_bk2.png");
        min-height: 100vh;
        color: #FFFFFF;
    }
    .ButtonNext {
        width: 189px;
        height: 41px;
        border-radius: 20px;
        opacity: 0px;
        margin: 62px 0 0 0;
        font-family: "Merriweather", serif;
        font-size: 14px;
        line-height: 17.6px;
        letter-spacing: 0.1em;
        text-align: center;
    }
    .ButtonFinish {
        width: 189px;
        height: 41px;
        border-radius: 20px;
        opacity: 0px;
        margin: 62px 0 0 0;
        background-color: #FFC700;
        font-family: "Merriweather", serif;
        font-size: 14px;
        line-height: 17.6px;
        letter-spacing: 0.1em;
        text-align: center;
    }
    .TexrLoad {
        font-family: "PT Serif", serif;
        font-size: 23px;
        line-height: 30.47px;
        letter-spacing: 0.05em;
        text-align: center;
        color: #FFFFFF;
        width: 237px;
        height: 60px;
        margin: auto;
    }
    
    @media (min-width: 376px) {
        .questionnaire {
            font-size: 24px;
        }
    }
</style>
