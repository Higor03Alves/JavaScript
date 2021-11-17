const schudule = require('node-schedule');
const { setTimeout } = require('timers');

//const tarefa1 = schudule.scheduledJob('*/5 * 16 * * 4', function () {
//    console.log('Execultando Tarefa 1!', new Date().getSeconds())
//}); //essa função não funciona!! aida não sei porque

//setTimeout(function (){
//    tarefa1.cancel()
//    console.log('Cancelando a tarefa1')
//}); não quer funcionar pq a função de cima nao funcionou!

const regra = new schudule.RecurrenceRule()
regra.dayOfWeek = [new schudule.Range(1, 5)]
regra.hour = 12
regra.second = 30

const tarefa2 = schudule.scheduleJob(regra, function () {
    console.log('Execultando Tarefa2!!', new Date().getSeconds)
});