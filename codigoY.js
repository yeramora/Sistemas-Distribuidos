function createxto(e) {
    console.log(e);
    let art = document.createElement('article');
    let titulo = document.createElement('h2');
    let sec = document.createElement('section');
    let p = document.createElement('p');
    let b = document.createElement('b');
    let p2 = document.createElement('p');
    let b2 = document.createElement('b');
    let p4 = document.createElement('button');
    sec.id = 'sec' + e.id;
    b.innerHTML = "ID: ";
    p.appendChild(b);
    p.innerHTML += e.id;
    sec.appendChild(p);
    b2.innerHTML = "Plantas: ";
    p2.appendChild(b2);
    p2.innerHTML += e.plantas;
    sec.appendChild(p2);
    p4.innerHTML = "ver estancias";
    p4.onclick= function() {estancias(e.id)};
    sec.appendChild(p4);
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
    b.innerHTML = "Estancias: ";
    p.appendChild(b);
    p.innerHTML += e.estancias;
    sec.appendChild(p);
    b2.innerHTML = "Ocupantes: ";
    p2.appendChild(b2);
    p2.innerHTML += e.ocupantes;
    sec.appendChild(p2);
    b3.innerHTML = "Superficie: ";
    p3.appendChild(b3);
    p3.innerHTML += e.superficie;
    sec.appendChild(p3);
    titulo.innerHTML = e.id;
    art.appendChild(titulo);
    art.appendChild(sec);
    document.getElementById('flex').appendChild(art);
}


function createxto3(e) {
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
    let p4 = document.createElement('button');
    sec.id = 'sec' + e.lat;
    b.innerHTML = "Codigo de instancia: ";
    p.appendChild(b);
    p.innerHTML += e.codigo;
    sec.appendChild(p);
    b3.innerHTML = "Superficie: ";
    p3.appendChild(b3);
    p3.innerHTML += e.superficie;
    sec.appendChild(p3);
    b2.innerHTML = "Actividad: ";
    p2.appendChild(b2);
    p2.innerHTML += e.nombre_actividad;
    sec.appendChild(p2);
    p4.innerHTML = "ver actividad";
    p4.onclick= function() {actividades(e.id_actividad,e.lat)};
    sec.appendChild(p4);
    titulo.innerHTML = e.denominacion;
    if(e.denominacion==null){titulo.innerHTML = e.nombre_actividad}
   
    art.appendChild(titulo);
    art.appendChild(sec);
    document.getElementById('flex').appendChild(art);
}

function createxto4(e) {
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
    b.innerHTML = "Codigo de instancia: ";
    p.appendChild(b);
    p.innerHTML += e.codigo;
    sec.appendChild(p);
    b2.innerHTML = "Actividad: ";
    p2.appendChild(b2);
    p2.innerHTML += e.nombre_actividad;
    sec.appendChild(p2);
    b3.innerHTML = "Superficie: ";
    p3.appendChild(b3);
    p3.innerHTML += e.superficie;
    sec.appendChild(p3);
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
                for(let i = 0; i<datos.length;i++){
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
    if(id!=-1){
        if(id=='0028'){
            window.alert("No hay informacion en el servidor");
       }
    document.getElementById('flex').innerHTML = "";
    let url = 'https://www.sigua.ua.es/api/pub/estancia/edificio/'+id+'/items';
    console.log(url);
    fetch(url, {method:'GET'}).then(function(respuesta){
        if( respuesta.ok){
            
            respuesta.json().then(function(datos){
               console.log(datos.features);
               let cosa = datos.features.length;
                if(datos.features.length>20) { cosa=20; }
                for(let i = 0; i<cosa;i++){
                    createxto3(datos.features[i].properties);
                }
               }
            );
        }
        else {
            console.log(respuesta);
           console.log("error");
        }
    });
    return false;
}
}

function departamentos() {
    num = document.getElementById('numeros').value;
    console.log(num);
    if(num != "") {
        document.getElementById('flex').innerHTML = "";
    let url = 'https://www.sigua.ua.es/api/agregados/seo/edificio/all/items';
    console.log(url);
    fetch(url, {method:'GET'}).then(function(respuesta){
        if( respuesta.ok){
            
            respuesta.json().then(function(datos){
                console.log(datos);
                for(let i = 0; i<datos.length;i++){
                    if(datos[i].ocupantes>num) {
                        createxto2(datos[i]);
                    }
                    
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
}



function actividades(id,lat) {
    let url = 'https://www.sigua.ua.es/api/pub/actividad/'+id;

    fetch(url, {method:'GET'}).then(function(respuesta){
        if( respuesta.ok){

            respuesta.json().then(function(datos){
                console.log(datos);
                creaactividad(datos[0],lat);
            });
        }
        else {
           console.log("error");
        }
    });
    return false;
}

function creaactividad(e,id){
    
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
    let p4 = document.createElement('button');
    art.id = 'secbo'+id;
    b.innerHTML = "Admite trabajo: ";
    p.appendChild(b);
    p.innerHTML += e.es_habitable;
    sec.appendChild(p);
    b3.innerHTML = "Grupo: ";
    p3.appendChild(b3);
    p3.innerHTML += e.grupo;
    sec.appendChild(p3);
    b2.innerHTML = "ID Actividad: ";
    p2.appendChild(b2);
    p2.innerHTML += e.id;
    sec.appendChild(p2);
    p4.innerHTML = "cerrar";
    p4.onclick= function() {borra(id)};
    sec.appendChild(p4);
    titulo.innerHTML = e.denominacion;
    if(e.denominacion==null || e.denominacion==""){titulo.innerHTML = e.nombre_actividad}
   
    art.appendChild(titulo);
    art.appendChild(sec);
    console.log('sec'+id);
    document.getElementById('sec'+id).appendChild(art);
}

function borra(id){
    document.getElementById('secbo'+id).innerHTML="";
}