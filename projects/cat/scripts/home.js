// Javascript for home page 


function startSlideshow() {
    let i = 0;
    let imageshow = setInterval(function(){
        let images = ["roo1.jpg", "roo2.jpg", "roo3.jpg", "roo4.jpg", "roo5.jpg", "roo6.jpg", "roo7.jpg"];
        let slideshowImages = document.getElementById("slideshow");

        if(i==images.length){
            i=0;
        }
        slideshowImages.src = `images/cat-slideshow/${images[i]}`;
        i++;
    }, 1000);

}
