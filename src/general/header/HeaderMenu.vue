<template>
    <nav class="main-nav__list">
        <template v-for="item in menu">
            <template v-if="item.selected">
                <span class="main-nav__list-link main-nav__list-link_selected">{{ item.text }}</span>
            </template>
            <template v-else>
                <a class="main-nav__list-link" :href="item.link">{{ item.text }}</a>
            </template>
        </template>
    </nav>
</template>

<script>

    export default {
        name: 'HeaderMenu',
        components: {

        },
        data() {
            return {

            }
        },
        props: {
            menu: Array,
        },
        computed: {

        },
        mounted() {

        },
        methods: {
            enter: function (el, done) {
                Velocity(el, 'fadeIn', {duration: 250}, {complete: done});
            },
            leave: function (el, done) {
                Velocity(el, 'fadeOut', {duration: 150}, {complete: done});
            },
        }
    }

</script>