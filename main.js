
    const app = Vue.createApp({
        data() {
            return {
                message: 'this is data',
                firstName: 'Dong',
                lastName: 'Nguyen',
                isShowName: true,
                isShowHide: false
            }
        },
        methods: {
            onChangeName() {
                this.isShowName = !this.isShowName;
                this.isShowHide = !this.isShowHide;
            }
        },
    });
    app.mount("#app");
