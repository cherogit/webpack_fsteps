<template>
    <div class="brand-list__item">
        <div class="brand-list__item-header">
            <span class="brand-list__item-author">{{ newsData.news.name }}</span>
        </div>
    </div>
</template>
<script>

    export default {
        name: 'NewsDetail',

        data() {
            return {
                newsData: this.data
            }
        },
        computed: {
            
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