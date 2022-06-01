function managerBillFunction(){
    
    var similar = document.getElementById('similar');

    var NShip = document.getElementById('NameShipping');

    var ZShip = document.getElementById('ZipShipping');
    
    var NBill = document.getElementById('NameBilling');

    var ZBill = document.getElementById('ZipBilling');

    if(similar.checked){
        NBill.value = NShip.value;
        NBill.setAttribute('required',true);

        ZBill.value = ZShip.value;
        ZBill.setAttribute('required',true);
    }else{

        NBill.removeAttribute('required');
        NBill.value = "";
        
        ZBill.removeAttribute('required');
        ZBill.value = "";
    }
}