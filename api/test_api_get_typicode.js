const {expect} = require('chai');
const chai = require('chai');
chai.use(require('chai-json-schema'));
const api = require('./../page-object/typicode');
const data = require('./../testdata/schema_typicode');
const scenario = require('./../testcases/testcase_get_typicode');

describe(`${scenario.testcase.description}`, async() => {
    it(`${scenario.testcase.positive.case1}`, async() => {
        let response = await api.getTypicode(); 
        // console.log(response);
        expect(response.status).to.equal(200, "Status Reponse Error");
        expect(response.body).to.be.jsonSchema(data.getTypiCodeScheme);
    });
    it(`${scenario.testcase.positive.case2}`, async() => {

    });
});