<template>
    <div class="brands-list">
        <template v-for="item in list">
            <product-item :item="item"></product-item>
        </template>
    </div>
</template>
<script>
    import ProductItem from './ProductItem.vue';

    export default {
        name: 'ProductsList',
        data() {
            return {
                list: this.products.items
            }
        },
        props: {
            products: [Object, Array],
        },
        components: {
            ProductItem,
        },
        watch: {
            
        },
        computed: {

        },
        methods: {

        }
    }
</script>