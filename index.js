let images = {
    london: {
        image1: "assets/image5.png",
        image2: "assets/image2.png",
        image3: "assets/image1.png",
        image4: "assets/image3.png",
        image5: "assets/image4.png",
        image6: "assets/image6.png",
    }
}

let btns = document.querySelectorAll(".dest-btn");
let imgTags = document.querySelectorAll(".img");


console.log(imgTags)
btns.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        console.log(btn.dataset.place)
        switch (btn.dataset.place) {
            case "london":
                console.log("it is london")
                Array.from(imgTags).forEach((img)=>{
                    switch (img.dataset.img) {
                        case "img1":
                            img.src = images.london.image1;
                            break;
                        case "img2":
                            img.src = images.london.image2;
                            break;
                        case "img3":
                            img.src = images.london.image3;
                            break;
                        case "img4":
                            img.src = images.london.image4;
                            break;
                        case "img5":
                            img.src = images.london.image5;
                            break;
                        case "img6":
                            img.src = images.london.image6;
                            break;


                    }
                })

                break;
            case "bangkok":
                break;
            case "england":
                break;
            case "singapore":
                break;
            case "italy":
                break;
        }
        // console.log(btn.dataset.place)

    })
})