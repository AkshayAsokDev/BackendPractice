
const endpoint = "https://open.er-api.com/v6/latest";

async function getCurrencies(request, response) {
    
    async function getCurrencyData() {
        try {
            const data = await fetch(endpoint);
            const jsonData = await data.json();
            return jsonData
        }
        catch(err){
            console.log("Error during fetching of currency data => ", err);
            return -1
        }
    }

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

module.exports = {
    getCurrencies
}