var fs=require('fs');

fs.open('gulpfile.js','w',function (err,fd) {
    if(err) throw err;
    var buf=new Buffer('//this is a gulp config file');
    fs.write(fd,buf,0,buf.length,0,function (err) {
       if(err) throw err;
        console.log('gulpfile.js was append');
    });
});

fs.mkdir('./src',function (err) {
   if(err) throw err;
    console.log('src folder was created');
    fs.mkdir('./src/css',function (err) {
        if(err) throw err;
        console.log('css folder was created');
    });
    fs.mkdir('./src/js',function (err) {
        if(err) throw err;
        console.log('js folder was created');
    })
});

fs.mkdir('./images',function (err) {
    if(err) throw err;
    console.log('images folder was created');
});


// fs.mkdir('./dist',function (err) {
//     if(err) throw err;
//     console.log('images folder was created');
//     fs.mkdir('./dist/css',function (err) {
//         if(err) throw err;
//         console.log('css folder was created');
//     });
//     fs.mkdir('./dist/js',function (err) {
//         if(err) throw err;
//         console.log('js folder was created');
//     })
// });