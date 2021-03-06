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
import Cart from './Cart';
import CartItems from './CartItems';

/**
* The InlineResponse200 model module.
* @module profb_client/apiModels/InlineResponse200
* @version 1.67
*/
export default class InlineResponse200 {
    /**
    * Constructs a new <code>InlineResponse200</code>.
    * @alias module:profb_client/apiModels/InlineResponse200
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>InlineResponse200</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:profb_client/apiModels/InlineResponse200} obj Optional instance to populate.
    * @return {module:profb_client/apiModels/InlineResponse200} The populated <code>InlineResponse200</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse200();
                        
            
            if (data.hasOwnProperty('cart')) {
                obj['cart'] = Cart.constructFromObject(data['cart']);
            }
            if (data.hasOwnProperty('cartItems')) {
                obj['cartItems'] = ApiClient.convertToType(data['cartItems'], [CartItems]);
            }
        }
        return obj;
    }

    /**
    * @member {module:profb_client/apiModels/Cart} cart
    */
    'cart' = undefined;
    /**
    * @member {Array.<module:profb_client/apiModels/CartItems>} cartItems
    */
    'cartItems' = undefined;




}
