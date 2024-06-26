let asid =document.querySelector("aside")
let btn_aside=document.getElementById("btn-aside")
btn_aside.addEventListener("click", function(){
    if(asid.style.display=="block"){
        asid.style.display="none"
    }else{
        asid.style.display="block"

    }
}
)
// btn_aside.addEventListener("click", function(){
//     switch (asid.style.display="block") {
//         case asid.style.display="block":asid.style.display="none"
            
//             break;
    
//         default:asid.style.display="block"
//             break;
//     }
// }
// )
