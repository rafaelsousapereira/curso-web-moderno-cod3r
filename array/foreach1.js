const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel'];

aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`);
});

aprovados.forEach(nome => console.log(nome));

const exibirAprovados = aprovados => console.log(aprovados);
aprovados.forEach(exibirAprovados);

aprovados.forEach(function(nome, indice, array) {
    console.log(`${indice + 1}) ${nome}`);
    console.log(array);
});
