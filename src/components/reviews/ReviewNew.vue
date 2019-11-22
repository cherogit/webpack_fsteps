<template>
    <div class="">
        <reviews-form :formData="this.data.form"></reviews-form>
    </div>
</template>
<script>

    import ReviewsForm from './ReviewsForm.vue';

    export default {
        name: 'ReviewsNew',

        data() {
            return {

            }
        },
        computed: {

        },
        props: {
            data: [Object, Array],
        },
        components: {
            ReviewsForm,
        },
        created() {

        },
        methods: {

        }
    }
</script>