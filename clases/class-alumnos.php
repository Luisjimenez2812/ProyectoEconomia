<?php  
    class alumnos{
        private $name;
        private $user;
        private $telefono;
        private $correo;
        private $fecha;
        private $password;

        public function __construct($name, $user, $telefono, $correo, $fecha, $password){
            $this -> name = $name;
            $this -> user = $user;
            $this -> telefono = $telefono;
            $this -> correo = $correo;
            $this -> fecha = $fecha;
            $this -> password = $password;
        }

        public function guardaralumnos($db){
            $result = $db -> getReference('alumnos') 
            -> push([
                'name' => $this -> name,
                'user' => $this -> user,
                'telefono' => $this -> telefono,
                'correo' => $this -> correo,
                'fecha' => $this -> fecha,
                'password' => $this -> password,
            ]);
            echo json_encode($result -> getValue() );
        }

        public static function login($db, $user, $password){
            $result = $db -> getReference('alumnos')
                        ->getValue();

            foreach ($result as $key => $value) {
                if($result[$key]["user"] == $user && $result[$key]["password"] ==$password){
                    return $result[$key];
                }
            }
        
        }

        public static function obtenerAlumno($db, $user){
                $result = $db->getReference('alumnos')
                    ->getValue();
                foreach ($result as $key => $value) {
                    if($result[$key]["user"] == $user){
                        return $result[$key];
                    }
                }
        }

    }

?>