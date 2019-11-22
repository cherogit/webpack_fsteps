<template>
    <div class="page__title">
        <h1>{{ title }}</h1>
    </div>
</template>

<script>
    export default {
        name: 'PageTitle',
        data() {
            return {

            }
        },
        props: {

        },
        computed: {
            title() {
                return this.$root.stordasde.state.pagetitle.title;
            }
        },
        components: {

        },
        mounted() {

        },
        methods: {

        }
    }
</script>