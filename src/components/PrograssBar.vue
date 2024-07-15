<template>
    <div class="progress-bar">
        <div class="progress" :style="{ width: progressBarWidth }"></div>
    </div>
</template>

<script>
export default {
    props: {
    totalQuestions: {
        type: Number,
        required: true
    },
    currentQuestionIndex: {
        type: Number,
        required: true
    }
    },
    computed: {
        progressBarWidth() {
        return `${(100 / this.totalQuestions * this.currentQuestionIndex)}%`;
    }
    }
};
</script>

<style scoped>

@media (max-width: 375px) {
    .progress-bar {
        width: 90%;
        height: 10px;
        background-color: #ccc;

        margin: auto;
        margin-bottom: 20px;
        border-radius: 20px;
    }

    .progress {
        width: 78vw;
        height: 100%;
        background-color: #4caf50;
        transition: width 0.3s ease;
        border-radius: 20px;
    }
}

@media (min-width: 376px) {
    .progress-bar {
        width: 100%;
        height: 10px;
        background-color: #ccc;

        margin-bottom: 20px;
        border-radius: 20px;
    }

    .progress {
        width: 78vw;
        height: 100%;
        background-color: #4caf50;
        transition: width 0.3s ease;
        border-radius: 20px;
    }
}

</style>