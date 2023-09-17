
let gallery = document.querySelector('.gallery')
lightGallery(gallery,{
    controls:true,
    speed:500,
    plugins: [lgThumbnail],
})





























// const dataPhoto = [
//     {imgNumber:"img1",src:'././image/gallery/Photos/img1.jpeg' },
//     {imgNumber:"img2",src:'././image/gallery/Photos/IMG_1063.jpg' },
//     {imgNumber:"img3",src:'././image/gallery/Photos/April2022.jpg' },
//     {imgNumber:"img4",src :'././image/gallery/Photos/July 2021.jpeg' },
//     {imgNumber:"img5",src :'././image/gallery/Photos/November 2020.jpg' },
//     {imgNumber:"img6",src :'././image/gallery/Photos/July 2020.jpeg'},
//     {imgNumber:"img7",src :'././image/gallery/Photos/May 2019.jpeg' },
//     {imgNumber:"img8",src :'././image/gallery/Photos/May 2016.jpg'},
// ]

// const arrowRight = document.getElementById("arrowRight")
// const arrowLeft  = document.getElementById("arrowLeft")
// const modalImg = document.querySelector(".modal-img")


// const nextImage = () =>{

//      const currentAlt = modalImg.getAttribute("alt")
//      const currentImageIndex = dataPhoto.findIndex(item=>{
//      return item.imgNumber == currentAlt

//   })

//     if(currentImageIndex + 1>=dataPhoto.length){

//         modalImg.setAttribute("src" ,dataPhoto[0].src)
//         modalImg.setAttribute("alt" , dataPhoto[0].imgNumber)
//     }
//     else{
//         modalImg.setAttribute("src" ,dataPhoto[currentImageIndex +1].src)
//         modalImg.setAttribute("alt" , dataPhoto[currentImageIndex +1].imgNumber)  
//     }

// }



// const prevImage = () =>{

//      const currentAlt = modalImg.getAttribute("alt")
//      const currentImageIndex = dataPhoto.findIndex(item=>{
//      return item.imgNumber == currentAlt
//   })
//   console.log("currentImageIndex : " , currentImageIndex);
//     if(currentImageIndex - 1 < 0){

//         modalImg.setAttribute("src" ,dataPhoto[dataPhoto.length-1].src)
//         modalImg.setAttribute("alt" , dataPhoto[dataPhoto.length-1].imgNumber)
//     }
//     else{
//         modalImg.setAttribute("src" ,dataPhoto[currentImageIndex -1].src)
//         modalImg.setAttribute("alt" , dataPhoto[currentImageIndex -1].imgNumber)  
//     }

// }


// arrowRight.addEventListener("click" , nextImage)
// arrowLeft.addEventListener("click" , prevImage)

// document.addEventListener("click" , function(e){
//     if(e.target.classList.contains("gallery-item")){
//         const src = e.target.getAttribute("src");
//         const alt = e.target.getAttribute("alt")
//         document.querySelector(".modal-img").src = src;
//         document.querySelector(".modal-img").alt = alt;
//         const myModal = new bootstrap.Modal(document.getElementById('gallery-popup'));
//         myModal.show();
//     }
// })
