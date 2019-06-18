// Transforamando o arquivo calculadora.js e testeCalculadora.js em um só

const gulp = require('gulp')
const concat = require('gulp-concat') //esse modulo serve para concatenar varios arquivos em um só
const uglify = require('gulp-uglify') //esse modulo serve para compactar o arquivo o maximo possivel tirarando todos espaços do arquivo etc..,
                                      //e deixar ele o mais leve possivel, para não pessar tanto na hora de passar para o servidor, porem não suporta os codigos js mais novos
const babel = require('gulp-babel') //para utilizar o gulp-babel é precisse ter instalado os modulos "babel-core" e "babel-present-env"

gulp.task('default', () =>{
    return gulp.src('src/**/*.js') //pegando todos os arquivos js dentro da pasta src
        .pipe(babel({ //babel serve para fazer a tradução de uma linguagem para outra (por exemplo, pegar um codigo js mais novo, e converte o mesmo para um codigo js mais antigo, suportado pela maioria dos browser )
            comments: false, //tirando os comentarios
            presets: ["env"], //é possivel usar presets especificos, como 2015, 2016 etc, porem utilizando o "env" ele localiza automaticamente os plugins que seu ambiente precisa
            minified: true //que nem o uglify, tambem serve para compactar o codigo, porem o uglify não suporta os codigos mais novos do js
        }))
        // .pipe(uglify())
        .on('error', function (err) { console.log(err)})//caso algum erro acontence exibir
        .pipe(concat('codigo.min.js'))//codigo.min.js - o nome do arquivo que sera gerado com a cocatenação
        .pipe(gulp.dest('build'))
})