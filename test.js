var webdriverio = require('webdriverio');
var options = {
    desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: [
                   'headless',
                   'disable-gpu',
               ],
        }
    }
};
webdriverio
    .remote(options)
    .init()
    .url('http://www.devpools.kr')
    .getTitle().then(function(title) {
        console.log('Title was: ' + title);
    })
    .end();
