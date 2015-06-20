(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define(factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _libGeoJsonAdapter = __webpack_require__(1);

	var _libGeoJsonAdapter2 = _interopRequireDefault(_libGeoJsonAdapter);

	var _libGeoJsonGenerator = __webpack_require__(5);

	var _libGeoJsonGenerator2 = _interopRequireDefault(_libGeoJsonGenerator);

	var _libGeoJsonUtils = __webpack_require__(2);

	var _libGeoJsonUtils2 = _interopRequireDefault(_libGeoJsonUtils);

	exports['default'] = {
	    GeoJsonAdapter: _libGeoJsonAdapter2['default'],
	    GeoJsonGenerator: _libGeoJsonGenerator2['default'],
	    GeoJsonUtils: _libGeoJsonUtils2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _GeoJsonUtils = __webpack_require__(2);

	var _GeoJsonUtils2 = _interopRequireDefault(_GeoJsonUtils);

	/**
	 * This adapters treats all data set as GeoJson objects and provides some
	 * utility methods.
	 */

	var GeoJsonAdapter = (function () {

	    /**
	     * The main constructor initializing the internal data field.
	     */

	    function GeoJsonAdapter(options, item) {
	        _classCallCheck(this, GeoJsonAdapter);

	        options = options || {};
	        this.item = item || options.item;
	    }

	    _createClass(GeoJsonAdapter, [{
	        key: 'item',

	        /** getter/setter methods for the "item" property */
	        get: function () {
	            return this._item || {};
	        },
	        set: function (item) {
	            this._item = item || {};
	        }
	    }, {
	        key: 'data',

	        /** Returns the data object associated with the underlying data object */
	        get: function () {
	            return this.item.data;
	        },
	        set: function (data) {
	            this.setData(data);
	        }
	    }, {
	        key: 'setData',
	        value: function setData(data) {
	            var item = this.item;
	            if (item.setData) {
	                return item.setData(data);
	            } else {
	                return item.data = data;
	            }
	        }
	    }, {
	        key: 'boundingBox',

	        /** Returns a bounding box around the underlying item. */
	        get: function () {
	            return _GeoJsonUtils2['default'].getBoundingBox(this.item);
	        }
	    }]);

	    return GeoJsonAdapter;
	})();

	exports['default'] = GeoJsonAdapter;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _turfExtent = __webpack_require__(3);

	var _turfExtent2 = _interopRequireDefault(_turfExtent);

	/**
	 * This adapters treats all Data instances as GeoJson objects and provides some
	 * utility methods.
	 */

	var GeoJsonUtils = (function () {
	    function GeoJsonUtils() {
	        _classCallCheck(this, GeoJsonUtils);
	    }

	    _createClass(GeoJsonUtils, null, [{
	        key: 'getBoundingBox',

	        /**
	         * Returns a bounding box around the underlying data object.
	         */
	        value: function getBoundingBox(item) {
	            var bbox;
	            item.visit({
	                before: function before(r) {
	                    var data = r.data;
	                    if (!data.geometry) return;
	                    var box = (0, _turfExtent2['default'])(data.geometry);
	                    if (bbox) {
	                        box = [Math.min(bbox[0], box[0]), Math.min(bbox[1], box[1]), Math.max(bbox[2], box[2]), Math.max(bbox[3], box[3])];
	                    }
	                    bbox = box;
	                }
	            });
	            return bbox;
	        }
	    }, {
	        key: 'isEmptyBox',

	        /**
	         * Returns <code>true</code> if the specified bounding box is empty.
	         * 
	         * @see http://gis.stackexchange.com/questions/8650/how-to-measure-the-accuracy-of-latitude-and-longitude/8674#8674
	         */
	        value: function isEmptyBox(box, precision) {
	            if (!box) return true;
	            var first = this.round(box[0], precision);
	            var second = this.round(box[1], precision);
	            var third = this.round(box[2], precision);
	            var fourth = this.round(box[3], precision);
	            return first === third && second === fourth;
	        }
	    }, {
	        key: 'round',

	        /**
	         * @see http://gis.stackexchange.com/questions/8650/how-to-measure-the-accuracy-of-latitude-and-longitude/8674#8674
	         */
	        value: function round(val, precision) {
	            precision = precision || 6;
	            return (+val).toFixed(precision);
	        }
	    }]);

	    return GeoJsonUtils;
	})();

	exports['default'] = GeoJsonUtils;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var each = __webpack_require__(4).coordEach;

	/**
	 * Takes any {@link GeoJSON} object, calculates the extent of all input features, and returns a bounding box.
	 *
	 * @module turf/extent
	 * @category measurement
	 * @param {GeoJSON} input any valid GeoJSON Object
	 * @return {Array<number>} the bounding box of `input` given
	 * as an array in WSEN order (west, south, east, north)
	 * @example
	 * var input = {
	 *   "type": "FeatureCollection",
	 *   "features": [
	 *     {
	 *       "type": "Feature",
	 *       "properties": {},
	 *       "geometry": {
	 *         "type": "Point",
	 *         "coordinates": [114.175329, 22.2524]
	 *       }
	 *     }, {
	 *       "type": "Feature",
	 *       "properties": {},
	 *       "geometry": {
	 *         "type": "Point",
	 *         "coordinates": [114.170007, 22.267969]
	 *       }
	 *     }, {
	 *       "type": "Feature",
	 *       "properties": {},
	 *       "geometry": {
	 *         "type": "Point",
	 *         "coordinates": [114.200649, 22.274641]
	 *       }
	 *     }, {
	 *       "type": "Feature",
	 *       "properties": {},
	 *       "geometry": {
	 *         "type": "Point",
	 *         "coordinates": [114.186744, 22.265745]
	 *       }
	 *     }
	 *   ]
	 * };
	 *
	 * var bbox = turf.extent(input);
	 *
	 * var bboxPolygon = turf.bboxPolygon(bbox);
	 *
	 * var resultFeatures = input.features.concat(bboxPolygon);
	 * var result = {
	 *   "type": "FeatureCollection",
	 *   "features": resultFeatures
	 * };
	 *
	 * //=result
	 */
	module.exports = function (layer) {
	  var extent = [Infinity, Infinity, -Infinity, -Infinity];
	  each(layer, function (coord) {
	    if (extent[0] > coord[0]) extent[0] = coord[0];
	    if (extent[1] > coord[1]) extent[1] = coord[1];
	    if (extent[2] < coord[0]) extent[2] = coord[0];
	    if (extent[3] < coord[1]) extent[3] = coord[1];
	  });
	  return extent;
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Lazily iterate over coordinates in any GeoJSON object, similar to
	 * Array.forEach.
	 *
	 * @param {Object} layer any GeoJSON object
	 * @param {Function} callback a method that takes (value)
	 * @param {boolean=} excludeWrapCoord whether or not to include
	 * the final coordinate of LinearRings that wraps the ring in its iteration.
	 * @example
	 * var point = { type: 'Point', coordinates: [0, 0] };
	 * coordEach(point, function(coords) {
	 *   // coords is equal to [0, 0]
	 * });
	 */
	'use strict';

	function coordEach(layer, callback, excludeWrapCoord) {
	  var i,
	      j,
	      k,
	      g,
	      geometry,
	      stopG,
	      coords,
	      geometryMaybeCollection,
	      wrapShrink = 0,
	      isGeometryCollection,
	      isFeatureCollection = layer.type === 'FeatureCollection',
	      isFeature = layer.type === 'Feature',
	      stop = isFeatureCollection ? layer.features.length : 1;

	  // This logic may look a little weird. The reason why it is that way
	  // is because it's trying to be fast. GeoJSON supports multiple kinds
	  // of objects at its root: FeatureCollection, Features, Geometries.
	  // This function has the responsibility of handling all of them, and that
	  // means that some of the `for` loops you see below actually just don't apply
	  // to certain inputs. For instance, if you give this just a
	  // Point geometry, then both loops are short-circuited and all we do
	  // is gradually rename the input until it's called 'geometry'.
	  //
	  // This also aims to allocate as few resources as possible: just a
	  // few numbers and booleans, rather than any temporary arrays as would
	  // be required with the normalization approach.
	  for (i = 0; i < stop; i++) {

	    geometryMaybeCollection = isFeatureCollection ? layer.features[i].geometry : isFeature ? layer.geometry : layer;
	    isGeometryCollection = geometryMaybeCollection.type === 'GeometryCollection';
	    stopG = isGeometryCollection ? geometryMaybeCollection.geometries.length : 1;

	    for (g = 0; g < stopG; g++) {

	      geometry = isGeometryCollection ? geometryMaybeCollection.geometries[g] : geometryMaybeCollection;
	      coords = geometry.coordinates;

	      wrapShrink = excludeWrapCoord && (geometry.type === 'Polygon' || geometry.type === 'MultiPolygon') ? 1 : 0;

	      if (geometry.type === 'Point') {
	        callback(coords);
	      } else if (geometry.type === 'LineString' || geometry.type === 'MultiPoint') {
	        for (j = 0; j < coords.length; j++) callback(coords[j]);
	      } else if (geometry.type === 'Polygon' || geometry.type === 'MultiLineString') {
	        for (j = 0; j < coords.length; j++) for (k = 0; k < coords[j].length - wrapShrink; k++) callback(coords[j][k]);
	      } else if (geometry.type === 'MultiPolygon') {
	        for (j = 0; j < coords.length; j++) for (k = 0; k < coords[j].length; k++) for (l = 0; l < coords[j][k].length - wrapShrink; l++) callback(coords[j][k][l]);
	      } else {
	        throw new Error('Unknown Geometry Type');
	      }
	    }
	  }
	}
	module.exports.coordEach = coordEach;

	/**
	 * Lazily reduce coordinates in any GeoJSON object into a single value,
	 * similar to how Array.reduce works. However, in this case we lazily run
	 * the reduction, so an array of all coordinates is unnecessary.
	 *
	 * @param {Object} layer any GeoJSON object
	 * @param {Function} callback a method that takes (memo, value) and returns
	 * a new memo
	 * @param {boolean=} excludeWrapCoord whether or not to include
	 * the final coordinate of LinearRings that wraps the ring in its iteration.
	 * @param {*} memo the starting value of memo: can be any type.
	 */
	function coordReduce(layer, callback, memo, excludeWrapCoord) {
	  coordEach(layer, function (coord) {
	    memo = callback(memo, coord);
	  }, excludeWrapCoord);
	  return memo;
	}
	module.exports.coordReduce = coordReduce;

	/**
	 * Lazily iterate over property objects in any GeoJSON object, similar to
	 * Array.forEach.
	 *
	 * @param {Object} layer any GeoJSON object
	 * @param {Function} callback a method that takes (value)
	 * @example
	 * var point = { type: 'Feature', geometry: null, properties: { foo: 1 } };
	 * propEach(point, function(props) {
	 *   // props is equal to { foo: 1}
	 * });
	 */
	function propEach(layer, callback) {
	  var i;
	  switch (layer.type) {
	    case 'FeatureCollection':
	      features = layer.features;
	      for (i = 0; i < layer.features.length; i++) {
	        callback(layer.features[i].properties);
	      }
	      break;
	    case 'Feature':
	      callback(layer.properties);
	      break;
	  }
	}
	module.exports.propEach = propEach;

	/**
	 * Lazily reduce properties in any GeoJSON object into a single value,
	 * similar to how Array.reduce works. However, in this case we lazily run
	 * the reduction, so an array of all properties is unnecessary.
	 *
	 * @param {Object} layer any GeoJSON object
	 * @param {Function} callback a method that takes (memo, coord) and returns
	 * a new memo
	 * @param {*} memo the starting value of memo: can be any type.
	 */
	function propReduce(layer, callback, memo) {
	  propEach(layer, function (prop) {
	    memo = callback(memo, prop);
	  });
	  return memo;
	}
	module.exports.propReduce = propReduce;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var GeoJsonGenerator = (function () {
	    function GeoJsonGenerator(options) {
	        _classCallCheck(this, GeoJsonGenerator);

	        options = options || {};
	        this.bbox = options.bbox || [-180, 90, 180, -90];
	        this.precision = options.precision || 6;
	    }

	    _createClass(GeoJsonGenerator, [{
	        key: 'round',
	        value: function round(val, precision) {
	            precision = precision || this.precision;
	            return +(+val).toFixed(precision);
	        }
	    }, {
	        key: 'random',
	        value: function random(from, to) {
	            return this.round(from + Math.random() * (to - from));
	        }
	    }, {
	        key: 'randomLng',
	        value: function randomLng() {
	            return this.random(this.bbox[0], this.bbox[2]);
	        }
	    }, {
	        key: 'randomLat',
	        value: function randomLat() {
	            return this.random(this.bbox[1], this.bbox[3]);
	        }
	    }, {
	        key: 'randomLngLat',
	        value: function randomLngLat() {
	            return [this.randomLng(), this.randomLat()];
	        }
	    }, {
	        key: 'randomPoint',
	        value: function randomPoint() {
	            return {
	                type: 'Feature',
	                geometry: {
	                    type: 'Point',
	                    coordinates: this.randomLngLat()
	                }
	            };
	        }
	    }, {
	        key: 'randomPoints',
	        value: function randomPoints(number) {
	            var result = [];
	            for (var i = 0; i < number; i++) {
	                result.push(this.randomPoint());
	            }
	            return result;
	        }
	    }]);

	    return GeoJsonGenerator;
	})();

	exports['default'] = GeoJsonGenerator;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;