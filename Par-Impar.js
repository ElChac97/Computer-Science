let numero = prompt('Ingresa un número para saber si es par o impar'); 
    if (numero % 2 === 0){
    alert( numero + ' Es par');
    } else if (typeof numero === 'string') 
            alert('Carácter inválido');
       else
    alert(numero + ' Es impar');
    
