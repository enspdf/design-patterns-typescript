import IPaymentMethod from "../interfaces/payment-method";

export default class Paypal implements IPaymentMethod {
    get commision(): number {
        return 0.06;
    };
}