var locations = window.location.search;
console.log(locations);

window.onload  = function(){
    
        axios({
            url:`/ProyectoEconomia/api/tutoria.php`,
            method:"get",
            reponseType:"json"
        }).then(res=>{
            resp = res.data;
            //console.log(resp);
            obtenerTutorias(resp);

        }).catch(err=>{
            console.error(err);
        })
}


function obtenerTutorias(datos){
    
    let cardTutoria = '';
    for (let key in datos){

        for (let key2 in datos[key].tutorias){
            
            cardTutoria += `
            <div class="col-md-3 col-sm-6">
                <div class="card mx-3 my-3" style="padding-top: 15px; border: 1px solid gray;">
                    <center>
                        <img src="assets/img/fondoTutoria1.jpg" class="rounded float-end" style="width: 200px;">
                    </center>
                    <div class="card-block" style="border-top: 1px solid gray;">
                        <h5 class="card-title">
                            <span><b><center>${datos[key].tutorias[key2].code}</center></b> </span>
                        </h5>
                        
                        <p class="card-text">
                            <br>
                            <b>Nombre de tutoria:</b> ${datos[key].tutorias[key2].name}
                            <br>
                            <b>Tutor:</b> ${datos[key].name}
                            <br>
                            <b>Descripcion:</b> ${datos[key].tutorias[key2].description}
                            <br>
                            <b>Horas:</b> ${datos[key].tutorias[key2].hours} || <b>Precio:</b> ${datos[key].tutorias[key2].prize}
                            <br><br>

                            <a class="btn btn-outline-success" href="https://api.whatsapp.com/send?phone=+504${datos[key].telefono}&text=Hola, me gustaría obtener información de la tutoría ${datos[key].tutorias[key2].name}." target="_blank">
                                Whatsapp Tutor
                            </a>
                            <br>
                        </p>                   
                    </div>
                </div>
            </div>
            `;

        }
        
    }

    if (cardTutoria == '') {
        document.getElementById('alltutories').innerHTML = `
        <div class="col-md-12 text-center">
            <div class=""text-center px-4"><img style="opacity:0.25;" src="assets/img/fondoTutoria.jpg"><h3>No se encuentran tutorias disponibles en este momento :( </h3></div>
        </div>      
        `;
    }else{
        document.getElementById('alltutories').innerHTML = `${cardTutoria}`;
    }
    
}

function miPerfil(){
    window.location.href = `porfileAlumno.html${locations}`;
}

function recargar(){
    window.location.href = `main.html${locations}`;
}

/*function llenarPerfil(datos){
    document.getElementById('info-tutor').innerHTML = `
    <div class="col-md-6 ">
    <img alt="Bootstrap Image Preview " src="assets/img/imagenTutor.jpg " style="width: 65%; padding-bottom: 30px; "> <span class="badge badge-default ">Estudiante de IS</span>
    </div>
    <div class="col-md-6">
    <h2>
    ${datos.name}
    </h2>
    <p>usuario: ${datos.user}</p>
    <p>Fecha de Nacimiento: ${datos.fecha}</p>
    <p>Correo Electrónico: ${datos.correo}</p>
    <p>Número de Teléfono: ${datos.telefono}</p>
    </div>
    `;
    console.log(datos);
    
    let informacionTutotrias = datos.tutorias;
    let cardTutoria = '';
    for(let key in informacionTutotrias){
        
        //console.log(informacionTutotrias[key].prize);
        cardTutoria += `
        <div class="col-md-4">
        <div class="card">
        
        <img class="card-img-top " alt="Bootstrap Thumbnail First" src="assets/img/fondoTutoria1.jpg">
        

                <div class="card-block ">
                    <h5 class="card-title ">
                        <b><center>${informacionTutotrias[key].code}</center></b>
                    </h5>

                    <p class="card-text ">
                        ${informacionTutotrias[key].name}
                    </p>

                    <p class="card-text ">
                        ${informacionTutotrias[key].description}
                    </p>

                    <p class="card-text ">
                        hours: ${informacionTutotrias[key].hours}
                    </p>

                    <p class="card-text ">
                    hours: ${informacionTutotrias[key].prize}
                    </p>
                </div>
            </div>
        </div>
        `;
    }

    if (cardTutoria == '') {
        document.getElementById('listTutorias').innerHTML = `
        <div class="col-md-12 text-center">
            <div class=""text-center px-4"><img style="opacity:0.25;" src="assets/img/fondoTutoria.jpg"><h3>No se han registrado tutorias, no esperes más creala ya!</h3></div>
        </div>      
        `;
    }else{
        document.getElementById('listTutorias').innerHTML = `${cardTutoria}`;
    }

}*/


//var user = document.getElementById('user').value;

