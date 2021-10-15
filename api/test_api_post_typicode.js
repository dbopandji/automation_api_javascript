const {expect} = require('chai');
const chai = require('chai');
chai.use(require('chai-json-schema'));
const api = require('../page-object/typicode');
const data = require('../testdata/schema_typicode');
const payload = require('../helper/payload_typicode');
const scenario = require('../testcases/testcase_post_typicode');

describe(`${scenario.testcase.description}`, async() => {
    it(`${scenario.testcase.positive.case1}`, async() => {
        // tempat kita nge test
        let response = await api.postTypicode(payload.payloadPostTypiCode);
        expect(response.status).to.equal(201, "Status Response Tidak Sesuai");
        // expect(response.body).to.be.jsonSchema(data.getTypiCodeScheme);
    });
});