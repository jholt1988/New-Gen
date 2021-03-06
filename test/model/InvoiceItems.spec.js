/*
 * Prof Bentley Ecommerce API
 * A Ecommerce API
 *
 * OpenAPI spec version: 1.5
 * Contact: jordanh316@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.34
 *
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
    factory(root.expect, root.ProfBentleyEcommerceApi);
  }
}(this, function(expect, ProfBentleyEcommerceApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('InvoiceItems', function() {
      beforeEach(function() {
        instance = new ProfBentleyEcommerceApi.InvoiceItems();
      });

      it('should create an instance of InvoiceItems', function() {
        // TODO: update the code to test InvoiceItems
        expect(instance).to.be.a(ProfBentleyEcommerceApi.InvoiceItems);
      });

      it('should have the property productID (base name: "productID")', function() {
        // TODO: update the code to test the property productID
        expect(instance).to.have.property('productID');
        // expect(instance.productID).to.be(expectedValueLiteral);
      });

      it('should have the property orderQuantity (base name: "orderQuantity")', function() {
        // TODO: update the code to test the property orderQuantity
        expect(instance).to.have.property('orderQuantity');
        // expect(instance.orderQuantity).to.be(expectedValueLiteral);
      });

      it('should have the property receivingUnit (base name: "receivingUnit")', function() {
        // TODO: update the code to test the property receivingUnit
        expect(instance).to.have.property('receivingUnit');
        // expect(instance.receivingUnit).to.be(expectedValueLiteral);
      });

      it('should have the property unitPrice (base name: "unitPrice")', function() {
        // TODO: update the code to test the property unitPrice
        expect(instance).to.have.property('unitPrice');
        // expect(instance.unitPrice).to.be(expectedValueLiteral);
      });

      it('should have the property lineGrossTotal (base name: "lineGrossTotal")', function() {
        // TODO: update the code to test the property lineGrossTotal
        expect(instance).to.have.property('lineGrossTotal');
        // expect(instance.lineGrossTotal).to.be(expectedValueLiteral);
      });

      it('should have the property lineCatergory (base name: "lineCatergory")', function() {
        // TODO: update the code to test the property lineCatergory
        expect(instance).to.have.property('lineCatergory');
        // expect(instance.lineCatergory).to.be(expectedValueLiteral);
      });

    });
  });

}));
