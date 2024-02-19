const coupon15 = document.getElementById('coupon-15');
const coupon = document.getElementById('coupon');
const coupon20 = document.getElementById('coupon-20');
const remainingSeat = document.getElementById('remaining-seat');
const fare = parseInt(document.getElementById('fare').innerText);
const seatCount = document.getElementById('seat-count');
const total= document.getElementById('total');
const grandTotal= document.getElementById('grand-total');
const couponInput= document.getElementById('coupon-input');
const couponBtn= document.getElementById('coupon-btn');
const nameFeild= document.getElementById('name');
const numberFeild= document.getElementById('number');
const emailFeild= document.getElementById('email');
const next= document.getElementById('next');
const seats = document.querySelectorAll('.btn-active')
const tableBody = document.getElementById('table-body');
const modalOpen = document.getElementById('modal')
const modalBtn = document.getElementById('btn-close')
const busSection = document.getElementById('bus-section')
const discounted = document.getElementById('discount')
const discountAmount = document.getElementById('discount-amount')
// new Element
let count = 0;
let sum = 0;
remainingSeat.innerText = seats.length;

for(let seat of seats){
    seat.addEventListener('click', function(e){
        let btn = e.target;
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
        count++;
        sum += fare;
        if(count <= 0){
            alert("Please select atleast one seat")
        }else if(count > 4 ){
            alert("you cannot choose more than 4 seats")
        }else {
            tableBody.appendChild(tr);
            total.innerText = sum;
            grandTotal.innerText = sum;
            btn.style.backgroundColor = "#1DD100";
            btn.style.color = "#fff";
            btn.disabled = true;
            seatCount.innerText = count;
            remainingSeat.innerText = seats.length - count;
            couponVal(count);
            next.disabled = false;
            modalBtn.addEventListener("click", function(){
                window.location.reload()
            })

        }
        
        
    })
}
function couponVal(count){
    if (count === 4){
        couponInput.removeAttribute('disabled')
        couponBtn.addEventListener("click", function(){
            if(couponInput.value === "NEW15"){
                let discount = Math.round(sum * 0.15);
                discountAmount.innerText = discount;
                grandTotal.innerText = sum - discount;
                coupon.classList.add('hidden')
                discounted.classList.remove('hidden')
                couponInput.value = "";
            }else if(couponInput.value === "Couple 20"){
                let discount = sum * 0.15;
                discountAmount.innerText = discount;
                grandTotal.innerText = sum - discount;
                coupon.classList.add('hidden')
                discounted.classList.remove('hidden')
                couponInput.value = "";
            }else {
                grandTotal.innerText = sum;
                alert("Please give valid coupon code");
                couponInput.value = "";
            }
        })
    }
}
function nextBtn(){
        if(numberFeild.value.length < 11){
            alert("Please Provide a Valid Cell Number") 
        }else
        {
        busSection.classList.add('hidden')
        modalOpen.classList.remove('hidden')
    }
}






