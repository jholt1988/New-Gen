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
    instance = new profbent.OrderItems();
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

  describe('OrderItems', function() {
    it('should create an instance of OrderItems', function() {
      // uncomment below and update the code to test OrderItems
      //var instane = new profbent.OrderItems();
      //expect(instance).to.be.a(profbent.OrderItems);
    });

    it('should have the property quantity (base name: "quantity")', function() {
      // uncomment below and update the code to test the property quantity
      //var instane = new profbent.OrderItems();
      //expect(instance).to.be();
    });

    it('should have the property itemSubtotal (base name: "itemSubtotal")', function() {
      // uncomment below and update the code to test the property itemSubtotal
      //var instane = new profbent.OrderItems();
      //expect(instance).to.be();
    });

    it('should have the property pid (base name: "pid")', function() {
      // uncomment below and update the code to test the property pid
      //var instane = new profbent.OrderItems();
      //expect(instance).to.be();
    });

    it('should have the property cid (base name: "cid")', function() {
      // uncomment below and update the code to test the property cid
      //var instane = new profbent.OrderItems();
      //expect(instance).to.be();
    });

  });

}));
