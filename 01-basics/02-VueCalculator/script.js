import {createApp} from './vendor/vue.esm-browser.js';

const app = createApp({
    data() {
      return {
        a: 0,
        b: 0,
        action: null,
      };
    },
    computed: {
      sum() {
        return Number(this.a) + Number(this.b);
      },
      subtract() {
        return Number(this.a) - Number(this.b);
      },
      multiply() {
        return Number(this.a) * Number(this.b);
      },
      divide() {
        const b = Number(this.b);
        return b > 0 ? (Number(this.a) / b).toFixed(2) : 0;
      },
      result() {
        return this.action ? this[this.action] : 0;
      }
    },
  })
;

app.mount('#app');
