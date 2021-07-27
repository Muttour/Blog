export default function (container) {
    return {
        mounted() {
            this.$refs[container].addEventListener("scroll", this.handleScroller);
            this.$bus.$on("setMainScroll", this.handleSetMainScroll);
        },
        beforeDestroy() {
            this.$bus.$emit("mainScroll");
            this.$refs[container].removeEventListener("scroll", this.handleScroller);
            this.$bus.$off("setMainScroll", this.handleSetMainScroll);
        },
        methods: {
            handleScroller() {
                // console.log('flag2')
                this.$bus.$emit("mainScroll", this.$refs[container]);
            },
            handleSetMainScroll(scrollTop) {
                this.$refs[container].scrollTop = scrollTop;
            },
        },
    }
}