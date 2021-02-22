import * as React from 'react';
import { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import apiService from '../utils/api-service';

const DonateForm = (props: DonateFormProps) => {
    const [name, setName] = useState<string>('');
    const [amount, setAmount] = useState<string>('');

    const stripe = useStripe();
    const elements = useElements();

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const handleAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(e.target.value);
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try { 
            const cardElement = elements.getElement(CardElement);
            const {token, error} = await stripe.createToken(cardElement);
            const r = await apiService("/api/donate", "POST", { amount, token });
            console.log(r);
            setAmount('');
            cardElement.clear();
        } catch (e) {
            throw e;
        }
    }

    return (
        <>
        <p>Donate form is not live. Will return a promise Token in the Console.</p>
        <p>Please enter alternating 4 and 2 ( 424242424242... )
            until space is taken up. Yes, even for the expiration and zipcode :)
        </p>
        <form onSubmit={handleSubmit} className="d-flex flex-column">
            <label>Name: </label><input type="text" value={name} onChange={handleName} className="border border-dark" ></input>
            <label>Amount: </label><input type="text" value={amount} onChange={handleAmount} className="border border-dark" ></input>
            <label>CC Info: </label><CardElement className="border border-dark mb-3" />
            <button>Charge!</button>
        </form>
        </>
    );

};

interface DonateFormProps { }

export default DonateForm;