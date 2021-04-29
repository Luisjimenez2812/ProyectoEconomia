function login(){
    let parametros = $('#form-login').serialize();
    axios({
        url:'/ProyectoEconomia/api/login.php',
        method:"post",
        responseType:"json",
        data: parametros
    }).then(res=>{
        resp = res.data;
        //console.log(resp.user);
        if (resp.codigo == 'tutor') {
            window.location.href = `porfileTutor.html?user=${resp.user}`;
        } else if(resp.codigo == 'alumno') {
            window.location.href = `main.html?user=${resp.user}`;
        } else {
            //alert('El usuario o la contraseña es incorrecto.');
        }
    }).catch(err=>{
        console.error(err);
    })

}