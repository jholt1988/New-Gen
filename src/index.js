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
import {ApiClient} from './ApiClient';
import {Address} from './Address';
import {Cart} from './Cart';
import {CartItems} from './CartItems';
import {Cartid} from './Cartid';
import {Category} from './Category';
import {Delivery} from './Delivery';
import {ErrorModel} from './ErrorModel';
import {ExtendedErrorModel} from './ExtendedErrorModel';
import {InlineResponse200} from './InlineResponse200';
import {InlineResponse404} from './InlineResponse404';
import {Method} from './Method';
import {Order} from './Order';
import {OrderItems} from './OrderItems';
import {Orderid} from './Orderid';
import {Payment} from './Payment';
import {Product} from './Product';
import {Productid} from './Productid';
import {Status} from './Status';
import {Type} from './Type';
import {User} from './User';
import {UserAddress} from './UserAddress';
import {Userid} from './Userid';
import {Vendor} from './Vendor';
import {AuthApi} from './AuthApi';
import {CartApi} from './CartApi';
import {CheckoutApi} from './CheckoutApi';
import {OrdersApi} from './OrdersApi';
import {ProductsApi} from './ProductsApi';
import {StoreApi} from './StoreApi';
import {UsersApi} from './UsersApi';
import {VendorsApi} from './VendorsApi';

/**
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var ProfbJsClient = require('index'); // See note below*.
* var xxxSvc = new ProfbJsClient.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new ProfbJsClient.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new ProfbJsClient.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new ProfbJsClient.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.67
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Address model constructor.
     * @property {module:Address}
     */
    Address,

    /**
     * The Cart model constructor.
     * @property {module:Cart}
     */
    Cart,

    /**
     * The CartItems model constructor.
     * @property {module:CartItems}
     */
    CartItems,

    /**
     * The Cartid model constructor.
     * @property {module:Cartid}
     */
    Cartid,

    /**
     * The Category model constructor.
     * @property {module:Category}
     */
    Category,

    /**
     * The Delivery model constructor.
     * @property {module:Delivery}
     */
    Delivery,

    /**
     * The ErrorModel model constructor.
     * @property {module:ErrorModel}
     */
    ErrorModel,

    /**
     * The ExtendedErrorModel model constructor.
     * @property {module:ExtendedErrorModel}
     */
    ExtendedErrorModel,

    /**
     * The InlineResponse200 model constructor.
     * @property {module:InlineResponse200}
     */
    InlineResponse200,

    /**
     * The InlineResponse404 model constructor.
     * @property {module:InlineResponse404}
     */
    InlineResponse404,

    /**
     * The Method model constructor.
     * @property {module:Method}
     */
    Method,

    /**
     * The Order model constructor.
     * @property {module:Order}
     */
    Order,

    /**
     * The OrderItems model constructor.
     * @property {module:OrderItems}
     */
    OrderItems,

    /**
     * The Orderid model constructor.
     * @property {module:Orderid}
     */
    Orderid,

    /**
     * The Payment model constructor.
     * @property {module:Payment}
     */
    Payment,

    /**
     * The Product model constructor.
     * @property {module:Product}
     */
    Product,

    /**
     * The Productid model constructor.
     * @property {module:Productid}
     */
    Productid,

    /**
     * The Status model constructor.
     * @property {module:Status}
     */
    Status,

    /**
     * The Type model constructor.
     * @property {module:Type}
     */
    Type,

    /**
     * The User model constructor.
     * @property {module:User}
     */
    User,

    /**
     * The UserAddress model constructor.
     * @property {module:UserAddress}
     */
    UserAddress,

    /**
     * The Userid model constructor.
     * @property {module:Userid}
     */
    Userid,

    /**
     * The Vendor model constructor.
     * @property {module:Vendor}
     */
    Vendor,

    /**
    * The AuthApi service constructor.
    * @property {module:AuthApi}
    */
    AuthApi,

    /**
    * The CartApi service constructor.
    * @property {module:CartApi}
    */
    CartApi,

    /**
    * The CheckoutApi service constructor.
    * @property {module:CheckoutApi}
    */
    CheckoutApi,

    /**
    * The OrdersApi service constructor.
    * @property {module:OrdersApi}
    */
    OrdersApi,

    /**
    * The ProductsApi service constructor.
    * @property {module:ProductsApi}
    */
    ProductsApi,

    /**
    * The StoreApi service constructor.
    * @property {module:StoreApi}
    */
    StoreApi,

    /**
    * The UsersApi service constructor.
    * @property {module:UsersApi}
    */
    UsersApi,

    /**
    * The VendorsApi service constructor.
    * @property {module:VendorsApi}
    */
    VendorsApi
};
