<template>
    <header class="header">
        <div class="container">
            header
        </div>
        <header-menu :menu="menu"></header-menu>
    </header>
</template>

<script>
    import HeaderMenu from './header/HeaderMenu.vue';

    export default {
        name: "HeaderBlock",
        data() {
            return {}
        },
        props: {
            layout: [Object, Array],
            menu: Array,
        },
        computed: {},
        components: {
            HeaderMenu,
        },
        mounted() {

        },
        methods: {}
    }
</script>