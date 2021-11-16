const { Given, When, Then, Before } = require("@cucumber/cucumber");
const axios = require("axios");
const pactum = require("pactum");
const assert = require("assert").strict;

let spec = pactum.spec();
let request = "";
var response;
Before(function () {
  spec = pactum.spec();
});

Given("A signUp {}", function (request) {
  request = JSON.parse(request);
});

When("I make a POST request to {string}", async function (url) {
  response = await axios.post(url, request);
});

Then("I get response code {int}", function (code) {
  assert.equal(response.status, code);
});
