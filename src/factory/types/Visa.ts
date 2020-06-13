import IPaymentMethod from "../interfaces/payment-method";

export default class Visa implements IPaymentMethod {
    get commision(): number {
        return 0.05;
    };
}