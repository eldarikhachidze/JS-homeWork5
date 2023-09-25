// #1

let homeWork = document.getElementById('homeWork1')

let childDiv = document.createElement('div')
childDiv.classList.add('wrapper')

let image = document.createElement('img')
image.src = 'https://e7.pngegg.com/pngimages/490/824/png-clipart-product-design-logo-brand-trademark-javascript-logo-text-trademark.png'
image.alt = 'JS'
image.style.width = '700px'

let title = document.createElement('h2')
title.textContent = 'JS'
title.style.color = 'red'
title.style.fontSize = '30px'

childDiv.appendChild(image)
childDiv.appendChild(title)

homeWork.appendChild(childDiv)

// #2

let homeWork2 = document.querySelectorAll('.divName')
let name = document.createElement('p')
name.textContent = 'second home work'
name.classList.add('text')

homeWork2.forEach((div) => {
    div.appendChild(name.cloneNode(true))
})

// #3

let link = document.createElement('a')
link.href = 'https://google.com';
link.textContent = 'google link'
link.target = '_blank'
link.classList.add('link')
link.classList.remove('link')
link.classList.add('newClass')

let homeWork3 = document.querySelector('.box')

homeWork3.appendChild(link)











