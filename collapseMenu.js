//ouvrir le menu, il prend une largeur de 250px et s'ouvresur la gauche
function openNav() {
    document.getElementById('sidebar1').style.width = "250px";
    document.getElementById('main').style.marginLeft = "250px";
}

//pour fermer la sidebar
function closeNav() {
    document.getElementById('sidebar1').style.width = "0";
    document.getElementById('main').style.marginLeft = "0";
}