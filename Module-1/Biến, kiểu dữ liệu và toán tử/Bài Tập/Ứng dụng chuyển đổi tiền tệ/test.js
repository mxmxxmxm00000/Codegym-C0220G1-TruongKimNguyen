
    function convert() {
        let result=0;
        let amount = document.getElementById("amount");
        let fromCurrency = document.getElementById("fromCurrency").value;
        let toCurrency =document.getElementById("toCurrency").value;
        if(fromCurrency==="VND" && toCurrency==="USD") {
            result = amount.value/23000;
           result = parseFloat(result).toFixed(2) + " USD";

        }
        else if(fromCurrency==="USD" && toCurrency==="VND") {
            result = amount.value * 23000 +"VND";
        }
        document.getElementById("result").value=result
        result.innerText = result;
}






