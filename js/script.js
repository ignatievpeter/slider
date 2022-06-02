let index = 0;

const leftButton = document.querySelector('#prev')
const rightButton = document.querySelector('#next')
const numbers = document.querySelectorAll('.pic')


function showImage(i) {
    index += i
    console.log(index)
    let images = document.querySelectorAll('.image')
    let nav = document.querySelectorAll('.pic')

    for (i = 0; i < images.length; i++) {
        images[i].style.display = 'none'
    }

    for (i = 0; i < nav.length; i++) {
        nav[i].className = nav[i].className.replace(" active", "")
    }

    if (index > images.length - 1) index = 0

    if (index < 0) index = images.length - 1
    console.log("images length", images.length,)
    console.log(index)
    images[index].style.display = 'block'
    nav[index].classList.add('active')
}

showImage(1)
rightButton.addEventListener("click", function () {
    showImage(1);
})
leftButton.addEventListener("click", function () {
    showImage(-1);
})

for (let i = 0; i < numbers.length; i++) {

    numbers[i].addEventListener('click', function () {
        let images = document.querySelectorAll('.image')
        let nav = document.querySelectorAll('.pic')

        for (let j= 0; j < images.length; j++) {
            images[j].style.display = 'none'
        }
        for (let j = 0; j < nav.length; j++) {
            nav[j].className = nav[j].className.replace(" active", "")
        }

        images[i].style.display = 'block'
        nav[i].classList.add('active')
    })
}
