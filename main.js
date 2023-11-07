const app = Vue.createApp({
  // options object - add optional properties to config app

  // data option
  // this then gets imported into html and mounted into dom
  // phone from html to js with double curly bracket for js expressions - valid js in html

  data: function () {
    return {
      product: "Boots",
      description: "Workwear for your everyday needs",
    };
  },
});
