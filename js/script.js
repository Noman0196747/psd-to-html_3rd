let position = document.querySelector('.position')
let back_to_top = document.querySelector('.back_to_top')
let pree_lodder = document.querySelector('.pree_lodder')
window.addEventListener('scroll', function(){
    let scroll_value = Math.floor(window.scrollY)
    if(scroll_value>100){
        position.classList.add('sticky')
        back_to_top.classList.add('show')
       
        
    }else{
        position.classList.remove('sticky')
        back_to_top.classList.remove('show')
    }
})
window.addEventListener('load', function(){
    setTimeout(()=>{
    pree_lodder.style.display ='none'
},1900)
})
AOS.init({
    delay:"50",
    duration:"1000"
});
