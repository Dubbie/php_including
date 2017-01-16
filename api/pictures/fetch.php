<?php
  // CONTACT THE DATABASE
  include_once '../pdo.php';

  // Prepare the response
  // Initialize succes to false, because we have yet to run our code.
  $response = [
    'success' => false,
  ];

  // Get the pictures
  // It's a fucking statement if it's prepared.
  $stmt = $pdo->prepare('
    SELECT `picture`
    FROM `articles`
  ');
  $stmt->execute();
  $pictures = $stmt->fetchAll();

  // Fuck my life
  $response['data'] = $pictures;
  $response['success'] = true;

  // This would output a regular PHP array, so we have to convert it to a JSON object first.
  echo json_encode($response);
?>