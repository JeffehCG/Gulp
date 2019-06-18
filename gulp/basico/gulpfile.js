//-- Gulp é um sistema de automação de processos de build
//gulpfile.js é o nome padrão do arquivo, colocando gulp no terminal, esse sera o arquivo que o gulp ira buscar
//nesse exemplo sera chamada a tarefa 'default' junto com uma função que irar chamar mais tarefas
//assim salvando os arquivos da pastaA na pastaB

const gulp = require('gulp')

//gulp.task - função utilizada para chamar uma tarefa/ ou criar uma
gulp.task('default', ()=>{ // 'default é uma tarefa padrão do gulp (é a porte de entrada de um script gulp)'
    //gulp.start - utilizado para executar uma tarefa dentre de outra tarefa
    gulp.start('copiar', 'fim') //sera preciso criar duas novas tasks "copiar" e "fim"
})

//criando nova task ('copiar)
gulp.task('copiar',['antes1', 'antes2'], () =>{ //passando um array com as dependencias tasks que precisam ser executadas antes da task 'copiar' // e em seguida executada a função de 'copiar'
    //gulp.src(['pastaA/*.txt']) //trabalhando com todos arquivos dentro da pasta
    //gulp.src(['pastaA/**/*.txt']) //trabalhando com todos os arquivos dentra da pasta e subpastas
    return gulp.src(['pastaA/arquivo1.txt' , 'pastaA/arquivo2.txt'])//gulp.src - quais são os arquivos que seram executados com enssumo pra execução do passo a passo
        // .pipe(transformacao1())//pipe- função que chamara um encadeamento de filtros (que podem ser de varios tipos como , transformar aquivo js em typescript, copiar uma parte do arquivo selecionado etc)
        // .pipe(transformacao2())// ou seja, voce ira pegar terminados arquivo, fazer uma transformação neles, e depois direcionar os mesmo para alguma lugar
        .pipe(gulp.dest('pastaB'))//dest - destino (criara pastaB e colocara os arquivos dentro)
})
// no exemplo acima, a função apenas sera executada se a tarefa 'antes1' e 'antes2' ja foram executadas tambem

//criando task ('antes1')
gulp.task('antes1', ()=>{
    console.log('Antes1!!!')
})

//criando task ('antes2')
gulp.task('antes2', ()=>{
    console.log('Antes2!!!')
})

//criando task ('fim') que ira chamar mais duas task em ver de chamar uma função
gulp.task('fim',['fim1','fim2'])

gulp.task('fim1', ()=>{
    console.log('Fim1!!!')
})

gulp.task('fim2', ()=>{
    console.log('Fim2!!!')
})