function esquentarComida(idComida, tempo){
  switch (idComida) {
      case 1:
          if(tempo >= 10 && tempo <= 20){
              console.log("Prato pronto")
          }
          else if (tempo >= 20 && tempo <= 30) {
              console.log("Tua comida queimou")
          }
          else if (tempo > 30)
          {
              console.log("KABUUMMMMM!")
          }
          else if (tempo < 10) 
          {
              console.log("Tempo insuficiente.")
          }
          break;

      case 2, 5:
          if(tempo >= 8 || tempo <= 16){
              console.log("Prato pronto.")
          }
          else if (tempo >= 16 && tempo <= 24) {
              console.log("Tua comida queimou")
          }
          else if (tempo > 24)
          {
              console.log("KABUUMMMMM!")
          }
          else if (tempo < 8) 
          {
              console.log("Tempo insuficiente.")
          }
          break;

      case 3:
          if(tempo >= 15 || tempo <= 30){
              console.log("Prato pronto.")
          }
          else if (tempo >= 30 && tempo <= 45) {
              console.log("Tua comida queimou")
          }
          else if (tempo > 45)
          {
              console.log("KABUUMMMMM!!")
          }
          else if (tempo < 15) 
          {
              console.log("Tempo insuficiente.")
          }
          break;

      case 4:
          if(tempo >= 12 && tempo <= 24){
              console.log("Prato pronto, bom apetite!")
          }
          else if (tempo >= 24 && tempo <= 36) {
              console.log("Tua comida queimou.")
          }
          else if (tempo > 36)
          {
              console.log("KABUUMMMMM!")
          }
          else if (tempo < 12) 
          {
              console.log("Tempo insuficiente.")
          }
          break;

      default:
          console.log('Prato Inexistente')
          break;
  }
}