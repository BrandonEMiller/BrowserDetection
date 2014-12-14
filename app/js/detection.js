function detectBrowser() {
  var ua = navigator.userAgent;
  console.log(ua);
  if(ua.indexOf('Maxthon')!= -1){
    var position = ua.indexOf("Maxthon");
    var version = ua.slice(position + 8, position + 13);
    return "Maxthon " + version;
  }

  if(ua.indexOf('Chrome')!= -1){
    var position = ua.indexOf("Chrome");
    var version = ua.slice(position + 7, position + 11);
    return "Chrome " + version;
  }
  if(ua.indexOf('Safari')!= -1){
    var position = ua.indexOf("Version");
    var version = ua.slice(position + 8, position + 13);
    return "Safari " + version;
  }
  if(ua.indexOf('PaleMoon')!= -1){
    var position = ua.indexOf("PaleMoon");
    var version = ua.slice(position + 9, position + 4);
    return "Palemoon " + version;
  }
  if(ua.indexOf('Firefox')!= -1){
    var position = ua.indexOf("rv:");
    var version = ua.slice(position + 3, position + 7);
    return "Firefox " + version;
  }
  if(ua.indexOf("Trident") != -1){
    var position = ua.indexOf("rv:");
    var version = ua.slice(position + 3, position + 7);
    return "Internet Explorer " + version;
  }
}

function detectOS(){
  var ua = navigator.userAgent;
  if(ua.indexOf('Windows') != -1) {
    return windowsOS(ua);
  }
}

function windowsOS(ua){
  if(ua.indexOf("Windows NT") != -1) {
    var position = ua.indexOf("Windows");
    var versionNumber = ua.slice(position + 11, position + 14);
    var NTNUMBERS = ['6.3', '6.2', '6.1'];
    var OSNUMBERS = ['8.1', '8.0', '7'];
    var windowsVersion = 0;
    for(var i=0; i < 1; i++) {
      if(versionNumber = NTNUMBERS[i]){
        windowsVersion = OSNUMBERS[i];
      }
    }
    return "Windows " + windowsVersion;
  }
}

function detectScreenWidth() {
  return screen.width;
}

function detectScreenHeight() {
  return screen.height;
}

function detectUserLanguage() {
  return navigator.language;S
}
