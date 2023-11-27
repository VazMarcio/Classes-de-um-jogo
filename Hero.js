//Escrevendo as classes de um jogo

class Hero {
    constructor (name, age, type ){
        this.name = name;
        this.age = age;
        this.type = type
    }
    atacar(){
        let ataque;

        switch(this.type){
           
            case "mago":
                ataque = "magia";
                break;

            case "guerreiro":
                ataque = "espada";
                break;

            case "monge":
                ataque = "marciais";
                break;

            case "ninja":
                ataque = "shuriken";
                break;

            default:
                ataque = "desconhecido";

        }
    console.log(`O ${this.type} ${this.name} atacou usando ${ataque}`);

    }
}

//Uso da Classe

    const hero1 = new Hero("Arthur", 23, "guerreiro");
    const hero2 = new Hero("Merlin", 98, "mago");

    hero1.atacar();
    hero2.atacar();
