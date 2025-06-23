// Objeto inspirado em um carro
const carro = {
  modelo: "Fusca",      
  ano: 1973,          
  cor: "azul",        
  proprietarios: [     
    "Maria Oliveira",
    "Carlos Souza"
  ],
  motor: {            
    tipo: "4 cilindros",  
    potencia: 50,         
    combustivel: "gasolina" 
  },
  kilometros: 150000,   
  isLigado: false,     
  ligar: function() {   
    if (!this.isLigado) {
      this.isLigado = true;
      console.log("O carro está agora ligado.");
    } else {
      console.log("O carro já está ligado.");
    }
  },
  desligar: function() { // Método para desligar o carro
    if (this.isLigado) {
      this.isLigado = false;
      console.log("O carro foi desligado.");
    } else {
      console.log("O carro já está desligado.");
    }
  }
};

// Exemplo de uso:
console.log(carro.modelo); 
console.log(carro.ano); 
console.log(carro.proprietarios[1]); 
console.log(carro.motor.potencia); 

carro.ligar(); 
carro.ligar();  


carro.desligar();  
