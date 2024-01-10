require(["vue", "jquery", './myModule'], function (vue, $, md) {
  console.log("v", vue);
  console.log("jq", $);
  console.log('md', md);
  console.log(md.myFn());

  window.vm = new vue({
    name: 'App',
    el: '#app',
    data: {
      text: '12344'
    }
  })
});
