function createxto(e) {
    console.log(e);
    let art = document.createElement('article');
    let titulo = document.createElement('h2');
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
    art.appendChild(titulo);
    art.appendChild(sec);
    document.getElementById('flex').appendChild(art);
}

function createxto2(e) {
    console.log(e);
    let art = document.createElement('article');
    let titulo = document.createElement('h2');
    let divv = document.createElement('div');
    let sec = document.createElement('section');
    let p = document.createElement('p');
    let b = document.createElement('b');
    let p2 = document.createElement('p');
    let b2 = document.createElement('b');
    let p3 = document.createElement('p');
    let b3 = document.createElement('b');
    p.innerHTML = e.estancias;
    b.innerHTML = "estancias";
    b.appendChild(p);
    sec.appendChild(b);
    b2.innerHTML = "Ocupantes";
    p2.innerHTML = e.ocupantes;
    b2.appendChild(p2);
    sec.appendChild(b2);
    b3.innerHTML = "Superficie";
    p3.innerHTML = e.superficie;
    b3.appendChild(p3);
    sec.appendChild(b3);
    titulo.innerHTML = e.id;
    art.appendChild(titulo);
    art.appendChild(sec);
    document.getElementById('flex').appendChild(art);
}


function creaselect(e) {
    let option = document.createElement('option');
    option.value = e.id;
    option.innerHTML = e.nombre;
    document.getElementById('categoria').appendChild(option);
}


function petichula() {
    document.getElementById('flex').innerHTML = "";
    let url = 'https://www.sigua.ua.es/api/pub/edificio/all/items';

    fetch(url, {method:'GET'}).then(function(respuesta){
        if( respuesta.ok){
            
            respuesta.json().then(function(datos){
                console.log(datos);
                for(let i = 0; i<datos.length;i++){
                    estancias(datos[i].id);
                  creaselect(datos[i]);
                }
            });
        }
        else {
           console.log("error");
        }
    });
    return false;
}





function todosedificios() {
    document.getElementById('flex').innerHTML = "";
    let url = 'https://www.sigua.ua.es/api/pub/edificio/all/items';

    fetch(url, {method:'GET'}).then(function(respuesta){
        if( respuesta.ok){
            
            respuesta.json().then(function(datos){
                console.log(datos);
                for(let i = 0; i<datos.length;i++){
                    
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

function datosvolumen() {
    document.getElementById('flex').innerHTML = "";
    let url = 'https://www.sigua.ua.es/api/agregados/seo/edificio/all/items';
    console.log(url);
    fetch(url, {method:'GET'}).then(function(respuesta){
        if( respuesta.ok){
            
            respuesta.json().then(function(datos){
                console.log(datos);
                for(let i = 0; i<datos.length;i++){
                    createxto2(datos[i]);
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

function estancias(id) {
    document.getElementById('flex').innerHTML = "";
    let url = 'https://www.sigua.ua.es/api/pub/estancia/edificio/'+id+'/items';
    console.log(url);
    fetch(url, {method:'GET'}).then(function(respuesta){
        if( respuesta.ok){
            
            respuesta.json().then(function(datos){
                console.log(datos);
                for(let i = 0; i<datos.length;i++){
                    
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