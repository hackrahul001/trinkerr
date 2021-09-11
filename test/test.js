var supertest = require("supertest");
var should = require("should");

// This agent refers to PORT where program is runninng.

var server = supertest.agent("http://localhost:5000");

// UNIT test begin

describe("user unit test", function () {

  // #1 signUp

  it("signUp", function (done) {

    // calling home page api
    server
      .post("/signUp")
      .send({ mobileNumber: "7715996408" })
      .expect("Content-type", /json/)
      .expect(200) // THis is HTTP response
      .end(function (err, res) {
        // HTTP status should be 200
        res.status.should.equal(200);
        // Error key should be false.
        res.body.error.should.equal(false);
        done();
      });
  });

  // #2 otpVerification

  it("otpVerification", function (done) {

    // calling home page api
    server
      .post("/otpVerification")
      .send({ mobileNumber: "7715996408", otp: "0000" })
      .expect("Content-type", /json/)
      .expect(200) // THis is HTTP response
      .end(function (err, res) {
        // HTTP status should be 200
        res.status.should.equal(200);
        // Error key should be false.
        res.body.error.should.equal(false);
        done();
      });
  });

  // #3 signUpDetail

  it("signUpDetail", function (done) {

    // calling home page api
    server
      .post("/signUpDetail")
      .send({ userName: "rahul maurya" })
      .set('x-auth', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTNjODZjNWY4NTcxZjRlMDA0ODUyZDciLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNjMxMzgwNzkxfQ.-FTZWlFVmgXbF1oVTxpxfyxD6dGNvsMsT7leQuzQe2Q')
      .expect("Content-type", /json/)
      .expect(200) // THis is HTTP response
      .end(function (err, res) {
        // HTTP status should be 200
        res.status.should.equal(200);
        // Error key should be false.
        res.body.error.should.equal(false);
        done();
      });
  });


  // #4 login

  it("login", function (done) {

    // calling home page api
    server
      .post("/login")
      .send({ mobileNumber: "7715996408" })
      .expect("Content-type", /json/)
      .expect(200) // THis is HTTP response
      .end(function (err, res) {
        // HTTP status should be 200
        res.status.should.equal(200);
        // Error key should be false.
        res.body.error.should.equal(false);
        done();
      });
  });


});





describe("home page unit test", function () {

  // #1 home

  it("home", function (done) {

    // calling home page api
    server
      .get("/home")
      .set('x-auth', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTNjODZjNWY4NTcxZjRlMDA0ODUyZDciLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNjMxMzgwNzkxfQ.-FTZWlFVmgXbF1oVTxpxfyxD6dGNvsMsT7leQuzQe2Q')
      .expect("Content-type", /json/)
      .expect(200) // THis is HTTP response
      .end(function (err, res) {
        // HTTP status should be 200
        res.status.should.equal(200);
        // Error key should be false.
        res.body.error.should.equal(false);
        done();
      });
  });

  // #2 interest

  it("interest", function (done) {

    // calling home page api
    server
      .post("/interest")
      .set('x-auth', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTNjODZjNWY4NTcxZjRlMDA0ODUyZDciLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNjMxMzgwNzkxfQ.-FTZWlFVmgXbF1oVTxpxfyxD6dGNvsMsT7leQuzQe2Q')
      .send({ imageId: "613c8b4d2ab845541c9e5e93", interest: -1 })
      .expect("Content-type", /json/)
      .expect(200) // THis is HTTP response
      .end(function (err, res) {
        // HTTP status should be 200
        res.status.should.equal(200);
        // Error key should be false.
        res.body.error.should.equal(false);
        done();
      });
  });

  // #3 history

  it("history", function (done) {

    // calling home page api
    server
      .get("/history")
      .set('x-auth', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTNjODZjNWY4NTcxZjRlMDA0ODUyZDciLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNjMxMzgwNzkxfQ.-FTZWlFVmgXbF1oVTxpxfyxD6dGNvsMsT7leQuzQe2Q')
      .expect("Content-type", /json/)
      .expect(200) // THis is HTTP response
      .end(function (err, res) {
        // HTTP status should be 200
        res.status.should.equal(200);
        // Error key should be false.
        res.body.error.should.equal(false);
        done();
      });
  });


});


