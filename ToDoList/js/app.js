// class
// class for add note to page
class Add{
    AddNote(){
        let p = document.createElement("p");
        p.classList.add("shownote");
        p.innerHTML = `${input.value}<a class="close">X</a>`
        getnote.appendChild(p);
        let ObjectAddLs = new AddLs();
        ObjectAddLs. AddToLocalStorage();
    }
}
//class for add to localstorage
class AddLs{
    AddToLocalStorage(){
        let ObjectGetLs = new GetLs();
        let arrayLs = ObjectGetLs.GetLocalStorage();
        arrayLs.push(input.value);
        localStorage.setItem("note" , JSON.stringify(arrayLs));
    }
}
//class for get data from localstorage
class GetLs{
    GetLocalStorage(){
        let ls;
        if(localStorage.getItem("note") == null){
            ls = [];
        }
        else{
            ls = JSON.parse(localStorage.getItem("note"))
        }
        return ls;
    }
}
//class for remove data from local storage
class Remove{
    RemoveFromLs(p){
        let pContent = p.textContent;
        let pContentSlice = pContent.slice(0,pContent.length - 1);
        let ObjectGetLs = new GetLs();
        let arrayLs = ObjectGetLs.GetLocalStorage();
        arrayLs.forEach((element , index) => {
            if(element === pContentSlice){
                arrayLs.splice(index , 1);
            }
            localStorage.setItem("note" , JSON.stringify(arrayLs));
        });
    }
}
//class for save data on page
class LoadLs{
    LoadFromLocalStorage(){
        let ObjectGetLs = new GetLs();
        let arrayLs = ObjectGetLs.GetLocalStorage();
        arrayLs.forEach(element => {
        let p = document.createElement("p");
        p.classList.add("shownote");
        p.innerHTML = `${element}<a class="close">X</a>`
        getnote.appendChild(p);
        });
    }
}
//class for present
class Peresent{
    PresentOnPage(){
        let body = document.querySelector("body");
        let div = document.createElement("div");
        div.classList.add("present");
        div.innerHTML = `<p>طراحی و اجرا توسط محمود کریمی</p>`
        body.appendChild(div);
        setTimeout(() => {
            document.querySelector(".present").remove();
        }, 5000);
    }
}
// variabls
//select input by id input
let input = document.querySelector("#input");
//select btn by id button
let button = document.querySelector("#button");
//select div by id getnote
let getNote = document.querySelector("#getnote");
let form = document.querySelector("form");
// addEventListeners
// addEventListeners for add note on page
form.addEventListener("submit" , function(e){
    e.preventDefault();
    let ObjectAdd = new Add();
    ObjectAdd.AddNote();
    form.reset();
})
// addEventListeners for remove note on page
getNote.addEventListener("click" , function(e){
    let p = document.querySelector(".shownote");
    if(e.target.classList.contains("close")){
        document.querySelector(".close").parentElement.remove();
        let ObjectRemove = new Remove();
        ObjectRemove.RemoveFromLs(p);
    }
})
//addEventListeners for load page
document.addEventListener("DOMContentLoaded" , function(){
    let ObjectLoadLs = new LoadLs();
    ObjectLoadLs.LoadFromLocalStorage();
    let ObjectPeresent = new Peresent();
    ObjectPeresent.PresentOnPage();
})