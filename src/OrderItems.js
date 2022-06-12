/*
 * Professor Bentley Electronics Retail API
 * An ecommerce REST API for a retail electronics store. 
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
import {ApiClient} from '../ApiClient';

/**
 * The OrderItems model module.
 * @module OrderItems
 * @version 1.67
 */
export class OrderItems {
  /**
   * Constructs a new <code>OrderItems</code>.
   * Items user has decided to order
   * @alias module:OrderItems
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>OrderItems</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:OrderItems} obj Optional instance to populate.
   * @return {module:OrderItems} The populated <code>OrderItems</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OrderItems();
      if (data.hasOwnProperty('quantity'))
        obj.quantity = ApiClient.convertToType(data['quantity'], 'Number');
      if (data.hasOwnProperty('itemSubtotal'))
        obj.itemSubtotal = ApiClient.convertToType(data['itemSubtotal'], 'Number');
      if (data.hasOwnProperty('pid'))
        obj.pid = ApiClient.convertToType(data['pid'], 'String');
      if (data.hasOwnProperty('cid'))
        obj.cid = ApiClient.convertToType(data['cid'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} quantity
 */
OrderItems.prototype.quantity = undefined;

/**
 * @member {Number} itemSubtotal
 */
OrderItems.prototype.itemSubtotal = undefined;

/**
 * @member {String} pid
 */
OrderItems.prototype.pid = undefined;

/**
 * @member {Number} cid
 */
OrderItems.prototype.cid = undefined;

