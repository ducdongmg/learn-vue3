
    const app = Vue.createApp({
        data() {
            return {
                message: 'this is data',
                firstName: 'Dong',
                lastName: 'Nguyen',
                isShowName: true,
                isShowHide: false,

                products: [
                    {name: 'san pham A', price: 123},
                    {name: 'san pham B', price: 321},
                    {name: 'san pham C', price: 456},
                ],
                className: 'product'
            }
        },
        methods: {
            onChangeName() {
                this.isShowName = !this.isShowName;
                this.isShowHide = !this.isShowHide;
            }
        },
        computed: {
            productComputed() {
                return this.products.filter(pro => pro.price > 200);
            }
        }

    });
    app.mount("#app");
