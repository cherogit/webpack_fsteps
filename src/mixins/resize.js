export const resize = {
    data() {
        return {
            windowSize: {
                width: 0,
                height: 0,
            }
        }
    },
    created() {

    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize);
    },
    computed: {
        isDesktop() {
            if (this.windowSize.width >= 1200) {
                return true;
            }
            return false;
        },
        isTablet() {
            if (this.windowSize.width >= 768 && this.windowSize.width < 1200) {
                return true;
            }
            return false;
        },
        isMobile() {
            if (this.windowSize.width < 768) {
                return true;
            }
            return false;
        }
    },
    mounted() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    methods: {
        handleResize() {
            this.windowSize.width = window.innerWidth;
            this.windowSize.height = window.innerHeight;
        }
    },
}