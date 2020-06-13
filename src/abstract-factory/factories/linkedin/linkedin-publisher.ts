import IConnector from '../connector.interface';
import IPublisher from '../publisher.interface';

export default class LinkedinPublisher implements IPublisher {
    constructor(private connector: IConnector) { };

    publish(content: string): void {
        console.log("Linkedin");
        console.log(content);
    };
};