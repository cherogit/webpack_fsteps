<template>
    <div class="diary-list__item">
        <a class="" :href="item.detail_page_url">{{ item.name }}</a>
    </div>
</template>
<script>

    export default {
        name: 'DiaryItem',

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