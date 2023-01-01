[resource](https://youtu.be/AjWBhjGhq-w)

#### 1. introduce
#### 2 & [3. basic](https://youtu.be/uvKss7OSsRA)
 - dùng cdn
 - cách tạo vue js app bằng createApp và mount
 - dùng data và template 
 - click event
 - conditional rendering. 
     chỉ có v-if làm nhiệm vụ này, còn v-show thì chỉ ẩn hoặc hiện chứ nó ko control chuyện render trên dom

 - mouse event
 - v-for
 - v-bind
 - dynamic class
 - computed

#### 4 [cli](https://youtu.be/jClufqXd4c0)
 - setup by cli
 - vue refs (reference): giúp component cha truy cập vào data của component con
   Khai báo tại nơi call component con: `<HelloWorld ref="hello"`
   Dùng tại js code của component cha: `this.$refs.hello.msg` ~ truy cập vào variable `msg` của component `HelloWorld`

#### 4 [cli](https://youtu.be/bBiSjvPG7kA)
 - Dùng template từ trang [boostrap](https://getbootstrap.com/docs/5.0/components/modal/)
 - Cho editor tự động format indent dựa vào file `.editorconfig` với config lấy từ trang https://editorconfig.org/
 - style `scoped`
 - reset css của page dựa vào code từ https://meyerweb.com/eric/tools/css/reset/
 - dùng `props` để khai báo thuộc tính. Khai báo các thuộc tính đặc biệt và limit value bằng `validator`

    ```javascript
      export default {
        props: {
          title: {
            type: String,
            required: true,
          },
          content: {
            type: String,
            default: "this is default content",
          },
          theme: {
            type: String,
            validator(value) {
              return ["example", "sale", "contact"].includes(value);
            },
            default: "example",
          },
        },
      };
    ```

 - dùng emit để call method hoặc variable từ component cha.
  tại component con
   ```javascript
    // tại conponent con
    emits: ["closeModal"],
    methods: {
      onCloseModal() {
        this.$emit("closeModal");
      },
    }

    // tại component cha
    <child-component @closeModal="parentMethod()"/>
   ```