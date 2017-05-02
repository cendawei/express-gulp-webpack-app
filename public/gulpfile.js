/**
 * Created by cendawei
 * on 2017/4/11.
 */
'use strict';
var fs = require('fs');
var path = require('path');
var gulp = require('gulp');
var gutil = require('gulp-util');
var clean = require('gulp-clean');
var uglify = require('gulp-uglify');
var minifycss = require('gulp-minify-css');
var rev = require('gulp-rev');
var sass = require('gulp-sass');
var spritesmith = require('gulp.spritesmith');
var webpack = require("webpack");

var buildJs = function () {
    var webpackConfig = process.env.NODE_ENV === 'develop' ? require('./configs/webpack.dev.config') : require('./configs/webpack.product.config');
    webpack(webpackConfig, function (err, stats) {
        if (err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString());
    });
}

var rmdirSync = (function(){
    function iterator(url,dirs){
        var stat = fs.statSync(url);
        if(stat.isDirectory()){
            dirs.unshift(url);//收集目录
            inner(url,dirs);
        }else if(stat.isFile()){
            fs.unlinkSync(url);//直接删除文件
        }
    }
    function inner(path,dirs){
        var arr = fs.readdirSync(path);
        for(var i = 0, el ; el = arr[i++];){
            iterator(path+"/"+el,dirs);
        }
    }
    return function(dir,cb){
        cb = cb || function(){};
        var dirs = [];

        try{
            iterator(dir,dirs);
            for(var i = 0, el ; el = dirs[i++];){
                fs.rmdirSync(el);//一次性删除所有收集到的目录
            }
            cb()
        }catch(e){//如果文件或目录本来就不存在，fs.statSync会报错，不过我们还是当成没有异常发生
            e.code === "ENOENT" ? cb() : cb(e);
        }
    }
})();

gulp.task("clean", function () {
    rmdirSync("../statics/build/css",function(e){
    })
    /*gulp.src('statics/css', {read: false})
        .pipe(clean());*/
})

gulp.task("set-dev", ['copy-views'], function () {
    process.env.NODE_ENV = 'develop';
    gulp.src('build/js', {read: false})
        .pipe(clean());
    buildJs();
})

gulp.task("set-build", ['copy-views'], function () {
    process.env.NODE_ENV = 'product';
    rmdirSync("../statics/build/js",function(e){
    })
    buildJs();
})

gulp.task("webpack", ['copy-views'], function () {
    buildJs();
});


gulp.task('png', function () {
    var spritedirs = fs.readdirSync(path.resolve(__dirname + '/sprites/'));
    spritedirs.forEach(function (dir) {
        gulp.src('sprites/' + dir + '/*.png').pipe(spritesmith({
            imgName: dir + '.png',
            cssName: dir + '.css'
        }))
            .pipe(gulp.dest('images/' + dir + '/'));
    })
});

gulp.task('jpg', function () {
    var spritedirs = fs.readdirSync(path.resolve(__dirname + '/sprites/'));
    spritedirs.forEach(function (dir) {
        gulp.src('sprites/' + dir + '/*.jpg').pipe(spritesmith({
            imgName: dir + '.jpg',
            cssName: dir + '.css'
        }))
            .pipe(gulp.dest('images/' + dir + '/'));
    })
});

gulp.task('sass', function () {
    return gulp.src('./style/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        // .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./build/css/'))
        .pipe(rev())
        .pipe(rev.manifest())
        .pipe(gulp.dest('./build/css'));
});

gulp.task('watch',['set-dev', 'sass'], function () {
    gulp.watch('./style/sass/**/*.scss', ['sass']);
    gulp.watch('./js/**/*.js', ['webpack']);
    gulp.watch('../templates/**/*.html', ['copy-views', 'webpack']);
});


gulp.task('minifycss', ['clean', 'sass'], function () {
    gulp.src('build/css/**/*.css')      //压缩的文件
        .pipe(minifycss())   //执行压缩
        .pipe(rev())    //添加文件chunkhash
        .pipe(gulp.dest('../statics/build/css'))   //输出文件夹
        .pipe(rev.manifest())   //输出映射json文件
        .pipe(gulp.dest('../statics/build/css'));
});

gulp.task('minifyjs', ['clean'], function () {
    gulp.src('build/js/*.js')
    // .pipe(gulp.dest('js/financemin'))
    // .pipe(rename({suffix: '.min'}))   //rename压缩后的文件名
        .pipe(uglify())    //压缩
        .pipe(gulp.dest('statics/js'));  //输出
});

gulp.task('copy-views', function () {
    gulp.src('../templates/**/*')
        .pipe(gulp.dest('../views'))
})

gulp.task('copy-statics', function () {
    gulp.src('images/**/*')
        .pipe(gulp.dest('../statics/images'))
    gulp.src('libs/**/*')
        .pipe(gulp.dest('../statics/libs'))
    gulp.src('*.ico')
        .pipe(gulp.dest('../statics'))
})

gulp.task('dev', ['copy-views', 'set-dev', 'sass', 'png', 'watch']);

gulp.task('build', ['copy-views', 'copy-statics', 'set-build', 'clean', 'sass', 'minifycss'])