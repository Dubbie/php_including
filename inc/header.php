<?php

  $active = isset($active) ? $active : '';
  $ac = 'is-active';

?>
<html>
  <head>
    <title>DjSall</title>
    <link rel="stylesheet" href="./css/master.css">
    <meta name="viewport" content="width=device-width,initial-scale=1">
  </head>
  <body>
    <header id="header">
      <nav class="nav">
        <ul class="nav-list">
          <li class="nav-list-item">
            <a href="./index.php" class="<?= $active == 'index' ? $ac : ''; ?>">Index</a>
          </li>
          <li class="nav-list-item">
            <a href="./yaes.php" class="<?= $active == 'yaes' ? $ac : ''; ?>">Yaes</a>
          </li>
          <li class="nav-list-item">
            <a href="./contact.php" class="<?= $active == 'contact' ? $ac : ''; ?>">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
    <main id="main">