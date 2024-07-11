/*document.addEventListener( function() {
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

*/
document.addEventListener('DOMContentLoaded', function () {
    const galleryItems = document.querySelectorAll('.gallery-item');
    let currentIndex = 0;

    function updateGallery() {
        galleryItems.forEach((item, index) => {
            item.classList.remove( 'gallery-item-1', 'gallery-item-2', 'gallery-item-3',
                'gallery-item-4', 'gallery-item-5', 'gallery-item-6',
                'gallery-item-7', 'gallery-item-8', 'gallery-item-9',
                'gallery-item-10', 'gallery-item-11', 'gallery-item-12',
                'gallery-item-13', 'gallery-item-14', 'gallery-item-15', 'gallery-item-16');
            const newIndex = (index + currentIndex) % galleryItems.length;
            item.classList.add(`gallery-item-${newIndex + 1}`);
        });
    }

    function moveNext() {
        currentIndex = (currentIndex + 1) % galleryItems.length;
        updateGallery();
    }

    setInterval(moveNext, 3000);

    updateGallery();
});


const menu = document.querySelector(".menu>i")
const opciones = document.querySelector(".opciones")

menu.addEventListener("click", ()=> {
    opciones.classList.toggle("show")
    if(menu.classList.contains("bx-menu-alt-right")){
        menu.classList.remove("bx-menu-menu-alt-right")
    }else{
        menu.classList.add("bx-menu-alt-right")
    }

})
