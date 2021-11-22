export interface IResultsData {
    converter: {
        currencyRate:number,
        exchanges:string[],
        results:{
            base:string,
            ms:number,
            results: {
                AMD:number,
                RUB:number
            }
        },
        updated:string
    }
}