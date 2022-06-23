//cobrinhaa
     var tela = document.querySelector('canvas'); // Váriavel que seleciona a tela.
     var pincel = tela.getContext('2d'); // Váriavel usada para pintar na tela.
    
     // Váriavel que define a posição do objeto.
     var x = 12.5;
     var y = 12.5;
    
     // códigos do teclado
     var esquerda = 37
     var cima = 38
     var direita = 39
     var baixo = 40
  
     // Quantidade de pixel que o objeto se movimenta.
     var taxa = 25;
  
     // função que cria o objeto.
     function desenhaCirculo(x, y, raio) {
  
         pincel.fillStyle = 'white';
         pincel.beginPath();
         pincel.arc(x, y, raio, 0, 2 * Math.PI);
         pincel.fill();
     }
  
     //cobrinha tentativa
   function Snake(){
       this.x = 0
       this.y = 0
       this.xspeed= 1
       this.yspeed= 0

   this.update = function (){
       this.x = this.x + this.xspeed 
       this.y = this.y + this.yspeed
      }
   }
 this.show = function(){
     fill(255)
     rect(this.x, this.y,10,10)
 }
 function kkeyPressed(){
  if (keyCode === UP_ARROW){
      Snake.dir(0,-1)
  } else if (keyCode === DOWN_ARROW){
      Snake.dir(0,1)
  }else if (keyCode === RIGHT_ARROW){
      Snake.dir(1,0)
  } else if (keyCode === LEFT_ARROW){
      Snake.dir(-1,0)
  }

 }
this.dir = function(x,y){
    this.xspeed = x
    this.yspeed = y
}

     // função que desenha o grid.
     function limpaTela() {
         var descer = 0;
         while(descer <=500){
             for(var imp= 0; imp<=500;imp=imp+25){
                 pincel.fillStyle = "black";
                 pincel.strokeStyle = "pink";
                 pincel.beginPath();
                 pincel.rect(imp, descer, 25, 25);
                 pincel.closePath();
                 pincel.fill();
                 pincel.stroke();    
             }
             descer = descer + 25;
         }    
     }
  
     // função para atualizar a tela, desenhando o grid e o objeto.
     function atualizaTela() {
  
         limpaTela();
        
         desenhaCirculo(x, y, 10);
        
     }
    
     setInterval(atualizaTela, 20); // função para chamar o "atualizaTela" em um intervalo de tempo dado como segundo parâmetro.
  
     // função que determina pra onde o objeto irá se movimentar.
     function leDoTeclado(evento) {
  
         if(evento.keyCode == cima && y - taxa > 0) {
             y = y - taxa;
  
         } else if (evento.keyCode == baixo && y + taxa < 500) {
             y = y + taxa;
  
         } else if (evento.keyCode == esquerda && x - taxa > 0) {
             x = x - taxa;
  
         } else if (evento.keyCode == direita && x + taxa < 500) {
             x = x + taxa;
         }
     }
   
   
      
   
    
    document.onkeydown = leDoTeclado;
  

 