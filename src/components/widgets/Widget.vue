<template>
    <div>
        <template v-if="isHtml">
            <div v-html="html"></div>
        </template>
        <template v-else-if="isVue">
            <component
                v-bind:is="componentName"
                :data="componentData"
                ></component>
        </template>
    </div>
</template>
<script>


    export default {
        name: 'Widget',
        data() {
            return {

            }
        },
        computed: {
            isHtml() {
                return (this.data.type == 'html');
            },
            html() {
                if (this.isHtml) {
                    return this.data.data;
                }
                return '';
            },
            isVue() {
                return (this.data.type == 'vue');
            },
            componentName() {
                if (this.isVue) {
                    return this.data.componentName;
                }
                return null;
            },
            componentData() {
                if (this.isVue) {
                    return this.data.data;
                }
                return null;
            }
        },
        props: {
            data: [Object, Array],
        },
        components: {

        },
        created() {

        },
        methods: {

        }
    }
</script>