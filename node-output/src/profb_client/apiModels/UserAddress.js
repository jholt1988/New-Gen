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
* The UserAddress model module.
* @module profb_client/apiModels/UserAddress
* @version 1.67
*/
export default class UserAddress {
    /**
    * Constructs a new <code>UserAddress</code>.
    * a table of user addresses
    * @alias module:profb_client/apiModels/UserAddress
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>UserAddress</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:profb_client/apiModels/UserAddress} obj Optional instance to populate.
    * @return {module:profb_client/apiModels/UserAddress} The populated <code>UserAddress</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserAddress();
                        
            
            if (data.hasOwnProperty('addressid')) {
                obj['addressid'] = ApiClient.convertToType(data['addressid'], 'String');
            }
            if (data.hasOwnProperty('uid')) {
                obj['uid'] = ApiClient.convertToType(data['uid'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} addressid
    */
    'addressid' = undefined;
    /**
    * @member {String} uid
    */
    'uid' = undefined;




}