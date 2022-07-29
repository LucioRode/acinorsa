<?php
$email = trim($_POST['email']);
$nombre = trim($_POST['nombre']);
$apellido = trim($_POST['apellido']);
$telefono = trim($_POST['telefono']);
$comentario = trim($_POST['comentario']);

$consulta = "E-mail: " . $email . " Nombre: " . $nombre . " Apellido: " . $apellido . "Comentario: " . $comentario;

mail("luciorode@gmail.com", "Contacto desde Formulario", $consulta);

?>
