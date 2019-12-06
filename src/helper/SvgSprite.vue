<template>
    <i>
        <svg class="icon">
            <use :xlink:href="iconHref"></use>
        </svg>
    </i>
</template>

<script>
    import './../assets/sprite/close.svg'
    import './../assets/sprite/chevron.svg'

    export default {
        name: 'SvgSprite',
        data() {
            return {
            }
        },
        components: {

        },
        props: {
            icon: String,
        },
        computed: {
            iconHref() {
                if (this.icon) {
                    return `${SITE_TEMPLATE_PATH}/dist/sprite/icons.svg#${this.icon}`;
                }
                return '';
            },
        },
        mounted() {

        },
    }

</script>