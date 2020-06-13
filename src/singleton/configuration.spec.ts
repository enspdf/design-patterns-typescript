import 'mocha';

import { expect } from 'chai';

import Configuration from './configuration';

let config = Configuration.getInstance();

describe('Configuration Class', () => {
    it("Object should be not null", () => {
        expect(config !== null).to.equal(true);
    });

    it("Object should be equals", () => {
        let config2 = Configuration.getInstance();

        expect(config === config2).to.equal(true);
    });
});
