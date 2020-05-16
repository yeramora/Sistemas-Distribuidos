function createxto(e) {
    console.log(e);
    let art = document.createElement('article');
    let titulo = document.createElement('h2');
    let divv = document.createElement('div');
    let sec = document.createElement('section');
    let p = document.createElement('p');
    let b = document.createElement('b');
    let p2 = document.createElement('p');
    let b2 = document.createElement('b');
    p.innerHTML = e.id;
    b.innerHTML = "ID";
    b.appendChild(p);
    sec.appendChild(b);
    b2.innerHTML = "Plantas";
    p2.innerHTML = e.plantas;
    b2.appendChild(p2);
    sec.appendChild(b2);
    titulo.innerHTML = e.nombre;
    divv.appendChild(sec);
    art.appendChild(titulo);
    art.appendChild(divv);
    document.getElementById('flex').appendChild(art);
}





function todosedificios() {
    let url = 'https://www.sigua.ua.es/api/pub/edificio/all/items';

    fetch(url, {method:'GET'}).then(function(respuesta){
        if( respuesta.ok){
            
            respuesta.json().then(function(datos){
                console.log(datos);
                console.log(JSON.stringify(datos));
                
                sessionStorage['usuario'] = JSON.stringify(datos);
                console.log(datos.length);
                for(let i = 0; i<datos.length;i++){
                    console.log("holi");
                    createxto(datos[i]);
                }
            });
        }
        else {
           console.log("error");
        }
    });
    return false;
}

function unedificio(id) {
    let url = 'https://www.sigua.ua.es/api/pub/edificio/'+id;
    console.log(url);
    fetch(url, {method:'GET'}).then(function(respuesta){
        if( respuesta.ok){
            
            respuesta.json().then(function(datos){
                console.log(datos);
                console.log(JSON.stringify(datos));
                
                sessionStorage['usuario'] = JSON.stringify(datos);
                console.log(datos.length);
                for(let i = 0; i<datos.length;i++){
                    console.log("holi");
                    createxto(datos[i]);
                }
            });
        }
        else {
            console.log(respuesta);
           console.log("error");
        }
    });
    return false;
}