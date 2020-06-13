import IAbstractFactory from '../../interfaces/abstract-factory';
import LinkedinConnector from './linkedin-connector';
import LinkedinPublisher from './linkedin-publisher';
import IConnector from '../connector.interface';
import IPublisher from '../publisher.interface';

export default class LinkedinFactory implements IAbstractFactory {
    getConnector(): IConnector {
        return new LinkedinConnector();
    };

    getPublisher(connector: IConnector): IPublisher {
        return new LinkedinPublisher(connector);
    };
}