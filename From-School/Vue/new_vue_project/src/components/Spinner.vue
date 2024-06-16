<template>
    <div class="stepper horizontal">
    <img src="../assets/up-arrow-outbox-svgrepo-com.svg" class="arrow top" @click="increment" alt="Increase" />
    <div class="box">
        <div class="numbers">{{ value }}</div>
    </div>
    <img src="../assets/down-arrow-svgrepo-com.svg" class="arrow bottom" @click="decrement" alt="Decrease" />
    </div>
</template>

<script>
export default {
    name: 'NumberStepper',
    props: {
    initialValue: {
        type: Number,
        default: 0
    },
    minValue: {
        type: Number,
        default: -Infinity
    },
    maxValue: {
        type: Number,
        default: Infinity
    }
        },
        data() {
        return {
            value: this.initialValue
        };
        },
    methods: {
    increment() {
        if (this.value < this.maxValue) {
            this.value++;
            this.$emit('input', this.value);
        }
    },
    decrement() {
        if (this.value > this.minValue) {
        this.value--;
        this.$emit('input', this.value);
        }
    }
    }
};
</script>

<style scoped>
.stepper {
    display: flex;
    align-items: center;
    justify-content: center;
}

.arrow {
    cursor: pointer;
    width: 40px;
    border: solid #000;
    padding: 5px;
    background-color: #e51b23;
}

.box {
    margin: 0 10px;
}

.numbers {
    font-size: 20px;
    text-align: center;
    width: 40px;
}
</style>