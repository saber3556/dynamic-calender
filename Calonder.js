const currentdate = document.querySelector(".current-date"),
days = document.querySelector(".days"),
prevnexticon=document.querySelectorAll(".icons span");


let date = new Date(),
currentymonth=date.getMonth(),
currentyear=date.getFullYear();

const Months = ["January","Fabruary","March","April","May","June","July","August","September","October","November","December"];

const rendercalender = () => {
    let firstedayofmonth= new Date(currentyear,currentymonth,1).getDay(),
    lastedateofmonth= new Date(currentyear,currentymonth+1,0).getDate(),
    lastdayofmonth= new Date(currentyear,currentymonth,lastedateofmonth).getDay(),
    
    lastedateoflastmonth= new Date(currentyear,currentymonth,0).getDate();
    let titag="";
for (let i = firstedayofmonth; i >0; i--) {
    titag +=`<li class="inactive">${lastedateoflastmonth-i+1}</li>`;
    
}

for(let i=1;i<=lastedateofmonth;i++){
    let istoday = i ===date.getDate() && currentymonth ==new Date().getMonth() && currentyear === new Date().getFullYear() ? "active" : "";
        titag +=`<li class="${istoday}">${i}</li>`;
}

for(let i = lastdayofmonth; i<6 ;i++){
    titag +=`<li class="inactive">${i - lastdayofmonth+1}</li>`;
}

    currentdate.innerText = `${Months[currentymonth]} ${currentyear}`;
    days.innerHTML=titag;
}
rendercalender();

prevnexticon.forEach(icon =>{
icon.addEventListener("click",() =>  {
currentymonth = icon.id ==="prev" ? currentymonth - 1 :currentymonth+1;


if (currentymonth<0||currentymonth>11) {
    date= new Date(currentyear,currentymonth);
    currentyear=date.getFullYear();
    currentymonth=date.getMonth();
}else{
    date= new Date();
}
rendercalender();
})
})