<template>
    <div id="app" class="layout">
        <header-block
                :layout="layout"
        ></header-block>

        <template v-if="!isWidget">
            <main class="main">
                <component :is="componentName" :data="data"></component>
            </main>
        </template>

<!--        <vue-awesome-swiper></vue-awesome-swiper>-->
        <footer-block
                :layout="layout"
        ></footer-block>
    </div>
</template>

<script>
    import HeaderBlock from "./Header.vue"
    import FooterBlock from "@general/Footer.vue"
    import BrandsList from "@components/brands/BrandsList.vue"

    // import VueAwesomeSwiper from 'vue-awesome-swiper';
    // Vue.component('VueAwesomeSwiper', VueAwesomeSwiper.swiper);
    // Vue.component('VueAwesomeSwiperSlide', VueAwesomeSwiper.swiperSlide);

    export default {
        name: "App",
        data() {
            return {
                data: null,
                componentName: null,
                layout: null,
                isWidget: false,
            }
        },
        props: {},
        computed: {},
        components: {
            HeaderBlock,
            FooterBlock,

            BrandsList,
        },
        mounted() {

        },
        created() {
            if (this.isWidget) {
                this.isWidget = true
            }

            if (data.result) {
                this.data = data.result;
            }

            this.componentName = data.componentName;

            if (data.layout) {
                this.layout = data.layout

                if (this.layout.isError) {
                    console.log('error')
                }
            }
        },
        methods: {}
    }
</script>