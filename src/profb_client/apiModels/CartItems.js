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

import ApiClient from '../ApiClient';

/**
* The CartItems model module.
* @module profb_client/apiModels/CartItems
* @version 1.67
*/
export default class CartItems {
    /**
    * Constructs a new <code>CartItems</code>.
    * @alias module:profb_client/apiModels/CartItems
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>CartItems</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:profb_client/apiModels/CartItems} obj Optional instance to populate.
    * @return {module:profb_client/apiModels/CartItems} The populated <code>CartItems</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CartItems();
                        
            
            if (data.hasOwnProperty('cid')) {
                obj['cid'] = ApiClient.convertToType(data['cid'], 'String');
            }
            if (data.hasOwnProperty('pid')) {
                obj['pid'] = ApiClient.convertToType(data['pid'], 'String');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
            if (data.hasOwnProperty('itemSubtotal')) {
                obj['itemSubtotal'] = ApiClient.convertToType(data['itemSubtotal'], 'Number');
            }
        }
        return obj;
    }

    /**
    * @member {String} cid
    */
    'cid' = undefined;
    /**
    * @member {String} pid
    */
    'pid' = undefined;
    /**
    * @member {Number} quantity
    */
    'quantity' = undefined;
    /**
    * @member {Number} itemSubtotal
    */
    'itemSubtotal' = undefined;




}
