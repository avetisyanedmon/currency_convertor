import { IInput } from "../../models";

const Input: React.FC<IInput> = ({amount, onChange, exchange, firstExchange, changeCurrency}) => {
    const inputValue = !isNaN(amount) ? amount: 0;
    
    return (
        <div>
            <input value={inputValue} onChange={(e) => onChange(e)} type='number'/>
            {
                firstExchange ? (
                <select value={firstExchange} >
                    <option>{firstExchange}</option>
                </select>
                ) :
                <select onChange={(e) => changeCurrency(e)}>
                    {exchange?.map((e:string) => {
                        return <option key={e} value={e}>{e}</option>
                    })}
                </select>
            }
        </div>
    )
}

export default Input;