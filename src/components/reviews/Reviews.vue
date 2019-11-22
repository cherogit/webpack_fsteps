<template>
    <div class="">
        <reviews-list :reviews="reviews"></reviews-list>
        <reviews-my-list :reviews="my_reviews"></reviews-my-list>
    </div>
</template>
<script>

    import ReviewsList from './ReviewsList.vue';
    import ReviewsMyList from './ReviewsMyList.vue';

    export default {
        name: 'Reviews',

        data() {
            return {
                reviews: this.data.reviews.items,
                my_reviews: this.data.my_reviews.items,
            }
        },
        computed: {

        },
        props: {
            data: [Object, Array],
        },
        components: {
            ReviewsList,
            ReviewsMyList,
        },
        created() {

        },
        methods: {

        }
    }
</script>