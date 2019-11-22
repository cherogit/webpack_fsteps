<template>
    <div class="brand-list__item">
        <a class="" :href="item.url">{{ item.name }}</a>
    </div>
</template>
<script>

    export default {
        name: 'NewsItem',

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