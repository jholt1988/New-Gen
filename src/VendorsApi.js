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
import {ApiClient} from "../ApiClient";
import {InlineResponse404} from '../InlineResponse404';
import {Vendor} from '../Vendor';
import {Vendorpropertiesvid} from '../Vendorpropertiesvid';

/**
* Vendors service.
* @module VendorsApi
* @version 1.67
*/
export class VendorsApi {

    /**
    * Constructs a new VendorsApi. 
    * @alias module:VendorsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the getAllvendors operation.
     * @callback moduleVendorsApi~getAllvendorsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:Vendor>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * fetchs all vendor records
     * endpoint to get an array of all vendor records
     * @param {module:VendorsApi~getAllvendorsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getAllvendors(callback) {
      
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basic'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Vendor];

      return this.apiClient.callApi(
        '/store/vendors', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getVendor operation.
     * @callback moduleVendorsApi~getVendorCallback
     * @param {String} error Error message, if any.
     * @param {module:Vendor{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get user record by id
     * endpoint to get a single vendor record
     * @param {module:Vendorpropertiesvid} vendorid 
     * @param {module:VendorsApi~getVendorCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getVendor(vendorid, callback) {
      
      let postBody = null;
      // verify the required parameter 'vendorid' is set
      if (vendorid === undefined || vendorid === null) {
        throw new Error("Missing the required parameter 'vendorid' when calling getVendor");
      }

      let pathParams = {
        'vendorid': vendorid
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basic'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Vendor;

      return this.apiClient.callApi(
        '/store/vendors/{vendorid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updateVendor operation.
     * @callback moduleVendorsApi~updateVendorCallback
     * @param {String} error Error message, if any.
     * @param {module:Vendor{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * update vendor record by id
     * endpoint to update a single vendor record
     * @param {module:Vendorpropertiesvid} vendorid 
     * @param {Object} opts Optional parameters
     * @param {module:Vendor} opts.body A new user order to add to the system
     * @param {module:VendorsApi~updateVendorCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    updateVendor(vendorid, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'vendorid' is set
      if (vendorid === undefined || vendorid === null) {
        throw new Error("Missing the required parameter 'vendorid' when calling updateVendor");
      }

      let pathParams = {
        'vendorid': vendorid
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basic'];
      let contentTypes = ['application/json', 'mulipart/formdata', 'application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = Vendor;

      return this.apiClient.callApi(
        '/store/vendors/{vendorid}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}