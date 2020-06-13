import IPaymentMethod from '../interfaces/payment-method';

export default class MasterCard implements IPaymentMethod {
    get commision(): number {
        return 0.04;
    };
}