const paymentBoxes = {
    card: document.getElementById('cardBox'),
      upi: document.getElementById('upiBox'),
      netbanking: document.getElementById('netbankingBox'),
      wallet: document.getElementById('walletBox')
}
const paymentSelect = document.getElementById('payment');
paymentSelect.addEventListener("change",()=>{
    Object.values(paymentBoxes).forEach(box=>box.style.display='none');
    const selectedBox = paymentBoxes[paymentSelect.value];
    if(selectedBox){
        selectedBox.style.display = 'block';
    };
})
