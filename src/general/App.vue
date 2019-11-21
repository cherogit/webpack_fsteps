<template>
    <div id="app" class="layout">
        <header-block
                :layout="layout"
        ></header-block>

        <template v-if="!isWidget">
            <main class="main">
                main
            </main>
        </template>

        <footer-block
                :layout="layout"
        ></footer-block>
    </div>
</template>

<script>
    import HeaderBlock from "./Header.vue"
    import FooterBlock from "./Footer.vue"

    export default {
        name: "App",
        data() {
            return {
                data: null,
                componentName: null,
                layout: null,
                isWidget: false,
            }
        },
        props: {},
        computed: {},
        components: {
            HeaderBlock,
            FooterBlock,
        },
        mounted() {

        },
        created() {
            if (this.isWidget) {
                this.isWidget = true
            }

            if (data.layout) {
                this.layout = data.layout

                if (this.layout.isError) {
                    console.log('error')
                }
            }
        },
        methods: {}
    }
</script>