[![npm version](https://badge.fury.io/js/img-bot.svg)](https://badge.fury.io/js/img-bot)

# img-bot
Client side image manipulation based on the excellent [load-image lib](https://github.com/blueimp/JavaScript-Load-Image)

# Features

- Crops an image to a square
- Properly orients the image (even those taken on iOS)
- Lets you set some options i.e size and image quality. If you need more options you should probably use the load-image lib instead.

# Usage

```
var imgBot = require('img-bot');

imgBot.process(file, {}, function(data){
  // data is a dataURL from canvas
});  
```

# Arguments

- A file from an input element
- Options. Pass empty to use defaults.
```
Options = {
  size: int // defaults to 500(px),
  quality: int [0-1] // defaults to 0.5
} 
```
- Callback