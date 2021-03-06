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
import {ApiClient} from "../ApiClient";
import {ComponentsparametersinvoiceID} from '../model/ComponentsparametersinvoiceID';
import {ExtendedErrorModel} from '../model/ExtendedErrorModel';
import {Invoice} from '../model/Invoice';
import {Product} from '../model/Product';

/**
* Inventory service.
* @module api/InventoryApi
* @version 1.5
*/
export class InventoryApi {

    /**
    * Constructs a new InventoryApi. 
    * @alias module:api/InventoryApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the deleteInvoice operation.
     * @callback moduleapi/InventoryApi~deleteInvoiceCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Invoice 
     * This operation deletes invoice record with matching ID
     * @param {module:model/ComponentsparametersinvoiceID} invoiceID 
     * @param {module:api/InventoryApi~deleteInvoiceCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteInvoice(invoiceID, callback) {
      
      let postBody = null;
      // verify the required parameter 'invoiceID' is set
      if (invoiceID === undefined || invoiceID === null) {
        throw new Error("Missing the required parameter 'invoiceID' when calling deleteInvoice");
      }

      let pathParams = {
        'invoiceID': invoiceID
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/api/store/inventory/invoices/delete/{invoiceID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getAllInventory operation.
     * @callback moduleapi/InventoryApi~getAllInventoryCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Product>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all inventory data
     * This operation gets all inventory data
     * @param {module:api/InventoryApi~getAllInventoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getAllInventory(callback) {
      
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Product];

      return this.apiClient.callApi(
        '/api/store/inventory', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the postInvoice operation.
     * @callback moduleapi/InventoryApi~postInvoiceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Invoice{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Post new invoice 
     * This operation creates a new invoice record 
     * @param {module:api/InventoryApi~postInvoiceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    postInvoice(callback) {
      
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Invoice;

      return this.apiClient.callApi(
        '/api/store/inventory/invoices/newinvoice', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updateInventory operation.
     * @callback moduleapi/InventoryApi~updateInventoryCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Product>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * update inventory record
     * This operation let you edit inventory
     * @param {module:api/InventoryApi~updateInventoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    updateInventory(callback) {
      
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Product];

      return this.apiClient.callApi(
        '/api/store/edit/inventory', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updateInvoice operation.
     * @callback moduleapi/InventoryApi~updateInvoiceCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Product>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update invoice record
     * This operation updates a invoice record with matching id
     * @param {module:model/ComponentsparametersinvoiceID} invoiceID 
     * @param {module:api/InventoryApi~updateInvoiceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    updateInvoice(invoiceID, callback) {
      
      let postBody = null;
      // verify the required parameter 'invoiceID' is set
      if (invoiceID === undefined || invoiceID === null) {
        throw new Error("Missing the required parameter 'invoiceID' when calling updateInvoice");
      }

      let pathParams = {
        'invoiceID': invoiceID
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Product];

      return this.apiClient.callApi(
        '/api/store/inventory/invoices/edit/{invoiceID}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}