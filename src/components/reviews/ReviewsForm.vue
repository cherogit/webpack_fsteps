<template>
    <div v-if="form">
        <form :id="form.name" class="form" v-if="!savingSuccessful" ref="form" @submit.prevent="submit">
            <p class="form__required-message">*Все поля обязательны к заполнению</p>
            <form-field v-for="(item, index) in form.fields" :item="item" :key="index"></form-field>
            <template v-if="form.submit">
                <input class="form__btn btn btn_submit" :type="form.submit.type" :name="form.submit.name" :value="form.submit.label" />
            </template>
        </form>
        <p class="form__successful-message" v-if="savingSuccessful" v-html="savingSuccessfulMessage"></p>
    </div>
</template>

<script>
    import FormField from '@general/form/Field.vue';

    export default {
        name: 'ReviewsForm',

        data() {
            return {
                form: this.formData,
                savingSuccessful: false,
                savingSuccessfulMessage: null
            }
        },
        computed: {

        },
        props: {
            formData: [Object, Array],
        },
        components: {
            FormField
        },
        methods: {
            submit() {
                this.formSubmit();
            },
            formSubmit() {
                let Form = this.$refs.form;
                let formData = new FormData(Form);
                this.$axios({
                    method: this.form.method,
                    url: this.form.action,
                    data: formData,
                })
                        .then(response => {
                            this._onRequestSuccess(response.data);
                        })
                        .catch(this._onRequestError())
            },
            _onRequestSuccess(response) {

                if (response.data.success) {
                    //Успех операции :)
                    this.savingSuccessfulMessage = response.data.text;
                    this.savingSuccessful = true;
                } else {
                    this.form = response.data;
                }

            },
            _onRequestError(errors) {
                // TODO
            },
        }
    }
</script>