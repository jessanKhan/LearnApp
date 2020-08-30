export default class CryptoNewsData {
    // async getAnalyticDataEN() {
    //     const token = "pd7a4m4541i3lk09p82y096s";
    //     const data = fetch('https://api.mt5.com/get-analytics-by-filter?_format=json&type=12&limit=15&offset=0&_lang=en', {
    //         method: "post",
    //         headers: new Headers({
    //             Authorization: "Bearer " + token,
    //             "Content-Type": "application/x-www-form-urlencoded"
    //         })
    //     })
    //         .then(resp => resp.json())
    //         .then(data => data.result) //GET ITEMS ARRAY
    //     return data
    // }


    async getAnalyticDataEN() {
        const token = await "pd7a4m4541i3lk09p82y096s";
        const data = await fetch('https://api.mt5.com/get-analytics-by-filter?_format=json&type=12&limit=15&offset=0&_lang=en', {
            method: "post",
            headers: new Headers({
                Authorization: "Bearer " + token,
                "Content-Type": "application/x-www-form-urlencoded"
            })
        })
        let returnData = await data.json()
        console.log("JJJJJJJPP", returnData)
        // let dataList = {}
        // let mainResultData = returnData.result;
        // for (let i = mainResultData.length; i>0; i--){
        //     console.log("JJJJJJJFFF", mainResultData[i])
        // }


        // let reverseData = Object.entries(returnData.result);
        // reverseData = reverseData.reverse();
        // reverseData = { ...reverseData }
        // console.log("JJJJJJJ", reverseData)
        // return reverseData;
        return returnData.result;
    }
    async getAnalyticDataRU() {
        const token = await "pd7a4m4541i3lk09p82y096s";
        const data = await fetch('https://api.mt5.com/get-analytics-by-filter?_format=json&type=12&limit=15&offset=0&_lang=ru', {
            method: "post",
            headers: new Headers({
                Authorization: "Bearer " + token,
                "Content-Type": "application/x-www-form-urlencoded"
            })
        })
        let returnData = await data.json()
        return returnData.result;
    }


    async getNewsDataEN() {
        const token = "pd7a4m4541i3lk09p82y096s";
        const data = fetch('https://api.mt5.com/get-news-crypto-currency?limit=25&offset=0&access_token=uf8s7h4684s7er98w78h986q&_lang=en&_format=json', {
            method: "get",
            headers: new Headers({
                //Authorization: "Bearer " + token,
                "Content-Type": "application/x-www-form-urlencoded"
            })
        })
            .then(resp => resp.json())
            .then(data => data.result) //GET ITEMS ARRAY
        return data
    }

    async getNewsDataRU() {
        const token = "pd7a4m4541i3lk09p82y096s";
        const data = fetch('https://api.mt5.com/get-news-crypto-currency?limit=25&offset=0&access_token=uf8s7h4684s7er98w78h986q&_lang=ru&_format=json', {
            method: "get",
            headers: new Headers({
                // Authorization: "Bearer " + token,
                "Content-Type": "application/x-www-form-urlencoded"
            })
        })
            .then(resp => resp.json())
            .then(data => data.result) //GET ITEMS ARRAY
        return data
    }
}
