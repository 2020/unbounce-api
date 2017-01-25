(function (root, client) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['popsicle', 'ClientOAuth2'], client);
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but only CommonJS-like
    // environments that support `module.exports`, like Node.
    module.exports = client(require('popsicle'), require('client-oauth2'));
  } else {
    // Browser globals (root is window).
    root.UnbounceApi = client(root.popsicle, root.ClientOAuth2);
  }
})(this, function (popsicle, ClientOAuth2) {
  var TEMPLATE_REGEXP = /\{([^\{\}]+)\}/g;

  /**
   * @param  {String} string
   * @param  {Object} interpolate
   * @param  {Object} defaults
   * @return {String}
   */
  function template (string, interpolate, defaults) {
    defaults    = defaults || {};
    interpolate = interpolate || {};

    return string.replace(TEMPLATE_REGEXP, function (match, key) {
      if (interpolate[key] != null) {
        return encodeURIComponent(interpolate[key]);
      }

      if (defaults[key] != null) {
        return encodeURIComponent(defaults[key]);
      }

      return '';
    });
  }

  /**
   * @param  {Object} dest
   * @param  {Object} ...source
   * @return {Object}
   */
  function extend (dest /*, ...source */) {
    for (var i = 1; i < arguments.length; i++) {
      for (var key in arguments[i]) {
        dest[key] = arguments[i][key];
      }
    }

    return dest;
  }

  function handleRequest (client, path, method, body, options) {
    options = extend({}, client.options, options);

    var baseUri = template(options.baseUri, options.baseUriParameters);
    var hasBody = method !== 'GET' && method !== 'HEAD';
    var reqOpts = {};

    var reqBody = hasBody && body != null ? body : options.body;
    var reqQuery = !hasBody && body != null ? body : options.query;

    var reqOpts = {
      url: baseUri.replace(/\/$/, '') + path,
      method: method,
      headers: extend({}, options.headers),
      body: reqBody,
      query: typeof reqQuery === 'object' ? extend({}, reqQuery) : reqQuery
    };

    if (options.user && typeof options.user.sign === 'function') {
      options.user.sign(reqOpts);
    }

    return client.request(reqOpts);
  }

  function Resource0 (uri, client) {
    this._uri    = uri;
    this._client = client;

    this.accounts = new Resource1(uri + '/accounts', client);
    this.subAccounts = new Resource5(uri + '/sub_accounts', client);
    this.domains = new Resource11(uri + '/domains', client);
    this.pages = new Resource14(uri + '/pages', client);
    this.pageGroups = new Resource18(uri + '/page_groups', client);
    this.leads = new Resource21(uri + '/leads', client);
    this.users = new Resource23(uri + '/users', client);
  };


  Resource0.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options);
  };
  function Resource1 (uri, client) {
    this._uri    = uri;
    this._client = client;

  };

  Resource1.prototype.accountId = function (/* ...args */) {
    var uri = this._uri + template('/{0}', arguments, [undefined]);

    return new Resource2(uri, this._client);
  };

  Resource1.prototype.get = function (body, options) {
    options = extend({}, options);
    options.headers = extend({Accept:'application/vnd.unbounce.api.v0.4+json'}, options.headers);

    return handleRequest(this._client, this._uri, 'GET', body, options);
  };
  function Resource2 (uri, client) {
    this._uri    = uri;
    this._client = client;

    this.subAccounts = new Resource3(uri + '/sub_accounts', client);
    this.pages = new Resource4(uri + '/pages', client);
  };


  Resource2.prototype.get = function (body, options) {
    options = extend({}, options);
    options.headers = extend({Accept:'application/vnd.unbounce.api.v0.4+json'}, options.headers);

    return handleRequest(this._client, this._uri, 'GET', body, options);
  };
  function Resource3 (uri, client) {
    this._uri    = uri;
    this._client = client;

  };


  Resource3.prototype.get = function (body, options) {
    options = extend({}, options);
    options.headers = extend({Accept:'application/vnd.unbounce.api.v0.4+json'}, options.headers);

    return handleRequest(this._client, this._uri, 'GET', body, options);
  };
  function Resource4 (uri, client) {
    this._uri    = uri;
    this._client = client;

  };


  Resource4.prototype.get = function (body, options) {
    options = extend({}, options);
    options.headers = extend({Accept:'application/vnd.unbounce.api.v0.4+json'}, options.headers);

    return handleRequest(this._client, this._uri, 'GET', body, options);
  };
  function Resource5 (uri, client) {
    this._uri    = uri;
    this._client = client;

  };

  Resource5.prototype.subAccountId = function (/* ...args */) {
    var uri = this._uri + template('/{0}', arguments, [undefined]);

    return new Resource6(uri, this._client);
  };

  function Resource6 (uri, client) {
    this._uri    = uri;
    this._client = client;

    this.domains = new Resource7(uri + '/domains', client);
    this.leads = new Resource8(uri + '/leads', client);
    this.pageGroups = new Resource9(uri + '/page_groups', client);
    this.pages = new Resource10(uri + '/pages', client);
  };


  Resource6.prototype.get = function (body, options) {
    options = extend({}, options);
    options.headers = extend({Accept:'application/vnd.unbounce.api.v0.4+json'}, options.headers);

    return handleRequest(this._client, this._uri, 'GET', body, options);
  };
  function Resource7 (uri, client) {
    this._uri    = uri;
    this._client = client;

  };


  Resource7.prototype.get = function (body, options) {
    options = extend({}, options);
    options.headers = extend({Accept:'application/vnd.unbounce.api.v0.4+json'}, options.headers);

    return handleRequest(this._client, this._uri, 'GET', body, options);
  };
  function Resource8 (uri, client) {
    this._uri    = uri;
    this._client = client;

  };


  Resource8.prototype.get = function (body, options) {
    options = extend({}, options);
    options.headers = extend({Accept:'application/vnd.unbounce.api.v0.4+json'}, options.headers);

    return handleRequest(this._client, this._uri, 'GET', body, options);
  };
  function Resource9 (uri, client) {
    this._uri    = uri;
    this._client = client;

  };


  Resource9.prototype.get = function (body, options) {
    options = extend({}, options);
    options.headers = extend({Accept:'application/vnd.unbounce.api.v0.4+json'}, options.headers);

    return handleRequest(this._client, this._uri, 'GET', body, options);
  };
  function Resource10 (uri, client) {
    this._uri    = uri;
    this._client = client;

  };


  Resource10.prototype.get = function (body, options) {
    options = extend({}, options);
    options.headers = extend({Accept:'application/vnd.unbounce.api.v0.4+json'}, options.headers);

    return handleRequest(this._client, this._uri, 'GET', body, options);
  };
  function Resource11 (uri, client) {
    this._uri    = uri;
    this._client = client;

  };

  Resource11.prototype.domainId = function (/* ...args */) {
    var uri = this._uri + template('/{0}', arguments, [undefined]);

    return new Resource12(uri, this._client);
  };

  function Resource12 (uri, client) {
    this._uri    = uri;
    this._client = client;

    this.pages = new Resource13(uri + '/pages', client);
  };


  Resource12.prototype.get = function (body, options) {
    options = extend({}, options);
    options.headers = extend({Accept:'application/vnd.unbounce.api.v0.4+json'}, options.headers);

    return handleRequest(this._client, this._uri, 'GET', body, options);
  };
  function Resource13 (uri, client) {
    this._uri    = uri;
    this._client = client;

  };


  Resource13.prototype.get = function (body, options) {
    options = extend({}, options);
    options.headers = extend({Accept:'application/vnd.unbounce.api.v0.4+json'}, options.headers);

    return handleRequest(this._client, this._uri, 'GET', body, options);
  };
  function Resource14 (uri, client) {
    this._uri    = uri;
    this._client = client;

  };

  Resource14.prototype.pageId = function (/* ...args */) {
    var uri = this._uri + template('/{0}', arguments, [undefined]);

    return new Resource15(uri, this._client);
  };

  Resource14.prototype.get = function (body, options) {
    options = extend({}, options);
    options.headers = extend({Accept:'application/vnd.unbounce.api.v0.4+json'}, options.headers);

    return handleRequest(this._client, this._uri, 'GET', body, options);
  };
  function Resource15 (uri, client) {
    this._uri    = uri;
    this._client = client;

    this.formFields = new Resource16(uri + '/form_fields', client);
    this.leads = new Resource17(uri + '/leads', client);
  };


  Resource15.prototype.get = function (body, options) {
    options = extend({}, options);
    options.headers = extend({Accept:'application/vnd.unbounce.api.v0.4+json'}, options.headers);

    return handleRequest(this._client, this._uri, 'GET', body, options);
  };
  function Resource16 (uri, client) {
    this._uri    = uri;
    this._client = client;

  };


  Resource16.prototype.get = function (body, options) {
    options = extend({}, options);
    options.headers = extend({Accept:'application/vnd.unbounce.api.v0.4+json'}, options.headers);

    return handleRequest(this._client, this._uri, 'GET', body, options);
  };
  function Resource17 (uri, client) {
    this._uri    = uri;
    this._client = client;

  };


  Resource17.prototype.get = function (body, options) {
    options = extend({}, options);
    options.headers = extend({Accept:'application/vnd.unbounce.api.v0.4+json'}, options.headers);

    return handleRequest(this._client, this._uri, 'GET', body, options);
  };
  Resource17.prototype.post = function (body, options) {
    return handleRequest(this._client, this._uri, 'POST', body, options);
  };
  function Resource18 (uri, client) {
    this._uri    = uri;
    this._client = client;

  };

  Resource18.prototype.pageGroupId = function (/* ...args */) {
    var uri = this._uri + template('/{0}', arguments, [undefined]);

    return new Resource19(uri, this._client);
  };

  function Resource19 (uri, client) {
    this._uri    = uri;
    this._client = client;

    this.pages = new Resource20(uri + '/pages', client);
  };


  function Resource20 (uri, client) {
    this._uri    = uri;
    this._client = client;

  };


  Resource20.prototype.get = function (body, options) {
    options = extend({}, options);
    options.headers = extend({Accept:'application/vnd.unbounce.api.v0.4+json'}, options.headers);

    return handleRequest(this._client, this._uri, 'GET', body, options);
  };
  function Resource21 (uri, client) {
    this._uri    = uri;
    this._client = client;

  };

  Resource21.prototype.leadId = function (/* ...args */) {
    var uri = this._uri + template('/{0}', arguments, [undefined]);

    return new Resource22(uri, this._client);
  };

  function Resource22 (uri, client) {
    this._uri    = uri;
    this._client = client;

  };


  Resource22.prototype.get = function (body, options) {
    options = extend({}, options);
    options.headers = extend({Accept:'application/vnd.unbounce.api.v0.4+json'}, options.headers);

    return handleRequest(this._client, this._uri, 'GET', body, options);
  };
  function Resource23 (uri, client) {
    this._uri    = uri;
    this._client = client;

    this.self = new Resource24(uri + '/self', client);
  };

  Resource23.prototype.userId = function (/* ...args */) {
    var uri = this._uri + template('/{0}', arguments, [undefined]);

    return new Resource25(uri, this._client);
  };

  function Resource24 (uri, client) {
    this._uri    = uri;
    this._client = client;

  };


  Resource24.prototype.get = function (body, options) {
    options = extend({}, options);
    options.headers = extend({Accept:'application/vnd.unbounce.api.v0.4+json'}, options.headers);

    return handleRequest(this._client, this._uri, 'GET', body, options);
  };
  function Resource25 (uri, client) {
    this._uri    = uri;
    this._client = client;

  };


  Resource25.prototype.get = function (body, options) {
    options = extend({}, options);
    options.headers = extend({Accept:'application/vnd.unbounce.api.v0.4+json'}, options.headers);

    return handleRequest(this._client, this._uri, 'GET', body, options);
  };

  function CustomResource (uri, client) {
    this._uri    = uri;
    this._client = client;
  }

  CustomResource.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options);
  };
  CustomResource.prototype.post = function (body, options) {
    return handleRequest(this._client, this._uri, 'POST', body, options);
  };
  CustomResource.prototype.put = function (body, options) {
    return handleRequest(this._client, this._uri, 'PUT', body, options);
  };
  CustomResource.prototype.head = function (body, options) {
    return handleRequest(this._client, this._uri, 'HEAD', body, options);
  };
  CustomResource.prototype.delete = function (body, options) {
    return handleRequest(this._client, this._uri, 'DELETE', body, options);
  };
  CustomResource.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options);
  };
  CustomResource.prototype.trace = function (body, options) {
    return handleRequest(this._client, this._uri, 'TRACE', body, options);
  };
  CustomResource.prototype.copy = function (body, options) {
    return handleRequest(this._client, this._uri, 'COPY', body, options);
  };
  CustomResource.prototype.lock = function (body, options) {
    return handleRequest(this._client, this._uri, 'LOCK', body, options);
  };
  CustomResource.prototype.mkcol = function (body, options) {
    return handleRequest(this._client, this._uri, 'MKCOL', body, options);
  };
  CustomResource.prototype.move = function (body, options) {
    return handleRequest(this._client, this._uri, 'MOVE', body, options);
  };
  CustomResource.prototype.purge = function (body, options) {
    return handleRequest(this._client, this._uri, 'PURGE', body, options);
  };
  CustomResource.prototype.propfind = function (body, options) {
    return handleRequest(this._client, this._uri, 'PROPFIND', body, options);
  };
  CustomResource.prototype.proppatch = function (body, options) {
    return handleRequest(this._client, this._uri, 'PROPPATCH', body, options);
  };
  CustomResource.prototype.unlock = function (body, options) {
    return handleRequest(this._client, this._uri, 'UNLOCK', body, options);
  };
  CustomResource.prototype.report = function (body, options) {
    return handleRequest(this._client, this._uri, 'REPORT', body, options);
  };
  CustomResource.prototype.mkactivity = function (body, options) {
    return handleRequest(this._client, this._uri, 'MKACTIVITY', body, options);
  };
  CustomResource.prototype.checkout = function (body, options) {
    return handleRequest(this._client, this._uri, 'CHECKOUT', body, options);
  };
  CustomResource.prototype.merge = function (body, options) {
    return handleRequest(this._client, this._uri, 'MERGE', body, options);
  };
  CustomResource.prototype.mSearch = function (body, options) {
    return handleRequest(this._client, this._uri, 'M-SEARCH', body, options);
  };
  CustomResource.prototype.notify = function (body, options) {
    return handleRequest(this._client, this._uri, 'NOTIFY', body, options);
  };
  CustomResource.prototype.subscribe = function (body, options) {
    return handleRequest(this._client, this._uri, 'SUBSCRIBE', body, options);
  };
  CustomResource.prototype.unsubscribe = function (body, options) {
    return handleRequest(this._client, this._uri, 'UNSUBSCRIBE', body, options);
  };
  CustomResource.prototype.patch = function (body, options) {
    return handleRequest(this._client, this._uri, 'PATCH', body, options);
  };
  CustomResource.prototype.search = function (body, options) {
    return handleRequest(this._client, this._uri, 'SEARCH', body, options);
  };
  CustomResource.prototype.connect = function (body, options) {
    return handleRequest(this._client, this._uri, 'CONNECT', body, options);
  };

  function Client (options) {
    this.options = extend({
      baseUri: 'https://api.unbounce.com',
      baseUriParameters: {}
    }, options);

    this.resources = new Resource0('', this);
  };

  Client.prototype.resource = function (route, parameters) {
    var path = '/' + template(route, parameters).replace(/^\//, '');

    return new CustomResource(path, this);
  };

  Client.prototype.request = popsicle;
  Client.prototype.form = Client.form = popsicle.form;
  Client.prototype.version  = 'v0.4';

  /**
   * @param {Object} options
   */
  function OAuth2 (options) {
    ClientOAuth2.call(this, extend({authorizationUri:'https://api.unbounce.com/oauth/authorize',accessTokenUri:'https://api.unbounce.com/oauth/token',authorizationGrants:['code']}, options));
  }

  OAuth2.prototype = Object.create(ClientOAuth2.prototype);
  OAuth2.prototype.constructor = OAuth2;
  OAuth2.prototype.request = popsicle;

  Client.OAuth2 = OAuth2;

  return Client;
});
