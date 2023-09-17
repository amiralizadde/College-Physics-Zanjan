let swiper = new Swiper(".mySwiper", {
    loop:true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
});



// const imgHomeElem      = document.getElementById('imageSlider');

// const containerSlider  = document.getElementById('home-image');
// const arrowRightElem   = document.getElementById('right');
// const arrowLeftElem    = document.getElementById('left');





// let indexImage = 1;

// function slideFunc () {

//     if (indexImage==4){
//         indexImage=1
//     }
//     if (indexImage==0){
//         indexImage=3
//     }

//     // containerSlider.style.animation="show 1s";

    // setTimeout(() => {
    //     containerSlider.style.animation="";
    // }, 1500);

//     if (indexImage==1) {
//         containerSlider.style.backgroundImage=("url('././image/home/slider1.jpg')");
//         containerSlider.style.backgroundPosition="center"
//         console.log('1');
//     }else if(indexImage==2){
//         containerSlider.style.backgroundImage=("url('././image/home/slider2.jpg')");
//         containerSlider.style.backgroundPosition="center"
//         console.log('2');
//     }else if(indexImage==3){
//         containerSlider.style.backgroundImage=("url('././image/home/slider3.jpg')");
//         containerSlider.style.backgroundPosition="bottom"
//         console.log('3');
//     }

// }

// function prevImage () {

//     indexImage--;
//     slideFunc();

// }
// function nextImage () {

//     indexImage++;
//     slideFunc();

// }

// setInterval(function () {
//     nextImage();
// },20000);


// arrowRightElem.addEventListener('click',nextImage)
// arrowLeftElem.addEventListener('click',prevImage)




// __________________________ home Slider_____________________________________




// window.addEventListener('load' , slider)