const cross=document.getElementById('cross');
const nav=document.getElementById('navbar');
const bar=document.getElementById('bar');
if(bar){
    bar.addEventListener('click', () =>{
      nav.classList.add('active');
      console.log('click')
    })
}
if(cross){
    cross.addEventListener('click', () =>{
        nav.classList.remove('active')
    })
}