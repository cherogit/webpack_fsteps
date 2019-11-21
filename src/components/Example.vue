<template>
    <div class="wrapper" style="color: white;">
        <h1>
            {{ title }}
        </h1>
        hello world vue

        <img src="/assets/img/img1.png" alt="">
    </div>
</template>

<script>

// import example from '~/components/Example.vue' // alias на src, вместо бесконечных ../../../../components/Example.vue

export default {
    data() {
        return {
            title: null
        }
    },
    created() {
        this.title = this.$store.getters.getTitle
    }
}
</script>