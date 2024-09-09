document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById('image-modal');
    var modalImg = document.getElementById('modal-img');
    var captionText = document.getElementById('caption');
    
    // Get all images in the feature gallery
    var images = document.querySelectorAll('.feature-gallery .feature .image');

    // Add click event listener to each image
    images.forEach(function (img) {
        img.addEventListener('click', function () {
            var captionDiv = img.parentElement.querySelector('.caption'); // Find the caption div
            modal.style.display = 'block'; // Show the modal
            modalImg.src = img.src; // Set the modal image source
            captionText.innerHTML = captionDiv ? captionDiv.innerHTML : 'No caption available'; // Set the caption from the caption div
        });
    });

    // Get the close button
    var span = document.getElementsByClassName('close')[0];
    
    // When the user clicks on the close button, close the modal
    span.onclick = function () {
        modal.style.display = 'none';
    };

    // When the user clicks anywhere outside of the modal content, close the modal
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
});