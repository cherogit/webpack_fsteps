<template>
    <div class="container">
        <template v-if="isError">
            <div class="notfound">
                <div class="notfound__title">
                    <h1>Ошибка 404</h1>
                </div>
                <div class="notfound__subtitle">Страница не найдена</div>
                <div class="notfound__text">
                    <p>
                        Указанный вами адрес не существует. <br>Пожалуйста, воспользуйтесь поиском или перейдите на
                        главную страницу сайта.</p>
                </div>
            </div>
        </template>
        <template v-else-if="data">
            <template v-if="hasWidgets">
                <template v-for="widget in widgets">
                    <widget :content="content" :menu="menu" :data="widget"></widget>
                </template>
            </template>
        </template>
    </div>
</template>
<script>
    import Widget from './../widgets/Widget.vue';

    export default {
        name: 'ContentPage',
        data() {
            return {
            }
        },
        computed: {
            widgets() {
                if (this.data.widgets && this.data.widgets.length > 0) {
                    return this.data.widgets;
                }
                return [];
            },
            hasWidgets() {
                return (this.widgets.length > 0);
            },
            isError() {
                return this.$root.stordasde.state.error.status;
            },
        },
        props: {
            data: [Object, Array],
        },
        components: {
            Widget,
        },
        created() {

        },
        methods: {}
    }
</script>