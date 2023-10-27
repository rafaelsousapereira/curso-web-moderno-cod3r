const schedule = require('node-schedule');

function cancelandoTarefa(tarefa, tempoDeCancelamento, numeroTarefa) {
    setTimeout(function () {
        tarefa.cancel();
        console.log(`Cancelando Tarefa ${numeroTarefa}!`);
    }, tempoDeCancelamento);
}

const tarefa1 = schedule.scheduleJob('*/5 * 14 * * 5', function () {
    console.log('Executando Tarefa 1 =>', new Date().getSeconds());
});

const regra = new schedule.RecurrenceRule();
regra.dayOfWeek = [new schedule.Range(1, 5)];
regra.hour = 14;
regra.second = 30;

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Executando Tarefa 2 =>', new Date().getSeconds());
});

cancelandoTarefa(tarefa1, 20000, 1);
cancelandoTarefa(tarefa2, 80000, 2);