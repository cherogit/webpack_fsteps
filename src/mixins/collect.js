import collection from 'lodash/collection';

export const collect = {
    data() {
        return {
            formData: {}
        }
    },
    created() {

    },
    destroyed() {

    },
    computed: {},
    mounted() {

    },
    methods: {
        collectFields(fields) {
            this.formData = {};
            this._collect(fields);

            return this.formData;
        },
        _collect(fields) {
            let _this = this;
            collection.forEach(fields, function (item) {
                if (item.type === 'group') {
                    _this._collect(item.fields);
                } else if (typeof item.value === 'object') {
                    _this.formData[item.name] = item.value.value;
                } else if (item.type === 'checkbox') {
                    if (item.checked) {
                        _this.formData[item.name] = item.value;
                    } else {
                        if (_this.formData[item.name]) {
                            delete _this.formData[item.name];
                        }
                    }
                } else {
                    _this.formData[item.name] = item.value;
                }
            });

            this.formData = _this.formData;
        }
    },
};