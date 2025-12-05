
const endpoint = "https://open.er-api.com/v6/latest";



async function getCurrencies(request, response) {
    
    

    const currencyData = await getCurrencyData();
    // console.log(Object.keys(currencyData.rates));
    
    // if error
    if(currencyData === -1){
        response.status(500).json({
            "message" : "The service is currently down, please check again later"
        })
    }
    else {
        const payload = Object.keys(currencyData.rates);
        response.status(200).json(payload);
    }
    
}



async function convertCurrencies(request, response) {
    // extract the query params
    const query = request.query;
    const value = query.value;
    const currency = query.currency;
    const to_currency = query.to_currency;
    console.log(`${value} ${currency} ${to_currency}`);
    

    // fetch currencyData
    let currencyData = await getCurrencyData();
    // console.log(currencyData.rates);

    // run validations
    // if fail, return error
    if(!validate(value, currency, to_currency)){
        response.status(400).json({
            "message" : "Incomplete or Incorrect data passed"
        })
    }
    else if (!Object.keys(currencyData.rates).includes(currency) || !Object.keys(currencyData.rates).includes(to_currency)){
        response.status(404).json({
            "message" : "Cannot find given currency code"
        })
    }
    // if pass, run convert logic
    else {
        
        currencyData = await getCurrencyData(to_currency);

        if(currencyData === -1){
            response.status(500).json({
                "message" : "The service is currently down, please check again later"
            })
        }
        else{
            const scale = currencyData.rates[currency];
            const result = value * scale;
            const payload = {
                "result" : result
            }

            // return the result
            response.status(200).json(payload);
        }
        
        
    }

    
    
}

module.exports = {
    getCurrencies,
    convertCurrencies
}

// helper functions
async function getCurrencyData(curr) {
        try {
            let data;
            if(!curr){
                data = await fetch(endpoint);
            }
            else{
                data = await fetch(endpoint+`/${curr}`);
            }
            const jsonData = await data.json();
            return jsonData
        }
        catch(err){
            console.log("Error during fetching of currency data => ", err);
            return -1
        }
}

function validate(value, currency, to_currency){

    if (!value || value<0){
        return false
    }
    if (!currency || currency.length!==3){
        return false
    }
    if (!to_currency || to_currency.length!==3){
        return false
    }

    return true
}