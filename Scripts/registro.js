function registrartutor(){

    var user = document.getElementById('user').value;
    let parametros = $('#form-tutor').serialize();
    console.log(parametros);
    if (document.getElementById('tutor').checked) {
        axios({
            url:`/ProyectoEconomia/api/usuariotutor.php`,
            method:"post",
            reponseType:"json",
            data: parametros
        }).then(res=>{
            resp = res.data;
            //console.log(resp);
            window.location.href = `porfileTutor.html?user=` + user;
        }).catch(err=>{
            console.error(err);
        })
    } else if (document.getElementById('alumno').checked) {
        axios({
            url:`/ProyectoEconomia/api/usuarioalumno.php`,
            method:"post",
            reponseType:"json",
            data: parametros
        }).then(res=>{
            resp = res.data;
            window.location.href = `main.html?user=` + user;
        }).catch(err=>{
            console.error(err);
        })
    }
}