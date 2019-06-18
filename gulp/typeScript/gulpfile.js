const gulp = require('gulp')
const ts = require('gulp-typescript') //modulo para converter ts em js
const tsProject = ts.createProject('tsconfig.json') //usando arquivo de configuração 'tsconfig' para criar o projeto

//task para conversão de ts para js
gulp.task('default', () =>{
    return tsProject.src() //nada dentro do src pois os arquivos ja estao definidos dentro de tsconfig
        .pipe(tsProject()) //tsProject ira compilar o codigo ts para js
        .pipe(gulp.dest('build'))
})