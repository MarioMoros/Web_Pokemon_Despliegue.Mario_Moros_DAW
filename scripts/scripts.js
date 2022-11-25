function tema(){
    var a = document.body;
    var boton = document.getElementById('btn');
    if(a.getAttribute('class')=='oscuro'){
        a.setAttribute('class', 'claro');
        boton.innerHTML = '&#127770;';  
    }else{
        a.setAttribute('class', 'oscuro');
        boton.innerHTML = '&#127773;';
    }
}