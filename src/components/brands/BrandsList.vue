<template>
    <div class="brands-list">
        <div class="container">
            asfds
            <template v-for="item in list">
                <brand-item :item="item"></brand-item>
            </template>
        </div>
    </div>
</template>
<script>
    import BrandItem from './BrandItem.vue';

    export default {
        name: 'BrandsList',
        data() {
            return {
                list: this.data.brands.items
            }
        },
        props: {
            data: [Object, Array],
        },
        components: {
            BrandItem,
        },
        watch: {
            
        },
        computed: {

        },
        methods: {

        },
        mounted() {
            this.test = sds
        }
    }
</script>