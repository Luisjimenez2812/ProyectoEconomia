<?php
    header("Content-Type: application/json");
    include_once("..\clases\class-alumnos.php");
    require_once("..\clases\class-database.php");
    
    $database = new database();
    //$_POST = json_decode(file_get_contents('php://input'),true);
    switch($_SERVER['REQUEST_METHOD']){
        case 'POST'://guardar
            
            $usuario = new alumnos(
                $_POST["name"],
                $_POST["user"],
                $_POST["telefono"],
                $_POST["correo"],
                $_POST["fecha-nac"],
                $_POST["password"]

            );
            echo $usuario->guardaralumnos($database->getDb());
        break;
        case 'GET':
            if(isset($_GET['user'])){
                echo json_encode(alumnos::obtenerAlumno($database->getDb(),$_GET['user']));
             }
        break;
        case 'PUT':
           
        break;
        case 'DELETE':
          
        break;
    }
?>