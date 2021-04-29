<?php  
    class tutores{
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

        public function guardartutores($db){
            $result = $db -> getReference('tutores') 
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

        public static function login($db,$user,$password){
            $result = $db -> getReference('tutores')
                        ->getValue();

            foreach ($result as $key => $value) {
                if($result[$key]["user"] == $user && $result[$key]["password"] ==$password){
                    return $result[$key];
                }
            }
        
        }

        public static function obtenerTutor($db,$user){
                $result = $db->getReference('tutores')
                    //->getChild($user)
                    ->getValue();
                foreach ($result as $key => $value) {
                    if($result[$key]["user"] == $user){
                        return $result[$key];
                    }
                }
        }

        public static function obtenerTutorias($db){
                $result = $db->getReference('tutores')
                    ->getValue();
                //return json_encode($result);
                $tutoria = array();
                foreach ($result as $key => $value) {
                    array_push($tutoria, $result[$key]["tutorias"]);
                        
                    
                }
                return ($tutoria);
        }
    }

?>

