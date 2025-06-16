const menu = document.getElementById('menu')
const close = document.getElementById('close')
const nav = document.getElementById('nav')
const hidden = document.getElementById('hidden')
const hidden1 = document.getElementById('hidden1')
const hidden2 = document.getElementById('hidden2')
const image = document.getElementById('image')
const image1 = document.getElementById('image1')
const image2 = document.getElementById('image2')

menu.addEventListener('click', ()=>{
    menu.style.display = 'none'
    nav.style.display = 'flex'
})

close.addEventListener('click', ()=>{
    menu.style.display = 'block'
    nav.style.display = 'none'
})

window.addEventListener('scroll', ()=>{
    nav.style.display = 'none'
    menu.style.display = 'block'
})

image.addEventListener('click', ()=>{
    image.style.display = 'none'
    hidden.style.display = 'flex'
})

hidden.addEventListener('click', ()=>{
    image.style.display = 'block'
    hidden.style.display = 'none'
})

image1.addEventListener('click', ()=>{
    image1.style.display = 'none'
    hidden1.style.display = 'flex'
})

hidden1.addEventListener('click', ()=>{
    image1.style.display = 'block'
    hidden1.style.display = 'none'
})

image2.addEventListener('click', ()=>{
    image2.style.display = 'none'
    hidden2.style.display = 'flex'
})

hidden2.addEventListener('click', ()=>{
    image2.style.display = 'block'
    hidden2.style.display = 'none'
})