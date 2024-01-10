require(["vue", "jquery", './myModule', './clone'], function (vue, $, md, clone) {
  console.log("v", vue);
  console.log("jq", $);
  console.log('md', md);
  console.log(md.myFn());
  console.log(clone);

  window.vm = new vue({
    name: 'App',
    el: '#app',
    data: {
      text: '12344'
    }
  })
});
