var gulp = require('gulp'),
watch = require('gulp-watch');


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
 
 console.log('some scss or post css');

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