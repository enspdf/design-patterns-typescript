import IAbstractFactory from '../../interfaces/abstract-factory';
import FacebookConnector from './facebook-connector';
import FacebookPublisher from './facebook-publisher';
import IConnector from '../connector.interface';
import IPublisher from '../publisher.interface';

export default class FacebookFactory implements IAbstractFactory {
    getConnector(): IConnector {
        return new FacebookConnector();
    };

    getPublisher(connector: IConnector): IPublisher {
        return new FacebookPublisher(connector);
    };
}