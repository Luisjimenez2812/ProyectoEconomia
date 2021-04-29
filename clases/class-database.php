<?php
    require_once __DIR__.'\..\vendor\autoload.php';
    use Kreait\Firebase\Factory;
    
    class database{
        
        private $database;
        public function __construct(){
        
            $firebase = (new Factory)
            ->withServiceAccount( '..\secret\proyectoeconomia.json')
            ->withDatabaseUri('https://proyectoeconomia-cb686-default-rtdb.firebaseio.com/');
            $this -> database = $firebase->createDatabase();
        }

        public function getDb(){
            return $this -> database;
        }

    }


    /*$newPost = $database
    ->getReference('Estudiantes')
    ->push(['Nombre' => 'rosa']);*/

?>