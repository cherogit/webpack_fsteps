<template>
    <div class="">
        <template v-for="item in list">
            <reviews-my-item :item="item"></reviews-my-item>
        </template>
    </div>
</template>
<script>
    import ReviewsMyItem from './ReviewsMyItem.vue';

    export default {
        name: 'ReviewsMyList',
        data() {
            return {
                list: this.reviews
            }
        },
        props: {
            reviews: [Object, Array],
        },
        components: {
            ReviewsMyItem,
        },
        watch: {
            
        },
        computed: {

        },
        methods: {

        }
    }
</script>