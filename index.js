function decrement(){
    let value = parseInt(countValue.innerText);
    value--;
    countValue.innerText = value;
}
function increment(){
    let value = parseInt(countValue.innerText);
    value++;
    countValue.innerText = value;
}

const countValue = document.querySelector('#count');
