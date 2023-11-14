// masukan nama
let NameWelcome = document.querySelector('.NameWelcome')

let nama = localStorage.getItem('kunci')
if(!nama){
    nama = prompt('masukan nama anda')
    localStorage.setItem('kunci', nama)
}
NameWelcome.innerHTML = `hallo ${nama}`

// ganti nama
let gantiNama = (e)=>{
    nama = prompt('masukan nama anda')
    localStorage.setItem('kunci', nama)
    e.preventDefault() ;
}  