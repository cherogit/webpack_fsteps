<template>
    <div class="">
        <template v-for="item in list">
            <diary-item :item="item"></diary-item>
        </template>
    </div>
</template>
<script>
    import DiaryItem from './DiaryItem.vue';

    export default {
        name: 'DiaryList',
        data() {
            return {
                list: this.diaries.items
            }
        },
        props: {
            diaries: [Object, Array],
        },
        components: {
            DiaryItem,
        },
        watch: {
            
        },
        computed: {

        },
        methods: {

        }
    }
</script>