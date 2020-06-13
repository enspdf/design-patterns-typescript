import { expect } from 'chai';

import FacebookConnector from './factories/facebook/facebook-connector';
import FacebookFactory from './factories/facebook/facebook-factory';
import FacebookPublisher from './factories/facebook/facebook-publisher';
import LinkedinConnector from './factories/linkedin/linkedin-connector';
import LinkedinFactory from './factories/linkedin/linkedin-factory';
import LinkedinPublisher from './factories/linkedin/linkedin-publisher';
import SlackConnector from './factories/slack/slack-connector';
import SlackFactory from './factories/slack/slack-factory';
import SlackPublisher from './factories/slack/slack-publisher';

const facebookFactory = new FacebookFactory();
const linkedinFactory = new LinkedinFactory();
const slackFactory = new SlackFactory();

describe('Facebook Publisher', () => {
    it('It must be a Facebook connector', () => {
        expect(true).to.equal(facebookFactory.getConnector() instanceof FacebookConnector);
    });

    it('It must be a Facebook publisher', () => {
        const connector = facebookFactory.getConnector();
        expect(true).to.equal(facebookFactory.getPublisher(connector) instanceof FacebookPublisher);
    });
});

describe('Linkedin Publisher', () => {
    it('It must be a Linkedin connector', () => {
        expect(true).to.equal(linkedinFactory.getConnector() instanceof LinkedinConnector);
    });

    it('It must be a Linkedin publisher', () => {
        const connector = linkedinFactory.getConnector();
        expect(true).to.equal(linkedinFactory.getPublisher(connector) instanceof LinkedinPublisher);
    });
});

describe('Slack Publisher', () => {
    it('It must be a Slack connector', () => {
        expect(true).to.equal(slackFactory.getConnector() instanceof SlackConnector);
    });

    it('It must be a Slack publisher', () => {
        const connector = slackFactory.getConnector();
        expect(true).to.equal(slackFactory.getPublisher(connector) instanceof SlackPublisher);
    });
});