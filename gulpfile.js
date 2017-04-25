//呼叫這些npm套件
var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import');

//預設任務
gulp.task(/*這是任務名稱*/'default',/*這是執行的任務*/function(){
   console.log('this is gulp default task.')
});
//html任務
gulp.task('html',function(){
 
 console.log('some html');

});
//css任務
gulp.task('styles',function(){
 
return gulp.src('./app/assets/styles/styles.css')//灌水的起點
       .pipe(postcss([cssImport,cssvars,nested,autoprefixer]))//過濾器
       .pipe(gulp.dest('./app/temp/styles'));//灌水的目標


});



//監控任務
gulp.task('watch',function(){
	watch('./app/index.html',function(){
    gulp.start('html');  
	});

  watch('./app/assets/styles/**/*.css',function(){
    gulp.start('styles');  
  });

});