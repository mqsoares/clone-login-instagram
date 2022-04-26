const images = ['instagram01.png', 'instagram02.png', 'instagram03.png', 'instagram04.png'];

let img_current = 0;

function ChangeImg() {

    for (let i = 1; i < images.length; i++) {
        img_current++;
        if (img_current == images.length){
            img_current = 0;
        }        
    }
    
    document["img-dynamic"].src = "./assets/img/" + images[img_current];
    let x = setTimeout ("ChangeImg()", 3000);
    
}