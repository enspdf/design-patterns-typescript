import IAbstractFactory from '../../interfaces/abstract-factory';
import SlackConnector from './slack-connector';
import SlackPublisher from './slack-publisher';
import IConnector from '../connector.interface';
import IPublisher from '../publisher.interface';

export default class SlackFactory implements IAbstractFactory {
    getConnector(): IConnector {
        return new SlackConnector();
    };

    getPublisher(connector: IConnector): IPublisher {
        return new SlackPublisher(connector);
    };
}