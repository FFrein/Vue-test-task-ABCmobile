<template>
    <div class="Wrap__BT">
        <div class="BlockTwo">
            <img class="QuoteOne" src='/kav.png'>
            <p>
                Профессиональный IQ-тест позволяет не только определить коэффициент вашего интеллекта, но и выработать список рекомендаций для повышения этого показателя. 
            </p>
            <div class="WrapQuoteTwo">
                <img class="QuoteTwo" src='/kav.png'>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .Wrap__BT{
        background-image: url("block2.png");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat; 
    }
    .BlockTwo{
        max-width: 500px;
        margin: auto;
    }
    .BlockTwo p{
            margin: auto;
            width: 248px;

            font-family: "Yeseva One", serif;
            font-size: 18px;
            line-height: 23px;
            letter-spacing: 0.05em;
            text-align: center;
            color: #FFFFFF;
    }
    .QuoteTwo{
        justify-self: end;
        padding: 0 32.65px 32.65px 0;
    }
    .WrapQuoteTwo{
        display: grid;
        grid-template-columns: auto; /* Один столбец */
    }
    .QuoteOne{
        margin: 43.3px 0 17.35px 24.35px;
    }

</style>
