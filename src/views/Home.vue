<template>
    <div class="Wrap">
        <div class="MainPage">
            <Header></Header>
            <BlockOne/>
            <BlockTwo id="info"/>
            <BlockThree/>
            <BlockFour/>
        </div>
    </div>
</template>

<script>
    import BlockOne from './../components/BlockOne.vue'
    import BlockTwo from './../components/BlockTwo.vue'
    import BlockThree from './../components/BlockThree.vue'
    import BlockFour from './../components/BlockFour.vue'
    import Header from './../components/Header.vue';

    export default{
        components:{
            BlockOne,
            BlockTwo,
            BlockThree,
            BlockFour,
            Header
        }
    }
</script>

<style>
    .Wrap{
        display: block;
        background-color: #0E0F13;
        height:100vh;
    }
    .MainPage {
        margin: 0 auto;
    }
</style>