(function(window, angular, undefined) {'use strict';

var urlBase = "/api";
var authHeader = 'authorization';

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.AccessToken
 * @header lbServices.AccessToken
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `AccessToken` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "AccessToken",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/AccessTokens/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use AccessToken.user() instead.
        "prototype$__get__user": {
          url: urlBase + "/AccessTokens/:id/user",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#create
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/AccessTokens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#createMany
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/AccessTokens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#upsert
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/AccessTokens",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#exists
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/AccessTokens/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#findById
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/AccessTokens/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#find
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/AccessTokens",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#findOne
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/AccessTokens/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#updateAll
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/AccessTokens/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#deleteById
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/AccessTokens/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#count
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/AccessTokens/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#prototype$updateAttributes
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/AccessTokens/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#createChangeStream
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/AccessTokens/change-stream",
          method: "POST"
        },

        // INTERNAL. Use User.accessTokens.findById() instead.
        "::findById::user::accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/accessTokens/:fk",
          method: "GET"
        },

        // INTERNAL. Use User.accessTokens.destroyById() instead.
        "::destroyById::user::accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/accessTokens/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use User.accessTokens.updateById() instead.
        "::updateById::user::accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/accessTokens/:fk",
          method: "PUT"
        },

        // INTERNAL. Use User.accessTokens() instead.
        "::get::user::accessTokens": {
          isArray: true,
          url: urlBase + "/users/:id/accessTokens",
          method: "GET"
        },

        // INTERNAL. Use User.accessTokens.create() instead.
        "::create::user::accessTokens": {
          url: urlBase + "/users/:id/accessTokens",
          method: "POST"
        },

        // INTERNAL. Use User.accessTokens.createMany() instead.
        "::createMany::user::accessTokens": {
          isArray: true,
          url: urlBase + "/users/:id/accessTokens",
          method: "POST"
        },

        // INTERNAL. Use User.accessTokens.destroyAll() instead.
        "::delete::user::accessTokens": {
          url: urlBase + "/users/:id/accessTokens",
          method: "DELETE"
        },

        // INTERNAL. Use User.accessTokens.count() instead.
        "::count::user::accessTokens": {
          url: urlBase + "/users/:id/accessTokens/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.AccessToken#updateOrCreate
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#update
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#destroyById
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#removeById
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.AccessToken#modelName
    * @propertyOf lbServices.AccessToken
    * @description
    * The name of the model represented by this $resource,
    * i.e. `AccessToken`.
    */
    R.modelName = "AccessToken";


        /**
         * @ngdoc method
         * @name lbServices.AccessToken#user
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Fetches belongsTo relation user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.user = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::get::AccessToken::user"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Nav
 * @header lbServices.Nav
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Nav` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Nav",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/navs/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Nav.tagRelations.findById() instead.
        "prototype$__findById__tagRelations": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/navs/:id/tagRelations/:fk",
          method: "GET"
        },

        // INTERNAL. Use Nav.tagRelations.destroyById() instead.
        "prototype$__destroyById__tagRelations": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/navs/:id/tagRelations/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Nav.tagRelations.updateById() instead.
        "prototype$__updateById__tagRelations": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/navs/:id/tagRelations/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Nav.tagRelations() instead.
        "prototype$__get__tagRelations": {
          isArray: true,
          url: urlBase + "/navs/:id/tagRelations",
          method: "GET"
        },

        // INTERNAL. Use Nav.tagRelations.create() instead.
        "prototype$__create__tagRelations": {
          url: urlBase + "/navs/:id/tagRelations",
          method: "POST"
        },

        // INTERNAL. Use Nav.tagRelations.destroyAll() instead.
        "prototype$__delete__tagRelations": {
          url: urlBase + "/navs/:id/tagRelations",
          method: "DELETE"
        },

        // INTERNAL. Use Nav.tagRelations.count() instead.
        "prototype$__count__tagRelations": {
          url: urlBase + "/navs/:id/tagRelations/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Nav#create
         * @methodOf lbServices.Nav
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Nav` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/navs",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Nav#createMany
         * @methodOf lbServices.Nav
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Nav` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/navs",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Nav#upsert
         * @methodOf lbServices.Nav
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Nav` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/navs",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Nav#exists
         * @methodOf lbServices.Nav
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/navs/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Nav#findById
         * @methodOf lbServices.Nav
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Nav` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/navs/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Nav#find
         * @methodOf lbServices.Nav
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Nav` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/navs",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Nav#findOne
         * @methodOf lbServices.Nav
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Nav` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/navs/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Nav#updateAll
         * @methodOf lbServices.Nav
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/navs/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Nav#deleteById
         * @methodOf lbServices.Nav
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Nav` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/navs/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Nav#count
         * @methodOf lbServices.Nav
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/navs/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Nav#prototype$updateAttributes
         * @methodOf lbServices.Nav
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Nav` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/navs/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Nav#createChangeStream
         * @methodOf lbServices.Nav
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/navs/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Tag.navs.findById() instead.
        "::findById::tag::navs": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/tags/:id/navs/:fk",
          method: "GET"
        },

        // INTERNAL. Use Tag.navs.destroyById() instead.
        "::destroyById::tag::navs": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/tags/:id/navs/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Tag.navs.updateById() instead.
        "::updateById::tag::navs": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/tags/:id/navs/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Tag.navs.link() instead.
        "::link::tag::navs": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/tags/:id/navs/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Tag.navs.unlink() instead.
        "::unlink::tag::navs": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/tags/:id/navs/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Tag.navs.exists() instead.
        "::exists::tag::navs": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/tags/:id/navs/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Tag.navs() instead.
        "::get::tag::navs": {
          isArray: true,
          url: urlBase + "/tags/:id/navs",
          method: "GET"
        },

        // INTERNAL. Use Tag.navs.create() instead.
        "::create::tag::navs": {
          url: urlBase + "/tags/:id/navs",
          method: "POST"
        },

        // INTERNAL. Use Tag.navs.createMany() instead.
        "::createMany::tag::navs": {
          isArray: true,
          url: urlBase + "/tags/:id/navs",
          method: "POST"
        },

        // INTERNAL. Use Tag.navs.destroyAll() instead.
        "::delete::tag::navs": {
          url: urlBase + "/tags/:id/navs",
          method: "DELETE"
        },

        // INTERNAL. Use Tag.navs.count() instead.
        "::count::tag::navs": {
          url: urlBase + "/tags/:id/navs/count",
          method: "GET"
        },

        // INTERNAL. Use TagRelation.nav() instead.
        "::get::tagRelation::nav": {
          url: urlBase + "/tagRelations/:id/nav",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Nav#updateOrCreate
         * @methodOf lbServices.Nav
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Nav` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Nav#update
         * @methodOf lbServices.Nav
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Nav#destroyById
         * @methodOf lbServices.Nav
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Nav` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Nav#removeById
         * @methodOf lbServices.Nav
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Nav` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Nav#modelName
    * @propertyOf lbServices.Nav
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Nav`.
    */
    R.modelName = "Nav";

    /**
     * @ngdoc object
     * @name lbServices.Nav.tagRelations
     * @header lbServices.Nav.tagRelations
     * @object
     * @description
     *
     * The object `Nav.tagRelations` groups methods
     * manipulating `TagRelation` instances related to `Nav`.
     *
     * Call {@link lbServices.Nav#tagRelations Nav.tagRelations()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Nav#tagRelations
         * @methodOf lbServices.Nav
         *
         * @description
         *
         * Queries tagRelations of nav.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TagRelation` object.)
         * </em>
         */
        R.tagRelations = function() {
          var TargetResource = $injector.get("TagRelation");
          var action = TargetResource["::get::nav::tagRelations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Nav.tagRelations#count
         * @methodOf lbServices.Nav.tagRelations
         *
         * @description
         *
         * Counts tagRelations of nav.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.tagRelations.count = function() {
          var TargetResource = $injector.get("TagRelation");
          var action = TargetResource["::count::nav::tagRelations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Nav.tagRelations#create
         * @methodOf lbServices.Nav.tagRelations
         *
         * @description
         *
         * Creates a new instance in tagRelations of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TagRelation` object.)
         * </em>
         */
        R.tagRelations.create = function() {
          var TargetResource = $injector.get("TagRelation");
          var action = TargetResource["::create::nav::tagRelations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Nav.tagRelations#createMany
         * @methodOf lbServices.Nav.tagRelations
         *
         * @description
         *
         * Creates a new instance in tagRelations of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TagRelation` object.)
         * </em>
         */
        R.tagRelations.createMany = function() {
          var TargetResource = $injector.get("TagRelation");
          var action = TargetResource["::createMany::nav::tagRelations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Nav.tagRelations#destroyAll
         * @methodOf lbServices.Nav.tagRelations
         *
         * @description
         *
         * Deletes all tagRelations of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.tagRelations.destroyAll = function() {
          var TargetResource = $injector.get("TagRelation");
          var action = TargetResource["::delete::nav::tagRelations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Nav.tagRelations#destroyById
         * @methodOf lbServices.Nav.tagRelations
         *
         * @description
         *
         * Delete a related item by id for tagRelations.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for tagRelations
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.tagRelations.destroyById = function() {
          var TargetResource = $injector.get("TagRelation");
          var action = TargetResource["::destroyById::nav::tagRelations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Nav.tagRelations#findById
         * @methodOf lbServices.Nav.tagRelations
         *
         * @description
         *
         * Find a related item by id for tagRelations.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for tagRelations
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TagRelation` object.)
         * </em>
         */
        R.tagRelations.findById = function() {
          var TargetResource = $injector.get("TagRelation");
          var action = TargetResource["::findById::nav::tagRelations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Nav.tagRelations#updateById
         * @methodOf lbServices.Nav.tagRelations
         *
         * @description
         *
         * Update a related item by id for tagRelations.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for tagRelations
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TagRelation` object.)
         * </em>
         */
        R.tagRelations.updateById = function() {
          var TargetResource = $injector.get("TagRelation");
          var action = TargetResource["::updateById::nav::tagRelations"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.User
 * @header lbServices.User
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `User` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "User",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/users/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use User.accessTokens.findById() instead.
        "prototype$__findById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/accessTokens/:fk",
          method: "GET"
        },

        // INTERNAL. Use User.accessTokens.destroyById() instead.
        "prototype$__destroyById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/accessTokens/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use User.accessTokens.updateById() instead.
        "prototype$__updateById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/accessTokens/:fk",
          method: "PUT"
        },

        // INTERNAL. Use User.blogs.findById() instead.
        "prototype$__findById__blogs": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/blogs/:fk",
          method: "GET"
        },

        // INTERNAL. Use User.blogs.destroyById() instead.
        "prototype$__destroyById__blogs": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/blogs/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use User.blogs.updateById() instead.
        "prototype$__updateById__blogs": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/blogs/:fk",
          method: "PUT"
        },

        // INTERNAL. Use User.comments.findById() instead.
        "prototype$__findById__comments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/comments/:fk",
          method: "GET"
        },

        // INTERNAL. Use User.comments.destroyById() instead.
        "prototype$__destroyById__comments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/comments/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use User.comments.updateById() instead.
        "prototype$__updateById__comments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/comments/:fk",
          method: "PUT"
        },

        // INTERNAL. Use User.replies.findById() instead.
        "prototype$__findById__replies": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/replies/:fk",
          method: "GET"
        },

        // INTERNAL. Use User.replies.destroyById() instead.
        "prototype$__destroyById__replies": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/replies/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use User.replies.updateById() instead.
        "prototype$__updateById__replies": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/replies/:fk",
          method: "PUT"
        },

        // INTERNAL. Use User.commentLikes.findById() instead.
        "prototype$__findById__commentLikes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/commentLikes/:fk",
          method: "GET"
        },

        // INTERNAL. Use User.commentLikes.destroyById() instead.
        "prototype$__destroyById__commentLikes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/commentLikes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use User.commentLikes.updateById() instead.
        "prototype$__updateById__commentLikes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/commentLikes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use User.replyLikes.findById() instead.
        "prototype$__findById__replyLikes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/replyLikes/:fk",
          method: "GET"
        },

        // INTERNAL. Use User.replyLikes.destroyById() instead.
        "prototype$__destroyById__replyLikes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/replyLikes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use User.replyLikes.updateById() instead.
        "prototype$__updateById__replyLikes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/replyLikes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use User.focusUsers.findById() instead.
        "prototype$__findById__focusUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/focusUsers/:fk",
          method: "GET"
        },

        // INTERNAL. Use User.focusUsers.destroyById() instead.
        "prototype$__destroyById__focusUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/focusUsers/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use User.focusUsers.updateById() instead.
        "prototype$__updateById__focusUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/focusUsers/:fk",
          method: "PUT"
        },

        // INTERNAL. Use User.followUsers.findById() instead.
        "prototype$__findById__followUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/followUsers/:fk",
          method: "GET"
        },

        // INTERNAL. Use User.followUsers.destroyById() instead.
        "prototype$__destroyById__followUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/followUsers/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use User.followUsers.updateById() instead.
        "prototype$__updateById__followUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/followUsers/:fk",
          method: "PUT"
        },

        // INTERNAL. Use User.roles.findById() instead.
        "prototype$__findById__roles": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/roles/:fk",
          method: "GET"
        },

        // INTERNAL. Use User.roles.destroyById() instead.
        "prototype$__destroyById__roles": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/roles/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use User.roles.updateById() instead.
        "prototype$__updateById__roles": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/roles/:fk",
          method: "PUT"
        },

        // INTERNAL. Use User.roles.link() instead.
        "prototype$__link__roles": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/roles/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use User.roles.unlink() instead.
        "prototype$__unlink__roles": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/roles/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use User.roles.exists() instead.
        "prototype$__exists__roles": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/roles/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use User.roleMappings.findById() instead.
        "prototype$__findById__roleMappings": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/roleMappings/:fk",
          method: "GET"
        },

        // INTERNAL. Use User.roleMappings.destroyById() instead.
        "prototype$__destroyById__roleMappings": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/roleMappings/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use User.roleMappings.updateById() instead.
        "prototype$__updateById__roleMappings": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/roleMappings/:fk",
          method: "PUT"
        },

        // INTERNAL. Use User.accessTokens() instead.
        "prototype$__get__accessTokens": {
          isArray: true,
          url: urlBase + "/users/:id/accessTokens",
          method: "GET"
        },

        // INTERNAL. Use User.accessTokens.create() instead.
        "prototype$__create__accessTokens": {
          url: urlBase + "/users/:id/accessTokens",
          method: "POST"
        },

        // INTERNAL. Use User.accessTokens.destroyAll() instead.
        "prototype$__delete__accessTokens": {
          url: urlBase + "/users/:id/accessTokens",
          method: "DELETE"
        },

        // INTERNAL. Use User.accessTokens.count() instead.
        "prototype$__count__accessTokens": {
          url: urlBase + "/users/:id/accessTokens/count",
          method: "GET"
        },

        // INTERNAL. Use User.blogs() instead.
        "prototype$__get__blogs": {
          isArray: true,
          url: urlBase + "/users/:id/blogs",
          method: "GET"
        },

        // INTERNAL. Use User.blogs.create() instead.
        "prototype$__create__blogs": {
          url: urlBase + "/users/:id/blogs",
          method: "POST"
        },

        // INTERNAL. Use User.blogs.destroyAll() instead.
        "prototype$__delete__blogs": {
          url: urlBase + "/users/:id/blogs",
          method: "DELETE"
        },

        // INTERNAL. Use User.blogs.count() instead.
        "prototype$__count__blogs": {
          url: urlBase + "/users/:id/blogs/count",
          method: "GET"
        },

        // INTERNAL. Use User.comments() instead.
        "prototype$__get__comments": {
          isArray: true,
          url: urlBase + "/users/:id/comments",
          method: "GET"
        },

        // INTERNAL. Use User.comments.create() instead.
        "prototype$__create__comments": {
          url: urlBase + "/users/:id/comments",
          method: "POST"
        },

        // INTERNAL. Use User.comments.destroyAll() instead.
        "prototype$__delete__comments": {
          url: urlBase + "/users/:id/comments",
          method: "DELETE"
        },

        // INTERNAL. Use User.comments.count() instead.
        "prototype$__count__comments": {
          url: urlBase + "/users/:id/comments/count",
          method: "GET"
        },

        // INTERNAL. Use User.replies() instead.
        "prototype$__get__replies": {
          isArray: true,
          url: urlBase + "/users/:id/replies",
          method: "GET"
        },

        // INTERNAL. Use User.replies.create() instead.
        "prototype$__create__replies": {
          url: urlBase + "/users/:id/replies",
          method: "POST"
        },

        // INTERNAL. Use User.replies.destroyAll() instead.
        "prototype$__delete__replies": {
          url: urlBase + "/users/:id/replies",
          method: "DELETE"
        },

        // INTERNAL. Use User.replies.count() instead.
        "prototype$__count__replies": {
          url: urlBase + "/users/:id/replies/count",
          method: "GET"
        },

        // INTERNAL. Use User.commentLikes() instead.
        "prototype$__get__commentLikes": {
          isArray: true,
          url: urlBase + "/users/:id/commentLikes",
          method: "GET"
        },

        // INTERNAL. Use User.commentLikes.create() instead.
        "prototype$__create__commentLikes": {
          url: urlBase + "/users/:id/commentLikes",
          method: "POST"
        },

        // INTERNAL. Use User.commentLikes.destroyAll() instead.
        "prototype$__delete__commentLikes": {
          url: urlBase + "/users/:id/commentLikes",
          method: "DELETE"
        },

        // INTERNAL. Use User.commentLikes.count() instead.
        "prototype$__count__commentLikes": {
          url: urlBase + "/users/:id/commentLikes/count",
          method: "GET"
        },

        // INTERNAL. Use User.replyLikes() instead.
        "prototype$__get__replyLikes": {
          isArray: true,
          url: urlBase + "/users/:id/replyLikes",
          method: "GET"
        },

        // INTERNAL. Use User.replyLikes.create() instead.
        "prototype$__create__replyLikes": {
          url: urlBase + "/users/:id/replyLikes",
          method: "POST"
        },

        // INTERNAL. Use User.replyLikes.destroyAll() instead.
        "prototype$__delete__replyLikes": {
          url: urlBase + "/users/:id/replyLikes",
          method: "DELETE"
        },

        // INTERNAL. Use User.replyLikes.count() instead.
        "prototype$__count__replyLikes": {
          url: urlBase + "/users/:id/replyLikes/count",
          method: "GET"
        },

        // INTERNAL. Use User.focusUsers() instead.
        "prototype$__get__focusUsers": {
          isArray: true,
          url: urlBase + "/users/:id/focusUsers",
          method: "GET"
        },

        // INTERNAL. Use User.focusUsers.create() instead.
        "prototype$__create__focusUsers": {
          url: urlBase + "/users/:id/focusUsers",
          method: "POST"
        },

        // INTERNAL. Use User.focusUsers.destroyAll() instead.
        "prototype$__delete__focusUsers": {
          url: urlBase + "/users/:id/focusUsers",
          method: "DELETE"
        },

        // INTERNAL. Use User.focusUsers.count() instead.
        "prototype$__count__focusUsers": {
          url: urlBase + "/users/:id/focusUsers/count",
          method: "GET"
        },

        // INTERNAL. Use User.followUsers() instead.
        "prototype$__get__followUsers": {
          isArray: true,
          url: urlBase + "/users/:id/followUsers",
          method: "GET"
        },

        // INTERNAL. Use User.followUsers.create() instead.
        "prototype$__create__followUsers": {
          url: urlBase + "/users/:id/followUsers",
          method: "POST"
        },

        // INTERNAL. Use User.followUsers.destroyAll() instead.
        "prototype$__delete__followUsers": {
          url: urlBase + "/users/:id/followUsers",
          method: "DELETE"
        },

        // INTERNAL. Use User.followUsers.count() instead.
        "prototype$__count__followUsers": {
          url: urlBase + "/users/:id/followUsers/count",
          method: "GET"
        },

        // INTERNAL. Use User.roles() instead.
        "prototype$__get__roles": {
          isArray: true,
          url: urlBase + "/users/:id/roles",
          method: "GET"
        },

        // INTERNAL. Use User.roles.create() instead.
        "prototype$__create__roles": {
          url: urlBase + "/users/:id/roles",
          method: "POST"
        },

        // INTERNAL. Use User.roles.destroyAll() instead.
        "prototype$__delete__roles": {
          url: urlBase + "/users/:id/roles",
          method: "DELETE"
        },

        // INTERNAL. Use User.roles.count() instead.
        "prototype$__count__roles": {
          url: urlBase + "/users/:id/roles/count",
          method: "GET"
        },

        // INTERNAL. Use User.roleMappings() instead.
        "prototype$__get__roleMappings": {
          isArray: true,
          url: urlBase + "/users/:id/roleMappings",
          method: "GET"
        },

        // INTERNAL. Use User.roleMappings.create() instead.
        "prototype$__create__roleMappings": {
          url: urlBase + "/users/:id/roleMappings",
          method: "POST"
        },

        // INTERNAL. Use User.roleMappings.destroyAll() instead.
        "prototype$__delete__roleMappings": {
          url: urlBase + "/users/:id/roleMappings",
          method: "DELETE"
        },

        // INTERNAL. Use User.roleMappings.count() instead.
        "prototype$__count__roleMappings": {
          url: urlBase + "/users/:id/roleMappings/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#create
         * @methodOf lbServices.User
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/users",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#createMany
         * @methodOf lbServices.User
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/users",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#upsert
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/users",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#exists
         * @methodOf lbServices.User
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/users/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#findById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/users/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#find
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/users",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#findOne
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/users/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#updateAll
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/users/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#deleteById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/users/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#count
         * @methodOf lbServices.User
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/users/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$updateAttributes
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/users/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#createChangeStream
         * @methodOf lbServices.User
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/users/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#login
         * @methodOf lbServices.User
         *
         * @description
         *
         * Login a user with username/email and password.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
         *   Default value: `user`.
         *
         *  - `rememberMe` - `boolean` - Whether the authentication credentials
         *     should be remembered in localStorage across app/browser restarts.
         *     Default: `true`.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The response body contains properties of the AccessToken created on login.
         * Depending on the value of `include` parameter, the body may contain additional properties:
         * 
         *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
         * 
         *
         */
        "login": {
          params: {
            include: "user"
          },
          interceptor: {
            response: function(response) {
              var accessToken = response.data;
              LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
              LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
              LoopBackAuth.save();
              return response.resource;
            }
          },
          url: urlBase + "/users/login",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#logout
         * @methodOf lbServices.User
         *
         * @description
         *
         * Logout a user with access token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "logout": {
          interceptor: {
            response: function(response) {
              LoopBackAuth.clearUser();
              LoopBackAuth.clearStorage();
              return response.resource;
            }
          },
          url: urlBase + "/users/logout",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#confirm
         * @methodOf lbServices.User
         *
         * @description
         *
         * Confirm a user registration with email verification token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `uid` – `{string}` - 
         *
         *  - `token` – `{string}` - 
         *
         *  - `redirect` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "confirm": {
          url: urlBase + "/users/confirm",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#resetPassword
         * @methodOf lbServices.User
         *
         * @description
         *
         * Reset password for a user with email.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "resetPassword": {
          url: urlBase + "/users/reset",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#changePassword
         * @methodOf lbServices.User
         *
         * @description
         *
         * change password with uid,token,newpassword.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `uid` – `{string}` - 
         *
         *  - `token` – `{string}` - 
         *
         *  - `password` – `{string}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "changePassword": {
          url: urlBase + "/users/changePassword",
          method: "GET"
        },

        // INTERNAL. Use AccessToken.user() instead.
        "::get::AccessToken::user": {
          url: urlBase + "/AccessTokens/:id/user",
          method: "GET"
        },

        // INTERNAL. Use Blog.user() instead.
        "::get::blog::user": {
          url: urlBase + "/blogs/:id/user",
          method: "GET"
        },

        // INTERNAL. Use Blog.blogLikeUsers.findById() instead.
        "::findById::blog::blogLikeUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/blogs/:id/blogLikeUsers/:fk",
          method: "GET"
        },

        // INTERNAL. Use Blog.blogLikeUsers.destroyById() instead.
        "::destroyById::blog::blogLikeUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/blogs/:id/blogLikeUsers/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Blog.blogLikeUsers.updateById() instead.
        "::updateById::blog::blogLikeUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/blogs/:id/blogLikeUsers/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Blog.blogLikeUsers.link() instead.
        "::link::blog::blogLikeUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/blogs/:id/blogLikeUsers/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Blog.blogLikeUsers.unlink() instead.
        "::unlink::blog::blogLikeUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/blogs/:id/blogLikeUsers/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Blog.blogLikeUsers.exists() instead.
        "::exists::blog::blogLikeUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/blogs/:id/blogLikeUsers/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Blog.blogLikeUsers() instead.
        "::get::blog::blogLikeUsers": {
          isArray: true,
          url: urlBase + "/blogs/:id/blogLikeUsers",
          method: "GET"
        },

        // INTERNAL. Use Blog.blogLikeUsers.create() instead.
        "::create::blog::blogLikeUsers": {
          url: urlBase + "/blogs/:id/blogLikeUsers",
          method: "POST"
        },

        // INTERNAL. Use Blog.blogLikeUsers.createMany() instead.
        "::createMany::blog::blogLikeUsers": {
          isArray: true,
          url: urlBase + "/blogs/:id/blogLikeUsers",
          method: "POST"
        },

        // INTERNAL. Use Blog.blogLikeUsers.destroyAll() instead.
        "::delete::blog::blogLikeUsers": {
          url: urlBase + "/blogs/:id/blogLikeUsers",
          method: "DELETE"
        },

        // INTERNAL. Use Blog.blogLikeUsers.count() instead.
        "::count::blog::blogLikeUsers": {
          url: urlBase + "/blogs/:id/blogLikeUsers/count",
          method: "GET"
        },

        // INTERNAL. Use Comment.user() instead.
        "::get::comment::user": {
          url: urlBase + "/comments/:id/user",
          method: "GET"
        },

        // INTERNAL. Use Reply.user() instead.
        "::get::reply::user": {
          url: urlBase + "/replies/:id/user",
          method: "GET"
        },

        // INTERNAL. Use CommentLike.user() instead.
        "::get::commentLike::user": {
          url: urlBase + "/commentLikes/:id/user",
          method: "GET"
        },

        // INTERNAL. Use ReplyLike.user() instead.
        "::get::replyLike::user": {
          url: urlBase + "/replyLikes/:id/user",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#getCurrent
         * @methodOf lbServices.User
         *
         * @description
         *
         * Get data of the currently logged user. Fail with HTTP result 401
         * when there is no user logged in.
         *
         * @param {function(Object,Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "getCurrent": {
           url: urlBase + "/users" + "/:id",
           method: "GET",
           params: {
             id: function() {
              var id = LoopBackAuth.currentUserId;
              if (id == null) id = '__anonymous__';
              return id;
            },
          },
          interceptor: {
            response: function(response) {
              LoopBackAuth.currentUserData = response.data;
              return response.resource;
            }
          },
          __isGetCurrentUser__ : true
        }
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.User#updateOrCreate
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.User#update
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.User#destroyById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.User#removeById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.User#getCachedCurrent
         * @methodOf lbServices.User
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.User#login} or
         * {@link lbServices.User#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A User instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#isAuthenticated
         * @methodOf lbServices.User
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#getCurrentId
         * @methodOf lbServices.User
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

    /**
    * @ngdoc property
    * @name lbServices.User#modelName
    * @propertyOf lbServices.User
    * @description
    * The name of the model represented by this $resource,
    * i.e. `User`.
    */
    R.modelName = "User";

    /**
     * @ngdoc object
     * @name lbServices.User.accessTokens
     * @header lbServices.User.accessTokens
     * @object
     * @description
     *
     * The object `User.accessTokens` groups methods
     * manipulating `AccessToken` instances related to `User`.
     *
     * Call {@link lbServices.User#accessTokens User.accessTokens()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.User#accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Queries accessTokens of user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        R.accessTokens = function() {
          var TargetResource = $injector.get("AccessToken");
          var action = TargetResource["::get::user::accessTokens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.accessTokens#count
         * @methodOf lbServices.User.accessTokens
         *
         * @description
         *
         * Counts accessTokens of user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.accessTokens.count = function() {
          var TargetResource = $injector.get("AccessToken");
          var action = TargetResource["::count::user::accessTokens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.accessTokens#create
         * @methodOf lbServices.User.accessTokens
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        R.accessTokens.create = function() {
          var TargetResource = $injector.get("AccessToken");
          var action = TargetResource["::create::user::accessTokens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.accessTokens#createMany
         * @methodOf lbServices.User.accessTokens
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        R.accessTokens.createMany = function() {
          var TargetResource = $injector.get("AccessToken");
          var action = TargetResource["::createMany::user::accessTokens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.accessTokens#destroyAll
         * @methodOf lbServices.User.accessTokens
         *
         * @description
         *
         * Deletes all accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.accessTokens.destroyAll = function() {
          var TargetResource = $injector.get("AccessToken");
          var action = TargetResource["::delete::user::accessTokens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.accessTokens#destroyById
         * @methodOf lbServices.User.accessTokens
         *
         * @description
         *
         * Delete a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.accessTokens.destroyById = function() {
          var TargetResource = $injector.get("AccessToken");
          var action = TargetResource["::destroyById::user::accessTokens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.accessTokens#findById
         * @methodOf lbServices.User.accessTokens
         *
         * @description
         *
         * Find a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        R.accessTokens.findById = function() {
          var TargetResource = $injector.get("AccessToken");
          var action = TargetResource["::findById::user::accessTokens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.accessTokens#updateById
         * @methodOf lbServices.User.accessTokens
         *
         * @description
         *
         * Update a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        R.accessTokens.updateById = function() {
          var TargetResource = $injector.get("AccessToken");
          var action = TargetResource["::updateById::user::accessTokens"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.User.blogs
     * @header lbServices.User.blogs
     * @object
     * @description
     *
     * The object `User.blogs` groups methods
     * manipulating `Blog` instances related to `User`.
     *
     * Call {@link lbServices.User#blogs User.blogs()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.User#blogs
         * @methodOf lbServices.User
         *
         * @description
         *
         * Queries blogs of user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Blog` object.)
         * </em>
         */
        R.blogs = function() {
          var TargetResource = $injector.get("Blog");
          var action = TargetResource["::get::user::blogs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.blogs#count
         * @methodOf lbServices.User.blogs
         *
         * @description
         *
         * Counts blogs of user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.blogs.count = function() {
          var TargetResource = $injector.get("Blog");
          var action = TargetResource["::count::user::blogs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.blogs#create
         * @methodOf lbServices.User.blogs
         *
         * @description
         *
         * Creates a new instance in blogs of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Blog` object.)
         * </em>
         */
        R.blogs.create = function() {
          var TargetResource = $injector.get("Blog");
          var action = TargetResource["::create::user::blogs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.blogs#createMany
         * @methodOf lbServices.User.blogs
         *
         * @description
         *
         * Creates a new instance in blogs of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Blog` object.)
         * </em>
         */
        R.blogs.createMany = function() {
          var TargetResource = $injector.get("Blog");
          var action = TargetResource["::createMany::user::blogs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.blogs#destroyAll
         * @methodOf lbServices.User.blogs
         *
         * @description
         *
         * Deletes all blogs of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.blogs.destroyAll = function() {
          var TargetResource = $injector.get("Blog");
          var action = TargetResource["::delete::user::blogs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.blogs#destroyById
         * @methodOf lbServices.User.blogs
         *
         * @description
         *
         * Delete a related item by id for blogs.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for blogs
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.blogs.destroyById = function() {
          var TargetResource = $injector.get("Blog");
          var action = TargetResource["::destroyById::user::blogs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.blogs#findById
         * @methodOf lbServices.User.blogs
         *
         * @description
         *
         * Find a related item by id for blogs.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for blogs
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Blog` object.)
         * </em>
         */
        R.blogs.findById = function() {
          var TargetResource = $injector.get("Blog");
          var action = TargetResource["::findById::user::blogs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.blogs#updateById
         * @methodOf lbServices.User.blogs
         *
         * @description
         *
         * Update a related item by id for blogs.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for blogs
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Blog` object.)
         * </em>
         */
        R.blogs.updateById = function() {
          var TargetResource = $injector.get("Blog");
          var action = TargetResource["::updateById::user::blogs"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.User.comments
     * @header lbServices.User.comments
     * @object
     * @description
     *
     * The object `User.comments` groups methods
     * manipulating `Comment` instances related to `User`.
     *
     * Call {@link lbServices.User#comments User.comments()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.User#comments
         * @methodOf lbServices.User
         *
         * @description
         *
         * Queries comments of user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comment` object.)
         * </em>
         */
        R.comments = function() {
          var TargetResource = $injector.get("Comment");
          var action = TargetResource["::get::user::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.comments#count
         * @methodOf lbServices.User.comments
         *
         * @description
         *
         * Counts comments of user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.comments.count = function() {
          var TargetResource = $injector.get("Comment");
          var action = TargetResource["::count::user::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.comments#create
         * @methodOf lbServices.User.comments
         *
         * @description
         *
         * Creates a new instance in comments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comment` object.)
         * </em>
         */
        R.comments.create = function() {
          var TargetResource = $injector.get("Comment");
          var action = TargetResource["::create::user::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.comments#createMany
         * @methodOf lbServices.User.comments
         *
         * @description
         *
         * Creates a new instance in comments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comment` object.)
         * </em>
         */
        R.comments.createMany = function() {
          var TargetResource = $injector.get("Comment");
          var action = TargetResource["::createMany::user::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.comments#destroyAll
         * @methodOf lbServices.User.comments
         *
         * @description
         *
         * Deletes all comments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.comments.destroyAll = function() {
          var TargetResource = $injector.get("Comment");
          var action = TargetResource["::delete::user::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.comments#destroyById
         * @methodOf lbServices.User.comments
         *
         * @description
         *
         * Delete a related item by id for comments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for comments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.comments.destroyById = function() {
          var TargetResource = $injector.get("Comment");
          var action = TargetResource["::destroyById::user::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.comments#findById
         * @methodOf lbServices.User.comments
         *
         * @description
         *
         * Find a related item by id for comments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for comments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comment` object.)
         * </em>
         */
        R.comments.findById = function() {
          var TargetResource = $injector.get("Comment");
          var action = TargetResource["::findById::user::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.comments#updateById
         * @methodOf lbServices.User.comments
         *
         * @description
         *
         * Update a related item by id for comments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for comments
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comment` object.)
         * </em>
         */
        R.comments.updateById = function() {
          var TargetResource = $injector.get("Comment");
          var action = TargetResource["::updateById::user::comments"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.User.replies
     * @header lbServices.User.replies
     * @object
     * @description
     *
     * The object `User.replies` groups methods
     * manipulating `Reply` instances related to `User`.
     *
     * Call {@link lbServices.User#replies User.replies()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.User#replies
         * @methodOf lbServices.User
         *
         * @description
         *
         * Queries replies of user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reply` object.)
         * </em>
         */
        R.replies = function() {
          var TargetResource = $injector.get("Reply");
          var action = TargetResource["::get::user::replies"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.replies#count
         * @methodOf lbServices.User.replies
         *
         * @description
         *
         * Counts replies of user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.replies.count = function() {
          var TargetResource = $injector.get("Reply");
          var action = TargetResource["::count::user::replies"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.replies#create
         * @methodOf lbServices.User.replies
         *
         * @description
         *
         * Creates a new instance in replies of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reply` object.)
         * </em>
         */
        R.replies.create = function() {
          var TargetResource = $injector.get("Reply");
          var action = TargetResource["::create::user::replies"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.replies#createMany
         * @methodOf lbServices.User.replies
         *
         * @description
         *
         * Creates a new instance in replies of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reply` object.)
         * </em>
         */
        R.replies.createMany = function() {
          var TargetResource = $injector.get("Reply");
          var action = TargetResource["::createMany::user::replies"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.replies#destroyAll
         * @methodOf lbServices.User.replies
         *
         * @description
         *
         * Deletes all replies of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.replies.destroyAll = function() {
          var TargetResource = $injector.get("Reply");
          var action = TargetResource["::delete::user::replies"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.replies#destroyById
         * @methodOf lbServices.User.replies
         *
         * @description
         *
         * Delete a related item by id for replies.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for replies
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.replies.destroyById = function() {
          var TargetResource = $injector.get("Reply");
          var action = TargetResource["::destroyById::user::replies"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.replies#findById
         * @methodOf lbServices.User.replies
         *
         * @description
         *
         * Find a related item by id for replies.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for replies
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reply` object.)
         * </em>
         */
        R.replies.findById = function() {
          var TargetResource = $injector.get("Reply");
          var action = TargetResource["::findById::user::replies"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.replies#updateById
         * @methodOf lbServices.User.replies
         *
         * @description
         *
         * Update a related item by id for replies.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for replies
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reply` object.)
         * </em>
         */
        R.replies.updateById = function() {
          var TargetResource = $injector.get("Reply");
          var action = TargetResource["::updateById::user::replies"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.User.commentLikes
     * @header lbServices.User.commentLikes
     * @object
     * @description
     *
     * The object `User.commentLikes` groups methods
     * manipulating `CommentLike` instances related to `User`.
     *
     * Call {@link lbServices.User#commentLikes User.commentLikes()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.User#commentLikes
         * @methodOf lbServices.User
         *
         * @description
         *
         * Queries commentLikes of user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CommentLike` object.)
         * </em>
         */
        R.commentLikes = function() {
          var TargetResource = $injector.get("CommentLike");
          var action = TargetResource["::get::user::commentLikes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.commentLikes#count
         * @methodOf lbServices.User.commentLikes
         *
         * @description
         *
         * Counts commentLikes of user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.commentLikes.count = function() {
          var TargetResource = $injector.get("CommentLike");
          var action = TargetResource["::count::user::commentLikes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.commentLikes#create
         * @methodOf lbServices.User.commentLikes
         *
         * @description
         *
         * Creates a new instance in commentLikes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CommentLike` object.)
         * </em>
         */
        R.commentLikes.create = function() {
          var TargetResource = $injector.get("CommentLike");
          var action = TargetResource["::create::user::commentLikes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.commentLikes#createMany
         * @methodOf lbServices.User.commentLikes
         *
         * @description
         *
         * Creates a new instance in commentLikes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CommentLike` object.)
         * </em>
         */
        R.commentLikes.createMany = function() {
          var TargetResource = $injector.get("CommentLike");
          var action = TargetResource["::createMany::user::commentLikes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.commentLikes#destroyAll
         * @methodOf lbServices.User.commentLikes
         *
         * @description
         *
         * Deletes all commentLikes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.commentLikes.destroyAll = function() {
          var TargetResource = $injector.get("CommentLike");
          var action = TargetResource["::delete::user::commentLikes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.commentLikes#destroyById
         * @methodOf lbServices.User.commentLikes
         *
         * @description
         *
         * Delete a related item by id for commentLikes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for commentLikes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.commentLikes.destroyById = function() {
          var TargetResource = $injector.get("CommentLike");
          var action = TargetResource["::destroyById::user::commentLikes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.commentLikes#findById
         * @methodOf lbServices.User.commentLikes
         *
         * @description
         *
         * Find a related item by id for commentLikes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for commentLikes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CommentLike` object.)
         * </em>
         */
        R.commentLikes.findById = function() {
          var TargetResource = $injector.get("CommentLike");
          var action = TargetResource["::findById::user::commentLikes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.commentLikes#updateById
         * @methodOf lbServices.User.commentLikes
         *
         * @description
         *
         * Update a related item by id for commentLikes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for commentLikes
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CommentLike` object.)
         * </em>
         */
        R.commentLikes.updateById = function() {
          var TargetResource = $injector.get("CommentLike");
          var action = TargetResource["::updateById::user::commentLikes"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.User.replyLikes
     * @header lbServices.User.replyLikes
     * @object
     * @description
     *
     * The object `User.replyLikes` groups methods
     * manipulating `ReplyLike` instances related to `User`.
     *
     * Call {@link lbServices.User#replyLikes User.replyLikes()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.User#replyLikes
         * @methodOf lbServices.User
         *
         * @description
         *
         * Queries replyLikes of user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ReplyLike` object.)
         * </em>
         */
        R.replyLikes = function() {
          var TargetResource = $injector.get("ReplyLike");
          var action = TargetResource["::get::user::replyLikes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.replyLikes#count
         * @methodOf lbServices.User.replyLikes
         *
         * @description
         *
         * Counts replyLikes of user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.replyLikes.count = function() {
          var TargetResource = $injector.get("ReplyLike");
          var action = TargetResource["::count::user::replyLikes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.replyLikes#create
         * @methodOf lbServices.User.replyLikes
         *
         * @description
         *
         * Creates a new instance in replyLikes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ReplyLike` object.)
         * </em>
         */
        R.replyLikes.create = function() {
          var TargetResource = $injector.get("ReplyLike");
          var action = TargetResource["::create::user::replyLikes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.replyLikes#createMany
         * @methodOf lbServices.User.replyLikes
         *
         * @description
         *
         * Creates a new instance in replyLikes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ReplyLike` object.)
         * </em>
         */
        R.replyLikes.createMany = function() {
          var TargetResource = $injector.get("ReplyLike");
          var action = TargetResource["::createMany::user::replyLikes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.replyLikes#destroyAll
         * @methodOf lbServices.User.replyLikes
         *
         * @description
         *
         * Deletes all replyLikes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.replyLikes.destroyAll = function() {
          var TargetResource = $injector.get("ReplyLike");
          var action = TargetResource["::delete::user::replyLikes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.replyLikes#destroyById
         * @methodOf lbServices.User.replyLikes
         *
         * @description
         *
         * Delete a related item by id for replyLikes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for replyLikes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.replyLikes.destroyById = function() {
          var TargetResource = $injector.get("ReplyLike");
          var action = TargetResource["::destroyById::user::replyLikes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.replyLikes#findById
         * @methodOf lbServices.User.replyLikes
         *
         * @description
         *
         * Find a related item by id for replyLikes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for replyLikes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ReplyLike` object.)
         * </em>
         */
        R.replyLikes.findById = function() {
          var TargetResource = $injector.get("ReplyLike");
          var action = TargetResource["::findById::user::replyLikes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.replyLikes#updateById
         * @methodOf lbServices.User.replyLikes
         *
         * @description
         *
         * Update a related item by id for replyLikes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for replyLikes
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ReplyLike` object.)
         * </em>
         */
        R.replyLikes.updateById = function() {
          var TargetResource = $injector.get("ReplyLike");
          var action = TargetResource["::updateById::user::replyLikes"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.User.focusUsers
     * @header lbServices.User.focusUsers
     * @object
     * @description
     *
     * The object `User.focusUsers` groups methods
     * manipulating `FocusUser` instances related to `User`.
     *
     * Call {@link lbServices.User#focusUsers User.focusUsers()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.User#focusUsers
         * @methodOf lbServices.User
         *
         * @description
         *
         * Queries focusUsers of user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FocusUser` object.)
         * </em>
         */
        R.focusUsers = function() {
          var TargetResource = $injector.get("FocusUser");
          var action = TargetResource["::get::user::focusUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.focusUsers#count
         * @methodOf lbServices.User.focusUsers
         *
         * @description
         *
         * Counts focusUsers of user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.focusUsers.count = function() {
          var TargetResource = $injector.get("FocusUser");
          var action = TargetResource["::count::user::focusUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.focusUsers#create
         * @methodOf lbServices.User.focusUsers
         *
         * @description
         *
         * Creates a new instance in focusUsers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FocusUser` object.)
         * </em>
         */
        R.focusUsers.create = function() {
          var TargetResource = $injector.get("FocusUser");
          var action = TargetResource["::create::user::focusUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.focusUsers#createMany
         * @methodOf lbServices.User.focusUsers
         *
         * @description
         *
         * Creates a new instance in focusUsers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FocusUser` object.)
         * </em>
         */
        R.focusUsers.createMany = function() {
          var TargetResource = $injector.get("FocusUser");
          var action = TargetResource["::createMany::user::focusUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.focusUsers#destroyAll
         * @methodOf lbServices.User.focusUsers
         *
         * @description
         *
         * Deletes all focusUsers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.focusUsers.destroyAll = function() {
          var TargetResource = $injector.get("FocusUser");
          var action = TargetResource["::delete::user::focusUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.focusUsers#destroyById
         * @methodOf lbServices.User.focusUsers
         *
         * @description
         *
         * Delete a related item by id for focusUsers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for focusUsers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.focusUsers.destroyById = function() {
          var TargetResource = $injector.get("FocusUser");
          var action = TargetResource["::destroyById::user::focusUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.focusUsers#findById
         * @methodOf lbServices.User.focusUsers
         *
         * @description
         *
         * Find a related item by id for focusUsers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for focusUsers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FocusUser` object.)
         * </em>
         */
        R.focusUsers.findById = function() {
          var TargetResource = $injector.get("FocusUser");
          var action = TargetResource["::findById::user::focusUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.focusUsers#updateById
         * @methodOf lbServices.User.focusUsers
         *
         * @description
         *
         * Update a related item by id for focusUsers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for focusUsers
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FocusUser` object.)
         * </em>
         */
        R.focusUsers.updateById = function() {
          var TargetResource = $injector.get("FocusUser");
          var action = TargetResource["::updateById::user::focusUsers"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.User.followUsers
     * @header lbServices.User.followUsers
     * @object
     * @description
     *
     * The object `User.followUsers` groups methods
     * manipulating `FocusUser` instances related to `User`.
     *
     * Call {@link lbServices.User#followUsers User.followUsers()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.User#followUsers
         * @methodOf lbServices.User
         *
         * @description
         *
         * Queries followUsers of user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FocusUser` object.)
         * </em>
         */
        R.followUsers = function() {
          var TargetResource = $injector.get("FocusUser");
          var action = TargetResource["::get::user::followUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.followUsers#count
         * @methodOf lbServices.User.followUsers
         *
         * @description
         *
         * Counts followUsers of user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.followUsers.count = function() {
          var TargetResource = $injector.get("FocusUser");
          var action = TargetResource["::count::user::followUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.followUsers#create
         * @methodOf lbServices.User.followUsers
         *
         * @description
         *
         * Creates a new instance in followUsers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FocusUser` object.)
         * </em>
         */
        R.followUsers.create = function() {
          var TargetResource = $injector.get("FocusUser");
          var action = TargetResource["::create::user::followUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.followUsers#createMany
         * @methodOf lbServices.User.followUsers
         *
         * @description
         *
         * Creates a new instance in followUsers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FocusUser` object.)
         * </em>
         */
        R.followUsers.createMany = function() {
          var TargetResource = $injector.get("FocusUser");
          var action = TargetResource["::createMany::user::followUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.followUsers#destroyAll
         * @methodOf lbServices.User.followUsers
         *
         * @description
         *
         * Deletes all followUsers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.followUsers.destroyAll = function() {
          var TargetResource = $injector.get("FocusUser");
          var action = TargetResource["::delete::user::followUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.followUsers#destroyById
         * @methodOf lbServices.User.followUsers
         *
         * @description
         *
         * Delete a related item by id for followUsers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for followUsers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.followUsers.destroyById = function() {
          var TargetResource = $injector.get("FocusUser");
          var action = TargetResource["::destroyById::user::followUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.followUsers#findById
         * @methodOf lbServices.User.followUsers
         *
         * @description
         *
         * Find a related item by id for followUsers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for followUsers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FocusUser` object.)
         * </em>
         */
        R.followUsers.findById = function() {
          var TargetResource = $injector.get("FocusUser");
          var action = TargetResource["::findById::user::followUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.followUsers#updateById
         * @methodOf lbServices.User.followUsers
         *
         * @description
         *
         * Update a related item by id for followUsers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for followUsers
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FocusUser` object.)
         * </em>
         */
        R.followUsers.updateById = function() {
          var TargetResource = $injector.get("FocusUser");
          var action = TargetResource["::updateById::user::followUsers"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.User.roles
     * @header lbServices.User.roles
     * @object
     * @description
     *
     * The object `User.roles` groups methods
     * manipulating `Role` instances related to `User`.
     *
     * Call {@link lbServices.User#roles User.roles()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.User#roles
         * @methodOf lbServices.User
         *
         * @description
         *
         * Queries roles of user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Role` object.)
         * </em>
         */
        R.roles = function() {
          var TargetResource = $injector.get("Role");
          var action = TargetResource["::get::user::roles"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.roles#count
         * @methodOf lbServices.User.roles
         *
         * @description
         *
         * Counts roles of user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.roles.count = function() {
          var TargetResource = $injector.get("Role");
          var action = TargetResource["::count::user::roles"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.roles#create
         * @methodOf lbServices.User.roles
         *
         * @description
         *
         * Creates a new instance in roles of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Role` object.)
         * </em>
         */
        R.roles.create = function() {
          var TargetResource = $injector.get("Role");
          var action = TargetResource["::create::user::roles"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.roles#createMany
         * @methodOf lbServices.User.roles
         *
         * @description
         *
         * Creates a new instance in roles of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Role` object.)
         * </em>
         */
        R.roles.createMany = function() {
          var TargetResource = $injector.get("Role");
          var action = TargetResource["::createMany::user::roles"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.roles#destroyAll
         * @methodOf lbServices.User.roles
         *
         * @description
         *
         * Deletes all roles of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.roles.destroyAll = function() {
          var TargetResource = $injector.get("Role");
          var action = TargetResource["::delete::user::roles"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.roles#destroyById
         * @methodOf lbServices.User.roles
         *
         * @description
         *
         * Delete a related item by id for roles.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for roles
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.roles.destroyById = function() {
          var TargetResource = $injector.get("Role");
          var action = TargetResource["::destroyById::user::roles"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.roles#exists
         * @methodOf lbServices.User.roles
         *
         * @description
         *
         * Check the existence of roles relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for roles
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Role` object.)
         * </em>
         */
        R.roles.exists = function() {
          var TargetResource = $injector.get("Role");
          var action = TargetResource["::exists::user::roles"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.roles#findById
         * @methodOf lbServices.User.roles
         *
         * @description
         *
         * Find a related item by id for roles.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for roles
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Role` object.)
         * </em>
         */
        R.roles.findById = function() {
          var TargetResource = $injector.get("Role");
          var action = TargetResource["::findById::user::roles"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.roles#link
         * @methodOf lbServices.User.roles
         *
         * @description
         *
         * Add a related item by id for roles.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for roles
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Role` object.)
         * </em>
         */
        R.roles.link = function() {
          var TargetResource = $injector.get("Role");
          var action = TargetResource["::link::user::roles"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.roles#unlink
         * @methodOf lbServices.User.roles
         *
         * @description
         *
         * Remove the roles relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for roles
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.roles.unlink = function() {
          var TargetResource = $injector.get("Role");
          var action = TargetResource["::unlink::user::roles"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.roles#updateById
         * @methodOf lbServices.User.roles
         *
         * @description
         *
         * Update a related item by id for roles.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for roles
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Role` object.)
         * </em>
         */
        R.roles.updateById = function() {
          var TargetResource = $injector.get("Role");
          var action = TargetResource["::updateById::user::roles"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.User.roleMappings
     * @header lbServices.User.roleMappings
     * @object
     * @description
     *
     * The object `User.roleMappings` groups methods
     * manipulating `RoleMapping` instances related to `User`.
     *
     * Call {@link lbServices.User#roleMappings User.roleMappings()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.User#roleMappings
         * @methodOf lbServices.User
         *
         * @description
         *
         * Queries roleMappings of user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RoleMapping` object.)
         * </em>
         */
        R.roleMappings = function() {
          var TargetResource = $injector.get("RoleMapping");
          var action = TargetResource["::get::user::roleMappings"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.roleMappings#count
         * @methodOf lbServices.User.roleMappings
         *
         * @description
         *
         * Counts roleMappings of user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.roleMappings.count = function() {
          var TargetResource = $injector.get("RoleMapping");
          var action = TargetResource["::count::user::roleMappings"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.roleMappings#create
         * @methodOf lbServices.User.roleMappings
         *
         * @description
         *
         * Creates a new instance in roleMappings of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RoleMapping` object.)
         * </em>
         */
        R.roleMappings.create = function() {
          var TargetResource = $injector.get("RoleMapping");
          var action = TargetResource["::create::user::roleMappings"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.roleMappings#createMany
         * @methodOf lbServices.User.roleMappings
         *
         * @description
         *
         * Creates a new instance in roleMappings of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RoleMapping` object.)
         * </em>
         */
        R.roleMappings.createMany = function() {
          var TargetResource = $injector.get("RoleMapping");
          var action = TargetResource["::createMany::user::roleMappings"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.roleMappings#destroyAll
         * @methodOf lbServices.User.roleMappings
         *
         * @description
         *
         * Deletes all roleMappings of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.roleMappings.destroyAll = function() {
          var TargetResource = $injector.get("RoleMapping");
          var action = TargetResource["::delete::user::roleMappings"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.roleMappings#destroyById
         * @methodOf lbServices.User.roleMappings
         *
         * @description
         *
         * Delete a related item by id for roleMappings.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for roleMappings
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.roleMappings.destroyById = function() {
          var TargetResource = $injector.get("RoleMapping");
          var action = TargetResource["::destroyById::user::roleMappings"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.roleMappings#findById
         * @methodOf lbServices.User.roleMappings
         *
         * @description
         *
         * Find a related item by id for roleMappings.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for roleMappings
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RoleMapping` object.)
         * </em>
         */
        R.roleMappings.findById = function() {
          var TargetResource = $injector.get("RoleMapping");
          var action = TargetResource["::findById::user::roleMappings"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.roleMappings#updateById
         * @methodOf lbServices.User.roleMappings
         *
         * @description
         *
         * Update a related item by id for roleMappings.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for roleMappings
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RoleMapping` object.)
         * </em>
         */
        R.roleMappings.updateById = function() {
          var TargetResource = $injector.get("RoleMapping");
          var action = TargetResource["::updateById::user::roleMappings"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Email
 * @header lbServices.Email
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Email` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Email",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Emails/:id",
      { 'id': '@id' },
      {
      }
    );




    /**
    * @ngdoc property
    * @name lbServices.Email#modelName
    * @propertyOf lbServices.Email
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Email`.
    */
    R.modelName = "Email";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Blog
 * @header lbServices.Blog
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Blog` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Blog",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/blogs/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Blog.user() instead.
        "prototype$__get__user": {
          url: urlBase + "/blogs/:id/user",
          method: "GET"
        },

        // INTERNAL. Use Blog.tags.findById() instead.
        "prototype$__findById__tags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/blogs/:id/tags/:fk",
          method: "GET"
        },

        // INTERNAL. Use Blog.tags.destroyById() instead.
        "prototype$__destroyById__tags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/blogs/:id/tags/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Blog.tags.updateById() instead.
        "prototype$__updateById__tags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/blogs/:id/tags/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Blog.tags.link() instead.
        "prototype$__link__tags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/blogs/:id/tags/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Blog.tags.unlink() instead.
        "prototype$__unlink__tags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/blogs/:id/tags/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Blog.tags.exists() instead.
        "prototype$__exists__tags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/blogs/:id/tags/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Blog.tagRelations.findById() instead.
        "prototype$__findById__tagRelations": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/blogs/:id/tagRelations/:fk",
          method: "GET"
        },

        // INTERNAL. Use Blog.tagRelations.destroyById() instead.
        "prototype$__destroyById__tagRelations": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/blogs/:id/tagRelations/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Blog.tagRelations.updateById() instead.
        "prototype$__updateById__tagRelations": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/blogs/:id/tagRelations/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Blog.comments.findById() instead.
        "prototype$__findById__comments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/blogs/:id/comments/:fk",
          method: "GET"
        },

        // INTERNAL. Use Blog.comments.destroyById() instead.
        "prototype$__destroyById__comments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/blogs/:id/comments/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Blog.comments.updateById() instead.
        "prototype$__updateById__comments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/blogs/:id/comments/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Blog.blogLikes.findById() instead.
        "prototype$__findById__blogLikes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/blogs/:id/blogLikes/:fk",
          method: "GET"
        },

        // INTERNAL. Use Blog.blogLikes.destroyById() instead.
        "prototype$__destroyById__blogLikes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/blogs/:id/blogLikes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Blog.blogLikes.updateById() instead.
        "prototype$__updateById__blogLikes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/blogs/:id/blogLikes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Blog.blogLikeUsers.findById() instead.
        "prototype$__findById__blogLikeUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/blogs/:id/blogLikeUsers/:fk",
          method: "GET"
        },

        // INTERNAL. Use Blog.blogLikeUsers.destroyById() instead.
        "prototype$__destroyById__blogLikeUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/blogs/:id/blogLikeUsers/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Blog.blogLikeUsers.updateById() instead.
        "prototype$__updateById__blogLikeUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/blogs/:id/blogLikeUsers/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Blog.blogLikeUsers.link() instead.
        "prototype$__link__blogLikeUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/blogs/:id/blogLikeUsers/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Blog.blogLikeUsers.unlink() instead.
        "prototype$__unlink__blogLikeUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/blogs/:id/blogLikeUsers/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Blog.blogLikeUsers.exists() instead.
        "prototype$__exists__blogLikeUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/blogs/:id/blogLikeUsers/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Blog.tags() instead.
        "prototype$__get__tags": {
          isArray: true,
          url: urlBase + "/blogs/:id/tags",
          method: "GET"
        },

        // INTERNAL. Use Blog.tags.create() instead.
        "prototype$__create__tags": {
          url: urlBase + "/blogs/:id/tags",
          method: "POST"
        },

        // INTERNAL. Use Blog.tags.destroyAll() instead.
        "prototype$__delete__tags": {
          url: urlBase + "/blogs/:id/tags",
          method: "DELETE"
        },

        // INTERNAL. Use Blog.tags.count() instead.
        "prototype$__count__tags": {
          url: urlBase + "/blogs/:id/tags/count",
          method: "GET"
        },

        // INTERNAL. Use Blog.tagRelations() instead.
        "prototype$__get__tagRelations": {
          isArray: true,
          url: urlBase + "/blogs/:id/tagRelations",
          method: "GET"
        },

        // INTERNAL. Use Blog.tagRelations.create() instead.
        "prototype$__create__tagRelations": {
          url: urlBase + "/blogs/:id/tagRelations",
          method: "POST"
        },

        // INTERNAL. Use Blog.tagRelations.destroyAll() instead.
        "prototype$__delete__tagRelations": {
          url: urlBase + "/blogs/:id/tagRelations",
          method: "DELETE"
        },

        // INTERNAL. Use Blog.tagRelations.count() instead.
        "prototype$__count__tagRelations": {
          url: urlBase + "/blogs/:id/tagRelations/count",
          method: "GET"
        },

        // INTERNAL. Use Blog.comments() instead.
        "prototype$__get__comments": {
          isArray: true,
          url: urlBase + "/blogs/:id/comments",
          method: "GET"
        },

        // INTERNAL. Use Blog.comments.create() instead.
        "prototype$__create__comments": {
          url: urlBase + "/blogs/:id/comments",
          method: "POST"
        },

        // INTERNAL. Use Blog.comments.destroyAll() instead.
        "prototype$__delete__comments": {
          url: urlBase + "/blogs/:id/comments",
          method: "DELETE"
        },

        // INTERNAL. Use Blog.comments.count() instead.
        "prototype$__count__comments": {
          url: urlBase + "/blogs/:id/comments/count",
          method: "GET"
        },

        // INTERNAL. Use Blog.blogLikes() instead.
        "prototype$__get__blogLikes": {
          isArray: true,
          url: urlBase + "/blogs/:id/blogLikes",
          method: "GET"
        },

        // INTERNAL. Use Blog.blogLikes.create() instead.
        "prototype$__create__blogLikes": {
          url: urlBase + "/blogs/:id/blogLikes",
          method: "POST"
        },

        // INTERNAL. Use Blog.blogLikes.destroyAll() instead.
        "prototype$__delete__blogLikes": {
          url: urlBase + "/blogs/:id/blogLikes",
          method: "DELETE"
        },

        // INTERNAL. Use Blog.blogLikes.count() instead.
        "prototype$__count__blogLikes": {
          url: urlBase + "/blogs/:id/blogLikes/count",
          method: "GET"
        },

        // INTERNAL. Use Blog.blogLikeUsers() instead.
        "prototype$__get__blogLikeUsers": {
          isArray: true,
          url: urlBase + "/blogs/:id/blogLikeUsers",
          method: "GET"
        },

        // INTERNAL. Use Blog.blogLikeUsers.create() instead.
        "prototype$__create__blogLikeUsers": {
          url: urlBase + "/blogs/:id/blogLikeUsers",
          method: "POST"
        },

        // INTERNAL. Use Blog.blogLikeUsers.destroyAll() instead.
        "prototype$__delete__blogLikeUsers": {
          url: urlBase + "/blogs/:id/blogLikeUsers",
          method: "DELETE"
        },

        // INTERNAL. Use Blog.blogLikeUsers.count() instead.
        "prototype$__count__blogLikeUsers": {
          url: urlBase + "/blogs/:id/blogLikeUsers/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Blog#create
         * @methodOf lbServices.Blog
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Blog` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/blogs",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Blog#createMany
         * @methodOf lbServices.Blog
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Blog` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/blogs",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Blog#upsert
         * @methodOf lbServices.Blog
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Blog` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/blogs",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Blog#exists
         * @methodOf lbServices.Blog
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/blogs/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Blog#findById
         * @methodOf lbServices.Blog
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Blog` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/blogs/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Blog#find
         * @methodOf lbServices.Blog
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Blog` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/blogs",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Blog#findOne
         * @methodOf lbServices.Blog
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Blog` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/blogs/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Blog#updateAll
         * @methodOf lbServices.Blog
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/blogs/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Blog#deleteById
         * @methodOf lbServices.Blog
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Blog` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/blogs/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Blog#count
         * @methodOf lbServices.Blog
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/blogs/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Blog#prototype$updateAttributes
         * @methodOf lbServices.Blog
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Blog` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/blogs/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Blog#createChangeStream
         * @methodOf lbServices.Blog
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/blogs/change-stream",
          method: "POST"
        },

        // INTERNAL. Use User.blogs.findById() instead.
        "::findById::user::blogs": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/blogs/:fk",
          method: "GET"
        },

        // INTERNAL. Use User.blogs.destroyById() instead.
        "::destroyById::user::blogs": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/blogs/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use User.blogs.updateById() instead.
        "::updateById::user::blogs": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/blogs/:fk",
          method: "PUT"
        },

        // INTERNAL. Use User.blogs() instead.
        "::get::user::blogs": {
          isArray: true,
          url: urlBase + "/users/:id/blogs",
          method: "GET"
        },

        // INTERNAL. Use User.blogs.create() instead.
        "::create::user::blogs": {
          url: urlBase + "/users/:id/blogs",
          method: "POST"
        },

        // INTERNAL. Use User.blogs.createMany() instead.
        "::createMany::user::blogs": {
          isArray: true,
          url: urlBase + "/users/:id/blogs",
          method: "POST"
        },

        // INTERNAL. Use User.blogs.destroyAll() instead.
        "::delete::user::blogs": {
          url: urlBase + "/users/:id/blogs",
          method: "DELETE"
        },

        // INTERNAL. Use User.blogs.count() instead.
        "::count::user::blogs": {
          url: urlBase + "/users/:id/blogs/count",
          method: "GET"
        },

        // INTERNAL. Use Tag.blogs.findById() instead.
        "::findById::tag::blogs": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/tags/:id/blogs/:fk",
          method: "GET"
        },

        // INTERNAL. Use Tag.blogs.destroyById() instead.
        "::destroyById::tag::blogs": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/tags/:id/blogs/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Tag.blogs.updateById() instead.
        "::updateById::tag::blogs": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/tags/:id/blogs/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Tag.blogs.link() instead.
        "::link::tag::blogs": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/tags/:id/blogs/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Tag.blogs.unlink() instead.
        "::unlink::tag::blogs": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/tags/:id/blogs/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Tag.blogs.exists() instead.
        "::exists::tag::blogs": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/tags/:id/blogs/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Tag.blogs() instead.
        "::get::tag::blogs": {
          isArray: true,
          url: urlBase + "/tags/:id/blogs",
          method: "GET"
        },

        // INTERNAL. Use Tag.blogs.create() instead.
        "::create::tag::blogs": {
          url: urlBase + "/tags/:id/blogs",
          method: "POST"
        },

        // INTERNAL. Use Tag.blogs.createMany() instead.
        "::createMany::tag::blogs": {
          isArray: true,
          url: urlBase + "/tags/:id/blogs",
          method: "POST"
        },

        // INTERNAL. Use Tag.blogs.destroyAll() instead.
        "::delete::tag::blogs": {
          url: urlBase + "/tags/:id/blogs",
          method: "DELETE"
        },

        // INTERNAL. Use Tag.blogs.count() instead.
        "::count::tag::blogs": {
          url: urlBase + "/tags/:id/blogs/count",
          method: "GET"
        },

        // INTERNAL. Use TagRelation.blog() instead.
        "::get::tagRelation::blog": {
          url: urlBase + "/tagRelations/:id/blog",
          method: "GET"
        },

        // INTERNAL. Use Comment.blog() instead.
        "::get::comment::blog": {
          url: urlBase + "/comments/:id/blog",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Blog#updateOrCreate
         * @methodOf lbServices.Blog
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Blog` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Blog#update
         * @methodOf lbServices.Blog
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Blog#destroyById
         * @methodOf lbServices.Blog
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Blog` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Blog#removeById
         * @methodOf lbServices.Blog
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Blog` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Blog#modelName
    * @propertyOf lbServices.Blog
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Blog`.
    */
    R.modelName = "Blog";


        /**
         * @ngdoc method
         * @name lbServices.Blog#user
         * @methodOf lbServices.Blog
         *
         * @description
         *
         * Fetches belongsTo relation user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.user = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::get::blog::user"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Blog.tags
     * @header lbServices.Blog.tags
     * @object
     * @description
     *
     * The object `Blog.tags` groups methods
     * manipulating `Tag` instances related to `Blog`.
     *
     * Call {@link lbServices.Blog#tags Blog.tags()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Blog#tags
         * @methodOf lbServices.Blog
         *
         * @description
         *
         * Queries tags of blog.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        R.tags = function() {
          var TargetResource = $injector.get("Tag");
          var action = TargetResource["::get::blog::tags"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Blog.tags#count
         * @methodOf lbServices.Blog.tags
         *
         * @description
         *
         * Counts tags of blog.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.tags.count = function() {
          var TargetResource = $injector.get("Tag");
          var action = TargetResource["::count::blog::tags"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Blog.tags#create
         * @methodOf lbServices.Blog.tags
         *
         * @description
         *
         * Creates a new instance in tags of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        R.tags.create = function() {
          var TargetResource = $injector.get("Tag");
          var action = TargetResource["::create::blog::tags"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Blog.tags#createMany
         * @methodOf lbServices.Blog.tags
         *
         * @description
         *
         * Creates a new instance in tags of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        R.tags.createMany = function() {
          var TargetResource = $injector.get("Tag");
          var action = TargetResource["::createMany::blog::tags"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Blog.tags#destroyAll
         * @methodOf lbServices.Blog.tags
         *
         * @description
         *
         * Deletes all tags of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.tags.destroyAll = function() {
          var TargetResource = $injector.get("Tag");
          var action = TargetResource["::delete::blog::tags"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Blog.tags#destroyById
         * @methodOf lbServices.Blog.tags
         *
         * @description
         *
         * Delete a related item by id for tags.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for tags
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.tags.destroyById = function() {
          var TargetResource = $injector.get("Tag");
          var action = TargetResource["::destroyById::blog::tags"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Blog.tags#exists
         * @methodOf lbServices.Blog.tags
         *
         * @description
         *
         * Check the existence of tags relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for tags
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        R.tags.exists = function() {
          var TargetResource = $injector.get("Tag");
          var action = TargetResource["::exists::blog::tags"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Blog.tags#findById
         * @methodOf lbServices.Blog.tags
         *
         * @description
         *
         * Find a related item by id for tags.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for tags
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        R.tags.findById = function() {
          var TargetResource = $injector.get("Tag");
          var action = TargetResource["::findById::blog::tags"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Blog.tags#link
         * @methodOf lbServices.Blog.tags
         *
         * @description
         *
         * Add a related item by id for tags.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for tags
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        R.tags.link = function() {
          var TargetResource = $injector.get("Tag");
          var action = TargetResource["::link::blog::tags"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Blog.tags#unlink
         * @methodOf lbServices.Blog.tags
         *
         * @description
         *
         * Remove the tags relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for tags
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.tags.unlink = function() {
          var TargetResource = $injector.get("Tag");
          var action = TargetResource["::unlink::blog::tags"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Blog.tags#updateById
         * @methodOf lbServices.Blog.tags
         *
         * @description
         *
         * Update a related item by id for tags.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for tags
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        R.tags.updateById = function() {
          var TargetResource = $injector.get("Tag");
          var action = TargetResource["::updateById::blog::tags"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Blog.tagRelations
     * @header lbServices.Blog.tagRelations
     * @object
     * @description
     *
     * The object `Blog.tagRelations` groups methods
     * manipulating `TagRelation` instances related to `Blog`.
     *
     * Call {@link lbServices.Blog#tagRelations Blog.tagRelations()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Blog#tagRelations
         * @methodOf lbServices.Blog
         *
         * @description
         *
         * Queries tagRelations of blog.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TagRelation` object.)
         * </em>
         */
        R.tagRelations = function() {
          var TargetResource = $injector.get("TagRelation");
          var action = TargetResource["::get::blog::tagRelations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Blog.tagRelations#count
         * @methodOf lbServices.Blog.tagRelations
         *
         * @description
         *
         * Counts tagRelations of blog.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.tagRelations.count = function() {
          var TargetResource = $injector.get("TagRelation");
          var action = TargetResource["::count::blog::tagRelations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Blog.tagRelations#create
         * @methodOf lbServices.Blog.tagRelations
         *
         * @description
         *
         * Creates a new instance in tagRelations of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TagRelation` object.)
         * </em>
         */
        R.tagRelations.create = function() {
          var TargetResource = $injector.get("TagRelation");
          var action = TargetResource["::create::blog::tagRelations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Blog.tagRelations#createMany
         * @methodOf lbServices.Blog.tagRelations
         *
         * @description
         *
         * Creates a new instance in tagRelations of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TagRelation` object.)
         * </em>
         */
        R.tagRelations.createMany = function() {
          var TargetResource = $injector.get("TagRelation");
          var action = TargetResource["::createMany::blog::tagRelations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Blog.tagRelations#destroyAll
         * @methodOf lbServices.Blog.tagRelations
         *
         * @description
         *
         * Deletes all tagRelations of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.tagRelations.destroyAll = function() {
          var TargetResource = $injector.get("TagRelation");
          var action = TargetResource["::delete::blog::tagRelations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Blog.tagRelations#destroyById
         * @methodOf lbServices.Blog.tagRelations
         *
         * @description
         *
         * Delete a related item by id for tagRelations.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for tagRelations
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.tagRelations.destroyById = function() {
          var TargetResource = $injector.get("TagRelation");
          var action = TargetResource["::destroyById::blog::tagRelations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Blog.tagRelations#findById
         * @methodOf lbServices.Blog.tagRelations
         *
         * @description
         *
         * Find a related item by id for tagRelations.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for tagRelations
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TagRelation` object.)
         * </em>
         */
        R.tagRelations.findById = function() {
          var TargetResource = $injector.get("TagRelation");
          var action = TargetResource["::findById::blog::tagRelations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Blog.tagRelations#updateById
         * @methodOf lbServices.Blog.tagRelations
         *
         * @description
         *
         * Update a related item by id for tagRelations.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for tagRelations
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TagRelation` object.)
         * </em>
         */
        R.tagRelations.updateById = function() {
          var TargetResource = $injector.get("TagRelation");
          var action = TargetResource["::updateById::blog::tagRelations"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Blog.comments
     * @header lbServices.Blog.comments
     * @object
     * @description
     *
     * The object `Blog.comments` groups methods
     * manipulating `Comment` instances related to `Blog`.
     *
     * Call {@link lbServices.Blog#comments Blog.comments()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Blog#comments
         * @methodOf lbServices.Blog
         *
         * @description
         *
         * Queries comments of blog.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comment` object.)
         * </em>
         */
        R.comments = function() {
          var TargetResource = $injector.get("Comment");
          var action = TargetResource["::get::blog::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Blog.comments#count
         * @methodOf lbServices.Blog.comments
         *
         * @description
         *
         * Counts comments of blog.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.comments.count = function() {
          var TargetResource = $injector.get("Comment");
          var action = TargetResource["::count::blog::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Blog.comments#create
         * @methodOf lbServices.Blog.comments
         *
         * @description
         *
         * Creates a new instance in comments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comment` object.)
         * </em>
         */
        R.comments.create = function() {
          var TargetResource = $injector.get("Comment");
          var action = TargetResource["::create::blog::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Blog.comments#createMany
         * @methodOf lbServices.Blog.comments
         *
         * @description
         *
         * Creates a new instance in comments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comment` object.)
         * </em>
         */
        R.comments.createMany = function() {
          var TargetResource = $injector.get("Comment");
          var action = TargetResource["::createMany::blog::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Blog.comments#destroyAll
         * @methodOf lbServices.Blog.comments
         *
         * @description
         *
         * Deletes all comments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.comments.destroyAll = function() {
          var TargetResource = $injector.get("Comment");
          var action = TargetResource["::delete::blog::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Blog.comments#destroyById
         * @methodOf lbServices.Blog.comments
         *
         * @description
         *
         * Delete a related item by id for comments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for comments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.comments.destroyById = function() {
          var TargetResource = $injector.get("Comment");
          var action = TargetResource["::destroyById::blog::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Blog.comments#findById
         * @methodOf lbServices.Blog.comments
         *
         * @description
         *
         * Find a related item by id for comments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for comments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comment` object.)
         * </em>
         */
        R.comments.findById = function() {
          var TargetResource = $injector.get("Comment");
          var action = TargetResource["::findById::blog::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Blog.comments#updateById
         * @methodOf lbServices.Blog.comments
         *
         * @description
         *
         * Update a related item by id for comments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for comments
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comment` object.)
         * </em>
         */
        R.comments.updateById = function() {
          var TargetResource = $injector.get("Comment");
          var action = TargetResource["::updateById::blog::comments"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Blog.blogLikes
     * @header lbServices.Blog.blogLikes
     * @object
     * @description
     *
     * The object `Blog.blogLikes` groups methods
     * manipulating `BlogLike` instances related to `Blog`.
     *
     * Call {@link lbServices.Blog#blogLikes Blog.blogLikes()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Blog#blogLikes
         * @methodOf lbServices.Blog
         *
         * @description
         *
         * Queries blogLikes of blog.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BlogLike` object.)
         * </em>
         */
        R.blogLikes = function() {
          var TargetResource = $injector.get("BlogLike");
          var action = TargetResource["::get::blog::blogLikes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Blog.blogLikes#count
         * @methodOf lbServices.Blog.blogLikes
         *
         * @description
         *
         * Counts blogLikes of blog.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.blogLikes.count = function() {
          var TargetResource = $injector.get("BlogLike");
          var action = TargetResource["::count::blog::blogLikes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Blog.blogLikes#create
         * @methodOf lbServices.Blog.blogLikes
         *
         * @description
         *
         * Creates a new instance in blogLikes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BlogLike` object.)
         * </em>
         */
        R.blogLikes.create = function() {
          var TargetResource = $injector.get("BlogLike");
          var action = TargetResource["::create::blog::blogLikes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Blog.blogLikes#createMany
         * @methodOf lbServices.Blog.blogLikes
         *
         * @description
         *
         * Creates a new instance in blogLikes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BlogLike` object.)
         * </em>
         */
        R.blogLikes.createMany = function() {
          var TargetResource = $injector.get("BlogLike");
          var action = TargetResource["::createMany::blog::blogLikes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Blog.blogLikes#destroyAll
         * @methodOf lbServices.Blog.blogLikes
         *
         * @description
         *
         * Deletes all blogLikes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.blogLikes.destroyAll = function() {
          var TargetResource = $injector.get("BlogLike");
          var action = TargetResource["::delete::blog::blogLikes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Blog.blogLikes#destroyById
         * @methodOf lbServices.Blog.blogLikes
         *
         * @description
         *
         * Delete a related item by id for blogLikes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for blogLikes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.blogLikes.destroyById = function() {
          var TargetResource = $injector.get("BlogLike");
          var action = TargetResource["::destroyById::blog::blogLikes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Blog.blogLikes#findById
         * @methodOf lbServices.Blog.blogLikes
         *
         * @description
         *
         * Find a related item by id for blogLikes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for blogLikes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BlogLike` object.)
         * </em>
         */
        R.blogLikes.findById = function() {
          var TargetResource = $injector.get("BlogLike");
          var action = TargetResource["::findById::blog::blogLikes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Blog.blogLikes#updateById
         * @methodOf lbServices.Blog.blogLikes
         *
         * @description
         *
         * Update a related item by id for blogLikes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for blogLikes
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BlogLike` object.)
         * </em>
         */
        R.blogLikes.updateById = function() {
          var TargetResource = $injector.get("BlogLike");
          var action = TargetResource["::updateById::blog::blogLikes"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Blog.blogLikeUsers
     * @header lbServices.Blog.blogLikeUsers
     * @object
     * @description
     *
     * The object `Blog.blogLikeUsers` groups methods
     * manipulating `User` instances related to `Blog`.
     *
     * Call {@link lbServices.Blog#blogLikeUsers Blog.blogLikeUsers()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Blog#blogLikeUsers
         * @methodOf lbServices.Blog
         *
         * @description
         *
         * Queries blogLikeUsers of blog.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.blogLikeUsers = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::get::blog::blogLikeUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Blog.blogLikeUsers#count
         * @methodOf lbServices.Blog.blogLikeUsers
         *
         * @description
         *
         * Counts blogLikeUsers of blog.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.blogLikeUsers.count = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::count::blog::blogLikeUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Blog.blogLikeUsers#create
         * @methodOf lbServices.Blog.blogLikeUsers
         *
         * @description
         *
         * Creates a new instance in blogLikeUsers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.blogLikeUsers.create = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::create::blog::blogLikeUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Blog.blogLikeUsers#createMany
         * @methodOf lbServices.Blog.blogLikeUsers
         *
         * @description
         *
         * Creates a new instance in blogLikeUsers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.blogLikeUsers.createMany = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::createMany::blog::blogLikeUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Blog.blogLikeUsers#destroyAll
         * @methodOf lbServices.Blog.blogLikeUsers
         *
         * @description
         *
         * Deletes all blogLikeUsers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.blogLikeUsers.destroyAll = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::delete::blog::blogLikeUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Blog.blogLikeUsers#destroyById
         * @methodOf lbServices.Blog.blogLikeUsers
         *
         * @description
         *
         * Delete a related item by id for blogLikeUsers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for blogLikeUsers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.blogLikeUsers.destroyById = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::destroyById::blog::blogLikeUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Blog.blogLikeUsers#exists
         * @methodOf lbServices.Blog.blogLikeUsers
         *
         * @description
         *
         * Check the existence of blogLikeUsers relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for blogLikeUsers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.blogLikeUsers.exists = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::exists::blog::blogLikeUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Blog.blogLikeUsers#findById
         * @methodOf lbServices.Blog.blogLikeUsers
         *
         * @description
         *
         * Find a related item by id for blogLikeUsers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for blogLikeUsers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.blogLikeUsers.findById = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::findById::blog::blogLikeUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Blog.blogLikeUsers#link
         * @methodOf lbServices.Blog.blogLikeUsers
         *
         * @description
         *
         * Add a related item by id for blogLikeUsers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for blogLikeUsers
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.blogLikeUsers.link = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::link::blog::blogLikeUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Blog.blogLikeUsers#unlink
         * @methodOf lbServices.Blog.blogLikeUsers
         *
         * @description
         *
         * Remove the blogLikeUsers relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for blogLikeUsers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.blogLikeUsers.unlink = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::unlink::blog::blogLikeUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Blog.blogLikeUsers#updateById
         * @methodOf lbServices.Blog.blogLikeUsers
         *
         * @description
         *
         * Update a related item by id for blogLikeUsers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for blogLikeUsers
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.blogLikeUsers.updateById = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::updateById::blog::blogLikeUsers"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Tag
 * @header lbServices.Tag
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Tag` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Tag",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/tags/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Tag.blogs.findById() instead.
        "prototype$__findById__blogs": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/tags/:id/blogs/:fk",
          method: "GET"
        },

        // INTERNAL. Use Tag.blogs.destroyById() instead.
        "prototype$__destroyById__blogs": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/tags/:id/blogs/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Tag.blogs.updateById() instead.
        "prototype$__updateById__blogs": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/tags/:id/blogs/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Tag.blogs.link() instead.
        "prototype$__link__blogs": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/tags/:id/blogs/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Tag.blogs.unlink() instead.
        "prototype$__unlink__blogs": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/tags/:id/blogs/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Tag.blogs.exists() instead.
        "prototype$__exists__blogs": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/tags/:id/blogs/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Tag.tagRelations.findById() instead.
        "prototype$__findById__tagRelations": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/tags/:id/tagRelations/:fk",
          method: "GET"
        },

        // INTERNAL. Use Tag.tagRelations.destroyById() instead.
        "prototype$__destroyById__tagRelations": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/tags/:id/tagRelations/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Tag.tagRelations.updateById() instead.
        "prototype$__updateById__tagRelations": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/tags/:id/tagRelations/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Tag.navs.findById() instead.
        "prototype$__findById__navs": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/tags/:id/navs/:fk",
          method: "GET"
        },

        // INTERNAL. Use Tag.navs.destroyById() instead.
        "prototype$__destroyById__navs": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/tags/:id/navs/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Tag.navs.updateById() instead.
        "prototype$__updateById__navs": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/tags/:id/navs/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Tag.navs.link() instead.
        "prototype$__link__navs": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/tags/:id/navs/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Tag.navs.unlink() instead.
        "prototype$__unlink__navs": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/tags/:id/navs/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Tag.navs.exists() instead.
        "prototype$__exists__navs": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/tags/:id/navs/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Tag.blogs() instead.
        "prototype$__get__blogs": {
          isArray: true,
          url: urlBase + "/tags/:id/blogs",
          method: "GET"
        },

        // INTERNAL. Use Tag.blogs.create() instead.
        "prototype$__create__blogs": {
          url: urlBase + "/tags/:id/blogs",
          method: "POST"
        },

        // INTERNAL. Use Tag.blogs.destroyAll() instead.
        "prototype$__delete__blogs": {
          url: urlBase + "/tags/:id/blogs",
          method: "DELETE"
        },

        // INTERNAL. Use Tag.blogs.count() instead.
        "prototype$__count__blogs": {
          url: urlBase + "/tags/:id/blogs/count",
          method: "GET"
        },

        // INTERNAL. Use Tag.tagRelations() instead.
        "prototype$__get__tagRelations": {
          isArray: true,
          url: urlBase + "/tags/:id/tagRelations",
          method: "GET"
        },

        // INTERNAL. Use Tag.tagRelations.create() instead.
        "prototype$__create__tagRelations": {
          url: urlBase + "/tags/:id/tagRelations",
          method: "POST"
        },

        // INTERNAL. Use Tag.tagRelations.destroyAll() instead.
        "prototype$__delete__tagRelations": {
          url: urlBase + "/tags/:id/tagRelations",
          method: "DELETE"
        },

        // INTERNAL. Use Tag.tagRelations.count() instead.
        "prototype$__count__tagRelations": {
          url: urlBase + "/tags/:id/tagRelations/count",
          method: "GET"
        },

        // INTERNAL. Use Tag.navs() instead.
        "prototype$__get__navs": {
          isArray: true,
          url: urlBase + "/tags/:id/navs",
          method: "GET"
        },

        // INTERNAL. Use Tag.navs.create() instead.
        "prototype$__create__navs": {
          url: urlBase + "/tags/:id/navs",
          method: "POST"
        },

        // INTERNAL. Use Tag.navs.destroyAll() instead.
        "prototype$__delete__navs": {
          url: urlBase + "/tags/:id/navs",
          method: "DELETE"
        },

        // INTERNAL. Use Tag.navs.count() instead.
        "prototype$__count__navs": {
          url: urlBase + "/tags/:id/navs/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tag#create
         * @methodOf lbServices.Tag
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/tags",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tag#createMany
         * @methodOf lbServices.Tag
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/tags",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tag#upsert
         * @methodOf lbServices.Tag
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/tags",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tag#exists
         * @methodOf lbServices.Tag
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/tags/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tag#findById
         * @methodOf lbServices.Tag
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/tags/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tag#find
         * @methodOf lbServices.Tag
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/tags",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tag#findOne
         * @methodOf lbServices.Tag
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/tags/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tag#updateAll
         * @methodOf lbServices.Tag
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/tags/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tag#deleteById
         * @methodOf lbServices.Tag
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/tags/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tag#count
         * @methodOf lbServices.Tag
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/tags/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tag#prototype$updateAttributes
         * @methodOf lbServices.Tag
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/tags/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tag#createChangeStream
         * @methodOf lbServices.Tag
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/tags/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Blog.tags.findById() instead.
        "::findById::blog::tags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/blogs/:id/tags/:fk",
          method: "GET"
        },

        // INTERNAL. Use Blog.tags.destroyById() instead.
        "::destroyById::blog::tags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/blogs/:id/tags/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Blog.tags.updateById() instead.
        "::updateById::blog::tags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/blogs/:id/tags/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Blog.tags.link() instead.
        "::link::blog::tags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/blogs/:id/tags/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Blog.tags.unlink() instead.
        "::unlink::blog::tags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/blogs/:id/tags/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Blog.tags.exists() instead.
        "::exists::blog::tags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/blogs/:id/tags/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Blog.tags() instead.
        "::get::blog::tags": {
          isArray: true,
          url: urlBase + "/blogs/:id/tags",
          method: "GET"
        },

        // INTERNAL. Use Blog.tags.create() instead.
        "::create::blog::tags": {
          url: urlBase + "/blogs/:id/tags",
          method: "POST"
        },

        // INTERNAL. Use Blog.tags.createMany() instead.
        "::createMany::blog::tags": {
          isArray: true,
          url: urlBase + "/blogs/:id/tags",
          method: "POST"
        },

        // INTERNAL. Use Blog.tags.destroyAll() instead.
        "::delete::blog::tags": {
          url: urlBase + "/blogs/:id/tags",
          method: "DELETE"
        },

        // INTERNAL. Use Blog.tags.count() instead.
        "::count::blog::tags": {
          url: urlBase + "/blogs/:id/tags/count",
          method: "GET"
        },

        // INTERNAL. Use TagRelation.tag() instead.
        "::get::tagRelation::tag": {
          url: urlBase + "/tagRelations/:id/tag",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Tag#updateOrCreate
         * @methodOf lbServices.Tag
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Tag#update
         * @methodOf lbServices.Tag
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Tag#destroyById
         * @methodOf lbServices.Tag
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Tag#removeById
         * @methodOf lbServices.Tag
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Tag#modelName
    * @propertyOf lbServices.Tag
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Tag`.
    */
    R.modelName = "Tag";

    /**
     * @ngdoc object
     * @name lbServices.Tag.blogs
     * @header lbServices.Tag.blogs
     * @object
     * @description
     *
     * The object `Tag.blogs` groups methods
     * manipulating `Blog` instances related to `Tag`.
     *
     * Call {@link lbServices.Tag#blogs Tag.blogs()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Tag#blogs
         * @methodOf lbServices.Tag
         *
         * @description
         *
         * Queries blogs of tag.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Blog` object.)
         * </em>
         */
        R.blogs = function() {
          var TargetResource = $injector.get("Blog");
          var action = TargetResource["::get::tag::blogs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Tag.blogs#count
         * @methodOf lbServices.Tag.blogs
         *
         * @description
         *
         * Counts blogs of tag.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.blogs.count = function() {
          var TargetResource = $injector.get("Blog");
          var action = TargetResource["::count::tag::blogs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Tag.blogs#create
         * @methodOf lbServices.Tag.blogs
         *
         * @description
         *
         * Creates a new instance in blogs of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Blog` object.)
         * </em>
         */
        R.blogs.create = function() {
          var TargetResource = $injector.get("Blog");
          var action = TargetResource["::create::tag::blogs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Tag.blogs#createMany
         * @methodOf lbServices.Tag.blogs
         *
         * @description
         *
         * Creates a new instance in blogs of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Blog` object.)
         * </em>
         */
        R.blogs.createMany = function() {
          var TargetResource = $injector.get("Blog");
          var action = TargetResource["::createMany::tag::blogs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Tag.blogs#destroyAll
         * @methodOf lbServices.Tag.blogs
         *
         * @description
         *
         * Deletes all blogs of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.blogs.destroyAll = function() {
          var TargetResource = $injector.get("Blog");
          var action = TargetResource["::delete::tag::blogs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Tag.blogs#destroyById
         * @methodOf lbServices.Tag.blogs
         *
         * @description
         *
         * Delete a related item by id for blogs.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for blogs
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.blogs.destroyById = function() {
          var TargetResource = $injector.get("Blog");
          var action = TargetResource["::destroyById::tag::blogs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Tag.blogs#exists
         * @methodOf lbServices.Tag.blogs
         *
         * @description
         *
         * Check the existence of blogs relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for blogs
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Blog` object.)
         * </em>
         */
        R.blogs.exists = function() {
          var TargetResource = $injector.get("Blog");
          var action = TargetResource["::exists::tag::blogs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Tag.blogs#findById
         * @methodOf lbServices.Tag.blogs
         *
         * @description
         *
         * Find a related item by id for blogs.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for blogs
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Blog` object.)
         * </em>
         */
        R.blogs.findById = function() {
          var TargetResource = $injector.get("Blog");
          var action = TargetResource["::findById::tag::blogs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Tag.blogs#link
         * @methodOf lbServices.Tag.blogs
         *
         * @description
         *
         * Add a related item by id for blogs.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for blogs
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Blog` object.)
         * </em>
         */
        R.blogs.link = function() {
          var TargetResource = $injector.get("Blog");
          var action = TargetResource["::link::tag::blogs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Tag.blogs#unlink
         * @methodOf lbServices.Tag.blogs
         *
         * @description
         *
         * Remove the blogs relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for blogs
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.blogs.unlink = function() {
          var TargetResource = $injector.get("Blog");
          var action = TargetResource["::unlink::tag::blogs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Tag.blogs#updateById
         * @methodOf lbServices.Tag.blogs
         *
         * @description
         *
         * Update a related item by id for blogs.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for blogs
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Blog` object.)
         * </em>
         */
        R.blogs.updateById = function() {
          var TargetResource = $injector.get("Blog");
          var action = TargetResource["::updateById::tag::blogs"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Tag.tagRelations
     * @header lbServices.Tag.tagRelations
     * @object
     * @description
     *
     * The object `Tag.tagRelations` groups methods
     * manipulating `TagRelation` instances related to `Tag`.
     *
     * Call {@link lbServices.Tag#tagRelations Tag.tagRelations()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Tag#tagRelations
         * @methodOf lbServices.Tag
         *
         * @description
         *
         * Queries tagRelations of tag.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TagRelation` object.)
         * </em>
         */
        R.tagRelations = function() {
          var TargetResource = $injector.get("TagRelation");
          var action = TargetResource["::get::tag::tagRelations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Tag.tagRelations#count
         * @methodOf lbServices.Tag.tagRelations
         *
         * @description
         *
         * Counts tagRelations of tag.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.tagRelations.count = function() {
          var TargetResource = $injector.get("TagRelation");
          var action = TargetResource["::count::tag::tagRelations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Tag.tagRelations#create
         * @methodOf lbServices.Tag.tagRelations
         *
         * @description
         *
         * Creates a new instance in tagRelations of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TagRelation` object.)
         * </em>
         */
        R.tagRelations.create = function() {
          var TargetResource = $injector.get("TagRelation");
          var action = TargetResource["::create::tag::tagRelations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Tag.tagRelations#createMany
         * @methodOf lbServices.Tag.tagRelations
         *
         * @description
         *
         * Creates a new instance in tagRelations of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TagRelation` object.)
         * </em>
         */
        R.tagRelations.createMany = function() {
          var TargetResource = $injector.get("TagRelation");
          var action = TargetResource["::createMany::tag::tagRelations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Tag.tagRelations#destroyAll
         * @methodOf lbServices.Tag.tagRelations
         *
         * @description
         *
         * Deletes all tagRelations of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.tagRelations.destroyAll = function() {
          var TargetResource = $injector.get("TagRelation");
          var action = TargetResource["::delete::tag::tagRelations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Tag.tagRelations#destroyById
         * @methodOf lbServices.Tag.tagRelations
         *
         * @description
         *
         * Delete a related item by id for tagRelations.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for tagRelations
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.tagRelations.destroyById = function() {
          var TargetResource = $injector.get("TagRelation");
          var action = TargetResource["::destroyById::tag::tagRelations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Tag.tagRelations#findById
         * @methodOf lbServices.Tag.tagRelations
         *
         * @description
         *
         * Find a related item by id for tagRelations.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for tagRelations
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TagRelation` object.)
         * </em>
         */
        R.tagRelations.findById = function() {
          var TargetResource = $injector.get("TagRelation");
          var action = TargetResource["::findById::tag::tagRelations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Tag.tagRelations#updateById
         * @methodOf lbServices.Tag.tagRelations
         *
         * @description
         *
         * Update a related item by id for tagRelations.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for tagRelations
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TagRelation` object.)
         * </em>
         */
        R.tagRelations.updateById = function() {
          var TargetResource = $injector.get("TagRelation");
          var action = TargetResource["::updateById::tag::tagRelations"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Tag.navs
     * @header lbServices.Tag.navs
     * @object
     * @description
     *
     * The object `Tag.navs` groups methods
     * manipulating `Nav` instances related to `Tag`.
     *
     * Call {@link lbServices.Tag#navs Tag.navs()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Tag#navs
         * @methodOf lbServices.Tag
         *
         * @description
         *
         * Queries navs of tag.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Nav` object.)
         * </em>
         */
        R.navs = function() {
          var TargetResource = $injector.get("Nav");
          var action = TargetResource["::get::tag::navs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Tag.navs#count
         * @methodOf lbServices.Tag.navs
         *
         * @description
         *
         * Counts navs of tag.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.navs.count = function() {
          var TargetResource = $injector.get("Nav");
          var action = TargetResource["::count::tag::navs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Tag.navs#create
         * @methodOf lbServices.Tag.navs
         *
         * @description
         *
         * Creates a new instance in navs of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Nav` object.)
         * </em>
         */
        R.navs.create = function() {
          var TargetResource = $injector.get("Nav");
          var action = TargetResource["::create::tag::navs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Tag.navs#createMany
         * @methodOf lbServices.Tag.navs
         *
         * @description
         *
         * Creates a new instance in navs of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Nav` object.)
         * </em>
         */
        R.navs.createMany = function() {
          var TargetResource = $injector.get("Nav");
          var action = TargetResource["::createMany::tag::navs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Tag.navs#destroyAll
         * @methodOf lbServices.Tag.navs
         *
         * @description
         *
         * Deletes all navs of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.navs.destroyAll = function() {
          var TargetResource = $injector.get("Nav");
          var action = TargetResource["::delete::tag::navs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Tag.navs#destroyById
         * @methodOf lbServices.Tag.navs
         *
         * @description
         *
         * Delete a related item by id for navs.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for navs
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.navs.destroyById = function() {
          var TargetResource = $injector.get("Nav");
          var action = TargetResource["::destroyById::tag::navs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Tag.navs#exists
         * @methodOf lbServices.Tag.navs
         *
         * @description
         *
         * Check the existence of navs relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for navs
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Nav` object.)
         * </em>
         */
        R.navs.exists = function() {
          var TargetResource = $injector.get("Nav");
          var action = TargetResource["::exists::tag::navs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Tag.navs#findById
         * @methodOf lbServices.Tag.navs
         *
         * @description
         *
         * Find a related item by id for navs.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for navs
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Nav` object.)
         * </em>
         */
        R.navs.findById = function() {
          var TargetResource = $injector.get("Nav");
          var action = TargetResource["::findById::tag::navs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Tag.navs#link
         * @methodOf lbServices.Tag.navs
         *
         * @description
         *
         * Add a related item by id for navs.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for navs
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Nav` object.)
         * </em>
         */
        R.navs.link = function() {
          var TargetResource = $injector.get("Nav");
          var action = TargetResource["::link::tag::navs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Tag.navs#unlink
         * @methodOf lbServices.Tag.navs
         *
         * @description
         *
         * Remove the navs relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for navs
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.navs.unlink = function() {
          var TargetResource = $injector.get("Nav");
          var action = TargetResource["::unlink::tag::navs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Tag.navs#updateById
         * @methodOf lbServices.Tag.navs
         *
         * @description
         *
         * Update a related item by id for navs.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for navs
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Nav` object.)
         * </em>
         */
        R.navs.updateById = function() {
          var TargetResource = $injector.get("Nav");
          var action = TargetResource["::updateById::tag::navs"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.TagRelation
 * @header lbServices.TagRelation
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `TagRelation` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "TagRelation",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/tagRelations/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use TagRelation.tag() instead.
        "prototype$__get__tag": {
          url: urlBase + "/tagRelations/:id/tag",
          method: "GET"
        },

        // INTERNAL. Use TagRelation.blog() instead.
        "prototype$__get__blog": {
          url: urlBase + "/tagRelations/:id/blog",
          method: "GET"
        },

        // INTERNAL. Use TagRelation.nav() instead.
        "prototype$__get__nav": {
          url: urlBase + "/tagRelations/:id/nav",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.TagRelation#create
         * @methodOf lbServices.TagRelation
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TagRelation` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/tagRelations",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.TagRelation#createMany
         * @methodOf lbServices.TagRelation
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TagRelation` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/tagRelations",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.TagRelation#upsert
         * @methodOf lbServices.TagRelation
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TagRelation` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/tagRelations",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.TagRelation#exists
         * @methodOf lbServices.TagRelation
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/tagRelations/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.TagRelation#findById
         * @methodOf lbServices.TagRelation
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TagRelation` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/tagRelations/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.TagRelation#find
         * @methodOf lbServices.TagRelation
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TagRelation` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/tagRelations",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.TagRelation#findOne
         * @methodOf lbServices.TagRelation
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TagRelation` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/tagRelations/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.TagRelation#updateAll
         * @methodOf lbServices.TagRelation
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/tagRelations/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.TagRelation#deleteById
         * @methodOf lbServices.TagRelation
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TagRelation` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/tagRelations/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.TagRelation#count
         * @methodOf lbServices.TagRelation
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/tagRelations/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.TagRelation#prototype$updateAttributes
         * @methodOf lbServices.TagRelation
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TagRelation` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/tagRelations/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.TagRelation#createChangeStream
         * @methodOf lbServices.TagRelation
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/tagRelations/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Nav.tagRelations.findById() instead.
        "::findById::nav::tagRelations": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/navs/:id/tagRelations/:fk",
          method: "GET"
        },

        // INTERNAL. Use Nav.tagRelations.destroyById() instead.
        "::destroyById::nav::tagRelations": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/navs/:id/tagRelations/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Nav.tagRelations.updateById() instead.
        "::updateById::nav::tagRelations": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/navs/:id/tagRelations/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Nav.tagRelations() instead.
        "::get::nav::tagRelations": {
          isArray: true,
          url: urlBase + "/navs/:id/tagRelations",
          method: "GET"
        },

        // INTERNAL. Use Nav.tagRelations.create() instead.
        "::create::nav::tagRelations": {
          url: urlBase + "/navs/:id/tagRelations",
          method: "POST"
        },

        // INTERNAL. Use Nav.tagRelations.createMany() instead.
        "::createMany::nav::tagRelations": {
          isArray: true,
          url: urlBase + "/navs/:id/tagRelations",
          method: "POST"
        },

        // INTERNAL. Use Nav.tagRelations.destroyAll() instead.
        "::delete::nav::tagRelations": {
          url: urlBase + "/navs/:id/tagRelations",
          method: "DELETE"
        },

        // INTERNAL. Use Nav.tagRelations.count() instead.
        "::count::nav::tagRelations": {
          url: urlBase + "/navs/:id/tagRelations/count",
          method: "GET"
        },

        // INTERNAL. Use Blog.tagRelations.findById() instead.
        "::findById::blog::tagRelations": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/blogs/:id/tagRelations/:fk",
          method: "GET"
        },

        // INTERNAL. Use Blog.tagRelations.destroyById() instead.
        "::destroyById::blog::tagRelations": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/blogs/:id/tagRelations/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Blog.tagRelations.updateById() instead.
        "::updateById::blog::tagRelations": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/blogs/:id/tagRelations/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Blog.tagRelations() instead.
        "::get::blog::tagRelations": {
          isArray: true,
          url: urlBase + "/blogs/:id/tagRelations",
          method: "GET"
        },

        // INTERNAL. Use Blog.tagRelations.create() instead.
        "::create::blog::tagRelations": {
          url: urlBase + "/blogs/:id/tagRelations",
          method: "POST"
        },

        // INTERNAL. Use Blog.tagRelations.createMany() instead.
        "::createMany::blog::tagRelations": {
          isArray: true,
          url: urlBase + "/blogs/:id/tagRelations",
          method: "POST"
        },

        // INTERNAL. Use Blog.tagRelations.destroyAll() instead.
        "::delete::blog::tagRelations": {
          url: urlBase + "/blogs/:id/tagRelations",
          method: "DELETE"
        },

        // INTERNAL. Use Blog.tagRelations.count() instead.
        "::count::blog::tagRelations": {
          url: urlBase + "/blogs/:id/tagRelations/count",
          method: "GET"
        },

        // INTERNAL. Use Tag.tagRelations.findById() instead.
        "::findById::tag::tagRelations": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/tags/:id/tagRelations/:fk",
          method: "GET"
        },

        // INTERNAL. Use Tag.tagRelations.destroyById() instead.
        "::destroyById::tag::tagRelations": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/tags/:id/tagRelations/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Tag.tagRelations.updateById() instead.
        "::updateById::tag::tagRelations": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/tags/:id/tagRelations/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Tag.tagRelations() instead.
        "::get::tag::tagRelations": {
          isArray: true,
          url: urlBase + "/tags/:id/tagRelations",
          method: "GET"
        },

        // INTERNAL. Use Tag.tagRelations.create() instead.
        "::create::tag::tagRelations": {
          url: urlBase + "/tags/:id/tagRelations",
          method: "POST"
        },

        // INTERNAL. Use Tag.tagRelations.createMany() instead.
        "::createMany::tag::tagRelations": {
          isArray: true,
          url: urlBase + "/tags/:id/tagRelations",
          method: "POST"
        },

        // INTERNAL. Use Tag.tagRelations.destroyAll() instead.
        "::delete::tag::tagRelations": {
          url: urlBase + "/tags/:id/tagRelations",
          method: "DELETE"
        },

        // INTERNAL. Use Tag.tagRelations.count() instead.
        "::count::tag::tagRelations": {
          url: urlBase + "/tags/:id/tagRelations/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.TagRelation#updateOrCreate
         * @methodOf lbServices.TagRelation
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TagRelation` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.TagRelation#update
         * @methodOf lbServices.TagRelation
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.TagRelation#destroyById
         * @methodOf lbServices.TagRelation
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TagRelation` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.TagRelation#removeById
         * @methodOf lbServices.TagRelation
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TagRelation` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.TagRelation#modelName
    * @propertyOf lbServices.TagRelation
    * @description
    * The name of the model represented by this $resource,
    * i.e. `TagRelation`.
    */
    R.modelName = "TagRelation";


        /**
         * @ngdoc method
         * @name lbServices.TagRelation#tag
         * @methodOf lbServices.TagRelation
         *
         * @description
         *
         * Fetches belongsTo relation tag.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        R.tag = function() {
          var TargetResource = $injector.get("Tag");
          var action = TargetResource["::get::tagRelation::tag"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.TagRelation#blog
         * @methodOf lbServices.TagRelation
         *
         * @description
         *
         * Fetches belongsTo relation blog.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Blog` object.)
         * </em>
         */
        R.blog = function() {
          var TargetResource = $injector.get("Blog");
          var action = TargetResource["::get::tagRelation::blog"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.TagRelation#nav
         * @methodOf lbServices.TagRelation
         *
         * @description
         *
         * Fetches belongsTo relation nav.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Nav` object.)
         * </em>
         */
        R.nav = function() {
          var TargetResource = $injector.get("Nav");
          var action = TargetResource["::get::tagRelation::nav"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Comment
 * @header lbServices.Comment
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Comment` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Comment",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/comments/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Comment.blog() instead.
        "prototype$__get__blog": {
          url: urlBase + "/comments/:id/blog",
          method: "GET"
        },

        // INTERNAL. Use Comment.user() instead.
        "prototype$__get__user": {
          url: urlBase + "/comments/:id/user",
          method: "GET"
        },

        // INTERNAL. Use Comment.replies.findById() instead.
        "prototype$__findById__replies": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/comments/:id/replies/:fk",
          method: "GET"
        },

        // INTERNAL. Use Comment.replies.destroyById() instead.
        "prototype$__destroyById__replies": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/comments/:id/replies/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Comment.replies.updateById() instead.
        "prototype$__updateById__replies": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/comments/:id/replies/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Comment.commentLikes.findById() instead.
        "prototype$__findById__commentLikes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/comments/:id/commentLikes/:fk",
          method: "GET"
        },

        // INTERNAL. Use Comment.commentLikes.destroyById() instead.
        "prototype$__destroyById__commentLikes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/comments/:id/commentLikes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Comment.commentLikes.updateById() instead.
        "prototype$__updateById__commentLikes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/comments/:id/commentLikes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Comment.replies() instead.
        "prototype$__get__replies": {
          isArray: true,
          url: urlBase + "/comments/:id/replies",
          method: "GET"
        },

        // INTERNAL. Use Comment.replies.create() instead.
        "prototype$__create__replies": {
          url: urlBase + "/comments/:id/replies",
          method: "POST"
        },

        // INTERNAL. Use Comment.replies.destroyAll() instead.
        "prototype$__delete__replies": {
          url: urlBase + "/comments/:id/replies",
          method: "DELETE"
        },

        // INTERNAL. Use Comment.replies.count() instead.
        "prototype$__count__replies": {
          url: urlBase + "/comments/:id/replies/count",
          method: "GET"
        },

        // INTERNAL. Use Comment.commentLikes() instead.
        "prototype$__get__commentLikes": {
          isArray: true,
          url: urlBase + "/comments/:id/commentLikes",
          method: "GET"
        },

        // INTERNAL. Use Comment.commentLikes.create() instead.
        "prototype$__create__commentLikes": {
          url: urlBase + "/comments/:id/commentLikes",
          method: "POST"
        },

        // INTERNAL. Use Comment.commentLikes.destroyAll() instead.
        "prototype$__delete__commentLikes": {
          url: urlBase + "/comments/:id/commentLikes",
          method: "DELETE"
        },

        // INTERNAL. Use Comment.commentLikes.count() instead.
        "prototype$__count__commentLikes": {
          url: urlBase + "/comments/:id/commentLikes/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Comment#create
         * @methodOf lbServices.Comment
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comment` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/comments",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Comment#createMany
         * @methodOf lbServices.Comment
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comment` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/comments",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Comment#upsert
         * @methodOf lbServices.Comment
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comment` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/comments",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Comment#exists
         * @methodOf lbServices.Comment
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/comments/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Comment#findById
         * @methodOf lbServices.Comment
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comment` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/comments/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Comment#find
         * @methodOf lbServices.Comment
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comment` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/comments",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Comment#findOne
         * @methodOf lbServices.Comment
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comment` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/comments/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Comment#updateAll
         * @methodOf lbServices.Comment
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/comments/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Comment#deleteById
         * @methodOf lbServices.Comment
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comment` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/comments/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Comment#count
         * @methodOf lbServices.Comment
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/comments/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Comment#prototype$updateAttributes
         * @methodOf lbServices.Comment
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comment` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/comments/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Comment#createChangeStream
         * @methodOf lbServices.Comment
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/comments/change-stream",
          method: "POST"
        },

        // INTERNAL. Use User.comments.findById() instead.
        "::findById::user::comments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/comments/:fk",
          method: "GET"
        },

        // INTERNAL. Use User.comments.destroyById() instead.
        "::destroyById::user::comments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/comments/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use User.comments.updateById() instead.
        "::updateById::user::comments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/comments/:fk",
          method: "PUT"
        },

        // INTERNAL. Use User.comments() instead.
        "::get::user::comments": {
          isArray: true,
          url: urlBase + "/users/:id/comments",
          method: "GET"
        },

        // INTERNAL. Use User.comments.create() instead.
        "::create::user::comments": {
          url: urlBase + "/users/:id/comments",
          method: "POST"
        },

        // INTERNAL. Use User.comments.createMany() instead.
        "::createMany::user::comments": {
          isArray: true,
          url: urlBase + "/users/:id/comments",
          method: "POST"
        },

        // INTERNAL. Use User.comments.destroyAll() instead.
        "::delete::user::comments": {
          url: urlBase + "/users/:id/comments",
          method: "DELETE"
        },

        // INTERNAL. Use User.comments.count() instead.
        "::count::user::comments": {
          url: urlBase + "/users/:id/comments/count",
          method: "GET"
        },

        // INTERNAL. Use Blog.comments.findById() instead.
        "::findById::blog::comments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/blogs/:id/comments/:fk",
          method: "GET"
        },

        // INTERNAL. Use Blog.comments.destroyById() instead.
        "::destroyById::blog::comments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/blogs/:id/comments/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Blog.comments.updateById() instead.
        "::updateById::blog::comments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/blogs/:id/comments/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Blog.comments() instead.
        "::get::blog::comments": {
          isArray: true,
          url: urlBase + "/blogs/:id/comments",
          method: "GET"
        },

        // INTERNAL. Use Blog.comments.create() instead.
        "::create::blog::comments": {
          url: urlBase + "/blogs/:id/comments",
          method: "POST"
        },

        // INTERNAL. Use Blog.comments.createMany() instead.
        "::createMany::blog::comments": {
          isArray: true,
          url: urlBase + "/blogs/:id/comments",
          method: "POST"
        },

        // INTERNAL. Use Blog.comments.destroyAll() instead.
        "::delete::blog::comments": {
          url: urlBase + "/blogs/:id/comments",
          method: "DELETE"
        },

        // INTERNAL. Use Blog.comments.count() instead.
        "::count::blog::comments": {
          url: urlBase + "/blogs/:id/comments/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Comment#updateOrCreate
         * @methodOf lbServices.Comment
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comment` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Comment#update
         * @methodOf lbServices.Comment
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Comment#destroyById
         * @methodOf lbServices.Comment
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comment` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Comment#removeById
         * @methodOf lbServices.Comment
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comment` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Comment#modelName
    * @propertyOf lbServices.Comment
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Comment`.
    */
    R.modelName = "Comment";


        /**
         * @ngdoc method
         * @name lbServices.Comment#blog
         * @methodOf lbServices.Comment
         *
         * @description
         *
         * Fetches belongsTo relation blog.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Blog` object.)
         * </em>
         */
        R.blog = function() {
          var TargetResource = $injector.get("Blog");
          var action = TargetResource["::get::comment::blog"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Comment#user
         * @methodOf lbServices.Comment
         *
         * @description
         *
         * Fetches belongsTo relation user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.user = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::get::comment::user"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Comment.replies
     * @header lbServices.Comment.replies
     * @object
     * @description
     *
     * The object `Comment.replies` groups methods
     * manipulating `Reply` instances related to `Comment`.
     *
     * Call {@link lbServices.Comment#replies Comment.replies()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Comment#replies
         * @methodOf lbServices.Comment
         *
         * @description
         *
         * Queries replies of comment.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reply` object.)
         * </em>
         */
        R.replies = function() {
          var TargetResource = $injector.get("Reply");
          var action = TargetResource["::get::comment::replies"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Comment.replies#count
         * @methodOf lbServices.Comment.replies
         *
         * @description
         *
         * Counts replies of comment.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.replies.count = function() {
          var TargetResource = $injector.get("Reply");
          var action = TargetResource["::count::comment::replies"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Comment.replies#create
         * @methodOf lbServices.Comment.replies
         *
         * @description
         *
         * Creates a new instance in replies of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reply` object.)
         * </em>
         */
        R.replies.create = function() {
          var TargetResource = $injector.get("Reply");
          var action = TargetResource["::create::comment::replies"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Comment.replies#createMany
         * @methodOf lbServices.Comment.replies
         *
         * @description
         *
         * Creates a new instance in replies of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reply` object.)
         * </em>
         */
        R.replies.createMany = function() {
          var TargetResource = $injector.get("Reply");
          var action = TargetResource["::createMany::comment::replies"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Comment.replies#destroyAll
         * @methodOf lbServices.Comment.replies
         *
         * @description
         *
         * Deletes all replies of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.replies.destroyAll = function() {
          var TargetResource = $injector.get("Reply");
          var action = TargetResource["::delete::comment::replies"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Comment.replies#destroyById
         * @methodOf lbServices.Comment.replies
         *
         * @description
         *
         * Delete a related item by id for replies.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for replies
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.replies.destroyById = function() {
          var TargetResource = $injector.get("Reply");
          var action = TargetResource["::destroyById::comment::replies"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Comment.replies#findById
         * @methodOf lbServices.Comment.replies
         *
         * @description
         *
         * Find a related item by id for replies.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for replies
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reply` object.)
         * </em>
         */
        R.replies.findById = function() {
          var TargetResource = $injector.get("Reply");
          var action = TargetResource["::findById::comment::replies"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Comment.replies#updateById
         * @methodOf lbServices.Comment.replies
         *
         * @description
         *
         * Update a related item by id for replies.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for replies
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reply` object.)
         * </em>
         */
        R.replies.updateById = function() {
          var TargetResource = $injector.get("Reply");
          var action = TargetResource["::updateById::comment::replies"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Comment.commentLikes
     * @header lbServices.Comment.commentLikes
     * @object
     * @description
     *
     * The object `Comment.commentLikes` groups methods
     * manipulating `CommentLike` instances related to `Comment`.
     *
     * Call {@link lbServices.Comment#commentLikes Comment.commentLikes()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Comment#commentLikes
         * @methodOf lbServices.Comment
         *
         * @description
         *
         * Queries commentLikes of comment.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CommentLike` object.)
         * </em>
         */
        R.commentLikes = function() {
          var TargetResource = $injector.get("CommentLike");
          var action = TargetResource["::get::comment::commentLikes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Comment.commentLikes#count
         * @methodOf lbServices.Comment.commentLikes
         *
         * @description
         *
         * Counts commentLikes of comment.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.commentLikes.count = function() {
          var TargetResource = $injector.get("CommentLike");
          var action = TargetResource["::count::comment::commentLikes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Comment.commentLikes#create
         * @methodOf lbServices.Comment.commentLikes
         *
         * @description
         *
         * Creates a new instance in commentLikes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CommentLike` object.)
         * </em>
         */
        R.commentLikes.create = function() {
          var TargetResource = $injector.get("CommentLike");
          var action = TargetResource["::create::comment::commentLikes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Comment.commentLikes#createMany
         * @methodOf lbServices.Comment.commentLikes
         *
         * @description
         *
         * Creates a new instance in commentLikes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CommentLike` object.)
         * </em>
         */
        R.commentLikes.createMany = function() {
          var TargetResource = $injector.get("CommentLike");
          var action = TargetResource["::createMany::comment::commentLikes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Comment.commentLikes#destroyAll
         * @methodOf lbServices.Comment.commentLikes
         *
         * @description
         *
         * Deletes all commentLikes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.commentLikes.destroyAll = function() {
          var TargetResource = $injector.get("CommentLike");
          var action = TargetResource["::delete::comment::commentLikes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Comment.commentLikes#destroyById
         * @methodOf lbServices.Comment.commentLikes
         *
         * @description
         *
         * Delete a related item by id for commentLikes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for commentLikes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.commentLikes.destroyById = function() {
          var TargetResource = $injector.get("CommentLike");
          var action = TargetResource["::destroyById::comment::commentLikes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Comment.commentLikes#findById
         * @methodOf lbServices.Comment.commentLikes
         *
         * @description
         *
         * Find a related item by id for commentLikes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for commentLikes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CommentLike` object.)
         * </em>
         */
        R.commentLikes.findById = function() {
          var TargetResource = $injector.get("CommentLike");
          var action = TargetResource["::findById::comment::commentLikes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Comment.commentLikes#updateById
         * @methodOf lbServices.Comment.commentLikes
         *
         * @description
         *
         * Update a related item by id for commentLikes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for commentLikes
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CommentLike` object.)
         * </em>
         */
        R.commentLikes.updateById = function() {
          var TargetResource = $injector.get("CommentLike");
          var action = TargetResource["::updateById::comment::commentLikes"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Reply
 * @header lbServices.Reply
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Reply` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Reply",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/replies/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Reply.user() instead.
        "prototype$__get__user": {
          url: urlBase + "/replies/:id/user",
          method: "GET"
        },

        // INTERNAL. Use Reply.replyLikes.findById() instead.
        "prototype$__findById__replyLikes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/replies/:id/replyLikes/:fk",
          method: "GET"
        },

        // INTERNAL. Use Reply.replyLikes.destroyById() instead.
        "prototype$__destroyById__replyLikes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/replies/:id/replyLikes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Reply.replyLikes.updateById() instead.
        "prototype$__updateById__replyLikes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/replies/:id/replyLikes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Reply.replyLikes() instead.
        "prototype$__get__replyLikes": {
          isArray: true,
          url: urlBase + "/replies/:id/replyLikes",
          method: "GET"
        },

        // INTERNAL. Use Reply.replyLikes.create() instead.
        "prototype$__create__replyLikes": {
          url: urlBase + "/replies/:id/replyLikes",
          method: "POST"
        },

        // INTERNAL. Use Reply.replyLikes.destroyAll() instead.
        "prototype$__delete__replyLikes": {
          url: urlBase + "/replies/:id/replyLikes",
          method: "DELETE"
        },

        // INTERNAL. Use Reply.replyLikes.count() instead.
        "prototype$__count__replyLikes": {
          url: urlBase + "/replies/:id/replyLikes/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Reply#create
         * @methodOf lbServices.Reply
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reply` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/replies",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Reply#createMany
         * @methodOf lbServices.Reply
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reply` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/replies",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Reply#upsert
         * @methodOf lbServices.Reply
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reply` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/replies",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Reply#exists
         * @methodOf lbServices.Reply
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/replies/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Reply#findById
         * @methodOf lbServices.Reply
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reply` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/replies/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Reply#find
         * @methodOf lbServices.Reply
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reply` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/replies",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Reply#findOne
         * @methodOf lbServices.Reply
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reply` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/replies/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Reply#updateAll
         * @methodOf lbServices.Reply
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/replies/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Reply#deleteById
         * @methodOf lbServices.Reply
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reply` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/replies/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Reply#count
         * @methodOf lbServices.Reply
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/replies/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Reply#prototype$updateAttributes
         * @methodOf lbServices.Reply
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reply` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/replies/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Reply#createChangeStream
         * @methodOf lbServices.Reply
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/replies/change-stream",
          method: "POST"
        },

        // INTERNAL. Use User.replies.findById() instead.
        "::findById::user::replies": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/replies/:fk",
          method: "GET"
        },

        // INTERNAL. Use User.replies.destroyById() instead.
        "::destroyById::user::replies": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/replies/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use User.replies.updateById() instead.
        "::updateById::user::replies": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/replies/:fk",
          method: "PUT"
        },

        // INTERNAL. Use User.replies() instead.
        "::get::user::replies": {
          isArray: true,
          url: urlBase + "/users/:id/replies",
          method: "GET"
        },

        // INTERNAL. Use User.replies.create() instead.
        "::create::user::replies": {
          url: urlBase + "/users/:id/replies",
          method: "POST"
        },

        // INTERNAL. Use User.replies.createMany() instead.
        "::createMany::user::replies": {
          isArray: true,
          url: urlBase + "/users/:id/replies",
          method: "POST"
        },

        // INTERNAL. Use User.replies.destroyAll() instead.
        "::delete::user::replies": {
          url: urlBase + "/users/:id/replies",
          method: "DELETE"
        },

        // INTERNAL. Use User.replies.count() instead.
        "::count::user::replies": {
          url: urlBase + "/users/:id/replies/count",
          method: "GET"
        },

        // INTERNAL. Use Comment.replies.findById() instead.
        "::findById::comment::replies": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/comments/:id/replies/:fk",
          method: "GET"
        },

        // INTERNAL. Use Comment.replies.destroyById() instead.
        "::destroyById::comment::replies": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/comments/:id/replies/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Comment.replies.updateById() instead.
        "::updateById::comment::replies": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/comments/:id/replies/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Comment.replies() instead.
        "::get::comment::replies": {
          isArray: true,
          url: urlBase + "/comments/:id/replies",
          method: "GET"
        },

        // INTERNAL. Use Comment.replies.create() instead.
        "::create::comment::replies": {
          url: urlBase + "/comments/:id/replies",
          method: "POST"
        },

        // INTERNAL. Use Comment.replies.createMany() instead.
        "::createMany::comment::replies": {
          isArray: true,
          url: urlBase + "/comments/:id/replies",
          method: "POST"
        },

        // INTERNAL. Use Comment.replies.destroyAll() instead.
        "::delete::comment::replies": {
          url: urlBase + "/comments/:id/replies",
          method: "DELETE"
        },

        // INTERNAL. Use Comment.replies.count() instead.
        "::count::comment::replies": {
          url: urlBase + "/comments/:id/replies/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Reply#updateOrCreate
         * @methodOf lbServices.Reply
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reply` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Reply#update
         * @methodOf lbServices.Reply
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Reply#destroyById
         * @methodOf lbServices.Reply
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reply` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Reply#removeById
         * @methodOf lbServices.Reply
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reply` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Reply#modelName
    * @propertyOf lbServices.Reply
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Reply`.
    */
    R.modelName = "Reply";


        /**
         * @ngdoc method
         * @name lbServices.Reply#user
         * @methodOf lbServices.Reply
         *
         * @description
         *
         * Fetches belongsTo relation user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.user = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::get::reply::user"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Reply.replyLikes
     * @header lbServices.Reply.replyLikes
     * @object
     * @description
     *
     * The object `Reply.replyLikes` groups methods
     * manipulating `ReplyLike` instances related to `Reply`.
     *
     * Call {@link lbServices.Reply#replyLikes Reply.replyLikes()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Reply#replyLikes
         * @methodOf lbServices.Reply
         *
         * @description
         *
         * Queries replyLikes of reply.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ReplyLike` object.)
         * </em>
         */
        R.replyLikes = function() {
          var TargetResource = $injector.get("ReplyLike");
          var action = TargetResource["::get::reply::replyLikes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Reply.replyLikes#count
         * @methodOf lbServices.Reply.replyLikes
         *
         * @description
         *
         * Counts replyLikes of reply.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.replyLikes.count = function() {
          var TargetResource = $injector.get("ReplyLike");
          var action = TargetResource["::count::reply::replyLikes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Reply.replyLikes#create
         * @methodOf lbServices.Reply.replyLikes
         *
         * @description
         *
         * Creates a new instance in replyLikes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ReplyLike` object.)
         * </em>
         */
        R.replyLikes.create = function() {
          var TargetResource = $injector.get("ReplyLike");
          var action = TargetResource["::create::reply::replyLikes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Reply.replyLikes#createMany
         * @methodOf lbServices.Reply.replyLikes
         *
         * @description
         *
         * Creates a new instance in replyLikes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ReplyLike` object.)
         * </em>
         */
        R.replyLikes.createMany = function() {
          var TargetResource = $injector.get("ReplyLike");
          var action = TargetResource["::createMany::reply::replyLikes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Reply.replyLikes#destroyAll
         * @methodOf lbServices.Reply.replyLikes
         *
         * @description
         *
         * Deletes all replyLikes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.replyLikes.destroyAll = function() {
          var TargetResource = $injector.get("ReplyLike");
          var action = TargetResource["::delete::reply::replyLikes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Reply.replyLikes#destroyById
         * @methodOf lbServices.Reply.replyLikes
         *
         * @description
         *
         * Delete a related item by id for replyLikes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for replyLikes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.replyLikes.destroyById = function() {
          var TargetResource = $injector.get("ReplyLike");
          var action = TargetResource["::destroyById::reply::replyLikes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Reply.replyLikes#findById
         * @methodOf lbServices.Reply.replyLikes
         *
         * @description
         *
         * Find a related item by id for replyLikes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for replyLikes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ReplyLike` object.)
         * </em>
         */
        R.replyLikes.findById = function() {
          var TargetResource = $injector.get("ReplyLike");
          var action = TargetResource["::findById::reply::replyLikes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Reply.replyLikes#updateById
         * @methodOf lbServices.Reply.replyLikes
         *
         * @description
         *
         * Update a related item by id for replyLikes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for replyLikes
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ReplyLike` object.)
         * </em>
         */
        R.replyLikes.updateById = function() {
          var TargetResource = $injector.get("ReplyLike");
          var action = TargetResource["::updateById::reply::replyLikes"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.CommentLike
 * @header lbServices.CommentLike
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `CommentLike` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "CommentLike",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/commentLikes/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use CommentLike.user() instead.
        "prototype$__get__user": {
          url: urlBase + "/commentLikes/:id/user",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CommentLike#create
         * @methodOf lbServices.CommentLike
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CommentLike` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/commentLikes",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.CommentLike#createMany
         * @methodOf lbServices.CommentLike
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CommentLike` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/commentLikes",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.CommentLike#upsert
         * @methodOf lbServices.CommentLike
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CommentLike` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/commentLikes",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.CommentLike#exists
         * @methodOf lbServices.CommentLike
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/commentLikes/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CommentLike#findById
         * @methodOf lbServices.CommentLike
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CommentLike` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/commentLikes/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CommentLike#find
         * @methodOf lbServices.CommentLike
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CommentLike` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/commentLikes",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CommentLike#findOne
         * @methodOf lbServices.CommentLike
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CommentLike` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/commentLikes/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CommentLike#updateAll
         * @methodOf lbServices.CommentLike
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/commentLikes/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.CommentLike#deleteById
         * @methodOf lbServices.CommentLike
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CommentLike` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/commentLikes/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.CommentLike#count
         * @methodOf lbServices.CommentLike
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/commentLikes/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CommentLike#prototype$updateAttributes
         * @methodOf lbServices.CommentLike
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CommentLike` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/commentLikes/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.CommentLike#createChangeStream
         * @methodOf lbServices.CommentLike
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/commentLikes/change-stream",
          method: "POST"
        },

        // INTERNAL. Use User.commentLikes.findById() instead.
        "::findById::user::commentLikes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/commentLikes/:fk",
          method: "GET"
        },

        // INTERNAL. Use User.commentLikes.destroyById() instead.
        "::destroyById::user::commentLikes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/commentLikes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use User.commentLikes.updateById() instead.
        "::updateById::user::commentLikes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/commentLikes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use User.commentLikes() instead.
        "::get::user::commentLikes": {
          isArray: true,
          url: urlBase + "/users/:id/commentLikes",
          method: "GET"
        },

        // INTERNAL. Use User.commentLikes.create() instead.
        "::create::user::commentLikes": {
          url: urlBase + "/users/:id/commentLikes",
          method: "POST"
        },

        // INTERNAL. Use User.commentLikes.createMany() instead.
        "::createMany::user::commentLikes": {
          isArray: true,
          url: urlBase + "/users/:id/commentLikes",
          method: "POST"
        },

        // INTERNAL. Use User.commentLikes.destroyAll() instead.
        "::delete::user::commentLikes": {
          url: urlBase + "/users/:id/commentLikes",
          method: "DELETE"
        },

        // INTERNAL. Use User.commentLikes.count() instead.
        "::count::user::commentLikes": {
          url: urlBase + "/users/:id/commentLikes/count",
          method: "GET"
        },

        // INTERNAL. Use Comment.commentLikes.findById() instead.
        "::findById::comment::commentLikes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/comments/:id/commentLikes/:fk",
          method: "GET"
        },

        // INTERNAL. Use Comment.commentLikes.destroyById() instead.
        "::destroyById::comment::commentLikes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/comments/:id/commentLikes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Comment.commentLikes.updateById() instead.
        "::updateById::comment::commentLikes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/comments/:id/commentLikes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Comment.commentLikes() instead.
        "::get::comment::commentLikes": {
          isArray: true,
          url: urlBase + "/comments/:id/commentLikes",
          method: "GET"
        },

        // INTERNAL. Use Comment.commentLikes.create() instead.
        "::create::comment::commentLikes": {
          url: urlBase + "/comments/:id/commentLikes",
          method: "POST"
        },

        // INTERNAL. Use Comment.commentLikes.createMany() instead.
        "::createMany::comment::commentLikes": {
          isArray: true,
          url: urlBase + "/comments/:id/commentLikes",
          method: "POST"
        },

        // INTERNAL. Use Comment.commentLikes.destroyAll() instead.
        "::delete::comment::commentLikes": {
          url: urlBase + "/comments/:id/commentLikes",
          method: "DELETE"
        },

        // INTERNAL. Use Comment.commentLikes.count() instead.
        "::count::comment::commentLikes": {
          url: urlBase + "/comments/:id/commentLikes/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.CommentLike#updateOrCreate
         * @methodOf lbServices.CommentLike
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CommentLike` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.CommentLike#update
         * @methodOf lbServices.CommentLike
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.CommentLike#destroyById
         * @methodOf lbServices.CommentLike
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CommentLike` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.CommentLike#removeById
         * @methodOf lbServices.CommentLike
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CommentLike` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.CommentLike#modelName
    * @propertyOf lbServices.CommentLike
    * @description
    * The name of the model represented by this $resource,
    * i.e. `CommentLike`.
    */
    R.modelName = "CommentLike";


        /**
         * @ngdoc method
         * @name lbServices.CommentLike#user
         * @methodOf lbServices.CommentLike
         *
         * @description
         *
         * Fetches belongsTo relation user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.user = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::get::commentLike::user"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.ReplyLike
 * @header lbServices.ReplyLike
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `ReplyLike` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "ReplyLike",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/replyLikes/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use ReplyLike.user() instead.
        "prototype$__get__user": {
          url: urlBase + "/replyLikes/:id/user",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ReplyLike#create
         * @methodOf lbServices.ReplyLike
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ReplyLike` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/replyLikes",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.ReplyLike#createMany
         * @methodOf lbServices.ReplyLike
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ReplyLike` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/replyLikes",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.ReplyLike#upsert
         * @methodOf lbServices.ReplyLike
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ReplyLike` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/replyLikes",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.ReplyLike#exists
         * @methodOf lbServices.ReplyLike
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/replyLikes/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ReplyLike#findById
         * @methodOf lbServices.ReplyLike
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ReplyLike` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/replyLikes/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ReplyLike#find
         * @methodOf lbServices.ReplyLike
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ReplyLike` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/replyLikes",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ReplyLike#findOne
         * @methodOf lbServices.ReplyLike
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ReplyLike` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/replyLikes/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ReplyLike#updateAll
         * @methodOf lbServices.ReplyLike
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/replyLikes/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.ReplyLike#deleteById
         * @methodOf lbServices.ReplyLike
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ReplyLike` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/replyLikes/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.ReplyLike#count
         * @methodOf lbServices.ReplyLike
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/replyLikes/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ReplyLike#prototype$updateAttributes
         * @methodOf lbServices.ReplyLike
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ReplyLike` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/replyLikes/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.ReplyLike#createChangeStream
         * @methodOf lbServices.ReplyLike
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/replyLikes/change-stream",
          method: "POST"
        },

        // INTERNAL. Use User.replyLikes.findById() instead.
        "::findById::user::replyLikes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/replyLikes/:fk",
          method: "GET"
        },

        // INTERNAL. Use User.replyLikes.destroyById() instead.
        "::destroyById::user::replyLikes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/replyLikes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use User.replyLikes.updateById() instead.
        "::updateById::user::replyLikes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/replyLikes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use User.replyLikes() instead.
        "::get::user::replyLikes": {
          isArray: true,
          url: urlBase + "/users/:id/replyLikes",
          method: "GET"
        },

        // INTERNAL. Use User.replyLikes.create() instead.
        "::create::user::replyLikes": {
          url: urlBase + "/users/:id/replyLikes",
          method: "POST"
        },

        // INTERNAL. Use User.replyLikes.createMany() instead.
        "::createMany::user::replyLikes": {
          isArray: true,
          url: urlBase + "/users/:id/replyLikes",
          method: "POST"
        },

        // INTERNAL. Use User.replyLikes.destroyAll() instead.
        "::delete::user::replyLikes": {
          url: urlBase + "/users/:id/replyLikes",
          method: "DELETE"
        },

        // INTERNAL. Use User.replyLikes.count() instead.
        "::count::user::replyLikes": {
          url: urlBase + "/users/:id/replyLikes/count",
          method: "GET"
        },

        // INTERNAL. Use Reply.replyLikes.findById() instead.
        "::findById::reply::replyLikes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/replies/:id/replyLikes/:fk",
          method: "GET"
        },

        // INTERNAL. Use Reply.replyLikes.destroyById() instead.
        "::destroyById::reply::replyLikes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/replies/:id/replyLikes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Reply.replyLikes.updateById() instead.
        "::updateById::reply::replyLikes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/replies/:id/replyLikes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Reply.replyLikes() instead.
        "::get::reply::replyLikes": {
          isArray: true,
          url: urlBase + "/replies/:id/replyLikes",
          method: "GET"
        },

        // INTERNAL. Use Reply.replyLikes.create() instead.
        "::create::reply::replyLikes": {
          url: urlBase + "/replies/:id/replyLikes",
          method: "POST"
        },

        // INTERNAL. Use Reply.replyLikes.createMany() instead.
        "::createMany::reply::replyLikes": {
          isArray: true,
          url: urlBase + "/replies/:id/replyLikes",
          method: "POST"
        },

        // INTERNAL. Use Reply.replyLikes.destroyAll() instead.
        "::delete::reply::replyLikes": {
          url: urlBase + "/replies/:id/replyLikes",
          method: "DELETE"
        },

        // INTERNAL. Use Reply.replyLikes.count() instead.
        "::count::reply::replyLikes": {
          url: urlBase + "/replies/:id/replyLikes/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.ReplyLike#updateOrCreate
         * @methodOf lbServices.ReplyLike
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ReplyLike` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.ReplyLike#update
         * @methodOf lbServices.ReplyLike
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.ReplyLike#destroyById
         * @methodOf lbServices.ReplyLike
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ReplyLike` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.ReplyLike#removeById
         * @methodOf lbServices.ReplyLike
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ReplyLike` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.ReplyLike#modelName
    * @propertyOf lbServices.ReplyLike
    * @description
    * The name of the model represented by this $resource,
    * i.e. `ReplyLike`.
    */
    R.modelName = "ReplyLike";


        /**
         * @ngdoc method
         * @name lbServices.ReplyLike#user
         * @methodOf lbServices.ReplyLike
         *
         * @description
         *
         * Fetches belongsTo relation user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.user = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::get::replyLike::user"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.File
 * @header lbServices.File
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `File` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "File",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/files/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.File#create
         * @methodOf lbServices.File
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `File` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/files",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.File#createMany
         * @methodOf lbServices.File
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `File` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/files",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.File#upsert
         * @methodOf lbServices.File
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `File` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/files",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.File#exists
         * @methodOf lbServices.File
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/files/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.File#findById
         * @methodOf lbServices.File
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `File` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/files/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.File#find
         * @methodOf lbServices.File
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `File` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/files",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.File#findOne
         * @methodOf lbServices.File
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `File` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/files/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.File#updateAll
         * @methodOf lbServices.File
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/files/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.File#deleteById
         * @methodOf lbServices.File
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `File` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/files/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.File#count
         * @methodOf lbServices.File
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/files/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.File#prototype$updateAttributes
         * @methodOf lbServices.File
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `File` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/files/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.File#createChangeStream
         * @methodOf lbServices.File
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/files/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.File#upload
         * @methodOf lbServices.File
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `url` – `{string=}` - 
         *
         *  - `fileDir` – `{string=}` - 
         *
         *  - `fileName` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `result` – `{boolean=}` - 
         */
        "upload": {
          url: urlBase + "/files/upload",
          method: "POST"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.File#updateOrCreate
         * @methodOf lbServices.File
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `File` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.File#update
         * @methodOf lbServices.File
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.File#destroyById
         * @methodOf lbServices.File
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `File` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.File#removeById
         * @methodOf lbServices.File
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `File` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.File#modelName
    * @propertyOf lbServices.File
    * @description
    * The name of the model represented by this $resource,
    * i.e. `File`.
    */
    R.modelName = "File";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.FocusUser
 * @header lbServices.FocusUser
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `FocusUser` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "FocusUser",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/focusUsers/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.FocusUser#create
         * @methodOf lbServices.FocusUser
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FocusUser` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/focusUsers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.FocusUser#createMany
         * @methodOf lbServices.FocusUser
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FocusUser` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/focusUsers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.FocusUser#upsert
         * @methodOf lbServices.FocusUser
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FocusUser` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/focusUsers",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.FocusUser#exists
         * @methodOf lbServices.FocusUser
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/focusUsers/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.FocusUser#findById
         * @methodOf lbServices.FocusUser
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FocusUser` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/focusUsers/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.FocusUser#find
         * @methodOf lbServices.FocusUser
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FocusUser` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/focusUsers",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.FocusUser#findOne
         * @methodOf lbServices.FocusUser
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FocusUser` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/focusUsers/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.FocusUser#updateAll
         * @methodOf lbServices.FocusUser
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/focusUsers/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.FocusUser#deleteById
         * @methodOf lbServices.FocusUser
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FocusUser` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/focusUsers/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.FocusUser#count
         * @methodOf lbServices.FocusUser
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/focusUsers/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.FocusUser#prototype$updateAttributes
         * @methodOf lbServices.FocusUser
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FocusUser` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/focusUsers/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.FocusUser#createChangeStream
         * @methodOf lbServices.FocusUser
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/focusUsers/change-stream",
          method: "POST"
        },

        // INTERNAL. Use User.focusUsers.findById() instead.
        "::findById::user::focusUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/focusUsers/:fk",
          method: "GET"
        },

        // INTERNAL. Use User.focusUsers.destroyById() instead.
        "::destroyById::user::focusUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/focusUsers/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use User.focusUsers.updateById() instead.
        "::updateById::user::focusUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/focusUsers/:fk",
          method: "PUT"
        },

        // INTERNAL. Use User.followUsers.findById() instead.
        "::findById::user::followUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/followUsers/:fk",
          method: "GET"
        },

        // INTERNAL. Use User.followUsers.destroyById() instead.
        "::destroyById::user::followUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/followUsers/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use User.followUsers.updateById() instead.
        "::updateById::user::followUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/followUsers/:fk",
          method: "PUT"
        },

        // INTERNAL. Use User.focusUsers() instead.
        "::get::user::focusUsers": {
          isArray: true,
          url: urlBase + "/users/:id/focusUsers",
          method: "GET"
        },

        // INTERNAL. Use User.focusUsers.create() instead.
        "::create::user::focusUsers": {
          url: urlBase + "/users/:id/focusUsers",
          method: "POST"
        },

        // INTERNAL. Use User.focusUsers.createMany() instead.
        "::createMany::user::focusUsers": {
          isArray: true,
          url: urlBase + "/users/:id/focusUsers",
          method: "POST"
        },

        // INTERNAL. Use User.focusUsers.destroyAll() instead.
        "::delete::user::focusUsers": {
          url: urlBase + "/users/:id/focusUsers",
          method: "DELETE"
        },

        // INTERNAL. Use User.focusUsers.count() instead.
        "::count::user::focusUsers": {
          url: urlBase + "/users/:id/focusUsers/count",
          method: "GET"
        },

        // INTERNAL. Use User.followUsers() instead.
        "::get::user::followUsers": {
          isArray: true,
          url: urlBase + "/users/:id/followUsers",
          method: "GET"
        },

        // INTERNAL. Use User.followUsers.create() instead.
        "::create::user::followUsers": {
          url: urlBase + "/users/:id/followUsers",
          method: "POST"
        },

        // INTERNAL. Use User.followUsers.createMany() instead.
        "::createMany::user::followUsers": {
          isArray: true,
          url: urlBase + "/users/:id/followUsers",
          method: "POST"
        },

        // INTERNAL. Use User.followUsers.destroyAll() instead.
        "::delete::user::followUsers": {
          url: urlBase + "/users/:id/followUsers",
          method: "DELETE"
        },

        // INTERNAL. Use User.followUsers.count() instead.
        "::count::user::followUsers": {
          url: urlBase + "/users/:id/followUsers/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.FocusUser#updateOrCreate
         * @methodOf lbServices.FocusUser
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FocusUser` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.FocusUser#update
         * @methodOf lbServices.FocusUser
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.FocusUser#destroyById
         * @methodOf lbServices.FocusUser
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FocusUser` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.FocusUser#removeById
         * @methodOf lbServices.FocusUser
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FocusUser` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.FocusUser#modelName
    * @propertyOf lbServices.FocusUser
    * @description
    * The name of the model represented by this $resource,
    * i.e. `FocusUser`.
    */
    R.modelName = "FocusUser";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.BlogLike
 * @header lbServices.BlogLike
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `BlogLike` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "BlogLike",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/blogLikes/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.BlogLike#create
         * @methodOf lbServices.BlogLike
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BlogLike` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/blogLikes",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.BlogLike#createMany
         * @methodOf lbServices.BlogLike
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BlogLike` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/blogLikes",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.BlogLike#upsert
         * @methodOf lbServices.BlogLike
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BlogLike` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/blogLikes",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.BlogLike#exists
         * @methodOf lbServices.BlogLike
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/blogLikes/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.BlogLike#findById
         * @methodOf lbServices.BlogLike
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BlogLike` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/blogLikes/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.BlogLike#find
         * @methodOf lbServices.BlogLike
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BlogLike` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/blogLikes",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.BlogLike#findOne
         * @methodOf lbServices.BlogLike
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BlogLike` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/blogLikes/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.BlogLike#updateAll
         * @methodOf lbServices.BlogLike
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/blogLikes/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.BlogLike#deleteById
         * @methodOf lbServices.BlogLike
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BlogLike` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/blogLikes/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.BlogLike#count
         * @methodOf lbServices.BlogLike
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/blogLikes/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.BlogLike#prototype$updateAttributes
         * @methodOf lbServices.BlogLike
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BlogLike` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/blogLikes/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.BlogLike#createChangeStream
         * @methodOf lbServices.BlogLike
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/blogLikes/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Blog.blogLikes.findById() instead.
        "::findById::blog::blogLikes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/blogs/:id/blogLikes/:fk",
          method: "GET"
        },

        // INTERNAL. Use Blog.blogLikes.destroyById() instead.
        "::destroyById::blog::blogLikes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/blogs/:id/blogLikes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Blog.blogLikes.updateById() instead.
        "::updateById::blog::blogLikes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/blogs/:id/blogLikes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Blog.blogLikes() instead.
        "::get::blog::blogLikes": {
          isArray: true,
          url: urlBase + "/blogs/:id/blogLikes",
          method: "GET"
        },

        // INTERNAL. Use Blog.blogLikes.create() instead.
        "::create::blog::blogLikes": {
          url: urlBase + "/blogs/:id/blogLikes",
          method: "POST"
        },

        // INTERNAL. Use Blog.blogLikes.createMany() instead.
        "::createMany::blog::blogLikes": {
          isArray: true,
          url: urlBase + "/blogs/:id/blogLikes",
          method: "POST"
        },

        // INTERNAL. Use Blog.blogLikes.destroyAll() instead.
        "::delete::blog::blogLikes": {
          url: urlBase + "/blogs/:id/blogLikes",
          method: "DELETE"
        },

        // INTERNAL. Use Blog.blogLikes.count() instead.
        "::count::blog::blogLikes": {
          url: urlBase + "/blogs/:id/blogLikes/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.BlogLike#updateOrCreate
         * @methodOf lbServices.BlogLike
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BlogLike` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.BlogLike#update
         * @methodOf lbServices.BlogLike
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.BlogLike#destroyById
         * @methodOf lbServices.BlogLike
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BlogLike` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.BlogLike#removeById
         * @methodOf lbServices.BlogLike
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BlogLike` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.BlogLike#modelName
    * @propertyOf lbServices.BlogLike
    * @description
    * The name of the model represented by this $resource,
    * i.e. `BlogLike`.
    */
    R.modelName = "BlogLike";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Container
 * @header lbServices.Container
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Container` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Container",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/containers/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Container#getContainers
         * @methodOf lbServices.Container
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Container` object.)
         * </em>
         */
        "getContainers": {
          isArray: true,
          url: urlBase + "/containers",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Container#createContainer
         * @methodOf lbServices.Container
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Container` object.)
         * </em>
         */
        "createContainer": {
          url: urlBase + "/containers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Container#destroyContainer
         * @methodOf lbServices.Container
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `` – `{undefined=}` - 
         */
        "destroyContainer": {
          url: urlBase + "/containers/:container",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Container#getContainer
         * @methodOf lbServices.Container
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Container` object.)
         * </em>
         */
        "getContainer": {
          url: urlBase + "/containers/:container",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Container#getFiles
         * @methodOf lbServices.Container
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Container` object.)
         * </em>
         */
        "getFiles": {
          isArray: true,
          url: urlBase + "/containers/:container/files",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Container#getFile
         * @methodOf lbServices.Container
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` - 
         *
         *  - `file` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Container` object.)
         * </em>
         */
        "getFile": {
          url: urlBase + "/containers/:container/files/:file",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Container#removeFile
         * @methodOf lbServices.Container
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` - 
         *
         *  - `file` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `` – `{undefined=}` - 
         */
        "removeFile": {
          url: urlBase + "/containers/:container/files/:file",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Container#upload
         * @methodOf lbServices.Container
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `req` – `{object=}` - 
         *
         *  - `res` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `result` – `{object=}` - 
         */
        "upload": {
          url: urlBase + "/containers/:container/upload",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Container#download
         * @methodOf lbServices.Container
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` - 
         *
         *  - `file` – `{string=}` - 
         *
         *  - `res` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "download": {
          url: urlBase + "/containers/:container/download/:file",
          method: "GET"
        },
      }
    );




    /**
    * @ngdoc property
    * @name lbServices.Container#modelName
    * @propertyOf lbServices.Container
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Container`.
    */
    R.modelName = "Container";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Q
 * @header lbServices.Q
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Q` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Q",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/qs/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Q#create
         * @methodOf lbServices.Q
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Q` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/qs",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Q#createMany
         * @methodOf lbServices.Q
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Q` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/qs",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Q#upsert
         * @methodOf lbServices.Q
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Q` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/qs",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Q#exists
         * @methodOf lbServices.Q
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/qs/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Q#findById
         * @methodOf lbServices.Q
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Q` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/qs/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Q#find
         * @methodOf lbServices.Q
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Q` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/qs",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Q#findOne
         * @methodOf lbServices.Q
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Q` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/qs/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Q#updateAll
         * @methodOf lbServices.Q
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/qs/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Q#deleteById
         * @methodOf lbServices.Q
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Q` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/qs/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Q#count
         * @methodOf lbServices.Q
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/qs/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Q#prototype$updateAttributes
         * @methodOf lbServices.Q
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Q` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/qs/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Q#createChangeStream
         * @methodOf lbServices.Q
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/qs/change-stream",
          method: "POST"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Q#updateOrCreate
         * @methodOf lbServices.Q
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Q` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Q#update
         * @methodOf lbServices.Q
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Q#destroyById
         * @methodOf lbServices.Q
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Q` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Q#removeById
         * @methodOf lbServices.Q
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Q` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Q#modelName
    * @propertyOf lbServices.Q
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Q`.
    */
    R.modelName = "Q";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Zhihu
 * @header lbServices.Zhihu
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Zhihu` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Zhihu",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/zhihus/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Zhihu#create
         * @methodOf lbServices.Zhihu
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Zhihu` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/zhihus",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Zhihu#createMany
         * @methodOf lbServices.Zhihu
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Zhihu` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/zhihus",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Zhihu#upsert
         * @methodOf lbServices.Zhihu
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Zhihu` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/zhihus",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Zhihu#exists
         * @methodOf lbServices.Zhihu
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/zhihus/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Zhihu#findById
         * @methodOf lbServices.Zhihu
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Zhihu` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/zhihus/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Zhihu#find
         * @methodOf lbServices.Zhihu
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Zhihu` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/zhihus",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Zhihu#findOne
         * @methodOf lbServices.Zhihu
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Zhihu` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/zhihus/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Zhihu#updateAll
         * @methodOf lbServices.Zhihu
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/zhihus/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Zhihu#deleteById
         * @methodOf lbServices.Zhihu
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Zhihu` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/zhihus/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Zhihu#count
         * @methodOf lbServices.Zhihu
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/zhihus/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Zhihu#prototype$updateAttributes
         * @methodOf lbServices.Zhihu
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Zhihu` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/zhihus/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Zhihu#createChangeStream
         * @methodOf lbServices.Zhihu
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/zhihus/change-stream",
          method: "POST"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Zhihu#updateOrCreate
         * @methodOf lbServices.Zhihu
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Zhihu` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Zhihu#update
         * @methodOf lbServices.Zhihu
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Zhihu#destroyById
         * @methodOf lbServices.Zhihu
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Zhihu` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Zhihu#removeById
         * @methodOf lbServices.Zhihu
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Zhihu` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Zhihu#modelName
    * @propertyOf lbServices.Zhihu
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Zhihu`.
    */
    R.modelName = "Zhihu";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Zhihutopic
 * @header lbServices.Zhihutopic
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Zhihutopic` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Zhihutopic",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/zhihutopics/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Zhihutopic#create
         * @methodOf lbServices.Zhihutopic
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Zhihutopic` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/zhihutopics",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Zhihutopic#createMany
         * @methodOf lbServices.Zhihutopic
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Zhihutopic` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/zhihutopics",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Zhihutopic#upsert
         * @methodOf lbServices.Zhihutopic
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Zhihutopic` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/zhihutopics",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Zhihutopic#exists
         * @methodOf lbServices.Zhihutopic
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/zhihutopics/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Zhihutopic#findById
         * @methodOf lbServices.Zhihutopic
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Zhihutopic` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/zhihutopics/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Zhihutopic#find
         * @methodOf lbServices.Zhihutopic
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Zhihutopic` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/zhihutopics",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Zhihutopic#findOne
         * @methodOf lbServices.Zhihutopic
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Zhihutopic` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/zhihutopics/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Zhihutopic#updateAll
         * @methodOf lbServices.Zhihutopic
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/zhihutopics/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Zhihutopic#deleteById
         * @methodOf lbServices.Zhihutopic
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Zhihutopic` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/zhihutopics/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Zhihutopic#count
         * @methodOf lbServices.Zhihutopic
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/zhihutopics/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Zhihutopic#prototype$updateAttributes
         * @methodOf lbServices.Zhihutopic
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Zhihutopic` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/zhihutopics/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Zhihutopic#createChangeStream
         * @methodOf lbServices.Zhihutopic
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/zhihutopics/change-stream",
          method: "POST"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Zhihutopic#updateOrCreate
         * @methodOf lbServices.Zhihutopic
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Zhihutopic` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Zhihutopic#update
         * @methodOf lbServices.Zhihutopic
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Zhihutopic#destroyById
         * @methodOf lbServices.Zhihutopic
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Zhihutopic` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Zhihutopic#removeById
         * @methodOf lbServices.Zhihutopic
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Zhihutopic` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Zhihutopic#modelName
    * @propertyOf lbServices.Zhihutopic
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Zhihutopic`.
    */
    R.modelName = "Zhihutopic";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Zhihuuser
 * @header lbServices.Zhihuuser
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Zhihuuser` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Zhihuuser",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/zhihuusers/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Zhihuuser#create
         * @methodOf lbServices.Zhihuuser
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Zhihuuser` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/zhihuusers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Zhihuuser#createMany
         * @methodOf lbServices.Zhihuuser
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Zhihuuser` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/zhihuusers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Zhihuuser#upsert
         * @methodOf lbServices.Zhihuuser
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Zhihuuser` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/zhihuusers",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Zhihuuser#exists
         * @methodOf lbServices.Zhihuuser
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/zhihuusers/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Zhihuuser#findById
         * @methodOf lbServices.Zhihuuser
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Zhihuuser` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/zhihuusers/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Zhihuuser#find
         * @methodOf lbServices.Zhihuuser
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Zhihuuser` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/zhihuusers",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Zhihuuser#findOne
         * @methodOf lbServices.Zhihuuser
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Zhihuuser` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/zhihuusers/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Zhihuuser#updateAll
         * @methodOf lbServices.Zhihuuser
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/zhihuusers/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Zhihuuser#deleteById
         * @methodOf lbServices.Zhihuuser
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Zhihuuser` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/zhihuusers/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Zhihuuser#count
         * @methodOf lbServices.Zhihuuser
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/zhihuusers/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Zhihuuser#prototype$updateAttributes
         * @methodOf lbServices.Zhihuuser
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Zhihuuser` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/zhihuusers/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Zhihuuser#createChangeStream
         * @methodOf lbServices.Zhihuuser
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/zhihuusers/change-stream",
          method: "POST"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Zhihuuser#updateOrCreate
         * @methodOf lbServices.Zhihuuser
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Zhihuuser` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Zhihuuser#update
         * @methodOf lbServices.Zhihuuser
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Zhihuuser#destroyById
         * @methodOf lbServices.Zhihuuser
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Zhihuuser` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Zhihuuser#removeById
         * @methodOf lbServices.Zhihuuser
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Zhihuuser` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Zhihuuser#modelName
    * @propertyOf lbServices.Zhihuuser
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Zhihuuser`.
    */
    R.modelName = "Zhihuuser";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Role
 * @header lbServices.Role
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Role` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Role",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/roles/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Role.principals.findById() instead.
        "prototype$__findById__principals": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/roles/:id/principals/:fk",
          method: "GET"
        },

        // INTERNAL. Use Role.principals.destroyById() instead.
        "prototype$__destroyById__principals": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/roles/:id/principals/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Role.principals.updateById() instead.
        "prototype$__updateById__principals": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/roles/:id/principals/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Role.principals() instead.
        "prototype$__get__principals": {
          isArray: true,
          url: urlBase + "/roles/:id/principals",
          method: "GET"
        },

        // INTERNAL. Use Role.principals.create() instead.
        "prototype$__create__principals": {
          url: urlBase + "/roles/:id/principals",
          method: "POST"
        },

        // INTERNAL. Use Role.principals.destroyAll() instead.
        "prototype$__delete__principals": {
          url: urlBase + "/roles/:id/principals",
          method: "DELETE"
        },

        // INTERNAL. Use Role.principals.count() instead.
        "prototype$__count__principals": {
          url: urlBase + "/roles/:id/principals/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Role#create
         * @methodOf lbServices.Role
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Role` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/roles",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Role#createMany
         * @methodOf lbServices.Role
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Role` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/roles",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Role#upsert
         * @methodOf lbServices.Role
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Role` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/roles",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Role#exists
         * @methodOf lbServices.Role
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/roles/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Role#findById
         * @methodOf lbServices.Role
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Role` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/roles/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Role#find
         * @methodOf lbServices.Role
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Role` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/roles",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Role#findOne
         * @methodOf lbServices.Role
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Role` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/roles/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Role#updateAll
         * @methodOf lbServices.Role
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/roles/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Role#deleteById
         * @methodOf lbServices.Role
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Role` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/roles/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Role#count
         * @methodOf lbServices.Role
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/roles/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Role#prototype$updateAttributes
         * @methodOf lbServices.Role
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Role id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Role` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/roles/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Role#createChangeStream
         * @methodOf lbServices.Role
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/roles/change-stream",
          method: "POST"
        },

        // INTERNAL. Use User.roles.findById() instead.
        "::findById::user::roles": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/roles/:fk",
          method: "GET"
        },

        // INTERNAL. Use User.roles.destroyById() instead.
        "::destroyById::user::roles": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/roles/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use User.roles.updateById() instead.
        "::updateById::user::roles": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/roles/:fk",
          method: "PUT"
        },

        // INTERNAL. Use User.roles.link() instead.
        "::link::user::roles": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/roles/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use User.roles.unlink() instead.
        "::unlink::user::roles": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/roles/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use User.roles.exists() instead.
        "::exists::user::roles": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/roles/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use User.roles() instead.
        "::get::user::roles": {
          isArray: true,
          url: urlBase + "/users/:id/roles",
          method: "GET"
        },

        // INTERNAL. Use User.roles.create() instead.
        "::create::user::roles": {
          url: urlBase + "/users/:id/roles",
          method: "POST"
        },

        // INTERNAL. Use User.roles.createMany() instead.
        "::createMany::user::roles": {
          isArray: true,
          url: urlBase + "/users/:id/roles",
          method: "POST"
        },

        // INTERNAL. Use User.roles.destroyAll() instead.
        "::delete::user::roles": {
          url: urlBase + "/users/:id/roles",
          method: "DELETE"
        },

        // INTERNAL. Use User.roles.count() instead.
        "::count::user::roles": {
          url: urlBase + "/users/:id/roles/count",
          method: "GET"
        },

        // INTERNAL. Use RoleMapping.role() instead.
        "::get::roleMapping::role": {
          url: urlBase + "/roleMappings/:id/role",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Role#updateOrCreate
         * @methodOf lbServices.Role
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Role` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Role#update
         * @methodOf lbServices.Role
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Role#destroyById
         * @methodOf lbServices.Role
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Role` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Role#removeById
         * @methodOf lbServices.Role
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Role` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Role#modelName
    * @propertyOf lbServices.Role
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Role`.
    */
    R.modelName = "Role";

    /**
     * @ngdoc object
     * @name lbServices.Role.principals
     * @header lbServices.Role.principals
     * @object
     * @description
     *
     * The object `Role.principals` groups methods
     * manipulating `RoleMapping` instances related to `Role`.
     *
     * Call {@link lbServices.Role#principals Role.principals()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Role#principals
         * @methodOf lbServices.Role
         *
         * @description
         *
         * Queries principals of role.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Role id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RoleMapping` object.)
         * </em>
         */
        R.principals = function() {
          var TargetResource = $injector.get("RoleMapping");
          var action = TargetResource["::get::role::principals"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Role.principals#count
         * @methodOf lbServices.Role.principals
         *
         * @description
         *
         * Counts principals of role.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Role id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.principals.count = function() {
          var TargetResource = $injector.get("RoleMapping");
          var action = TargetResource["::count::role::principals"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Role.principals#create
         * @methodOf lbServices.Role.principals
         *
         * @description
         *
         * Creates a new instance in principals of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Role id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RoleMapping` object.)
         * </em>
         */
        R.principals.create = function() {
          var TargetResource = $injector.get("RoleMapping");
          var action = TargetResource["::create::role::principals"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Role.principals#createMany
         * @methodOf lbServices.Role.principals
         *
         * @description
         *
         * Creates a new instance in principals of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Role id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RoleMapping` object.)
         * </em>
         */
        R.principals.createMany = function() {
          var TargetResource = $injector.get("RoleMapping");
          var action = TargetResource["::createMany::role::principals"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Role.principals#destroyAll
         * @methodOf lbServices.Role.principals
         *
         * @description
         *
         * Deletes all principals of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Role id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.principals.destroyAll = function() {
          var TargetResource = $injector.get("RoleMapping");
          var action = TargetResource["::delete::role::principals"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Role.principals#destroyById
         * @methodOf lbServices.Role.principals
         *
         * @description
         *
         * Delete a related item by id for principals.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Role id
         *
         *  - `fk` – `{*}` - Foreign key for principals
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.principals.destroyById = function() {
          var TargetResource = $injector.get("RoleMapping");
          var action = TargetResource["::destroyById::role::principals"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Role.principals#findById
         * @methodOf lbServices.Role.principals
         *
         * @description
         *
         * Find a related item by id for principals.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Role id
         *
         *  - `fk` – `{*}` - Foreign key for principals
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RoleMapping` object.)
         * </em>
         */
        R.principals.findById = function() {
          var TargetResource = $injector.get("RoleMapping");
          var action = TargetResource["::findById::role::principals"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Role.principals#updateById
         * @methodOf lbServices.Role.principals
         *
         * @description
         *
         * Update a related item by id for principals.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Role id
         *
         *  - `fk` – `{*}` - Foreign key for principals
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RoleMapping` object.)
         * </em>
         */
        R.principals.updateById = function() {
          var TargetResource = $injector.get("RoleMapping");
          var action = TargetResource["::updateById::role::principals"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.RoleMapping
 * @header lbServices.RoleMapping
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `RoleMapping` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "RoleMapping",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/roleMappings/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use RoleMapping.role() instead.
        "prototype$__get__role": {
          url: urlBase + "/roleMappings/:id/role",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.RoleMapping#create
         * @methodOf lbServices.RoleMapping
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RoleMapping` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/roleMappings",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.RoleMapping#createMany
         * @methodOf lbServices.RoleMapping
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RoleMapping` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/roleMappings",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.RoleMapping#upsert
         * @methodOf lbServices.RoleMapping
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RoleMapping` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/roleMappings",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.RoleMapping#exists
         * @methodOf lbServices.RoleMapping
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/roleMappings/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.RoleMapping#findById
         * @methodOf lbServices.RoleMapping
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RoleMapping` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/roleMappings/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.RoleMapping#find
         * @methodOf lbServices.RoleMapping
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RoleMapping` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/roleMappings",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.RoleMapping#findOne
         * @methodOf lbServices.RoleMapping
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RoleMapping` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/roleMappings/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.RoleMapping#updateAll
         * @methodOf lbServices.RoleMapping
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/roleMappings/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.RoleMapping#deleteById
         * @methodOf lbServices.RoleMapping
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RoleMapping` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/roleMappings/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.RoleMapping#count
         * @methodOf lbServices.RoleMapping
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/roleMappings/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.RoleMapping#prototype$updateAttributes
         * @methodOf lbServices.RoleMapping
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - RoleMapping id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RoleMapping` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/roleMappings/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.RoleMapping#createChangeStream
         * @methodOf lbServices.RoleMapping
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/roleMappings/change-stream",
          method: "POST"
        },

        // INTERNAL. Use User.roleMappings.findById() instead.
        "::findById::user::roleMappings": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/roleMappings/:fk",
          method: "GET"
        },

        // INTERNAL. Use User.roleMappings.destroyById() instead.
        "::destroyById::user::roleMappings": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/roleMappings/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use User.roleMappings.updateById() instead.
        "::updateById::user::roleMappings": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/roleMappings/:fk",
          method: "PUT"
        },

        // INTERNAL. Use User.roleMappings() instead.
        "::get::user::roleMappings": {
          isArray: true,
          url: urlBase + "/users/:id/roleMappings",
          method: "GET"
        },

        // INTERNAL. Use User.roleMappings.create() instead.
        "::create::user::roleMappings": {
          url: urlBase + "/users/:id/roleMappings",
          method: "POST"
        },

        // INTERNAL. Use User.roleMappings.createMany() instead.
        "::createMany::user::roleMappings": {
          isArray: true,
          url: urlBase + "/users/:id/roleMappings",
          method: "POST"
        },

        // INTERNAL. Use User.roleMappings.destroyAll() instead.
        "::delete::user::roleMappings": {
          url: urlBase + "/users/:id/roleMappings",
          method: "DELETE"
        },

        // INTERNAL. Use User.roleMappings.count() instead.
        "::count::user::roleMappings": {
          url: urlBase + "/users/:id/roleMappings/count",
          method: "GET"
        },

        // INTERNAL. Use Role.principals.findById() instead.
        "::findById::role::principals": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/roles/:id/principals/:fk",
          method: "GET"
        },

        // INTERNAL. Use Role.principals.destroyById() instead.
        "::destroyById::role::principals": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/roles/:id/principals/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Role.principals.updateById() instead.
        "::updateById::role::principals": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/roles/:id/principals/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Role.principals() instead.
        "::get::role::principals": {
          isArray: true,
          url: urlBase + "/roles/:id/principals",
          method: "GET"
        },

        // INTERNAL. Use Role.principals.create() instead.
        "::create::role::principals": {
          url: urlBase + "/roles/:id/principals",
          method: "POST"
        },

        // INTERNAL. Use Role.principals.createMany() instead.
        "::createMany::role::principals": {
          isArray: true,
          url: urlBase + "/roles/:id/principals",
          method: "POST"
        },

        // INTERNAL. Use Role.principals.destroyAll() instead.
        "::delete::role::principals": {
          url: urlBase + "/roles/:id/principals",
          method: "DELETE"
        },

        // INTERNAL. Use Role.principals.count() instead.
        "::count::role::principals": {
          url: urlBase + "/roles/:id/principals/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.RoleMapping#updateOrCreate
         * @methodOf lbServices.RoleMapping
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RoleMapping` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.RoleMapping#update
         * @methodOf lbServices.RoleMapping
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.RoleMapping#destroyById
         * @methodOf lbServices.RoleMapping
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RoleMapping` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.RoleMapping#removeById
         * @methodOf lbServices.RoleMapping
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RoleMapping` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.RoleMapping#modelName
    * @propertyOf lbServices.RoleMapping
    * @description
    * The name of the model represented by this $resource,
    * i.e. `RoleMapping`.
    */
    R.modelName = "RoleMapping";


        /**
         * @ngdoc method
         * @name lbServices.RoleMapping#role
         * @methodOf lbServices.RoleMapping
         *
         * @description
         *
         * Fetches belongsTo relation role.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - RoleMapping id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Role` object.)
         * </em>
         */
        R.role = function() {
          var TargetResource = $injector.get("Role");
          var action = TargetResource["::get::roleMapping::role"];
          return action.apply(R, arguments);
        };

    return R;
  }]);


module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.rememberMe = undefined;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    }

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      var key = propsPrefix + name;
      if (value == null) value = '';
      storage[key] = value;
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', [ '$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {

          // filter out non urlBase requests
          if (config.url.substr(0, urlBase.length) !== urlBase) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 } },
              status: 401,
              config: config,
              headers: function() { return undefined; }
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        }
      }
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the URL of the REST API server. The URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.getUrlBase = function() {
      return urlBase;
    };

    this.$get = ['$resource', function($resource) {
      return function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };
    }];
  });

})(window, window.angular);
