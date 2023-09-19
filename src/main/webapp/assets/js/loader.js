/**
 * 
 */
window.addEventListener('load', function () {
    // Hide the loader
    const loader = document.querySelector('.loader');
    loader.style.display = 'none';

    // Display the content
    const content = document.querySelector('.content');
    content.setAttribute("style","display: flex;margin-left: 50px;flex-direction: row; margin-top: 20px;");
});
