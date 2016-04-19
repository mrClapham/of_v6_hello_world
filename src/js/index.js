document.addEventListener("DOMContentLoaded", function(){
    init();
});

function init(){
    /* Code common to both OpenFin and browser to go above.
     Then the specific code for OpenFin and browser only to be
     targeted in the try/catch block below.
     */
    try{
        fin.desktop.main(function(){
            initWithOpenFin();
        })
    }catch(err){
        initNoOpenFin();
    }
};

function initWithOpenFin(){
    document.querySelector("#new-win").addEventListener("click", function(){
        var win = new ExternalWindow();
        console.log("New win created ", win)
    });

    document.querySelector("#new-app").addEventListener("click", function(){
        var app = new initNewApp().then(function(app){
            console.log( "New App Created" );
        })
    })
}

function initNoOpenFin(){
    alert("OpenFin is not available - you are probably running in a browser.");
    // Your browser-only specific code to go here...
}