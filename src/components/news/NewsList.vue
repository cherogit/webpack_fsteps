<template>
    <div class="news-list">
        <template v-for="item in list">
            <news-item :item="item"></news-item>
        </template>
    </div>
</template>
<script>
    import NewsItem from './NewsItem.vue';

    export default {
        name: 'NewsList',
        data() {
            return {
                list: this.data.news.items
            }
        },
        props: {
            data: [Object, Array],
        },
        components: {
            NewsItem,
        },
        watch: {

        },
        computed: {

        },
        methods: {

        }
    }
</script>