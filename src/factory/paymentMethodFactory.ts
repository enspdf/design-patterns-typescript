import PaymentType from './enums/PaymentType';
import IPaymentMethod from './interfaces/payment-method';
import MasterCard from './types/MasterCard';
import Paypal from './types/Paypal';
import Visa from './types/Visa';

export default class PaymentMethodFactory {
    public static createPaymentType(type: PaymentType): IPaymentMethod {
        if (type === PaymentType.MasterCard) {
            return new MasterCard();
        };

        if (type === PaymentType.Paypal) {
            return new Paypal();
        };

        if (type === PaymentType.Visa) {
            return new Visa();
        };

        throw new Error("Invalid payment method type");
    };
};