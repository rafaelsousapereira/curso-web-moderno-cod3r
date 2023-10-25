const arrowFunction = () => {
    console.log("Nao aponta para o global ->", this === global);
    console.log("Aponta para o exports ->", this === exports);
    console.log("Aponta para o module.exports (que basicamente o mesmo que exports) ->", this === module.exports);

    console.log("O this nesta funcao NAO EH O GLOBAL ->", this === global);
    console.log("O this nesta funcao EH O MODULE.EXPORTS ->", this === module.exports);
}

arrowFunction();