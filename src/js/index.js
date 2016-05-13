var appIdNumber  = 0;
var winIdNumber  = 0;

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
        winIdNumber ++;
        var win = new ExternalWindow("Win_"+winIdNumber).then(function(wn){
            console.log("The window is ",wn);
        });
    });

    document.querySelector("#new-app").addEventListener("click", function(){
        var app = new initNewApp("App_"+appIdNumber).then(function(app){

            appIdNumber ++;
            console.log( "New App Created - appIdNumber: "+appIdNumber );
        })
    })
}

function initNoOpenFin(){
    alert("OpenFin is not available - you are probably running in a browser.");
    // Your browser-only specific code to go here...
}