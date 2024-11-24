const searchFunc = ()=>{
    let filter = document.querySelector("#myInput").value.toLowerCase();
    let myTable = document.querySelector("#myTable");
    let tr = myTable.getElementsByTagName("tr");
    //let tr =myTable.document.querySelectorAll("tr");

    for(var i = 0; i<tr.length; i++){
        let td =  tr[i].getElementsByTagName('td')[0];
        if(td){
            let textValue = td.textContent || td.innerHTML
            if(textValue.toLowerCase().indexOf(filter)> -1){
                tr[i].style.display =""
            }else{
                tr[i].style.display="none"
            }
        }
    }
}


