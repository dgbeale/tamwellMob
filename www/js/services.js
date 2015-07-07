/**
 * Created by DBEALE on 23/06/2015.
 */
angular.module('starter.services', ['ngResource'])
      .factory('Category', function ($resource) {
        return $resource('http://tamwell.ddns.net:9001/tamwellwebservices/v2/apparel-uk/catalogs/apparelProductCatalog/Online/categories/:categoryId');
    });
