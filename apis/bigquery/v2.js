/**
 * Copyright 2014 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

var apirequest = require('../../lib/apirequest');
var createAPIRequest = apirequest.createAPIRequest;
var checkRequired = apirequest.checkRequired;
var extend = require('../../lib/utils').extend;

/**
 * BigQuery API
 *
 * @classdesc A data platform for customers to create, manage, share and query data.
 * @namespace bigquery
 * @version  v2
 * @variation v2
 * @this Bigquery
 * @param {object=} options Options for Bigquery
 */
function Bigquery(options) {

  var self = this;
  this._options = options || {};

  this.datasets = {

    /**
     * bigquery.datasets.delete
     *
     * @desc Deletes the dataset specified by the datasetId value. Before you can delete a dataset, you must delete all its tables, either manually or by specifying deleteContents. Immediately after deletion, you can create another dataset with the same name.
     *
     * @alias bigquery.datasets.delete
     * @memberOf! bigquery(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.datasetId - Dataset ID of dataset being deleted
     * @param  {boolean=} params.deleteContents - If True, delete all the tables in the dataset. If False and the dataset contains tables, the request will fail. Default is False
     * @param  {string} params.projectId - Project ID of the dataset being deleted
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['projectId', 'datasetId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/bigquery/v2/projects/' + params.projectId + '/datasets/' + params.datasetId,
        method: 'DELETE'
      };

      delete params.datasetId;

      delete params.projectId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * bigquery.datasets.get
     *
     * @desc Returns the dataset specified by datasetID.
     *
     * @alias bigquery.datasets.get
     * @memberOf! bigquery(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.datasetId - Dataset ID of the requested dataset
     * @param  {string} params.projectId - Project ID of the requested dataset
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['projectId', 'datasetId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/bigquery/v2/projects/' + params.projectId + '/datasets/' + params.datasetId,
        method: 'GET'
      };

      delete params.datasetId;
      delete params.projectId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * bigquery.datasets.insert
     *
     * @desc Creates a new empty dataset.
     *
     * @alias bigquery.datasets.insert
     * @memberOf! bigquery(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.projectId - Project ID of the new dataset
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['projectId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/bigquery/v2/projects/' + params.projectId + '/datasets',
        method: 'POST'
      };

      delete params.projectId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * bigquery.datasets.list
     *
     * @desc Lists all the datasets in the specified project to which the caller has read access; however, a project owner can list (but not necessarily get) all datasets in his project.
     *
     * @alias bigquery.datasets.list
     * @memberOf! bigquery(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {boolean=} params.all - Whether to list all datasets, including hidden ones
     * @param  {integer=} params.maxResults - The maximum number of results to return
     * @param  {string=} params.pageToken - Page token, returned by a previous call, to request the next page of results
     * @param  {string} params.projectId - Project ID of the datasets to be listed
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['projectId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/bigquery/v2/projects/' + params.projectId + '/datasets',
        method: 'GET'
      };

      delete params.projectId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * bigquery.datasets.patch
     *
     * @desc Updates information in an existing dataset. The update method replaces the entire dataset resource, whereas the patch method only replaces fields that are provided in the submitted dataset resource. This method supports patch semantics.
     *
     * @alias bigquery.datasets.patch
     * @memberOf! bigquery(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.datasetId - Dataset ID of the dataset being updated
     * @param  {string} params.projectId - Project ID of the dataset being updated
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['projectId', 'datasetId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/bigquery/v2/projects/' + params.projectId + '/datasets/' + params.datasetId,
        method: 'PATCH'
      };

      delete params.datasetId;
      delete params.projectId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * bigquery.datasets.update
     *
     * @desc Updates information in an existing dataset. The update method replaces the entire dataset resource, whereas the patch method only replaces fields that are provided in the submitted dataset resource.
     *
     * @alias bigquery.datasets.update
     * @memberOf! bigquery(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.datasetId - Dataset ID of the dataset being updated
     * @param  {string} params.projectId - Project ID of the dataset being updated
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['projectId', 'datasetId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/bigquery/v2/projects/' + params.projectId + '/datasets/' + params.datasetId,
        method: 'PUT'
      };

      delete params.datasetId;
      delete params.projectId;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.jobs = {

    /**
     * bigquery.jobs.get
     *
     * @desc Retrieves the specified job by ID.
     *
     * @alias bigquery.jobs.get
     * @memberOf! bigquery(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.jobId - Job ID of the requested job
     * @param  {string} params.projectId - Project ID of the requested job
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['projectId', 'jobId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/bigquery/v2/projects/' + params.projectId + '/jobs/' + params.jobId,
        method: 'GET'
      };

      delete params.jobId;
      delete params.projectId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * bigquery.jobs.getQueryResults
     *
     * @desc Retrieves the results of a query job.
     *
     * @alias bigquery.jobs.getQueryResults
     * @memberOf! bigquery(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.jobId - Job ID of the query job
     * @param  {integer=} params.maxResults - Maximum number of results to read
     * @param  {string=} params.pageToken - Page token, returned by a previous call, to request the next page of results
     * @param  {string} params.projectId - Project ID of the query job
     * @param  {string=} params.startIndex - Zero-based index of the starting row
     * @param  {integer=} params.timeoutMs - How long to wait for the query to complete, in milliseconds, before returning. Default is to return immediately. If the timeout passes before the job completes, the request will fail with a TIMEOUT error
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    getQueryResults: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['projectId', 'jobId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/bigquery/v2/projects/' + params.projectId + '/queries/' + params.jobId,
        method: 'GET'
      };

      delete params.jobId;

      delete params.projectId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * bigquery.jobs.insert
     *
     * @desc Starts a new asynchronous job.
     *
     * @alias bigquery.jobs.insert
     * @memberOf! bigquery(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.projectId - Project ID of the project that will be billed for the job
     * @param  {object}        params.resource - Media resource metadata
     * @param  {string|object} params.media - Media body data to upload
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['projectId']);
      var isMedia = true;
      var options = {
        url: 'https://www.googleapis.com/upload/bigquery/v2/projects/' + params.projectId + '/jobs',
        method: 'POST'
      };

      delete params.projectId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * bigquery.jobs.list
     *
     * @desc Lists all the Jobs in the specified project that were started by the user.
     *
     * @alias bigquery.jobs.list
     * @memberOf! bigquery(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {boolean=} params.allUsers - Whether to display jobs owned by all users in the project. Default false
     * @param  {integer=} params.maxResults - Maximum number of results to return
     * @param  {string=} params.pageToken - Page token, returned by a previous call, to request the next page of results
     * @param  {string} params.projectId - Project ID of the jobs to list
     * @param  {string=} params.projection - Restrict information returned to a set of selected fields
     * @param  {string=} params.stateFilter - Filter for job state
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['projectId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/bigquery/v2/projects/' + params.projectId + '/jobs',
        method: 'GET'
      };

      delete params.projectId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * bigquery.jobs.query
     *
     * @desc Runs a BigQuery SQL query synchronously and returns query results if the query completes within a specified timeout.
     *
     * @alias bigquery.jobs.query
     * @memberOf! bigquery(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.projectId - Project ID of the project billed for the query
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    query: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['projectId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/bigquery/v2/projects/' + params.projectId + '/queries',
        method: 'POST'
      };

      delete params.projectId;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.projects = {

    /**
     * bigquery.projects.list
     *
     * @desc Lists the projects to which you have at least read access.
     *
     * @alias bigquery.projects.list
     * @memberOf! bigquery(v2)
     *
     * @param  {object=} params - Parameters for request
     * @param  {integer=} params.maxResults - Maximum number of results to return
     * @param  {string=} params.pageToken - Page token, returned by a previous call, to request the next page of results
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/bigquery/v2/projects',
        method: 'GET'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.tabledata = {

    /**
     * bigquery.tabledata.insertAll
     *
     * @desc Streams data into BigQuery one record at a time without needing to run a load job.
     *
     * @alias bigquery.tabledata.insertAll
     * @memberOf! bigquery(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.datasetId - Dataset ID of the destination table.
     * @param  {string} params.projectId - Project ID of the destination table.
     * @param  {string} params.tableId - Table ID of the destination table.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insertAll: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['projectId', 'datasetId', 'tableId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/bigquery/v2/projects/' + params.projectId + '/datasets/' + params.datasetId + '/tables/' + params.tableId + '/insertAll',
        method: 'POST'
      };

      delete params.datasetId;
      delete params.projectId;
      delete params.tableId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * bigquery.tabledata.list
     *
     * @desc Retrieves table data from a specified set of rows.
     *
     * @alias bigquery.tabledata.list
     * @memberOf! bigquery(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.datasetId - Dataset ID of the table to read
     * @param  {integer=} params.maxResults - Maximum number of results to return
     * @param  {string=} params.pageToken - Page token, returned by a previous call, identifying the result set
     * @param  {string} params.projectId - Project ID of the table to read
     * @param  {string=} params.startIndex - Zero-based index of the starting row to read
     * @param  {string} params.tableId - Table ID of the table to read
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['projectId', 'datasetId', 'tableId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/bigquery/v2/projects/' + params.projectId + '/datasets/' + params.datasetId + '/tables/' + params.tableId + '/data',
        method: 'GET'
      };

      delete params.datasetId;

      delete params.projectId;

      delete params.tableId;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.tables = {

    /**
     * bigquery.tables.delete
     *
     * @desc Deletes the table specified by tableId from the dataset. If the table contains data, all the data will be deleted.
     *
     * @alias bigquery.tables.delete
     * @memberOf! bigquery(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.datasetId - Dataset ID of the table to delete
     * @param  {string} params.projectId - Project ID of the table to delete
     * @param  {string} params.tableId - Table ID of the table to delete
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['projectId', 'datasetId', 'tableId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/bigquery/v2/projects/' + params.projectId + '/datasets/' + params.datasetId + '/tables/' + params.tableId,
        method: 'DELETE'
      };

      delete params.datasetId;
      delete params.projectId;
      delete params.tableId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * bigquery.tables.get
     *
     * @desc Gets the specified table resource by table ID. This method does not return the data in the table, it only returns the table resource, which describes the structure of this table.
     *
     * @alias bigquery.tables.get
     * @memberOf! bigquery(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.datasetId - Dataset ID of the requested table
     * @param  {string} params.projectId - Project ID of the requested table
     * @param  {string} params.tableId - Table ID of the requested table
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['projectId', 'datasetId', 'tableId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/bigquery/v2/projects/' + params.projectId + '/datasets/' + params.datasetId + '/tables/' + params.tableId,
        method: 'GET'
      };

      delete params.datasetId;
      delete params.projectId;
      delete params.tableId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * bigquery.tables.insert
     *
     * @desc Creates a new, empty table in the dataset.
     *
     * @alias bigquery.tables.insert
     * @memberOf! bigquery(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.datasetId - Dataset ID of the new table
     * @param  {string} params.projectId - Project ID of the new table
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['projectId', 'datasetId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/bigquery/v2/projects/' + params.projectId + '/datasets/' + params.datasetId + '/tables',
        method: 'POST'
      };

      delete params.datasetId;
      delete params.projectId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * bigquery.tables.list
     *
     * @desc Lists all tables in the specified dataset.
     *
     * @alias bigquery.tables.list
     * @memberOf! bigquery(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.datasetId - Dataset ID of the tables to list
     * @param  {integer=} params.maxResults - Maximum number of results to return
     * @param  {string=} params.pageToken - Page token, returned by a previous call, to request the next page of results
     * @param  {string} params.projectId - Project ID of the tables to list
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['projectId', 'datasetId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/bigquery/v2/projects/' + params.projectId + '/datasets/' + params.datasetId + '/tables',
        method: 'GET'
      };

      delete params.datasetId;

      delete params.projectId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * bigquery.tables.patch
     *
     * @desc Updates information in an existing table. The update method replaces the entire table resource, whereas the patch method only replaces fields that are provided in the submitted table resource. This method supports patch semantics.
     *
     * @alias bigquery.tables.patch
     * @memberOf! bigquery(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.datasetId - Dataset ID of the table to update
     * @param  {string} params.projectId - Project ID of the table to update
     * @param  {string} params.tableId - Table ID of the table to update
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['projectId', 'datasetId', 'tableId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/bigquery/v2/projects/' + params.projectId + '/datasets/' + params.datasetId + '/tables/' + params.tableId,
        method: 'PATCH'
      };

      delete params.datasetId;
      delete params.projectId;
      delete params.tableId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * bigquery.tables.update
     *
     * @desc Updates information in an existing table. The update method replaces the entire table resource, whereas the patch method only replaces fields that are provided in the submitted table resource.
     *
     * @alias bigquery.tables.update
     * @memberOf! bigquery(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.datasetId - Dataset ID of the table to update
     * @param  {string} params.projectId - Project ID of the table to update
     * @param  {string} params.tableId - Table ID of the table to update
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['projectId', 'datasetId', 'tableId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/bigquery/v2/projects/' + params.projectId + '/datasets/' + params.datasetId + '/tables/' + params.tableId,
        method: 'PUT'
      };

      delete params.datasetId;
      delete params.projectId;
      delete params.tableId;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };
}

/**
 * Exports Bigquery object
 * @type Bigquery
 */
module.exports = Bigquery;