<template>
    <div class="">
        <template v-for="item in list">
            <reviews-item :item="item"></reviews-item>
        </template>
    </div>
</template>
<script>
    import ReviewsItem from './ReviewsItem.vue';

    export default {
        name: 'ReviewsList',
        data() {
            return {
                list: this.reviews
            }
        },
        props: {
            reviews: [Object, Array],
        },
        components: {
            ReviewsItem,
        },
        watch: {
            
        },
        computed: {

        },
        methods: {

        }
    }
</script>