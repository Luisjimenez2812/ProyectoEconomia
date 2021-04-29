var locations = window.location.search;
window.onload  = function(){
    console.log(locations);
        axios({
            url:`/ProyectoEconomia/api/usuarioalumno.php${locations}`,
            method:"get",
            reponseType:"json"
        }).then(res=>{
            resp = res.data;
            //console.log(resp);
            llenarPerfilAlumno(resp);
        }).catch(err=>{
            console.error(err);
        })
}

function llenarPerfilAlumno(datos){
    console.log(datos);
    document.getElementById('info-alumno').innerHTML = `
        <div class="col-md-6 ">
            <img alt="Bootstrap Image Preview " src="assets/img/imagenTutor.jpg " style="width: 65%; padding-bottom: 30px; ">
        </div>
        <div class="col-md-6">
        <h2>
                ${datos.name}
                <span class="badge badge-default ">Estudiante</span>
            </h2>
            <br>
            <p>Usuario: ${datos.user}</p>
            <p>Fecha de Nacimiento: ${datos.fecha}</p>
            <p>Correo Electrónico: ${datos.correo}</p>
            <p>Número de Teléfono: ${datos.telefono}</p>
        </div>
    `;
}

function irMain(){
    window.location.href = `main.html${locations}`;
}