<?php
  require_once './vendor/autoload.php';

  $loader = new Twig_Loader_Filesystem('./templates');
  $twig   = new Twig_Environment($loader);

  $template = $twig->load('gallery.twig');
  echo $template->render();
?>