const listContainer= document.querySelector('#list-container')
const navToggle= document.querySelector('#nav-toggle')
const navClose= document.querySelector('#nav-close')
const links= document.querySelectorAll('.list-item')
const header= document.querySelector('#header')

links.forEach((link)=>{
    link.addEventListener('click', (e)=>{
        if (e.currentTarget) {
            listContainer.classList.remove('show-menu')
        }
    })
})

navToggle.addEventListener('click', ()=>{
    listContainer.classList.add('show-menu')
})

navClose.addEventListener('click', ()=>{
    if (listContainer.classList.contains('show-menu')) {
        listContainer.classList.remove('show-menu')
    }
})







// for (const link of links) {
//     link.addEventListener('click', ()=>{
//         for (const otherLinks of links) {
//             otherLinks.classList.remove('add-color')
//         }

//         link.classList.add('add-color')
//     })
// }