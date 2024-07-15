<template>
    <div class="Wrap_BF">
        <div class="BlockFour">
        <p class="FirstText">
            Прохождение теста займет у вас 
            не более <i>12 минут</i>, а его <strong>результаты</strong> 
            вы сможете <i>использовать всю жизнь</i>. 
        </p>
        <div class="TextBlock">
            <p>
                Профессиональная интерпретация и 
                детально 
                <strong>проработанные рекомендации </strong>
                позволят вам качественно 
                <strong>
                    изменить все аспекты своей жизни
                </strong>: от 
                финансового до любовного.
            </p>
        </div> 
        <div class="ButtonDown">
            <ButtonStartTestV2/>
        </div>
        <p class="Copiryght">&copy;2019</p>
    </div>
    </div>
</template>

<script>
import ButtonStartTestV2 from "./ButtonStartTestV2.vue"

export default{
    components:{
        ButtonStartTestV2
    }
}
</script>

<style scoped>
    .Wrap_BF{
        background-image: url("/rain_bk2.png");
    }
    .BlockFour{
        max-width: 500px;
        margin: auto;
    }
    .FirstText{
        padding: 54px 47px 14px 14px;
        color: #FFFFFF;
        width: 262px;
    }
    .FirstText i{
        color: #FFC700;
    }
    .TextBlock{
        background-color: #F3F3F2CC;
        margin: 12px;
        border-radius: 20px;
        padding: 30px 15px;
    }
    .TextBlock p{
        font-family: "Merriweather", serif;
        font-size: 16px;
        line-height: 23px;
        letter-spacing: 0.05em;
        text-align: left;
    }
    .BlockFour button{
        display: block;
        margin: auto;
    }
    .ButtonDown{
        padding: 33px 0px 52px 0px;
    }
    .Copiryght{
        color: #FFFFFF;
        padding: 0 0 13px 0;

        font-family: "Merriweather", serif;
        font-size: 14px;
        line-height: 17.6px;
        letter-spacing: 0.1em;
        text-align: center;
    }
</style>