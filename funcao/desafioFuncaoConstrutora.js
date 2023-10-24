function Pessoa(nome) {
    this.nome;
    
    this.falar = function() {
        console.log(`Meu nome e ${nome}`);
    }

}

const p1 = new Pessoa('Joao');
p1.falar();
