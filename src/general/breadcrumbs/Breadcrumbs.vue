<template>
    <div class="breadcrumbs" itemscope itemtype="http://schema.org/BreadcrumbList">
        <template v-for="(item, index) in items">
            <breadcrumbs-item
                    :item="item"
                    :index="index"
                    :length="length"
            ></breadcrumbs-item>
        </template>
    </div>
</template>

<script>
    import BreadcrumbsItem from './BreadcrumbsItem.vue';

    export default {
        name: "Breadcrumbs",
        data() {
            return {}
        },
        props: {},
        computed: {
            items() {
                return this.$root.stordasde.state.breadcrumbs.items;
            },
            length() {
                return this.items.length;
            }
        },
        components: {
            BreadcrumbsItem,
        },
        mounted() {

        },
        methods: {}
    }
</script>