document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById('image-modal');
    var modalImg = document.getElementById('modal-img');
    var captionText = document.getElementById('caption');
    
    // Get all images in the feature gallery
    var images = document.querySelectorAll('.feature-gallery .feature .image');

    // Add click event listener to each image
    images.forEach(function (img) {
        img.addEventListener('click', function () {
            modal.style.display = 'block'; // Show the modal
            modalImg.src = this.src; // Set the modal image source
            captionText.innerHTML = this.alt; // Set the caption
        });
    });

    // Get the close button
    var span = document.getElementsByClassName('close')[0];
    
    // When the user clicks on the close button, close the modal
    span.onclick = function () {
        modal.style.display = 'none';
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
});