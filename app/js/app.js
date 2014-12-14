$(document).ready(function() {
  var ua = navigator.userAgent;
  console.log(ua);

  var browserName = detectBrowser(ua);
  var operatingSystem = detectOS(ua);
  var screenWidth = detectScreenWidth();
  var screenHeight = detectScreenHeight();
  var userLanguage = detectUserLanguage();
  $("#browser").html(browserName);
  $('#operatingSystem').html(operatingSystem);
  $('#dimensions').html(screenWidth + ' x ' + screenHeight);
  $('#language').html(userLanguage);
});
