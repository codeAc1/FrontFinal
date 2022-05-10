function CountBasket() {
    let basket = JSON.parse(localStorage.getItem("basket"));
    //let countPro = basket.reduce((total, p) => total + p.Count, 0);
    let countItem = basket.length
    document.getElementById("ProCount").innerText = countItem;
    document.getElementById("ProCount_mob").innerText = countItem;

}
CountBasket();

// let OzVesait1=document.querySelectorAll(".choice")
// for(let elem of OzVesait)
// {
//     if(elem.textContent.includes("Öz vəsaiti hesabına") ||elem.textContent.includes("Parametrlər üzrə") )
//     {
//         elem.click();
//     }
// }

// let Kredit1=document.querySelectorAll(".choice")
// for(let elem of Kredit)
// {
//     if(elem.textContent.includes("İpoteka krediti hesabına") || elem.textContent.includes("Parametrlər üzrə") )
//     {
//         elem.click();
//     }
// }
// /////////////////////////

// let OzVesait=document.getElementsByTagName("span")
// for(let elem of OzVesait)
// {
//     if(elem.textContent.includes("Öz vəsaiti hesabına") ||elem.textContent.includes("Parametrlər üzrə") )
//     {
//         elem.click();
//     }
// }

// let Kredit=document.getElementsByTagName("span")
// for(let elem of Kredit)
// {
//     if(elem.textContent.includes("Öz vəsaiti hesabına") ||elem.textContent.includes("Parametrlər üzrə") )
//     {
//         elem.click();
//     }
// }

///layihe

// let layihe=document.getElementsByTagName("select")
// let l_val
// for(let i=0; i<layihe.length; i++)
// { if(layihe[i].textContent.includes("Yasamal Yaşayış Kompleksinin ikinci mərhələsi"))
//     {
//         layihe[i].lastElementChild.previousElementSibling.selected = true;
//         l_val=layihe[i].lastElementChild.previousElementSibling.getAttribute("value")
//     }
// }

// let layiheset=document.getElementsByTagName("input")
// for(let i=0; i<layiheset.length; i++)
// { 
//  if(i==3)
//  {
//      layiheset[3].setAttribute("value",l_val)
     
//  }
// }

//axtar btn aktiv

// let axtarbtn=document.getElementsByTagName("button")
// for (let i=0;i<axtarbtn.length;i++)
// {
//     if(axtarbtn[i].textContent.includes("Axtar"))
//     {
//         axtarbtn[i].disabled=false;
//     }
// }



//otaq sayi

// let otaq=document.getElementsByTagName("li")
// for(let i=0; i<otaq.length; i++)
// {
//     if(otaq[i].textContent.includes("3 otaqlı"))
//     {
//         otaq[i].click();
//         break;
//     }
    
    
// }

///evi sec



// function sec(){
//     let list=document.getElementsByTagName("tr")
// for(i=0;i<list.length;i++)
// {
//     const randomIndex = Math.floor(Math.random() * (list.length - 10 + 1) + 10)
//     const randomElement = list[randomIndex];
//     for(let a=0; a<randomElement.childElementCount; a++)
//     {
//         if(randomElement.children[4].textContent.includes("3"))
//         {
//             randomElement.children[4].parentElement.click()
//         }
//     }
// }
// }
// sec()

// function sec(){
//     let list=document.getElementsByTagName("tr")
// for(i=0;i<list.length;i++)
// {
//     const randomIndex = Math.floor(Math.random() * (list.length - 10 + 1) + 10)
//     const randomElement = list[randomIndex];
//     randomElement.click();
// }
// }
// sec()


// (function nextbtnactive()
// {
//     let nextbtn = document.getElementsByTagName("button")
//     for (let elem of nextbtn)
//     {
//         if (elem.textContent.includes("Növbəti"))
//         {
//             elem.disabled = false;
//         }
//     }
// }());


