<?php
    $conn = mysqli_connect('3306', 'epmc', 'WoH#xqa#jrR1');
    $database = mysqli_select_db($conn, 'epmcdb');

    $encodedData = file_get_contents('php://input');  // take data from react native fetch API
    $decodedData = json_decode($encodedData, true);

?>