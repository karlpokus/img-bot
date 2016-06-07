var loadImage = require('./lib/load-image.all-2.6.1.min.js');

var imgBot = {
  process: function(file, o, cb) {
    // opts
    var opts = {
          maxWidth: (o && o.size) || 500,
          maxHeight: (o && o.size) || 500,
          crop: true
        },
        imageQuality = (o && o.quality) || 0.5;
    // parse
    imgBot.parseExif(file, function(orientation){
      // crop and resize
      imgBot.cropAndResize(file, opts, orientation, function(c){
        // get data from canvas
        var data = c.toDataURL("image/jpeg", imageQuality);
        // return
        cb(data);
      });
    });
  },
  cropAndResize: function(file, opts, orientation, cb) {
    // opts
    opts.orientation = orientation;
    // do
    loadImage(file, cb, opts);
  },
  parseExif: function(file, cb) {
    // get meta data
    loadImage.parseMetaData(
      file,
      function (data) {
        if (data && data.exif) {
          var orientation = data.exif.get('Orientation');
          cb(orientation);
        } else {
          cb(1);
        }      
      }
    );
  }
};

module.exports = imgBot;