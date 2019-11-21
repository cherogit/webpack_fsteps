<template>
    <div class="brand-list__item">
        <div class="brand-list__item-header">
            <span class="brand-list__item-author">{{ brandData.brand.item.name }}</span>
            <template>
                <products-list :products="brandData.products"></products-list>
            </template>
        </div>
    </div>
</template>
<script>

    import ProductsList from './../products/ProductsList.vue';

    export default {
        name: 'BrandDetail',

        data() {
            return {
                brandData: this.data
            }
        },
        computed: {
            
        },
        props: {
            data: [Object, Array],
        },
        components: {
            ProductsList
        },
        created() {

        },
        methods: {

        }
    }
</script>