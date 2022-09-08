// export{}
'use strict'


const videos = document.querySelectorAll<HTMLVideoElement>(".slider__video2");
const products = document.querySelectorAll<HTMLElement>(".slider__product");
console.log({videos, products});

const $slider__video =  (document.querySelector('.slider__video') as HTMLVideoElement);
const $slider__left  = (document.querySelector('.slider__left') as HTMLDivElement);
products.forEach((e,i)=>{
    products[i].addEventListener("mouseenter", e =>{
        videos[i].play();
        videos[i].currentTime = 1;
        console.log(videos[i].duration);
    })
    products[i].addEventListener("mouseleave", e =>{
        videos[i].pause();
        setTimeout(()=>{
            videos[i].currentTime = 1;
        },200)
    })
})

$slider__left.addEventListener('mouseenter', e =>{
    $slider__video.play()
})
$slider__left.addEventListener('mouseleave', e =>{
    $slider__video.pause()
})