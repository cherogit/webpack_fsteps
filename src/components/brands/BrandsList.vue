<template>
    <div class="brands-list">
        <div class="container">
            <template v-for="item in list">
                <brand-item :item="item"></brand-item>
            </template>
            <svg-sprite :icon="'chevron'"></svg-sprite>
            <svg-sprite :icon="'close'"></svg-sprite>
        </div>
    </div>
</template>
<script>
    import SvgSprite from "../../helper/SvgSprite.vue"


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
            SvgSprite
        },
        watch: {
            
        },
        computed: {

        },
        methods: {

        },
        mounted() {

        }
    }
</script>