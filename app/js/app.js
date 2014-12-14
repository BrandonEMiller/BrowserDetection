$(document).ready(function() {
  var browserName = detectBrowser();
  var operatingSystem = detectOS();
  var screenWidth = detectScreenWidth();
  var screenHeight = detectScreenHeight();
  var userLanguage = detectUserLanguage();
  $("#browser").html(browserName);
  $('#operatingSystem').html(operatingSystem);
  $('#dimensions').html(screenWidth + ' x ' + screenHeight);
  $('#language').html(userLanguage);
});
