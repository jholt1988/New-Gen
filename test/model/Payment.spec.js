/**
 * Professor Bentley Electronics Retail API
 * An ecommerce REST API for a retail electronics store. 
 *
 * OpenAPI spec version: 1.5
 * Contact: jordanh316@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.profbent);
  }
}(this, function(expect, profbent) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new profbent.Payment();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Payment', function() {
    it('should create an instance of Payment', function() {
      // uncomment below and update the code to test Payment
      //var instane = new profbent.Payment();
      //expect(instance).to.be.a(profbent.Payment);
    });

    it('should have the property payid (base name: "payid")', function() {
      // uncomment below and update the code to test the property payid
      //var instane = new profbent.Payment();
      //expect(instance).to.be();
    });

    it('should have the property method (base name: "method")', function() {
      // uncomment below and update the code to test the property method
      //var instane = new profbent.Payment();
      //expect(instance).to.be();
    });

    it('should have the property ccNumber (base name: "ccNumber")', function() {
      // uncomment below and update the code to test the property ccNumber
      //var instane = new profbent.Payment();
      //expect(instance).to.be();
    });

    it('should have the property firstName (base name: "firstName")', function() {
      // uncomment below and update the code to test the property firstName
      //var instane = new profbent.Payment();
      //expect(instance).to.be();
    });

    it('should have the property lastName (base name: "lastName")', function() {
      // uncomment below and update the code to test the property lastName
      //var instane = new profbent.Payment();
      //expect(instance).to.be();
    });

    it('should have the property ccv (base name: "ccv")', function() {
      // uncomment below and update the code to test the property ccv
      //var instane = new profbent.Payment();
      //expect(instance).to.be();
    });

    it('should have the property confirmationNumber (base name: "confirmationNumber")', function() {
      // uncomment below and update the code to test the property confirmationNumber
      //var instane = new profbent.Payment();
      //expect(instance).to.be();
    });

    it('should have the property zipCode (base name: "zipCode")', function() {
      // uncomment below and update the code to test the property zipCode
      //var instane = new profbent.Payment();
      //expect(instance).to.be();
    });

    it('should have the property oid (base name: "oid")', function() {
      // uncomment below and update the code to test the property oid
      //var instane = new profbent.Payment();
      //expect(instance).to.be();
    });

    it('should have the property statusid (base name: "statusid")', function() {
      // uncomment below and update the code to test the property statusid
      //var instane = new profbent.Payment();
      //expect(instance).to.be();
    });

    it('should have the property updatedOn (base name: "updatedOn")', function() {
      // uncomment below and update the code to test the property updatedOn
      //var instane = new profbent.Payment();
      //expect(instance).to.be();
    });

    it('should have the property createdOn (base name: "createdOn")', function() {
      // uncomment below and update the code to test the property createdOn
      //var instane = new profbent.Payment();
      //expect(instance).to.be();
    });

  });

}));
