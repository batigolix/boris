r(function(){
    (function ($, Drupal) {
        //Start function
            alert('hi');
        //End function
    })(jQuery, Drupal);
});

function r(f){
    /in/.test(document.readyState)?setTimeout('r('+f+')',9):f()
}
