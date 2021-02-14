"use strict";
document.addEventListener("DOMContentLoaded", () => {

    function Req({method, url, error, okFunction, errFunction}) {
        const request = new XMLHttpRequest();
        request.open(method, url);
        request.setRequestHeader("Content-type", "application/json; charset=utf-8");
        request.send();
        request.addEventListener("load", () => {
            let data = JSON.parse(request.response);
            if (request.status === 200) {
                console.log(data);
                okFunction(data);
            } else {
                errFunction(error);
            }
        });
    }


    document.querySelector("button").addEventListener("click", (e) => {
        e.preventDefault();
        Req({
            method: "GET",
            url: "http://localhost:3000/people",
            error: "Произошла ошибка...",
            okFunction(data) {
                data.forEach(item => {
                    let card = document.createElement('div');
                    card.classList.add('card');
    
                    let icon;
                    if (item.sex === "male") {
                        icon = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq2iymLSxb5PLHWHaiwvT-WYI4Lf0Aqi45yA&usqp=CAU";
                    } else {
                        icon = "https://img.icons8.com/ios/452/female.png";
                    }
    
                    card.innerHTML = `
                        <img src=${item.photo} alt="photo">
                        <div class="name">${item.name} ${item.surname}</div>
                        <div class="sex">
                            <img src=${icon}>
                        </div>
                        <div clas="age">${item.age}</div>
                    `;
                    document.querySelector('.app').append(card);
                });
            },
            errFunction(error) {
                console.error({error});
            }
        });
    }, {once: true});

});
