const gulp = require('gulp')
const sass = require('gulp-sass') //modulo para converter sass em css original
const uglyfycss = require('gulp-uglifycss') //modulo para conpactar arquivo css, deixando o mais leve possivel, apagando espaços etc
const concat = require('gulp-concat') //concatena varios arquivos em um só 

//tarefa para converter sass em css
gulp.task('default',['copiarHtml'], () =>{ //tarefa default apenas sera executada depois que a tarefa copiarHtml estiver concluida
    gulp.src('src/sass/index.scss')//é precisso expecificar apenas o index.scss, pois dentro dele havera a referencia para os outros
        .pipe(sass().on('error', sass.logError)) //aplicando a conversão do sass, e em caso de erro, sera exibido no console
        .pipe(uglyfycss({"uglyComments": true})) //compactando o css {"uglyComments": true} - tirar todos comentarios
        .pipe(concat('estilo.min.css'))//concatenar todos arquivos css em um só
        .pipe(gulp.dest('build/css'))
})

gulp.task('copiarHtml', () => {
    gulp.src('src/index.html')
        .pipe(gulp.dest('build'))
})