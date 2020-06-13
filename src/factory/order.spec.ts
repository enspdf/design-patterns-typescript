import 'mocha';

import { expect } from 'chai';

import PaymentType from './enums/PaymentType';
import Order from './order';
import MasterCard from './types/MasterCard';
import Paypal from './types/Paypal';
import Visa from './types/Visa';

let order1 = new Order(PaymentType.Visa, 100);
let order2 = new Order(PaymentType.MasterCard, 100);
let order3 = new Order(PaymentType.Paypal, 100);

order1.create();
order2.create();
order3.create();

describe('Order - Visa', () => {
    it('Order must be paid by visa', () => {
        expect(true).to.equal(order1.paymentType instanceof Visa);
    });

    it('Order commission must be 5', () => {
        expect(5).to.equal(order1.commission);
    });
});

describe('Order - MasterCard', () => {
    it('Order must be paid by mastercard', () => {
        expect(true).to.equal(order2.paymentType instanceof MasterCard);
    });

    it('Order commission must be 4', () => {
        expect(4).to.equal(order2.commission);
    });
});

describe('Order - Paypal', () => {
    it('Order must be paid by paypal', () => {
        expect(true).to.equal(order3.paymentType instanceof Paypal);
    });

    it('Order commission must be 6', () => {
        expect(6).to.equal(order3.commission);
    });
});