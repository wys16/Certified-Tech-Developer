const podeSubir = (altura,acompanhada) => {
    if((altura > 1.40 && altura < 2.00)|| (altura > 1.20 && altura < 1.40 && acompanhada)){
        console.log('Acesso autorizado')
        return true
    } 
    else if (altura > 1.20 && altura < 1.40 && !acompanhada){

        console.log('Acesso autorizado somente com acompanhante')
        return false
    }
    else{
        
         console.log('Acesso negado');
         return false;
    }
   
}



 