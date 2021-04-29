<?php
    header("Content-Type: application/json");
    include_once("..\clases\class-tutores.php");
    include_once("..\clases\class-alumnos.php");
    require_once("..\clases\class-database.php");
    
    $database = new database();
    //$_POST = json_encode(file_get_contents('php://input'),true);
    
    switch($_SERVER['REQUEST_METHOD']){
        case 'POST':
            $tutor = tutores::login($database->getDb(), $_POST['user'], $_POST['password']);
            $alumno = alumnos::login($database->getDb(), $_POST['user'], $_POST['password']);
            
            if ($tutor) {
                $arreglo = array(
                    "user" => $tutor['user'],
                    "codigo" => "tutor"
                );
                echo json_encode($arreglo);
            
            } else if ($alumno){
                $arreglo = array(
                    "user" => $alumno['user'],
                    "codigo" => "alumno"
                );
                echo json_encode($arreglo);
            
            }

        break;
        
    }
?>