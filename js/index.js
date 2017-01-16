var index = (function () {
  var btn = document.getElementById('get-button');
  var container = document.getElementById('pictures-container');
  
  function init() {
    // INSTEAD OF:
    // bindUIActions();
    getPictures();
  }
  
  function bindUIActions() {
    // Button being clicked
    btn.onclick = function () {
      
      // Calls the function to get the pictures
      getPictures();
    }
  }
  
  function getPictures() {
    // Prepare AJAX...
    if (self.fetch) {
      // JKLOL Chrome supports Fetch...
      // Indicate the user that you are loading the pictures
      btn.textContent = 'Loading...';
        
      fetch('./api/pictures/fetch.php').then(function (response) {
        // PHP Returns a JSON object, so return it that way!
        return response.json();
      }).then(function (response) {
        // The response in JSON format arrives in the response variable
        // if the Response was successful change the button to green
        if (response.success === true) {
          btn.textContent = 'Success!';
          btn.classList.add('is-success');

          // Show the images that you got.
          resetGrid();

          drawPictures(response.data);
          drawPictures(response.data);
          drawPictures(response.data);
          drawPictures(response.data);
        }
        
        // Reset the button
        resetBtn();

      }).catch(function (err) {
        btn.textContent = 'Error!';
        btn.classList.remove('is-success');
        btn.classList.add('is-danger');
        
        console.log(err);
        
        // Reset the button
        resetBtn();
      });
    } else {
      // Fetch is not supported, have to do it the old XMLHttpReq way.
    }
  }
  
  function resetBtn(time = 2000) {
    window.setTimeout(function () {
      // After 2 seconds (default, or set by input), reset the button
      btn.textContent = 'Get pictures';
      btn.className = 'button';
    }, time);
  }
  
  function drawPictures(pictures) {
    // Check if you have pictures
    if (pictures.length > 0) {
      pictures.forEach(function (pic) {
        // Set the URL to the picture
        var url = 'http://sifokk.hu/img/uploads/' + pic.picture;

        // Start creating the elements
        var img = document.createElement('img');
        img.src = url;
        img.className = 'thumbnail';

        // We have the image, we have to append it to the container
        container.appendChild(img);
      });
    } else {
      var el = document.createElement('p');
      el.textContent = 'Seems like you have no pictures. FeelsBadMan :(';

      container.appendChild(el);
    }
  }
  
  function resetGrid() {
    // We had images, reset the current grid
    // FASTEST WAY:

    while (container.lastChild) {
        container.removeChild(container.lastChild);
      }
  }
  
  init();
})();