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
import {ExtendedErrorModel} from './ExtendedErrorModel';

/**
 * The InlineResponse404 model module.
 * @module model/InlineResponse404
 * @version 1.5
 */
export class InlineResponse404 extends ExtendedErrorModel {
  /**
   * Constructs a new <code>InlineResponse404</code>.
   * @alias module:model/InlineResponse404
   * @class
   * @extends module:model/ExtendedErrorModel
   * @param rootCause {} 
   */
  constructor(rootCause) {
    super(message, code, rootCause);
  }

  /**
   * Constructs a <code>InlineResponse404</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse404} obj Optional instance to populate.
   * @return {module:model/InlineResponse404} The populated <code>InlineResponse404</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse404();
      ExtendedErrorModel.constructFromObject(data, obj);
      if (data.hasOwnProperty('message'))
        obj.message = ApiClient.convertToType(data['message'], 'String');
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {String} message
 * @default 'Error! Requested Information Not FOund'
 */
InlineResponse404.prototype.message = 'Error! Requested Information Not FOund';

/**
 * @member {Number} code
 * @default 404
 */
InlineResponse404.prototype.code = 404;
