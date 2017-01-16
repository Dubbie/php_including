<?php
  $active = 'index';
  include './inc/header.php'; 
?>

<section class="section">
  <h1>Index</h1>
  <p>Fancy text like lorem ipsum Kappa.</p>
  <button id="get-button" type="button" class="button">Get pictures</button>
  <h2>Pictures</h2>
  <hr class="is-small">
  <div id="pictures-container">
    <h3>LOADING PICTURES...</h3>
  </div>
</section>
<script src="./js/index.js"></script>
<?php include './inc/footer.php'; ?>
