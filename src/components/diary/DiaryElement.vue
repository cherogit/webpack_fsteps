<template>
    <div class="">
<!--        <diary-list :diaries="this.list"></diary-list>-->
    </div>
</template>
<script>
//    import DiaryList from './DiaryList.vue';

    export default {
        name: 'DiaryElement',
        data() {
            return {
                element: this.data.diary
            }
        },
        props: {
            data: [Object, Array],
        },
        components: {
//            DiaryList,
        },
        watch: {
            
        },
        computed: {

        },
        methods: {

        }
    }
</script>