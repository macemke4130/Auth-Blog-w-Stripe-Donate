import * as React from 'react';
import { useState, useEffect } from "react";
import { IPost } from '../utils/types';
import Moment from 'react-moment';
import { Link, useHistory } from 'react-router-dom';
import apiService from '../utils/api-service';
import Nav from '../components/Nav';

import DonateForm from '../components/DonateForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe("pk_test_51IMbG8KVHrCUICcwwBIOZWcHzhcANLiN05GyZljpfoMB0213eOh5KGM2iUrPutiwXyi39IeFqWP6eujPnzoJqOLT00xaNRSgRz");

const Compose = (props: ComposeProps) => {
    const [theTitle, setTheTitle] = useState<string>('');
    const [theContent, setTheContent] = useState<string>('');
    const [theTheUsername, setTheUsername] = useState<string>('');
    const [theError, setTheError] = useState<string>('');

    const history = useHistory();

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTheTitle(e.target.value);
    }

    const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTheContent(e.target.value);
    }

    useEffect(() => {

    }, []);

    return (
        <>
            <Nav />
            <Elements stripe={stripePromise}>
                <DonateForm />
            </Elements>
        </>
    );
};

interface ComposeProps { }

export default Compose;