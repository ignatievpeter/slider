let index = 0;

const leftButton = document.querySelector('#prev')
const rightButton = document.querySelector('#next')
const numbers = document.querySelectorAll('.pic')


function showImage(i) {
    index += i
    console.log(index)
    let images = document.querySelectorAll('.image')
    let nav = document.querySelectorAll('.pic')

    for (i = 0; i < images.length; i++)
    {
        images[i].style.display = 'none'
    }

    for (i = 0; i < nav.length; i++) {
        nav[i].className = nav[i].className.replace(" active", "")
    }

    if (index > images.length -1) index = 0

    if (index < 0) index = images.length -1
    console.log("images length", images.length, )
    console.log(index)
    images[index].style.display = 'block'
    nav[index].classList.add('active')
}

showImage(1)
rightButton.addEventListener("click", function(){ showImage(1); })
leftButton.addEventListener("click", function(){ showImage(-1); })
// numbers.addEventListener('click', ()=>{
//     index = numbers.;
//     console.log(numbers.textContent, index)
//     let images = document.querySelectorAll('.image')
//     let nav = document.querySelectorAll('.pic')
//
//     for (let i = 0; i < images.length; i++)
//     {
//         images[i].style.display = 'none'
//     }
//
//     for (let i = 0; i < nav.length; i++) {
//         nav[i].className = nav[i].className.replace(" active", "")
//     }
//
//     if (index > images.length -1) index = 0
//
//     if (index < 0) index = images.length -1
//     console.log("images length", images.length, )
//
//     images[index].style.display = 'block'
//     nav[index].classList.add('active')
// })
