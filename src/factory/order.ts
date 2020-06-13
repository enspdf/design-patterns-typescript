import PaymentType from './enums/PaymentType';
import IPaymentMethod from './interfaces/payment-method';
import PaymentMethodFactory from './paymentMethodFactory';

export default class Order {
    public paymentType?: IPaymentMethod;
    public commission: number = 0;

    constructor(private type: PaymentType, public amount: number) { };

    public create(): void {
        this.paymentType = PaymentMethodFactory.createPaymentType(this.type);

        this.commission = this.paymentType.commision * this.amount;
    };
};