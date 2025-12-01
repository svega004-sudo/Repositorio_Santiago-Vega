onEvent("button1", "click", function( ) {
  timedLoop(1000, function() {
    setProperty("screen1", "background-color", rgb(randomNumber(0, 255), randomNumber(0, 255), randomNumber(0, 255), randomNumber(0, 255)));
  });
});
onEvent("music", "click", function( ) {
  playSound("assets/Mi-Burrito-Sabanero--Juana--Mundo-Canticuentos.mp3", false);
});
