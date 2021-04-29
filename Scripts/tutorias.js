var locations = window.location.search;
window.onload  = function(){
    console.log(locations);
        axios({
            url:`/ProyectoEconomia/api/usuariotutor.php${locations}`,
            method:"get",
            reponseType:"json"
        }).then(res=>{
            resp = res.data;
            //console.log(resp);
            llenarPerfil(resp);
        }).catch(err=>{
            console.error(err);
        })
}

function llenarPerfil(datos){
    console.log(datos);
    document.getElementById('info-tutor').innerHTML = `
        <div class="col-md-6 ">
            <img alt="Bootstrap Image Preview " src="assets/img/imagenTutor.jpg " style="width: 65%; padding-bottom: 30px; ">
        </div>
        <div class="col-md-6">
            <h2>
                ${datos.name}
                <span class="badge badge-default ">Tutor</span>
            </h2>
            <br>
            <p>Usuario: ${datos.user}</p>
            <p>Fecha de Nacimiento: ${datos.fecha}</p>
            <p>Correo Electrónico: ${datos.correo}</p>
            <p>Número de Teléfono: ${datos.telefono}</p>
        </div>
    `;

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
                        <b>Código de tutoría:</b><b><center>${informacionTutotrias[key].code}</center></b>
                    </h5>
                        <br>
                    <p class="card-text ">
                        <b>Nombre de tutoría:</b> ${informacionTutotrias[key].name}
                    </p>

                    <p class="card-text ">
                        <b>Descripcion:</b> ${informacionTutotrias[key].description}
                    </p>

                    <p class="card-text ">
                    <b>Horas:</b> ${informacionTutotrias[key].hours} || <b>Precio:</b> ${informacionTutotrias[key].prize}
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

}

function registrartutoria(){
    let codigo =  document.getElementById('code-tutorships').value;
    let nombre =  document.getElementById('name-tutoria').value;
    let descripcion =  document.getElementById('description-text').value;
    let hora = document.getElementById('hours').value;
    let precio = document.getElementById('prize').value;

    let parametros = 'code='+ codigo +'&name='+nombre+'&description='+descripcion+'&hours='+hora+'&prize='+precio;
    console.log(parametros);
    
    axios({
        url:`/ProyectoEconomia/api/tutoria.php${locations}`,
        method:"post",
        reponseType:"json",
        data: parametros
    }).then(res=>{
        resp = res.data;
        console.log(resp);
        $('#addturoria').modal('hide');
        alert('Tutoría agregada exitosamente');
        location.reload();
    }).catch(err=>{
        console.error(err);
        alert('Error al guardar tutoria')
    })
}

function recargar(){
    window.location.href = `porfileTutor.html${locations}`;
}