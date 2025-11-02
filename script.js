let nom = ""
function enterName(event){
    
  nom = event.target.value
}
console.log(nom)
function DisplayName(){
    let li = document.createElement('li')
    document.getElementById('list').appendChild(li).innerText = nom
}
let isClicked = false
let ch_name = ""
function chooseName(){

    isClicked = true
   let li_s = document.querySelectorAll('ul li');
   let rand_ind = Math.floor(Math.random() * li_s.length)
   ch_name = li_s[rand_ind]

   
  document.getElementById('nomchoisir').innerText = ch_name.textContent
 
   
  
   
   li_s[rand_ind].remove()
//    document.getElementById('popupDiv').classList.add('display')
}  

function closePop(){
     
        document.getElementById('popupDiv').style.display = "none"

}
 
