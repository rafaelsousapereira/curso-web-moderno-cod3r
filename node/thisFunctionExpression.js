function functionExpression() {
    console.log("Aponta para o global ->", this === global);
    console.log("Nao aponta para o exports ->", this === exports);
    console.log("Nao aponta para o module.exports ->", this === module.exports);

    console.log("O this nesta funcao eh o objeto GLOBAL ->", this);
}

functionExpression();