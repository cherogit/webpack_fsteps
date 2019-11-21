<template>
    <div class="brands-list__item">
        <a class="" :href="item.url">{{ item.name }}</a>
    </div>
</template>
<script>

    export default {
        name: 'BrandItem',

        data() {
            return {

            }
        },
        computed: {

        },
        props: {
            item: [Object, Array],
        },
        components: {
            
        },
        created() {

        },
        methods: {

        }
    }
</script>