document.addEventListener( function() {
    var downloadButton = document.getElementById("downloadButtonAndroid");
    
    downloadButton.addEventListener("click", function() {
        var link = document.createElement("a");
        link.href = "/CercApp.apk"; // Reemplaza con la ruta de tu archivo APK
        link.download = "CERCAPP.apk"; // Nombre del archivo que se descargará
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });

    var downloadButtonIOS = document.getElementById("downloadButtonIOS");
    
    downloadButtonIOS.addEventListener("click", function() {
        var link = document.createElement("a");
        link.href = "ruta/a/tu/archivo.ios"; // Reemplaza con la ruta de tu archivo iOS
        link.download = "CEARCAPP.ios"; // Nombre del archivo que se descargará
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
    var logo = document.querySelector(".logo2");
    var texts = document.querySelectorAll(".texto-animado");

    // Añadir clases para iniciar animaciones
    logo.classList.add("animate");
    texts.forEach(function(text) {
        text.classList.add("animate");
    });
});

