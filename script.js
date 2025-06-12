var image;
var grayscale;

function upload() {
    var imgcanvas = document.getElementById('can');
    var imgcanvas2 = document.getElementById("can2");
    var fileinput = document.getElementById('finput');
    image = new SimpleImage(fileinput);
    grayscale = new SimpleImage(fileinput); 
    image.drawTo(imgcanvas);
    image.drawTo(imgcanvas2);
}

function makeGray() {
    for (var pixel of image.values()) {
        var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
        pixel.setRed(avg);
        pixel.setGreen(avg);
        pixel.setBlue(avg);
    }
    var imgcanvas2 = document.getElementById('can2');
    image.drawTo(imgcanvas2);
}