<template>
    <div class="form__row" v-if="item">

        <template v-if="item.type == 'hidden'">
            <input :type="item.type" :value="item.value" :name="item.name">
        </template>
        <template v-else-if="item.name == 'g-recaptcha-response'">
            <!-- <button @click="resetRecaptcha"> Reset ReCAPTCHA </button> -->
            <vue-recaptcha
                ref="invisibleRecaptcha"
                :sitekey="sitekey"
                :loadRecaptchaScript="false"
                size="invisible"
                badge="hidden"
                @verify="onVerify"
                @expired="onCaptchaExpired"
                >
                <button>Click me</button>
            </vue-recaptcha>
        </template>

        <template v-else-if="item.type == 'radio'">
            <template v-if="item.inline">
                <div class="form__row-title" v-html="item.label"></div>
                <template v-for="option in item.options" >
                    <label class="form__label form__label_inline form__label_radio radio">
                        <input class="radio__check" :type="item.type" :value="option.value" :name="item.name" v-model="item.value">
                        <span class="radio__text" v-html="item.label"></span>
                    </label>
                </template>
            </template>

            <template v-else>
                <span v-html="item.label"></span>
                <template v-for="option in item.options" >
                    <label class="form__label form__label_radio radio">
                        <input class="radio__check" :type="item.type" :value="option.value" :name="item.name" v-model="item.value">
                        <span class="radio__text" v-html="item.label"></span>
                    </label>
                </template>
            </template>
        </template>
        <template v-else-if="item.type === 'checkbox'">
            <template v-if="item.inline">
                <label class="form__label form__label_inline form__label_checkbox checkbox">
                    <input class="checkbox__check" :type="item.type" value="1" :name="item.name" v-model="item.checked">
                    <span class="checkbox__text" v-html="item.label"></span>
                </label>
            </template>
            <template v-else>
                <label class="form__label form__label_checkbox checkbox">
                    <input class="checkbox__check" :type="item.type" value="1" :name="item.name" v-model="item.checked">
                    <span class="checkbox__text" v-html="item.label"></span>
                </label>
            </template>
        </template>

        <template v-else-if="item.type === 'text' || item.type === 'email'  || item.type === 'password'">
            <label class="form__label label" :class="[  
                   (item.isError && item.errors.isEmpty) ? 'label_error label_is-empty' :
                   (item.isError) ? 'label_error label_not-empty' : ''
                   ]">
                   <span v-html="item.label"></span>
                <input class="input" v-bind:type="item.type" v-bind:name="item.name" v-model="item.value" :placeholder="item.label">
                <div class="form__error" v-if="item.isError">
                    <span class="form__error-message" v-for="(errorMessage,errorType) in item.errors">
                        {{ errorMessage }}
                    </span>
                </div>
            </label>
        </template>

        <template v-else-if="item.type === 'textarea'">
            <label class="form__label label" :class="[
                   (item.isError && item.errors.isEmpty) ? 'label_error label_is-empty' :
                   (item.isError) ? 'label_error label_not-empty' : ''
                   ]"
                   >
                   <span v-html="item.label"></span>
                <textarea-autosize
                    class="textarea"
                    rows="4"
                    :type="item.type"
                    :ref="item.name"
                    v-bind:name="item.name"
                    v-model="item.value"
                    :min-height="30"
                    :placeholder="item.label"
                    ></textarea-autosize>

                <div class="form__error" v-if="item.isError">
                    <span class="form__error-message" v-for="(errorMessage,errorType) in item.errors">
                        {{ errorMessage }}
                    </span>
                </div>
            </label>
        </template>

        <template v-else-if="item.type === 'phone'">
            <label class="form__label label" :class="[  
                   (item.isError && item.errors.isEmpty) ? 'label_error label_is-empty' :
                   (item.isError) ? 'label_error label_not-empty' : ''
                   ]">
                   <span v-html="item.label"></span>
                <input class="input" type="tel" v-bind:name="item.name" v-model="item.value" :placeholder="item.label">
                <div class="form__error" v-if="item.isError">
                    <span class="form__error-message" v-for="(errorMessage,errorType) in item.errors">
                        {{ errorMessage }}
                    </span>
                </div>
            </label>
        </template>
        <!-- <template v-else-if="item.type === 'select'">
            <vsSelect
                :class="selectClass"
                v-model="item.value"
                :items="item.options"
                :name="item.name"
                :text="item.label" 
                :key="index"
                :params="params"
                @change="selectChange"
                >
            </vsSelect>
            <div v-if="item.isError">
                <div v-for="(errorMessage,errorType) in item.errors">
                    {{ errorMessage }}
                </div>
            </div>
        </template> -->
        <template v-else-if="item.type === 'submit'">
            <input class="form__btn btn btn_submit" :type="item.type" :name="item.name" :value="item.label" />
        </template>
    </div>
</template>
<script>

    export default {
        name: 'FormField',
        data() {
            return {
                sitekey: '6Lcerq8UAAAAAHHxsL--5koIItWIhocprP1FeTNj',
            }
        },
        computed: {
            isChecked() {
                if (this.item.checked) {
                    return true;
                }
                return false;
            },
            value() {
                return this.item.value;
            },
        },
        props: {
            item: [Object, Array],
        },
        components: {

        },
        mounted() {
        },
        watch: {
            isChecked: function (isChecked) {
                this.$emit('change', isChecked);
            },
        },
        created() {

        },
        methods: {
            onVerify(response) {
                console.log('Verify: ' + response)
                this.$refs.invisibleRecaptcha.execute();
            },
            onCaptchaExpired() {
                this.$refs.recaptcha.reset();
            },
            resetRecaptcha() {
                this.$refs.recaptcha.reset(); // Direct call reset method
            },
        }
    }
</script>