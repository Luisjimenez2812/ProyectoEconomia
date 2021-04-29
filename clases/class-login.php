<?php  
    class login{
        private $user;
        private $password;

        public function __construct($user, $password){
            $this -> user = $user;
            $this -> password = $password;
        }

        public function login($db){
            $result = $db -> getReference('tutores')
                        ->getValue();

            foreach ($result as $key => $value) {
                echo  $this -> user;
                if($result[$key]["user"] == $this -> user && $result[$key]["password"] == $this -> password){
                    return $result[$key];
                }
            }

            return null;
        }
    }
?>