import config from '../config';

const stripe = require('stripe')(config.keys.stripe);

const charge = (id: string, amount: number) => {
    return stripe.charges.create({
        source: id,
        currency: "usd",
        amount: amount * 100,
        description: "Thanks for the scraps, stupid."
    })
}

export default charge;