const carro = {
  marca: 'Fusca',
  cor: 'preto',
  ligar: function() {
    console.log(`O ${this.marca} ${this.cor}`);
  }
};
carro.ligar(); 