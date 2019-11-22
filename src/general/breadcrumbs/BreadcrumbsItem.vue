<template>
    <div class="breadcrumbs__item" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
        <template v-if="isLast || !hasLink">
            <span itemscope itemtype="http://schema.org/Thing" itemprop="item">
                <span itemprop="name">{{ item.title }}</span>
            </span>
            <meta itemprop="position" :content="index + 1" />
        </template>
        <template v-else>
            <a itemscope itemtype="http://schema.org/Thing" itemprop="item" :href="item.link">
                <span itemprop="name">{{ item.title }}</span>
            </a>
            <meta itemprop="position" :content="index + 1" />
        </template>
    </div>
</template>

<script>
    export default {
        name: "BreadcrumbsItem",
        data() {
            return {}
        },
        props: {
            item: Object,
            index: [String, Number],
            length: [String, Number],
        },
        computed: {
            isLast() {
                let index = parseInt(this.index);
                let length = parseInt(this.length);
                if (index == length) {
                    return true;
                }
                return false;
            },
            hasLink() {
                if (this.item) {
                    if (this.item.link) {
                        return true;
                    }
                }
                return false;
            }
        },
        components: {},
        mounted() {

        },
        methods: {}
    }
</script>