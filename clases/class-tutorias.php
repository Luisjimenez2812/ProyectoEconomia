<?php  
    class tutorias{
        private $codeTutorships;
        private $nameTutoria;
        private $descriptionText;
        private $hours;
        private $prize;

        public function __construct($codeTutorships, $nameTutoria, $descriptionText, $hours, $prize){
            $this -> codeTutorships = $codeTutorships;
            $this -> nameTutoria = $nameTutoria;
            $this -> descriptionText = $descriptionText;
            $this -> hours = $hours;
            $this -> prize = $prize;
           
        }

        public function guardartutorias($db, $user){
            $result = $db -> getReference('tutores')
                ->getValue();
                foreach ($result as $key => $value) {
                    if($user == $result[$key]["user"]){
                        $referencia = "tutores/".$key."/tutorias";
                        $usuario = $db->getReference($referencia)
                        -> push([
                            'code' => $this -> codeTutorships,
                            'name' => $this -> nameTutoria,
                            'description' => $this -> descriptionText,
                            'hours' => $this -> hours,
                            'prize' => $this -> prize,
                            ]);
                        return json_encode($result[$key]);
                    }
                }
        }

        public static function obtenerTutorias($db){
            $result = $db->getReference('tutores')
                ->getValue();
            
            /*$tutoria = array();
            foreach ($result as $key => $value) {
                array_push($tutoria, $result[$key]["tutorias"]);
                    
                
            }*/

            //return implode (",", $tutoria);
            return ($result);
        }

    }

?>