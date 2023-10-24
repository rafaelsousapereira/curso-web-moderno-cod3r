function tratarErroELancar(erro) {
    throw {
        nome: erro.nome,
        mensagem: erro.mensagem,
        data: new Date()
    }
    // throw new Error('Erro ao executar codigo...');
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!');
    } catch (e) {
        const obj = { nome: e.name, mensagem: e.message };

        tratarErroELancar(obj);
    } finally {
        console.log('Final');
    }
    
}

const obj = { nome: 'Joao' };
imprimirNomeGritado(obj);