import React, { useState } from 'react';
import Select from 'react-select';

function Form() {
    const [price, setPrice] = useState(0);
    const [tip, setTip] = useState(0);
    const [grossPrice, setGrossPrice] = useState(0);

    const tipOptions = [
        { value: 0.05, label: '5%' },
        { value: 0.10, label: '10%' },
        { value: 0.15, label: '15%' },
        { value: 0.20, label: '20%' }
    ]
    const vat = 0.08;

    const handleSubmit = (event) => {
        event.preventDefault();
    };
    // const handleChange = (event) => {
    //     const price = event.target.name;
    //     console.log(event.target.value);
    // };
    const handleClick = () => {
        setGrossPrice(price*(1+vat)*(1+tip.value));
        console.log(grossPrice);
    };
    const handleSubmitChange = (tip) => {
        setTip(tip);
        console.log(tip.value);
    };
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <input type="number" name="price" placeholder="net price" onChange={event => setPrice(event.target.value)} />
            </div>
            <div>
                <Select value={tip} options={tipOptions} onChange={handleSubmitChange} />
            </div>
            <div>
                <button type="button" onClick={handleClick}>Calculate gross value</button>
            </div>
            <div>
                <h2>{grossPrice}</h2>
            </div>
        </form>
    );
}

export default Form;