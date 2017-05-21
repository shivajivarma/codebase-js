<!doctype html>
<html lang="en">
<head>
 
<title>Full screen</title>
<meta http-equiv="Content-Type" content="text/html;charset=utf-8">  
</head>
<body>
 
<div id="content">
 
  <div id="cardPile"> </div>
  <div id="cardSlots"> </div>
 
  <div id="successMessage">
    <h2>You did it!</h2>
    <button onclick="launchFullScreen(document.documentElement)">Full Screen</button>
  </div>
 
</div>

<script>
    // Find the right method, call on correct element
function launchFullScreen(element) {
  if(element.requestFullScreen) {
    element.requestFullScreen();
  } else if(element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if(element.webkitRequestFullScreen) {
    element.webkitRequestFullScreen();
  }
}

// Launch fullscreen for browsers that support it!
launchFullScreen(document.documentElement); // the whole page
launchFullScreen(document.getElementById("successMessage")); // any individual element
</script>
 
</body>
</html>
