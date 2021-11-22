import React, { useState, useEffect } from "react";
import Input from "../Input/Input";
import { useSelector, useDispatch} from 'react-redux'
import { addResluts, changeCurrency, addExchanges} from "../../store/features/converterSlice";
import { fetchData } from "../../api/fetchData";
import { IResultsData } from "../../models/Converter"


const Inputs = () => {

    const [amount,setAmount] = useState<number>(0);
    const [amountInFromCurrency,setAmountInFromCurrency] = useState<boolean>(true);
    const resultsData = useSelector((state:IResultsData) => state.converter.results)
    const results = useSelector((state:any) => state.converter.results.results)
    const firstExchange = useSelector((state:IResultsData) => state.converter.results.base)
    const currencyRate = useSelector((state:IResultsData) => state.converter.currencyRate)
    const exchanges = useSelector((state:IResultsData) => state.converter.exchanges)
    const dispatch = useDispatch()


    useEffect(() => {
        fetchData(dispatch, addResluts)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const exchangeResults = resultsData?.results && Object.keys(resultsData?.results)
    const keys = resultsData?.results && Object.values(resultsData?.results)[0];

    useEffect(() => {
        dispatch(addExchanges(exchangeResults))
        dispatch(changeCurrency(keys))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[resultsData])

    let toAmount, fromAmount
    
    if (amountInFromCurrency) {
      fromAmount = amount
      toAmount = amount * currencyRate
    } else {
        
      toAmount = amount
      fromAmount = amount / currencyRate
    }


    const fromAmountToCurrency = (e:any) => {
        console.log(e.target.value)
        setAmountInFromCurrency(true)
        setAmount(e.target.value)

        
    }
    const fromCurrencyToAmount = (e:any) => {
        setAmountInFromCurrency(false)
        setAmount(e.target.value)
    }
    const changeExchange = (e:any) => {
        dispatch(changeCurrency(results[e.target.value]))
    }
    return (
        <div>
            <Input amount={fromAmount}
                   onChange={fromAmountToCurrency}
                   firstExchange={firstExchange}/>
            <h1>=</h1>
            <Input amount={toAmount} 
                   onChange={fromCurrencyToAmount}
                   exchange={exchanges}
                   currency={currencyRate}
                   changeCurrency={changeExchange}
                   />
        </div>
    )
}


export default Inputs;