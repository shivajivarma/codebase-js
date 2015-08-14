(function(){
  var max = -999;

  $("*").each(function() {
      var current = parseInt($(this).css("z-index"), 10);
      if(current && max < current) 
        max = current;
  });

  console.log(max);
})();
