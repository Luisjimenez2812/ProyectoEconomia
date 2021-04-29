<?php
    header("Content-Type: application/json");
    include_once("..\clases\class-tutorias.php");
    require_once("..\clases\class-database.php");
    
    $database = new database();
    //$_POST = json_decode(file_get_contents('php://input'),true);
    switch($_SERVER['REQUEST_METHOD']){
        case 'POST'://guardar
            
            $tutoria = new tutorias(
                $_POST["code"],
                $_POST["name"],
                $_POST["description"],
                $_POST["hours"],
                $_POST["prize"]
            );
            
            echo $tutoria->guardartutorias($database->getDb(),$_GET['user']);

        break;
        case 'GET':
            echo json_encode(tutorias::obtenerTutorias($database->getDb()));
        break;
        case 'PUT':
           
        break;
        case 'DELETE':
          
        break;
    }
?>