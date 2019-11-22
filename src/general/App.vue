<template>
    <div id="app" class="layout">
        <header-block
                :layout="layout"
        ></header-block>

        <template v-if="!isWidget">
            <main class="main">
                {{ info }}
                <component :is="componentName" :data="data"></component>
            </main>
        </template>

        <footer-block
                :layout="layout"
        ></footer-block>
    </div>
</template>

<script>
    import Vue from 'vue'
    import HeaderBlock from '@general/Header.vue'
    import FooterBlock from '@general/Footer.vue'

    import BreadCrumbs from '@general/breadcrumbs/Breadcrumbs.vue';
    import PageTitle from '@general/pagetitle/PageTitle.vue';
    import ContentPage from '@components/content/ContentPage.vue';
    import BrandDetail from '@components/brands/BrandDetail.vue';
    import NewsList from '@components/news/NewsList.vue';
    import NewsDetail from '@components/news/NewsDetail.vue';
    import Reviews from '@components/reviews/Reviews.vue';
    import ReviewNew from '@components/reviews/ReviewNew.vue';
    import Diary from '@components/diary/Diary.vue';
    import DiaryElement from '@components/diary/DiaryElement.vue';
    import BrandsList from "@components/brands/BrandsList.vue"

    import {resize} from './../mixins/resize';
    Vue.mixin(resize);

    import {collect} from './../mixins/collect';
    Vue.mixin(collect);

    export default {
        name: "App",
        data() {
            return {
                data: null,
                componentName: null,
                layout: null,
                isWidget: false,
                info: null
            }
        },
        props: {},
        computed: {},
        components: {
            HeaderBlock,

            BreadCrumbs,
            PageTitle,
            ContentPage,
            BrandsList,
            BrandDetail,
            NewsList,
            NewsDetail,
            Reviews,
            ReviewNew,
            Diary,
            DiaryElement,

            FooterBlock,
        },
        mounted() {
            this.$axios
                .get('https://api.coindesk.com/v1/bpi/currentprice.json')
                .then(response => (this.info = response));
        },
        created() {
            if (this.isWidget) {
                this.isWidget = true
            }

            if (data.result) {
                this.data = data.result;
            }

            this.componentName = data.componentName;

            if (data.breadcrumbs) {
                this.$root.store.dispatch('updateBreadcrumbs', data.breadcrumbs);
            }

            if (data.pageTitle) {
                this.$root.store.dispatch('updatePageTitle', data.pageTitle);
            }

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