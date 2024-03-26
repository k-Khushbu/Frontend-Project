document.addEventListener("DOMContentLoaded", function(){
    Promise.all([
        fetch('header.html').then(response => response.text()),
        fetch('footer.html').then(response => response.text())
    ]).then(function([headerhtml, footerhtml]){
        document.body.insertAdjacentHTML('afterbegin',headerhtml);
        document.body.insertAdjacentHTML('beforeend',footerhtml);
    }).catch(function(error){
        console.error('not able to fetch header and footer: ', error);
    });
});
