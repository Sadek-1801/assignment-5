const coupon15 = document.getElementById('coupon-15');
const coupon20 = document.getElementById('coupon-20');
const remainingSeat = document.getElementById('remaining-seat');
const fare = parseInt(document.getElementById('fare').innerText);
const seatCount = document.getElementById('seat-count');
const total= document.getElementById('total');
const grandTotal= document.getElementById('grand-total');
const couponInput= document.getElementById('coupon-input');
const couponBtn= document.getElementById('coupon-btn');
const name= document.getElementById('name');
const number= document.getElementById('number');
const email= document.getElementById('email');
const next= document.getElementById('next');
const seats = document.querySelectorAll('.btn-active')
const tableBody = document.getElementById('table-body')
let count = 0;
let sum = 0;

for(let seat of seats){
    seat.addEventListener('click', function(e){
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        td1.innerText = seat.innerText;
        td2.innerText = 'Economy';
        td3.innerText = fare;
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tableBody.appendChild(tr);
        count++;
        sum += fare;
        total.innerText = sum;
    })
    
}


