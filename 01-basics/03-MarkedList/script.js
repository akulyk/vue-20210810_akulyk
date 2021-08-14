import {createApp} from './vendor/vue.esm-browser.js';
import {debounce} from "./vendor/utils.js";
// From https://jsonplaceholder.typicode.com/comments
const emails = [
  'Eliseo@gardner.biz',
  'Jayne_Kuhic@sydney.com',
  'Nikita@garfield.biz',
  'Lew@alysha.tv',
  'Hayden@althea.biz',
  'Presley.Mueller@myrl.com',
  'Dallas@ole.me',
  'Mallory_Kunze@marie.org',
  'Meghan_Littel@rene.us',
  'Carmen_Keeling@caroline.name',
  'Veronica_Goodwin@timmothy.net',
  'Oswald.Vandervort@leanne.org',
  'Kariane@jadyn.tv',
  'Nathan@solon.io',
  'Maynard.Hodkiewicz@roberta.com',
  'Christine@ayana.info',
  'Preston_Hudson@blaise.tv',
  'Vincenza_Klocko@albertha.name',
  'Madelynn.Gorczany@darion.biz',
  'Mariana_Orn@preston.org',
  'Noemie@marques.me',
  'Khalil@emile.co.uk',
  'Sophia@arianna.co.uk',
  'Jeffery@juwan.us',
  'Isaias_Kuhic@jarrett.net',
];

const app = createApp({
  data() {
    return {
      emails,
      term: null,
    };
  },
  computed: {
    list() {
      return this.emails.map((email) => ({
        value: email,
        marked: this.term ? email.toLowerCase().search(this.term) !== -1 : false,
      }));
    },
  },
  methods: {
    debouncedSearch(e, delay = 500) {
      const search = debounce(this.handleInput, delay);
      return search(e);
    },

    handleInput(e) {
      this.term = e ? e.target.value.toLowerCase() : null;
    },
  },
});

app.mount('#app');
