<template>
    <div class="brands-list">
        <diary-list :diaries="this.list"></diary-list>
    </div>
</template>
<script>
    import DiaryList from './DiaryList.vue';

    export default {
        name: 'Diary',
        data() {
            return {
                list: this.data.diaries
            }
        },
        props: {
            data: [Object, Array],
        },
        components: {
            DiaryList,
        },
        watch: {
            
        },
        computed: {

        },
        methods: {

        }
    }
</script>