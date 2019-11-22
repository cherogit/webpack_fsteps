<template>
    <div class="brand-list__item">
        <div class="">{{ item.name }}</div>
    </div>
</template>
<script>

    export default {
        name: 'ProductItem',

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