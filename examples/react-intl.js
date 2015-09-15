webpackJsonp([7],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(305);


/***/ },

/***/ 180:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(9);


/***/ },

/***/ 305:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	__webpack_require__(306);

/***/ },

/***/ 306:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	window.global = window;
	
	var React = __webpack_require__(180);
	var App = __webpack_require__(307);
	
	var locales = [{
	  locales: ['en-US'],
	  messages: {
	    user: {
	      info: 'your name: {name}，login count: {count, number}，current login time: {time, date,full}'
	    }
	  }
	}, {
	  locales: ['zh-CN'],
	  messages: {
	    user: {
	      info: '你的名字是 {name}，登陆 {count, number} 次，当前登陆时间 {time, date,full}'
	    }
	  }
	}, {
	  locales: ['ja-JP'],
	  messages: {
	    user: {
	      info: 'xxxxx {name}，xx {count, number}，xxxx {time, date,full}'
	    }
	  }
	}];
	
	var apps = locales.map(function (locale) {
	  return React.createElement(App, _extends({ key: locale.locales.join(',') }, locale));
	});
	
	React.render(React.createElement(
	  'div',
	  null,
	  apps
	), document.body);

/***/ },

/***/ 307:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(180);
	var ReactIntl = __webpack_require__(308);
	var IntlMixin = ReactIntl.IntlMixin;
	var Component = __webpack_require__(341);
	
	var App = React.createClass({
	  displayName: 'App',
	
	  mixins: [IntlMixin],
	  render: function render() {
	    return React.createElement(
	      'p',
	      null,
	      React.createElement(Component, null)
	    );
	  }
	});
	
	module.exports = App;

/***/ },

/***/ 308:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/* jshint node:true */
	'use strict';
	
	// Expose `React` as a global, because the ReactIntlMixin assumes it's global.
	var oldReact = global.React;
	global.React = __webpack_require__(180);
	
	// Require the lib and add all locale data to `ReactIntl`. This module will be
	// ignored when bundling for the browser with Browserify/Webpack.
	var ReactIntl = __webpack_require__(309);
	__webpack_require__(340);
	
	// Export the Mixin as the default export for back-compat with v1.0.0. This will
	// be changed to simply re-exporting `ReactIntl` as the default export in v2.0.
	exports = module.exports = ReactIntl.IntlMixin;
	
	// Define non-enumerable expandos for each named export on the default export --
	// which is the Mixin for back-compat with v1.0.0.
	Object.keys(ReactIntl).forEach(function (namedExport) {
	    Object.defineProperty(exports, namedExport, {
	        enumerable: true,
	        value     : ReactIntl[namedExport]
	    });
	});
	
	// Put back `global.React` to how it was.
	if (oldReact) {
	    global.React = oldReact;
	} else {
	    // IE < 9 will throw when trying to delete something off the global object,
	    // `window`, so this does the next best thing as sets it to `undefined`.
	    try {
	        delete global.React;
	    } catch (e) {
	        global.React = undefined;
	    }
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 309:
/***/ function(module, exports, __webpack_require__) {

	/* jshint esnext: true */
	
	"use strict";
	exports.__addLocaleData = __addLocaleData;
	var intl$messageformat$$ = __webpack_require__(310), intl$relativeformat$$ = __webpack_require__(320), src$en$$ = __webpack_require__(327), src$mixin$$ = __webpack_require__(328), src$components$date$$ = __webpack_require__(333), src$components$time$$ = __webpack_require__(334), src$components$relative$$ = __webpack_require__(335), src$components$number$$ = __webpack_require__(336), src$components$message$$ = __webpack_require__(337), src$components$html$message$$ = __webpack_require__(338);
	function __addLocaleData(data) {
	    intl$messageformat$$["default"].__addLocaleData(data);
	    intl$relativeformat$$["default"].__addLocaleData(data);
	}
	
	__addLocaleData(src$en$$["default"]);
	exports.IntlMixin = src$mixin$$["default"], exports.FormattedDate = src$components$date$$["default"], exports.FormattedTime = src$components$time$$["default"], exports.FormattedRelative = src$components$relative$$["default"], exports.FormattedNumber = src$components$number$$["default"], exports.FormattedMessage = src$components$message$$["default"], exports.FormattedHTMLMessage = src$components$html$message$$["default"];
	
	//# sourceMappingURL=react-intl.js.map

/***/ },

/***/ 310:
/***/ function(module, exports, __webpack_require__) {

	/* jshint node:true */
	
	'use strict';
	
	var IntlMessageFormat = __webpack_require__(311)['default'];
	
	// Add all locale data to `IntlMessageFormat`. This module will be ignored when
	// bundling for the browser with Browserify/Webpack.
	__webpack_require__(319);
	
	// Re-export `IntlMessageFormat` as the CommonJS default exports with all the
	// locale data registered, and with English set as the default locale. Define
	// the `default` prop for use with other compiled ES6 Modules.
	exports = module.exports = IntlMessageFormat;
	exports['default'] = exports;


/***/ },

/***/ 311:
/***/ function(module, exports, __webpack_require__) {

	/* jslint esnext: true */
	
	"use strict";
	var src$core$$ = __webpack_require__(312), src$en$$ = __webpack_require__(318);
	
	src$core$$["default"].__addLocaleData(src$en$$["default"]);
	src$core$$["default"].defaultLocale = 'en';
	
	exports["default"] = src$core$$["default"];
	
	//# sourceMappingURL=main.js.map

/***/ },

/***/ 312:
/***/ function(module, exports, __webpack_require__) {

	/*
	Copyright (c) 2014, Yahoo! Inc. All rights reserved.
	Copyrights licensed under the New BSD License.
	See the accompanying LICENSE file for terms.
	*/
	
	/* jslint esnext: true */
	
	"use strict";
	var src$utils$$ = __webpack_require__(313), src$es5$$ = __webpack_require__(314), src$compiler$$ = __webpack_require__(315), intl$messageformat$parser$$ = __webpack_require__(316);
	exports["default"] = MessageFormat;
	
	// -- MessageFormat --------------------------------------------------------
	
	function MessageFormat(message, locales, formats) {
	    // Parse string messages into an AST.
	    var ast = typeof message === 'string' ?
	            MessageFormat.__parse(message) : message;
	
	    if (!(ast && ast.type === 'messageFormatPattern')) {
	        throw new TypeError('A message must be provided as a String or AST.');
	    }
	
	    // Creates a new object with the specified `formats` merged with the default
	    // formats.
	    formats = this._mergeFormats(MessageFormat.formats, formats);
	
	    // Defined first because it's used to build the format pattern.
	    src$es5$$.defineProperty(this, '_locale',  {value: this._resolveLocale(locales)});
	
	    // Compile the `ast` to a pattern that is highly optimized for repeated
	    // `format()` invocations. **Note:** This passes the `locales` set provided
	    // to the constructor instead of just the resolved locale.
	    var pluralFn = this._findPluralRuleFunction(this._locale);
	    var pattern  = this._compilePattern(ast, locales, formats, pluralFn);
	
	    // "Bind" `format()` method to `this` so it can be passed by reference like
	    // the other `Intl` APIs.
	    var messageFormat = this;
	    this.format = function (values) {
	        return messageFormat._format(pattern, values);
	    };
	}
	
	// Default format options used as the prototype of the `formats` provided to the
	// constructor. These are used when constructing the internal Intl.NumberFormat
	// and Intl.DateTimeFormat instances.
	src$es5$$.defineProperty(MessageFormat, 'formats', {
	    enumerable: true,
	
	    value: {
	        number: {
	            'currency': {
	                style: 'currency'
	            },
	
	            'percent': {
	                style: 'percent'
	            }
	        },
	
	        date: {
	            'short': {
	                month: 'numeric',
	                day  : 'numeric',
	                year : '2-digit'
	            },
	
	            'medium': {
	                month: 'short',
	                day  : 'numeric',
	                year : 'numeric'
	            },
	
	            'long': {
	                month: 'long',
	                day  : 'numeric',
	                year : 'numeric'
	            },
	
	            'full': {
	                weekday: 'long',
	                month  : 'long',
	                day    : 'numeric',
	                year   : 'numeric'
	            }
	        },
	
	        time: {
	            'short': {
	                hour  : 'numeric',
	                minute: 'numeric'
	            },
	
	            'medium':  {
	                hour  : 'numeric',
	                minute: 'numeric',
	                second: 'numeric'
	            },
	
	            'long': {
	                hour        : 'numeric',
	                minute      : 'numeric',
	                second      : 'numeric',
	                timeZoneName: 'short'
	            },
	
	            'full': {
	                hour        : 'numeric',
	                minute      : 'numeric',
	                second      : 'numeric',
	                timeZoneName: 'short'
	            }
	        }
	    }
	});
	
	// Define internal private properties for dealing with locale data.
	src$es5$$.defineProperty(MessageFormat, '__localeData__', {value: src$es5$$.objCreate(null)});
	src$es5$$.defineProperty(MessageFormat, '__addLocaleData', {value: function (data) {
	    if (!(data && data.locale)) {
	        throw new Error(
	            'Locale data provided to IntlMessageFormat is missing a ' +
	            '`locale` property'
	        );
	    }
	
	    MessageFormat.__localeData__[data.locale.toLowerCase()] = data;
	}});
	
	// Defines `__parse()` static method as an exposed private.
	src$es5$$.defineProperty(MessageFormat, '__parse', {value: intl$messageformat$parser$$["default"].parse});
	
	// Define public `defaultLocale` property which defaults to English, but can be
	// set by the developer.
	src$es5$$.defineProperty(MessageFormat, 'defaultLocale', {
	    enumerable: true,
	    writable  : true,
	    value     : undefined
	});
	
	MessageFormat.prototype.resolvedOptions = function () {
	    // TODO: Provide anything else?
	    return {
	        locale: this._locale
	    };
	};
	
	MessageFormat.prototype._compilePattern = function (ast, locales, formats, pluralFn) {
	    var compiler = new src$compiler$$["default"](locales, formats, pluralFn);
	    return compiler.compile(ast);
	};
	
	MessageFormat.prototype._findPluralRuleFunction = function (locale) {
	    var localeData = MessageFormat.__localeData__;
	    var data       = localeData[locale.toLowerCase()];
	
	    // The locale data is de-duplicated, so we have to traverse the locale's
	    // hierarchy until we find a `pluralRuleFunction` to return.
	    while (data) {
	        if (data.pluralRuleFunction) {
	            return data.pluralRuleFunction;
	        }
	
	        data = data.parentLocale && localeData[data.parentLocale.toLowerCase()];
	    }
	
	    throw new Error(
	        'Locale data added to IntlMessageFormat is missing a ' +
	        '`pluralRuleFunction` for :' + locale
	    );
	};
	
	MessageFormat.prototype._format = function (pattern, values) {
	    var result = '',
	        i, len, part, id, value;
	
	    for (i = 0, len = pattern.length; i < len; i += 1) {
	        part = pattern[i];
	
	        // Exist early for string parts.
	        if (typeof part === 'string') {
	            result += part;
	            continue;
	        }
	
	        id = part.id;
	
	        // Enforce that all required values are provided by the caller.
	        if (!(values && src$utils$$.hop.call(values, id))) {
	            throw new Error('A value must be provided for: ' + id);
	        }
	
	        value = values[id];
	
	        // Recursively format plural and select parts' option — which can be a
	        // nested pattern structure. The choosing of the option to use is
	        // abstracted-by and delegated-to the part helper object.
	        if (part.options) {
	            result += this._format(part.getOption(value), values);
	        } else {
	            result += part.format(value);
	        }
	    }
	
	    return result;
	};
	
	MessageFormat.prototype._mergeFormats = function (defaults, formats) {
	    var mergedFormats = {},
	        type, mergedType;
	
	    for (type in defaults) {
	        if (!src$utils$$.hop.call(defaults, type)) { continue; }
	
	        mergedFormats[type] = mergedType = src$es5$$.objCreate(defaults[type]);
	
	        if (formats && src$utils$$.hop.call(formats, type)) {
	            src$utils$$.extend(mergedType, formats[type]);
	        }
	    }
	
	    return mergedFormats;
	};
	
	MessageFormat.prototype._resolveLocale = function (locales) {
	    if (typeof locales === 'string') {
	        locales = [locales];
	    }
	
	    // Create a copy of the array so we can push on the default locale.
	    locales = (locales || []).concat(MessageFormat.defaultLocale);
	
	    var localeData = MessageFormat.__localeData__;
	    var i, len, localeParts, data;
	
	    // Using the set of locales + the default locale, we look for the first one
	    // which that has been registered. When data does not exist for a locale, we
	    // traverse its ancestors to find something that's been registered within
	    // its hierarchy of locales. Since we lack the proper `parentLocale` data
	    // here, we must take a naive approach to traversal.
	    for (i = 0, len = locales.length; i < len; i += 1) {
	        localeParts = locales[i].toLowerCase().split('-');
	
	        while (localeParts.length) {
	            data = localeData[localeParts.join('-')];
	            if (data) {
	                // Return the normalized locale string; e.g., we return "en-US",
	                // instead of "en-us".
	                return data.locale;
	            }
	
	            localeParts.pop();
	        }
	    }
	
	    var defaultLocale = locales.pop();
	    throw new Error(
	        'No locale data has been added to IntlMessageFormat for: ' +
	        locales.join(', ') + ', or the default locale: ' + defaultLocale
	    );
	};
	
	//# sourceMappingURL=core.js.map

/***/ },

/***/ 313:
/***/ function(module, exports) {

	/*
	Copyright (c) 2014, Yahoo! Inc. All rights reserved.
	Copyrights licensed under the New BSD License.
	See the accompanying LICENSE file for terms.
	*/
	
	/* jslint esnext: true */
	
	"use strict";
	exports.extend = extend;
	var hop = Object.prototype.hasOwnProperty;
	
	function extend(obj) {
	    var sources = Array.prototype.slice.call(arguments, 1),
	        i, len, source, key;
	
	    for (i = 0, len = sources.length; i < len; i += 1) {
	        source = sources[i];
	        if (!source) { continue; }
	
	        for (key in source) {
	            if (hop.call(source, key)) {
	                obj[key] = source[key];
	            }
	        }
	    }
	
	    return obj;
	}
	exports.hop = hop;
	
	//# sourceMappingURL=utils.js.map

/***/ },

/***/ 314:
/***/ function(module, exports, __webpack_require__) {

	/*
	Copyright (c) 2014, Yahoo! Inc. All rights reserved.
	Copyrights licensed under the New BSD License.
	See the accompanying LICENSE file for terms.
	*/
	
	/* jslint esnext: true */
	
	"use strict";
	var src$utils$$ = __webpack_require__(313);
	
	// Purposely using the same implementation as the Intl.js `Intl` polyfill.
	// Copyright 2013 Andy Earnshaw, MIT License
	
	var realDefineProp = (function () {
	    try { return !!Object.defineProperty({}, 'a', {}); }
	    catch (e) { return false; }
	})();
	
	var es3 = !realDefineProp && !Object.prototype.__defineGetter__;
	
	var defineProperty = realDefineProp ? Object.defineProperty :
	        function (obj, name, desc) {
	
	    if ('get' in desc && obj.__defineGetter__) {
	        obj.__defineGetter__(name, desc.get);
	    } else if (!src$utils$$.hop.call(obj, name) || 'value' in desc) {
	        obj[name] = desc.value;
	    }
	};
	
	var objCreate = Object.create || function (proto, props) {
	    var obj, k;
	
	    function F() {}
	    F.prototype = proto;
	    obj = new F();
	
	    for (k in props) {
	        if (src$utils$$.hop.call(props, k)) {
	            defineProperty(obj, k, props[k]);
	        }
	    }
	
	    return obj;
	};
	exports.defineProperty = defineProperty, exports.objCreate = objCreate;
	
	//# sourceMappingURL=es5.js.map

/***/ },

/***/ 315:
/***/ function(module, exports) {

	/*
	Copyright (c) 2014, Yahoo! Inc. All rights reserved.
	Copyrights licensed under the New BSD License.
	See the accompanying LICENSE file for terms.
	*/
	
	/* jslint esnext: true */
	
	"use strict";
	exports["default"] = Compiler;
	
	function Compiler(locales, formats, pluralFn) {
	    this.locales  = locales;
	    this.formats  = formats;
	    this.pluralFn = pluralFn;
	}
	
	Compiler.prototype.compile = function (ast) {
	    this.pluralStack        = [];
	    this.currentPlural      = null;
	    this.pluralNumberFormat = null;
	
	    return this.compileMessage(ast);
	};
	
	Compiler.prototype.compileMessage = function (ast) {
	    if (!(ast && ast.type === 'messageFormatPattern')) {
	        throw new Error('Message AST is not of type: "messageFormatPattern"');
	    }
	
	    var elements = ast.elements,
	        pattern  = [];
	
	    var i, len, element;
	
	    for (i = 0, len = elements.length; i < len; i += 1) {
	        element = elements[i];
	
	        switch (element.type) {
	            case 'messageTextElement':
	                pattern.push(this.compileMessageText(element));
	                break;
	
	            case 'argumentElement':
	                pattern.push(this.compileArgument(element));
	                break;
	
	            default:
	                throw new Error('Message element does not have a valid type');
	        }
	    }
	
	    return pattern;
	};
	
	Compiler.prototype.compileMessageText = function (element) {
	    // When this `element` is part of plural sub-pattern and its value contains
	    // an unescaped '#', use a `PluralOffsetString` helper to properly output
	    // the number with the correct offset in the string.
	    if (this.currentPlural && /(^|[^\\])#/g.test(element.value)) {
	        // Create a cache a NumberFormat instance that can be reused for any
	        // PluralOffsetString instance in this message.
	        if (!this.pluralNumberFormat) {
	            this.pluralNumberFormat = new Intl.NumberFormat(this.locales);
	        }
	
	        return new PluralOffsetString(
	                this.currentPlural.id,
	                this.currentPlural.format.offset,
	                this.pluralNumberFormat,
	                element.value);
	    }
	
	    // Unescape the escaped '#'s in the message text.
	    return element.value.replace(/\\#/g, '#');
	};
	
	Compiler.prototype.compileArgument = function (element) {
	    var format = element.format;
	
	    if (!format) {
	        return new StringFormat(element.id);
	    }
	
	    var formats  = this.formats,
	        locales  = this.locales,
	        pluralFn = this.pluralFn,
	        options;
	
	    switch (format.type) {
	        case 'numberFormat':
	            options = formats.number[format.style];
	            return {
	                id    : element.id,
	                format: new Intl.NumberFormat(locales, options).format
	            };
	
	        case 'dateFormat':
	            options = formats.date[format.style];
	            return {
	                id    : element.id,
	                format: new Intl.DateTimeFormat(locales, options).format
	            };
	
	        case 'timeFormat':
	            options = formats.time[format.style];
	            return {
	                id    : element.id,
	                format: new Intl.DateTimeFormat(locales, options).format
	            };
	
	        case 'pluralFormat':
	            options = this.compileOptions(element);
	            return new PluralFormat(
	                element.id, format.ordinal, format.offset, options, pluralFn
	            );
	
	        case 'selectFormat':
	            options = this.compileOptions(element);
	            return new SelectFormat(element.id, options);
	
	        default:
	            throw new Error('Message element does not have a valid format type');
	    }
	};
	
	Compiler.prototype.compileOptions = function (element) {
	    var format      = element.format,
	        options     = format.options,
	        optionsHash = {};
	
	    // Save the current plural element, if any, then set it to a new value when
	    // compiling the options sub-patterns. This conforms the spec's algorithm
	    // for handling `"#"` syntax in message text.
	    this.pluralStack.push(this.currentPlural);
	    this.currentPlural = format.type === 'pluralFormat' ? element : null;
	
	    var i, len, option;
	
	    for (i = 0, len = options.length; i < len; i += 1) {
	        option = options[i];
	
	        // Compile the sub-pattern and save it under the options's selector.
	        optionsHash[option.selector] = this.compileMessage(option.value);
	    }
	
	    // Pop the plural stack to put back the original current plural value.
	    this.currentPlural = this.pluralStack.pop();
	
	    return optionsHash;
	};
	
	// -- Compiler Helper Classes --------------------------------------------------
	
	function StringFormat(id) {
	    this.id = id;
	}
	
	StringFormat.prototype.format = function (value) {
	    if (!value) {
	        return '';
	    }
	
	    return typeof value === 'string' ? value : String(value);
	};
	
	function PluralFormat(id, useOrdinal, offset, options, pluralFn) {
	    this.id         = id;
	    this.useOrdinal = useOrdinal;
	    this.offset     = offset;
	    this.options    = options;
	    this.pluralFn   = pluralFn;
	}
	
	PluralFormat.prototype.getOption = function (value) {
	    var options = this.options;
	
	    var option = options['=' + value] ||
	            options[this.pluralFn(value - this.offset, this.useOrdinal)];
	
	    return option || options.other;
	};
	
	function PluralOffsetString(id, offset, numberFormat, string) {
	    this.id           = id;
	    this.offset       = offset;
	    this.numberFormat = numberFormat;
	    this.string       = string;
	}
	
	PluralOffsetString.prototype.format = function (value) {
	    var number = this.numberFormat.format(value - this.offset);
	
	    return this.string
	            .replace(/(^|[^\\])#/g, '$1' + number)
	            .replace(/\\#/g, '#');
	};
	
	function SelectFormat(id, options) {
	    this.id      = id;
	    this.options = options;
	}
	
	SelectFormat.prototype.getOption = function (value) {
	    var options = this.options;
	    return options[value] || options.other;
	};
	
	//# sourceMappingURL=compiler.js.map

/***/ },

/***/ 316:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports = module.exports = __webpack_require__(317)['default'];
	exports['default'] = exports;


/***/ },

/***/ 317:
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = (function() {
	  /*
	   * Generated by PEG.js 0.8.0.
	   *
	   * http://pegjs.majda.cz/
	   */
	
	  function peg$subclass(child, parent) {
	    function ctor() { this.constructor = child; }
	    ctor.prototype = parent.prototype;
	    child.prototype = new ctor();
	  }
	
	  function SyntaxError(message, expected, found, offset, line, column) {
	    this.message  = message;
	    this.expected = expected;
	    this.found    = found;
	    this.offset   = offset;
	    this.line     = line;
	    this.column   = column;
	
	    this.name     = "SyntaxError";
	  }
	
	  peg$subclass(SyntaxError, Error);
	
	  function parse(input) {
	    var options = arguments.length > 1 ? arguments[1] : {},
	
	        peg$FAILED = {},
	
	        peg$startRuleFunctions = { start: peg$parsestart },
	        peg$startRuleFunction  = peg$parsestart,
	
	        peg$c0 = [],
	        peg$c1 = function(elements) {
	                return {
	                    type    : 'messageFormatPattern',
	                    elements: elements
	                };
	            },
	        peg$c2 = peg$FAILED,
	        peg$c3 = function(text) {
	                var string = '',
	                    i, j, outerLen, inner, innerLen;
	
	                for (i = 0, outerLen = text.length; i < outerLen; i += 1) {
	                    inner = text[i];
	
	                    for (j = 0, innerLen = inner.length; j < innerLen; j += 1) {
	                        string += inner[j];
	                    }
	                }
	
	                return string;
	            },
	        peg$c4 = function(messageText) {
	                return {
	                    type : 'messageTextElement',
	                    value: messageText
	                };
	            },
	        peg$c5 = /^[^ \t\n\r,.+={}#]/,
	        peg$c6 = { type: "class", value: "[^ \\t\\n\\r,.+={}#]", description: "[^ \\t\\n\\r,.+={}#]" },
	        peg$c7 = "{",
	        peg$c8 = { type: "literal", value: "{", description: "\"{\"" },
	        peg$c9 = null,
	        peg$c10 = ",",
	        peg$c11 = { type: "literal", value: ",", description: "\",\"" },
	        peg$c12 = "}",
	        peg$c13 = { type: "literal", value: "}", description: "\"}\"" },
	        peg$c14 = function(id, format) {
	                return {
	                    type  : 'argumentElement',
	                    id    : id,
	                    format: format && format[2]
	                };
	            },
	        peg$c15 = "number",
	        peg$c16 = { type: "literal", value: "number", description: "\"number\"" },
	        peg$c17 = "date",
	        peg$c18 = { type: "literal", value: "date", description: "\"date\"" },
	        peg$c19 = "time",
	        peg$c20 = { type: "literal", value: "time", description: "\"time\"" },
	        peg$c21 = function(type, style) {
	                return {
	                    type : type + 'Format',
	                    style: style && style[2]
	                };
	            },
	        peg$c22 = "plural",
	        peg$c23 = { type: "literal", value: "plural", description: "\"plural\"" },
	        peg$c24 = function(pluralStyle) {
	                return {
	                    type   : pluralStyle.type,
	                    ordinal: false,
	                    offset : pluralStyle.offset || 0,
	                    options: pluralStyle.options
	                };
	            },
	        peg$c25 = "selectordinal",
	        peg$c26 = { type: "literal", value: "selectordinal", description: "\"selectordinal\"" },
	        peg$c27 = function(pluralStyle) {
	                return {
	                    type   : pluralStyle.type,
	                    ordinal: true,
	                    offset : pluralStyle.offset || 0,
	                    options: pluralStyle.options
	                }
	            },
	        peg$c28 = "select",
	        peg$c29 = { type: "literal", value: "select", description: "\"select\"" },
	        peg$c30 = function(options) {
	                return {
	                    type   : 'selectFormat',
	                    options: options
	                };
	            },
	        peg$c31 = "=",
	        peg$c32 = { type: "literal", value: "=", description: "\"=\"" },
	        peg$c33 = function(selector, pattern) {
	                return {
	                    type    : 'optionalFormatPattern',
	                    selector: selector,
	                    value   : pattern
	                };
	            },
	        peg$c34 = "offset:",
	        peg$c35 = { type: "literal", value: "offset:", description: "\"offset:\"" },
	        peg$c36 = function(number) {
	                return number;
	            },
	        peg$c37 = function(offset, options) {
	                return {
	                    type   : 'pluralFormat',
	                    offset : offset,
	                    options: options
	                };
	            },
	        peg$c38 = { type: "other", description: "whitespace" },
	        peg$c39 = /^[ \t\n\r]/,
	        peg$c40 = { type: "class", value: "[ \\t\\n\\r]", description: "[ \\t\\n\\r]" },
	        peg$c41 = { type: "other", description: "optionalWhitespace" },
	        peg$c42 = /^[0-9]/,
	        peg$c43 = { type: "class", value: "[0-9]", description: "[0-9]" },
	        peg$c44 = /^[0-9a-f]/i,
	        peg$c45 = { type: "class", value: "[0-9a-f]i", description: "[0-9a-f]i" },
	        peg$c46 = "0",
	        peg$c47 = { type: "literal", value: "0", description: "\"0\"" },
	        peg$c48 = /^[1-9]/,
	        peg$c49 = { type: "class", value: "[1-9]", description: "[1-9]" },
	        peg$c50 = function(digits) {
	            return parseInt(digits, 10);
	        },
	        peg$c51 = /^[^{}\\\0-\x1F \t\n\r]/,
	        peg$c52 = { type: "class", value: "[^{}\\\\\\0-\\x1F \\t\\n\\r]", description: "[^{}\\\\\\0-\\x1F \\t\\n\\r]" },
	        peg$c53 = "\\#",
	        peg$c54 = { type: "literal", value: "\\#", description: "\"\\\\#\"" },
	        peg$c55 = function() { return '\\#'; },
	        peg$c56 = "\\{",
	        peg$c57 = { type: "literal", value: "\\{", description: "\"\\\\{\"" },
	        peg$c58 = function() { return '\u007B'; },
	        peg$c59 = "\\}",
	        peg$c60 = { type: "literal", value: "\\}", description: "\"\\\\}\"" },
	        peg$c61 = function() { return '\u007D'; },
	        peg$c62 = "\\u",
	        peg$c63 = { type: "literal", value: "\\u", description: "\"\\\\u\"" },
	        peg$c64 = function(digits) {
	                return String.fromCharCode(parseInt(digits, 16));
	            },
	        peg$c65 = function(chars) { return chars.join(''); },
	
	        peg$currPos          = 0,
	        peg$reportedPos      = 0,
	        peg$cachedPos        = 0,
	        peg$cachedPosDetails = { line: 1, column: 1, seenCR: false },
	        peg$maxFailPos       = 0,
	        peg$maxFailExpected  = [],
	        peg$silentFails      = 0,
	
	        peg$result;
	
	    if ("startRule" in options) {
	      if (!(options.startRule in peg$startRuleFunctions)) {
	        throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
	      }
	
	      peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
	    }
	
	    function text() {
	      return input.substring(peg$reportedPos, peg$currPos);
	    }
	
	    function offset() {
	      return peg$reportedPos;
	    }
	
	    function line() {
	      return peg$computePosDetails(peg$reportedPos).line;
	    }
	
	    function column() {
	      return peg$computePosDetails(peg$reportedPos).column;
	    }
	
	    function expected(description) {
	      throw peg$buildException(
	        null,
	        [{ type: "other", description: description }],
	        peg$reportedPos
	      );
	    }
	
	    function error(message) {
	      throw peg$buildException(message, null, peg$reportedPos);
	    }
	
	    function peg$computePosDetails(pos) {
	      function advance(details, startPos, endPos) {
	        var p, ch;
	
	        for (p = startPos; p < endPos; p++) {
	          ch = input.charAt(p);
	          if (ch === "\n") {
	            if (!details.seenCR) { details.line++; }
	            details.column = 1;
	            details.seenCR = false;
	          } else if (ch === "\r" || ch === "\u2028" || ch === "\u2029") {
	            details.line++;
	            details.column = 1;
	            details.seenCR = true;
	          } else {
	            details.column++;
	            details.seenCR = false;
	          }
	        }
	      }
	
	      if (peg$cachedPos !== pos) {
	        if (peg$cachedPos > pos) {
	          peg$cachedPos = 0;
	          peg$cachedPosDetails = { line: 1, column: 1, seenCR: false };
	        }
	        advance(peg$cachedPosDetails, peg$cachedPos, pos);
	        peg$cachedPos = pos;
	      }
	
	      return peg$cachedPosDetails;
	    }
	
	    function peg$fail(expected) {
	      if (peg$currPos < peg$maxFailPos) { return; }
	
	      if (peg$currPos > peg$maxFailPos) {
	        peg$maxFailPos = peg$currPos;
	        peg$maxFailExpected = [];
	      }
	
	      peg$maxFailExpected.push(expected);
	    }
	
	    function peg$buildException(message, expected, pos) {
	      function cleanupExpected(expected) {
	        var i = 1;
	
	        expected.sort(function(a, b) {
	          if (a.description < b.description) {
	            return -1;
	          } else if (a.description > b.description) {
	            return 1;
	          } else {
	            return 0;
	          }
	        });
	
	        while (i < expected.length) {
	          if (expected[i - 1] === expected[i]) {
	            expected.splice(i, 1);
	          } else {
	            i++;
	          }
	        }
	      }
	
	      function buildMessage(expected, found) {
	        function stringEscape(s) {
	          function hex(ch) { return ch.charCodeAt(0).toString(16).toUpperCase(); }
	
	          return s
	            .replace(/\\/g,   '\\\\')
	            .replace(/"/g,    '\\"')
	            .replace(/\x08/g, '\\b')
	            .replace(/\t/g,   '\\t')
	            .replace(/\n/g,   '\\n')
	            .replace(/\f/g,   '\\f')
	            .replace(/\r/g,   '\\r')
	            .replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(ch) { return '\\x0' + hex(ch); })
	            .replace(/[\x10-\x1F\x80-\xFF]/g,    function(ch) { return '\\x'  + hex(ch); })
	            .replace(/[\u0180-\u0FFF]/g,         function(ch) { return '\\u0' + hex(ch); })
	            .replace(/[\u1080-\uFFFF]/g,         function(ch) { return '\\u'  + hex(ch); });
	        }
	
	        var expectedDescs = new Array(expected.length),
	            expectedDesc, foundDesc, i;
	
	        for (i = 0; i < expected.length; i++) {
	          expectedDescs[i] = expected[i].description;
	        }
	
	        expectedDesc = expected.length > 1
	          ? expectedDescs.slice(0, -1).join(", ")
	              + " or "
	              + expectedDescs[expected.length - 1]
	          : expectedDescs[0];
	
	        foundDesc = found ? "\"" + stringEscape(found) + "\"" : "end of input";
	
	        return "Expected " + expectedDesc + " but " + foundDesc + " found.";
	      }
	
	      var posDetails = peg$computePosDetails(pos),
	          found      = pos < input.length ? input.charAt(pos) : null;
	
	      if (expected !== null) {
	        cleanupExpected(expected);
	      }
	
	      return new SyntaxError(
	        message !== null ? message : buildMessage(expected, found),
	        expected,
	        found,
	        pos,
	        posDetails.line,
	        posDetails.column
	      );
	    }
	
	    function peg$parsestart() {
	      var s0;
	
	      s0 = peg$parsemessageFormatPattern();
	
	      return s0;
	    }
	
	    function peg$parsemessageFormatPattern() {
	      var s0, s1, s2;
	
	      s0 = peg$currPos;
	      s1 = [];
	      s2 = peg$parsemessageFormatElement();
	      while (s2 !== peg$FAILED) {
	        s1.push(s2);
	        s2 = peg$parsemessageFormatElement();
	      }
	      if (s1 !== peg$FAILED) {
	        peg$reportedPos = s0;
	        s1 = peg$c1(s1);
	      }
	      s0 = s1;
	
	      return s0;
	    }
	
	    function peg$parsemessageFormatElement() {
	      var s0;
	
	      s0 = peg$parsemessageTextElement();
	      if (s0 === peg$FAILED) {
	        s0 = peg$parseargumentElement();
	      }
	
	      return s0;
	    }
	
	    function peg$parsemessageText() {
	      var s0, s1, s2, s3, s4, s5;
	
	      s0 = peg$currPos;
	      s1 = [];
	      s2 = peg$currPos;
	      s3 = peg$parse_();
	      if (s3 !== peg$FAILED) {
	        s4 = peg$parsechars();
	        if (s4 !== peg$FAILED) {
	          s5 = peg$parse_();
	          if (s5 !== peg$FAILED) {
	            s3 = [s3, s4, s5];
	            s2 = s3;
	          } else {
	            peg$currPos = s2;
	            s2 = peg$c2;
	          }
	        } else {
	          peg$currPos = s2;
	          s2 = peg$c2;
	        }
	      } else {
	        peg$currPos = s2;
	        s2 = peg$c2;
	      }
	      if (s2 !== peg$FAILED) {
	        while (s2 !== peg$FAILED) {
	          s1.push(s2);
	          s2 = peg$currPos;
	          s3 = peg$parse_();
	          if (s3 !== peg$FAILED) {
	            s4 = peg$parsechars();
	            if (s4 !== peg$FAILED) {
	              s5 = peg$parse_();
	              if (s5 !== peg$FAILED) {
	                s3 = [s3, s4, s5];
	                s2 = s3;
	              } else {
	                peg$currPos = s2;
	                s2 = peg$c2;
	              }
	            } else {
	              peg$currPos = s2;
	              s2 = peg$c2;
	            }
	          } else {
	            peg$currPos = s2;
	            s2 = peg$c2;
	          }
	        }
	      } else {
	        s1 = peg$c2;
	      }
	      if (s1 !== peg$FAILED) {
	        peg$reportedPos = s0;
	        s1 = peg$c3(s1);
	      }
	      s0 = s1;
	      if (s0 === peg$FAILED) {
	        s0 = peg$currPos;
	        s1 = peg$parsews();
	        if (s1 !== peg$FAILED) {
	          s1 = input.substring(s0, peg$currPos);
	        }
	        s0 = s1;
	      }
	
	      return s0;
	    }
	
	    function peg$parsemessageTextElement() {
	      var s0, s1;
	
	      s0 = peg$currPos;
	      s1 = peg$parsemessageText();
	      if (s1 !== peg$FAILED) {
	        peg$reportedPos = s0;
	        s1 = peg$c4(s1);
	      }
	      s0 = s1;
	
	      return s0;
	    }
	
	    function peg$parseargument() {
	      var s0, s1, s2;
	
	      s0 = peg$parsenumber();
	      if (s0 === peg$FAILED) {
	        s0 = peg$currPos;
	        s1 = [];
	        if (peg$c5.test(input.charAt(peg$currPos))) {
	          s2 = input.charAt(peg$currPos);
	          peg$currPos++;
	        } else {
	          s2 = peg$FAILED;
	          if (peg$silentFails === 0) { peg$fail(peg$c6); }
	        }
	        if (s2 !== peg$FAILED) {
	          while (s2 !== peg$FAILED) {
	            s1.push(s2);
	            if (peg$c5.test(input.charAt(peg$currPos))) {
	              s2 = input.charAt(peg$currPos);
	              peg$currPos++;
	            } else {
	              s2 = peg$FAILED;
	              if (peg$silentFails === 0) { peg$fail(peg$c6); }
	            }
	          }
	        } else {
	          s1 = peg$c2;
	        }
	        if (s1 !== peg$FAILED) {
	          s1 = input.substring(s0, peg$currPos);
	        }
	        s0 = s1;
	      }
	
	      return s0;
	    }
	
	    function peg$parseargumentElement() {
	      var s0, s1, s2, s3, s4, s5, s6, s7, s8;
	
	      s0 = peg$currPos;
	      if (input.charCodeAt(peg$currPos) === 123) {
	        s1 = peg$c7;
	        peg$currPos++;
	      } else {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c8); }
	      }
	      if (s1 !== peg$FAILED) {
	        s2 = peg$parse_();
	        if (s2 !== peg$FAILED) {
	          s3 = peg$parseargument();
	          if (s3 !== peg$FAILED) {
	            s4 = peg$parse_();
	            if (s4 !== peg$FAILED) {
	              s5 = peg$currPos;
	              if (input.charCodeAt(peg$currPos) === 44) {
	                s6 = peg$c10;
	                peg$currPos++;
	              } else {
	                s6 = peg$FAILED;
	                if (peg$silentFails === 0) { peg$fail(peg$c11); }
	              }
	              if (s6 !== peg$FAILED) {
	                s7 = peg$parse_();
	                if (s7 !== peg$FAILED) {
	                  s8 = peg$parseelementFormat();
	                  if (s8 !== peg$FAILED) {
	                    s6 = [s6, s7, s8];
	                    s5 = s6;
	                  } else {
	                    peg$currPos = s5;
	                    s5 = peg$c2;
	                  }
	                } else {
	                  peg$currPos = s5;
	                  s5 = peg$c2;
	                }
	              } else {
	                peg$currPos = s5;
	                s5 = peg$c2;
	              }
	              if (s5 === peg$FAILED) {
	                s5 = peg$c9;
	              }
	              if (s5 !== peg$FAILED) {
	                s6 = peg$parse_();
	                if (s6 !== peg$FAILED) {
	                  if (input.charCodeAt(peg$currPos) === 125) {
	                    s7 = peg$c12;
	                    peg$currPos++;
	                  } else {
	                    s7 = peg$FAILED;
	                    if (peg$silentFails === 0) { peg$fail(peg$c13); }
	                  }
	                  if (s7 !== peg$FAILED) {
	                    peg$reportedPos = s0;
	                    s1 = peg$c14(s3, s5);
	                    s0 = s1;
	                  } else {
	                    peg$currPos = s0;
	                    s0 = peg$c2;
	                  }
	                } else {
	                  peg$currPos = s0;
	                  s0 = peg$c2;
	                }
	              } else {
	                peg$currPos = s0;
	                s0 = peg$c2;
	              }
	            } else {
	              peg$currPos = s0;
	              s0 = peg$c2;
	            }
	          } else {
	            peg$currPos = s0;
	            s0 = peg$c2;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$c2;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$c2;
	      }
	
	      return s0;
	    }
	
	    function peg$parseelementFormat() {
	      var s0;
	
	      s0 = peg$parsesimpleFormat();
	      if (s0 === peg$FAILED) {
	        s0 = peg$parsepluralFormat();
	        if (s0 === peg$FAILED) {
	          s0 = peg$parseselectOrdinalFormat();
	          if (s0 === peg$FAILED) {
	            s0 = peg$parseselectFormat();
	          }
	        }
	      }
	
	      return s0;
	    }
	
	    function peg$parsesimpleFormat() {
	      var s0, s1, s2, s3, s4, s5, s6;
	
	      s0 = peg$currPos;
	      if (input.substr(peg$currPos, 6) === peg$c15) {
	        s1 = peg$c15;
	        peg$currPos += 6;
	      } else {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c16); }
	      }
	      if (s1 === peg$FAILED) {
	        if (input.substr(peg$currPos, 4) === peg$c17) {
	          s1 = peg$c17;
	          peg$currPos += 4;
	        } else {
	          s1 = peg$FAILED;
	          if (peg$silentFails === 0) { peg$fail(peg$c18); }
	        }
	        if (s1 === peg$FAILED) {
	          if (input.substr(peg$currPos, 4) === peg$c19) {
	            s1 = peg$c19;
	            peg$currPos += 4;
	          } else {
	            s1 = peg$FAILED;
	            if (peg$silentFails === 0) { peg$fail(peg$c20); }
	          }
	        }
	      }
	      if (s1 !== peg$FAILED) {
	        s2 = peg$parse_();
	        if (s2 !== peg$FAILED) {
	          s3 = peg$currPos;
	          if (input.charCodeAt(peg$currPos) === 44) {
	            s4 = peg$c10;
	            peg$currPos++;
	          } else {
	            s4 = peg$FAILED;
	            if (peg$silentFails === 0) { peg$fail(peg$c11); }
	          }
	          if (s4 !== peg$FAILED) {
	            s5 = peg$parse_();
	            if (s5 !== peg$FAILED) {
	              s6 = peg$parsechars();
	              if (s6 !== peg$FAILED) {
	                s4 = [s4, s5, s6];
	                s3 = s4;
	              } else {
	                peg$currPos = s3;
	                s3 = peg$c2;
	              }
	            } else {
	              peg$currPos = s3;
	              s3 = peg$c2;
	            }
	          } else {
	            peg$currPos = s3;
	            s3 = peg$c2;
	          }
	          if (s3 === peg$FAILED) {
	            s3 = peg$c9;
	          }
	          if (s3 !== peg$FAILED) {
	            peg$reportedPos = s0;
	            s1 = peg$c21(s1, s3);
	            s0 = s1;
	          } else {
	            peg$currPos = s0;
	            s0 = peg$c2;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$c2;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$c2;
	      }
	
	      return s0;
	    }
	
	    function peg$parsepluralFormat() {
	      var s0, s1, s2, s3, s4, s5;
	
	      s0 = peg$currPos;
	      if (input.substr(peg$currPos, 6) === peg$c22) {
	        s1 = peg$c22;
	        peg$currPos += 6;
	      } else {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c23); }
	      }
	      if (s1 !== peg$FAILED) {
	        s2 = peg$parse_();
	        if (s2 !== peg$FAILED) {
	          if (input.charCodeAt(peg$currPos) === 44) {
	            s3 = peg$c10;
	            peg$currPos++;
	          } else {
	            s3 = peg$FAILED;
	            if (peg$silentFails === 0) { peg$fail(peg$c11); }
	          }
	          if (s3 !== peg$FAILED) {
	            s4 = peg$parse_();
	            if (s4 !== peg$FAILED) {
	              s5 = peg$parsepluralStyle();
	              if (s5 !== peg$FAILED) {
	                peg$reportedPos = s0;
	                s1 = peg$c24(s5);
	                s0 = s1;
	              } else {
	                peg$currPos = s0;
	                s0 = peg$c2;
	              }
	            } else {
	              peg$currPos = s0;
	              s0 = peg$c2;
	            }
	          } else {
	            peg$currPos = s0;
	            s0 = peg$c2;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$c2;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$c2;
	      }
	
	      return s0;
	    }
	
	    function peg$parseselectOrdinalFormat() {
	      var s0, s1, s2, s3, s4, s5;
	
	      s0 = peg$currPos;
	      if (input.substr(peg$currPos, 13) === peg$c25) {
	        s1 = peg$c25;
	        peg$currPos += 13;
	      } else {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c26); }
	      }
	      if (s1 !== peg$FAILED) {
	        s2 = peg$parse_();
	        if (s2 !== peg$FAILED) {
	          if (input.charCodeAt(peg$currPos) === 44) {
	            s3 = peg$c10;
	            peg$currPos++;
	          } else {
	            s3 = peg$FAILED;
	            if (peg$silentFails === 0) { peg$fail(peg$c11); }
	          }
	          if (s3 !== peg$FAILED) {
	            s4 = peg$parse_();
	            if (s4 !== peg$FAILED) {
	              s5 = peg$parsepluralStyle();
	              if (s5 !== peg$FAILED) {
	                peg$reportedPos = s0;
	                s1 = peg$c27(s5);
	                s0 = s1;
	              } else {
	                peg$currPos = s0;
	                s0 = peg$c2;
	              }
	            } else {
	              peg$currPos = s0;
	              s0 = peg$c2;
	            }
	          } else {
	            peg$currPos = s0;
	            s0 = peg$c2;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$c2;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$c2;
	      }
	
	      return s0;
	    }
	
	    function peg$parseselectFormat() {
	      var s0, s1, s2, s3, s4, s5, s6;
	
	      s0 = peg$currPos;
	      if (input.substr(peg$currPos, 6) === peg$c28) {
	        s1 = peg$c28;
	        peg$currPos += 6;
	      } else {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c29); }
	      }
	      if (s1 !== peg$FAILED) {
	        s2 = peg$parse_();
	        if (s2 !== peg$FAILED) {
	          if (input.charCodeAt(peg$currPos) === 44) {
	            s3 = peg$c10;
	            peg$currPos++;
	          } else {
	            s3 = peg$FAILED;
	            if (peg$silentFails === 0) { peg$fail(peg$c11); }
	          }
	          if (s3 !== peg$FAILED) {
	            s4 = peg$parse_();
	            if (s4 !== peg$FAILED) {
	              s5 = [];
	              s6 = peg$parseoptionalFormatPattern();
	              if (s6 !== peg$FAILED) {
	                while (s6 !== peg$FAILED) {
	                  s5.push(s6);
	                  s6 = peg$parseoptionalFormatPattern();
	                }
	              } else {
	                s5 = peg$c2;
	              }
	              if (s5 !== peg$FAILED) {
	                peg$reportedPos = s0;
	                s1 = peg$c30(s5);
	                s0 = s1;
	              } else {
	                peg$currPos = s0;
	                s0 = peg$c2;
	              }
	            } else {
	              peg$currPos = s0;
	              s0 = peg$c2;
	            }
	          } else {
	            peg$currPos = s0;
	            s0 = peg$c2;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$c2;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$c2;
	      }
	
	      return s0;
	    }
	
	    function peg$parseselector() {
	      var s0, s1, s2, s3;
	
	      s0 = peg$currPos;
	      s1 = peg$currPos;
	      if (input.charCodeAt(peg$currPos) === 61) {
	        s2 = peg$c31;
	        peg$currPos++;
	      } else {
	        s2 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c32); }
	      }
	      if (s2 !== peg$FAILED) {
	        s3 = peg$parsenumber();
	        if (s3 !== peg$FAILED) {
	          s2 = [s2, s3];
	          s1 = s2;
	        } else {
	          peg$currPos = s1;
	          s1 = peg$c2;
	        }
	      } else {
	        peg$currPos = s1;
	        s1 = peg$c2;
	      }
	      if (s1 !== peg$FAILED) {
	        s1 = input.substring(s0, peg$currPos);
	      }
	      s0 = s1;
	      if (s0 === peg$FAILED) {
	        s0 = peg$parsechars();
	      }
	
	      return s0;
	    }
	
	    function peg$parseoptionalFormatPattern() {
	      var s0, s1, s2, s3, s4, s5, s6, s7, s8;
	
	      s0 = peg$currPos;
	      s1 = peg$parse_();
	      if (s1 !== peg$FAILED) {
	        s2 = peg$parseselector();
	        if (s2 !== peg$FAILED) {
	          s3 = peg$parse_();
	          if (s3 !== peg$FAILED) {
	            if (input.charCodeAt(peg$currPos) === 123) {
	              s4 = peg$c7;
	              peg$currPos++;
	            } else {
	              s4 = peg$FAILED;
	              if (peg$silentFails === 0) { peg$fail(peg$c8); }
	            }
	            if (s4 !== peg$FAILED) {
	              s5 = peg$parse_();
	              if (s5 !== peg$FAILED) {
	                s6 = peg$parsemessageFormatPattern();
	                if (s6 !== peg$FAILED) {
	                  s7 = peg$parse_();
	                  if (s7 !== peg$FAILED) {
	                    if (input.charCodeAt(peg$currPos) === 125) {
	                      s8 = peg$c12;
	                      peg$currPos++;
	                    } else {
	                      s8 = peg$FAILED;
	                      if (peg$silentFails === 0) { peg$fail(peg$c13); }
	                    }
	                    if (s8 !== peg$FAILED) {
	                      peg$reportedPos = s0;
	                      s1 = peg$c33(s2, s6);
	                      s0 = s1;
	                    } else {
	                      peg$currPos = s0;
	                      s0 = peg$c2;
	                    }
	                  } else {
	                    peg$currPos = s0;
	                    s0 = peg$c2;
	                  }
	                } else {
	                  peg$currPos = s0;
	                  s0 = peg$c2;
	                }
	              } else {
	                peg$currPos = s0;
	                s0 = peg$c2;
	              }
	            } else {
	              peg$currPos = s0;
	              s0 = peg$c2;
	            }
	          } else {
	            peg$currPos = s0;
	            s0 = peg$c2;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$c2;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$c2;
	      }
	
	      return s0;
	    }
	
	    function peg$parseoffset() {
	      var s0, s1, s2, s3;
	
	      s0 = peg$currPos;
	      if (input.substr(peg$currPos, 7) === peg$c34) {
	        s1 = peg$c34;
	        peg$currPos += 7;
	      } else {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c35); }
	      }
	      if (s1 !== peg$FAILED) {
	        s2 = peg$parse_();
	        if (s2 !== peg$FAILED) {
	          s3 = peg$parsenumber();
	          if (s3 !== peg$FAILED) {
	            peg$reportedPos = s0;
	            s1 = peg$c36(s3);
	            s0 = s1;
	          } else {
	            peg$currPos = s0;
	            s0 = peg$c2;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$c2;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$c2;
	      }
	
	      return s0;
	    }
	
	    function peg$parsepluralStyle() {
	      var s0, s1, s2, s3, s4;
	
	      s0 = peg$currPos;
	      s1 = peg$parseoffset();
	      if (s1 === peg$FAILED) {
	        s1 = peg$c9;
	      }
	      if (s1 !== peg$FAILED) {
	        s2 = peg$parse_();
	        if (s2 !== peg$FAILED) {
	          s3 = [];
	          s4 = peg$parseoptionalFormatPattern();
	          if (s4 !== peg$FAILED) {
	            while (s4 !== peg$FAILED) {
	              s3.push(s4);
	              s4 = peg$parseoptionalFormatPattern();
	            }
	          } else {
	            s3 = peg$c2;
	          }
	          if (s3 !== peg$FAILED) {
	            peg$reportedPos = s0;
	            s1 = peg$c37(s1, s3);
	            s0 = s1;
	          } else {
	            peg$currPos = s0;
	            s0 = peg$c2;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$c2;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$c2;
	      }
	
	      return s0;
	    }
	
	    function peg$parsews() {
	      var s0, s1;
	
	      peg$silentFails++;
	      s0 = [];
	      if (peg$c39.test(input.charAt(peg$currPos))) {
	        s1 = input.charAt(peg$currPos);
	        peg$currPos++;
	      } else {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c40); }
	      }
	      if (s1 !== peg$FAILED) {
	        while (s1 !== peg$FAILED) {
	          s0.push(s1);
	          if (peg$c39.test(input.charAt(peg$currPos))) {
	            s1 = input.charAt(peg$currPos);
	            peg$currPos++;
	          } else {
	            s1 = peg$FAILED;
	            if (peg$silentFails === 0) { peg$fail(peg$c40); }
	          }
	        }
	      } else {
	        s0 = peg$c2;
	      }
	      peg$silentFails--;
	      if (s0 === peg$FAILED) {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c38); }
	      }
	
	      return s0;
	    }
	
	    function peg$parse_() {
	      var s0, s1, s2;
	
	      peg$silentFails++;
	      s0 = peg$currPos;
	      s1 = [];
	      s2 = peg$parsews();
	      while (s2 !== peg$FAILED) {
	        s1.push(s2);
	        s2 = peg$parsews();
	      }
	      if (s1 !== peg$FAILED) {
	        s1 = input.substring(s0, peg$currPos);
	      }
	      s0 = s1;
	      peg$silentFails--;
	      if (s0 === peg$FAILED) {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c41); }
	      }
	
	      return s0;
	    }
	
	    function peg$parsedigit() {
	      var s0;
	
	      if (peg$c42.test(input.charAt(peg$currPos))) {
	        s0 = input.charAt(peg$currPos);
	        peg$currPos++;
	      } else {
	        s0 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c43); }
	      }
	
	      return s0;
	    }
	
	    function peg$parsehexDigit() {
	      var s0;
	
	      if (peg$c44.test(input.charAt(peg$currPos))) {
	        s0 = input.charAt(peg$currPos);
	        peg$currPos++;
	      } else {
	        s0 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c45); }
	      }
	
	      return s0;
	    }
	
	    function peg$parsenumber() {
	      var s0, s1, s2, s3, s4, s5;
	
	      s0 = peg$currPos;
	      if (input.charCodeAt(peg$currPos) === 48) {
	        s1 = peg$c46;
	        peg$currPos++;
	      } else {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c47); }
	      }
	      if (s1 === peg$FAILED) {
	        s1 = peg$currPos;
	        s2 = peg$currPos;
	        if (peg$c48.test(input.charAt(peg$currPos))) {
	          s3 = input.charAt(peg$currPos);
	          peg$currPos++;
	        } else {
	          s3 = peg$FAILED;
	          if (peg$silentFails === 0) { peg$fail(peg$c49); }
	        }
	        if (s3 !== peg$FAILED) {
	          s4 = [];
	          s5 = peg$parsedigit();
	          while (s5 !== peg$FAILED) {
	            s4.push(s5);
	            s5 = peg$parsedigit();
	          }
	          if (s4 !== peg$FAILED) {
	            s3 = [s3, s4];
	            s2 = s3;
	          } else {
	            peg$currPos = s2;
	            s2 = peg$c2;
	          }
	        } else {
	          peg$currPos = s2;
	          s2 = peg$c2;
	        }
	        if (s2 !== peg$FAILED) {
	          s2 = input.substring(s1, peg$currPos);
	        }
	        s1 = s2;
	      }
	      if (s1 !== peg$FAILED) {
	        peg$reportedPos = s0;
	        s1 = peg$c50(s1);
	      }
	      s0 = s1;
	
	      return s0;
	    }
	
	    function peg$parsechar() {
	      var s0, s1, s2, s3, s4, s5, s6, s7;
	
	      if (peg$c51.test(input.charAt(peg$currPos))) {
	        s0 = input.charAt(peg$currPos);
	        peg$currPos++;
	      } else {
	        s0 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c52); }
	      }
	      if (s0 === peg$FAILED) {
	        s0 = peg$currPos;
	        if (input.substr(peg$currPos, 2) === peg$c53) {
	          s1 = peg$c53;
	          peg$currPos += 2;
	        } else {
	          s1 = peg$FAILED;
	          if (peg$silentFails === 0) { peg$fail(peg$c54); }
	        }
	        if (s1 !== peg$FAILED) {
	          peg$reportedPos = s0;
	          s1 = peg$c55();
	        }
	        s0 = s1;
	        if (s0 === peg$FAILED) {
	          s0 = peg$currPos;
	          if (input.substr(peg$currPos, 2) === peg$c56) {
	            s1 = peg$c56;
	            peg$currPos += 2;
	          } else {
	            s1 = peg$FAILED;
	            if (peg$silentFails === 0) { peg$fail(peg$c57); }
	          }
	          if (s1 !== peg$FAILED) {
	            peg$reportedPos = s0;
	            s1 = peg$c58();
	          }
	          s0 = s1;
	          if (s0 === peg$FAILED) {
	            s0 = peg$currPos;
	            if (input.substr(peg$currPos, 2) === peg$c59) {
	              s1 = peg$c59;
	              peg$currPos += 2;
	            } else {
	              s1 = peg$FAILED;
	              if (peg$silentFails === 0) { peg$fail(peg$c60); }
	            }
	            if (s1 !== peg$FAILED) {
	              peg$reportedPos = s0;
	              s1 = peg$c61();
	            }
	            s0 = s1;
	            if (s0 === peg$FAILED) {
	              s0 = peg$currPos;
	              if (input.substr(peg$currPos, 2) === peg$c62) {
	                s1 = peg$c62;
	                peg$currPos += 2;
	              } else {
	                s1 = peg$FAILED;
	                if (peg$silentFails === 0) { peg$fail(peg$c63); }
	              }
	              if (s1 !== peg$FAILED) {
	                s2 = peg$currPos;
	                s3 = peg$currPos;
	                s4 = peg$parsehexDigit();
	                if (s4 !== peg$FAILED) {
	                  s5 = peg$parsehexDigit();
	                  if (s5 !== peg$FAILED) {
	                    s6 = peg$parsehexDigit();
	                    if (s6 !== peg$FAILED) {
	                      s7 = peg$parsehexDigit();
	                      if (s7 !== peg$FAILED) {
	                        s4 = [s4, s5, s6, s7];
	                        s3 = s4;
	                      } else {
	                        peg$currPos = s3;
	                        s3 = peg$c2;
	                      }
	                    } else {
	                      peg$currPos = s3;
	                      s3 = peg$c2;
	                    }
	                  } else {
	                    peg$currPos = s3;
	                    s3 = peg$c2;
	                  }
	                } else {
	                  peg$currPos = s3;
	                  s3 = peg$c2;
	                }
	                if (s3 !== peg$FAILED) {
	                  s3 = input.substring(s2, peg$currPos);
	                }
	                s2 = s3;
	                if (s2 !== peg$FAILED) {
	                  peg$reportedPos = s0;
	                  s1 = peg$c64(s2);
	                  s0 = s1;
	                } else {
	                  peg$currPos = s0;
	                  s0 = peg$c2;
	                }
	              } else {
	                peg$currPos = s0;
	                s0 = peg$c2;
	              }
	            }
	          }
	        }
	      }
	
	      return s0;
	    }
	
	    function peg$parsechars() {
	      var s0, s1, s2;
	
	      s0 = peg$currPos;
	      s1 = [];
	      s2 = peg$parsechar();
	      if (s2 !== peg$FAILED) {
	        while (s2 !== peg$FAILED) {
	          s1.push(s2);
	          s2 = peg$parsechar();
	        }
	      } else {
	        s1 = peg$c2;
	      }
	      if (s1 !== peg$FAILED) {
	        peg$reportedPos = s0;
	        s1 = peg$c65(s1);
	      }
	      s0 = s1;
	
	      return s0;
	    }
	
	    peg$result = peg$startRuleFunction();
	
	    if (peg$result !== peg$FAILED && peg$currPos === input.length) {
	      return peg$result;
	    } else {
	      if (peg$result !== peg$FAILED && peg$currPos < input.length) {
	        peg$fail({ type: "end", description: "end of input" });
	      }
	
	      throw peg$buildException(null, peg$maxFailExpected, peg$maxFailPos);
	    }
	  }
	
	  return {
	    SyntaxError: SyntaxError,
	    parse:       parse
	  };
	})();
	
	//# sourceMappingURL=parser.js.map

/***/ },

/***/ 318:
/***/ function(module, exports) {

	// GENERATED FILE
	"use strict";
	exports["default"] = {"locale":"en","pluralRuleFunction":function (n,ord){var s=String(n).split("."),v0=!s[1],t0=Number(s[0])==n,n10=t0&&s[0].slice(-1),n100=t0&&s[0].slice(-2);if(ord)return n10==1&&n100!=11?"one":n10==2&&n100!=12?"two":n10==3&&n100!=13?"few":"other";return n==1&&v0?"one":"other"}};
	
	//# sourceMappingURL=en.js.map

/***/ },

/***/ 319:
/***/ function(module, exports) {

	/* (ignored) */

/***/ },

/***/ 320:
/***/ function(module, exports, __webpack_require__) {

	/* jshint node:true */
	
	'use strict';
	
	var IntlRelativeFormat = __webpack_require__(321)['default'];
	
	// Add all locale data to `IntlRelativeFormat`. This module will be ignored when
	// bundling for the browser with Browserify/Webpack.
	__webpack_require__(326);
	
	// Re-export `IntlRelativeFormat` as the CommonJS default exports with all the
	// locale data registered, and with English set as the default locale. Define
	// the `default` prop for use with other compiled ES6 Modules.
	exports = module.exports = IntlRelativeFormat;
	exports['default'] = exports;


/***/ },

/***/ 321:
/***/ function(module, exports, __webpack_require__) {

	/* jslint esnext: true */
	
	"use strict";
	var src$core$$ = __webpack_require__(322), src$en$$ = __webpack_require__(325);
	
	src$core$$["default"].__addLocaleData(src$en$$["default"]);
	src$core$$["default"].defaultLocale = 'en';
	
	exports["default"] = src$core$$["default"];
	
	//# sourceMappingURL=main.js.map

/***/ },

/***/ 322:
/***/ function(module, exports, __webpack_require__) {

	/*
	Copyright (c) 2014, Yahoo! Inc. All rights reserved.
	Copyrights licensed under the New BSD License.
	See the accompanying LICENSE file for terms.
	*/
	
	/* jslint esnext: true */
	
	"use strict";
	var intl$messageformat$$ = __webpack_require__(310), src$diff$$ = __webpack_require__(323), src$es5$$ = __webpack_require__(324);
	exports["default"] = RelativeFormat;
	
	// -----------------------------------------------------------------------------
	
	var FIELDS = ['second', 'minute', 'hour', 'day', 'month', 'year'];
	var STYLES = ['best fit', 'numeric'];
	
	// -- RelativeFormat -----------------------------------------------------------
	
	function RelativeFormat(locales, options) {
	    options = options || {};
	
	    // Make a copy of `locales` if it's an array, so that it doesn't change
	    // since it's used lazily.
	    if (src$es5$$.isArray(locales)) {
	        locales = locales.concat();
	    }
	
	    src$es5$$.defineProperty(this, '_locale', {value: this._resolveLocale(locales)});
	    src$es5$$.defineProperty(this, '_options', {value: {
	        style: this._resolveStyle(options.style),
	        units: this._isValidUnits(options.units) && options.units
	    }});
	
	    src$es5$$.defineProperty(this, '_locales', {value: locales});
	    src$es5$$.defineProperty(this, '_fields', {value: this._findFields(this._locale)});
	    src$es5$$.defineProperty(this, '_messages', {value: src$es5$$.objCreate(null)});
	
	    // "Bind" `format()` method to `this` so it can be passed by reference like
	    // the other `Intl` APIs.
	    var relativeFormat = this;
	    this.format = function format(date, options) {
	        return relativeFormat._format(date, options);
	    };
	}
	
	// Define internal private properties for dealing with locale data.
	src$es5$$.defineProperty(RelativeFormat, '__localeData__', {value: src$es5$$.objCreate(null)});
	src$es5$$.defineProperty(RelativeFormat, '__addLocaleData', {value: function (data) {
	    if (!(data && data.locale)) {
	        throw new Error(
	            'Locale data provided to IntlRelativeFormat is missing a ' +
	            '`locale` property value'
	        );
	    }
	
	    RelativeFormat.__localeData__[data.locale.toLowerCase()] = data;
	
	    // Add data to IntlMessageFormat.
	    intl$messageformat$$["default"].__addLocaleData(data);
	}});
	
	// Define public `defaultLocale` property which can be set by the developer, or
	// it will be set when the first RelativeFormat instance is created by
	// leveraging the resolved locale from `Intl`.
	src$es5$$.defineProperty(RelativeFormat, 'defaultLocale', {
	    enumerable: true,
	    writable  : true,
	    value     : undefined
	});
	
	// Define public `thresholds` property which can be set by the developer, and
	// defaults to relative time thresholds from moment.js.
	src$es5$$.defineProperty(RelativeFormat, 'thresholds', {
	    enumerable: true,
	
	    value: {
	        second: 45,  // seconds to minute
	        minute: 45,  // minutes to hour
	        hour  : 22,  // hours to day
	        day   : 26,  // days to month
	        month : 11   // months to year
	    }
	});
	
	RelativeFormat.prototype.resolvedOptions = function () {
	    return {
	        locale: this._locale,
	        style : this._options.style,
	        units : this._options.units
	    };
	};
	
	RelativeFormat.prototype._compileMessage = function (units) {
	    // `this._locales` is the original set of locales the user specified to the
	    // constructor, while `this._locale` is the resolved root locale.
	    var locales        = this._locales;
	    var resolvedLocale = this._locale;
	
	    var field        = this._fields[units];
	    var relativeTime = field.relativeTime;
	    var future       = '';
	    var past         = '';
	    var i;
	
	    for (i in relativeTime.future) {
	        if (relativeTime.future.hasOwnProperty(i)) {
	            future += ' ' + i + ' {' +
	                relativeTime.future[i].replace('{0}', '#') + '}';
	        }
	    }
	
	    for (i in relativeTime.past) {
	        if (relativeTime.past.hasOwnProperty(i)) {
	            past += ' ' + i + ' {' +
	                relativeTime.past[i].replace('{0}', '#') + '}';
	        }
	    }
	
	    var message = '{when, select, future {{0, plural, ' + future + '}}' +
	                                 'past {{0, plural, ' + past + '}}}';
	
	    // Create the synthetic IntlMessageFormat instance using the original
	    // locales value specified by the user when constructing the the parent
	    // IntlRelativeFormat instance.
	    return new intl$messageformat$$["default"](message, locales);
	};
	
	RelativeFormat.prototype._getMessage = function (units) {
	    var messages = this._messages;
	
	    // Create a new synthetic message based on the locale data from CLDR.
	    if (!messages[units]) {
	        messages[units] = this._compileMessage(units);
	    }
	
	    return messages[units];
	};
	
	RelativeFormat.prototype._getRelativeUnits = function (diff, units) {
	    var field = this._fields[units];
	
	    if (field.relative) {
	        return field.relative[diff];
	    }
	};
	
	RelativeFormat.prototype._findFields = function (locale) {
	    var localeData = RelativeFormat.__localeData__;
	    var data       = localeData[locale.toLowerCase()];
	
	    // The locale data is de-duplicated, so we have to traverse the locale's
	    // hierarchy until we find `fields` to return.
	    while (data) {
	        if (data.fields) {
	            return data.fields;
	        }
	
	        data = data.parentLocale && localeData[data.parentLocale.toLowerCase()];
	    }
	
	    throw new Error(
	        'Locale data added to IntlRelativeFormat is missing `fields` for :' +
	        locale
	    );
	};
	
	RelativeFormat.prototype._format = function (date, options) {
	    var now = options && options.now !== undefined ? options.now : src$es5$$.dateNow();
	
	    if (date === undefined) {
	        date = now;
	    }
	
	    // Determine if the `date` and optional `now` values are valid, and throw a
	    // similar error to what `Intl.DateTimeFormat#format()` would throw.
	    if (!isFinite(now)) {
	        throw new RangeError(
	            'The `now` option provided to IntlRelativeFormat#format() is not ' +
	            'in valid range.'
	        );
	    }
	
	    if (!isFinite(date)) {
	        throw new RangeError(
	            'The date value provided to IntlRelativeFormat#format() is not ' +
	            'in valid range.'
	        );
	    }
	
	    var diffReport  = src$diff$$["default"](now, date);
	    var units       = this._options.units || this._selectUnits(diffReport);
	    var diffInUnits = diffReport[units];
	
	    if (this._options.style !== 'numeric') {
	        var relativeUnits = this._getRelativeUnits(diffInUnits, units);
	        if (relativeUnits) {
	            return relativeUnits;
	        }
	    }
	
	    return this._getMessage(units).format({
	        '0' : Math.abs(diffInUnits),
	        when: diffInUnits < 0 ? 'past' : 'future'
	    });
	};
	
	RelativeFormat.prototype._isValidUnits = function (units) {
	    if (!units || src$es5$$.arrIndexOf.call(FIELDS, units) >= 0) {
	        return true;
	    }
	
	    if (typeof units === 'string') {
	        var suggestion = /s$/.test(units) && units.substr(0, units.length - 1);
	        if (suggestion && src$es5$$.arrIndexOf.call(FIELDS, suggestion) >= 0) {
	            throw new Error(
	                '"' + units + '" is not a valid IntlRelativeFormat `units` ' +
	                'value, did you mean: ' + suggestion
	            );
	        }
	    }
	
	    throw new Error(
	        '"' + units + '" is not a valid IntlRelativeFormat `units` value, it ' +
	        'must be one of: "' + FIELDS.join('", "') + '"'
	    );
	};
	
	RelativeFormat.prototype._resolveLocale = function (locales) {
	    if (typeof locales === 'string') {
	        locales = [locales];
	    }
	
	    // Create a copy of the array so we can push on the default locale.
	    locales = (locales || []).concat(RelativeFormat.defaultLocale);
	
	    var localeData = RelativeFormat.__localeData__;
	    var i, len, localeParts, data;
	
	    // Using the set of locales + the default locale, we look for the first one
	    // which that has been registered. When data does not exist for a locale, we
	    // traverse its ancestors to find something that's been registered within
	    // its hierarchy of locales. Since we lack the proper `parentLocale` data
	    // here, we must take a naive approach to traversal.
	    for (i = 0, len = locales.length; i < len; i += 1) {
	        localeParts = locales[i].toLowerCase().split('-');
	
	        while (localeParts.length) {
	            data = localeData[localeParts.join('-')];
	            if (data) {
	                // Return the normalized locale string; e.g., we return "en-US",
	                // instead of "en-us".
	                return data.locale;
	            }
	
	            localeParts.pop();
	        }
	    }
	
	    var defaultLocale = locales.pop();
	    throw new Error(
	        'No locale data has been added to IntlRelativeFormat for: ' +
	        locales.join(', ') + ', or the default locale: ' + defaultLocale
	    );
	};
	
	RelativeFormat.prototype._resolveStyle = function (style) {
	    // Default to "best fit" style.
	    if (!style) {
	        return STYLES[0];
	    }
	
	    if (src$es5$$.arrIndexOf.call(STYLES, style) >= 0) {
	        return style;
	    }
	
	    throw new Error(
	        '"' + style + '" is not a valid IntlRelativeFormat `style` value, it ' +
	        'must be one of: "' + STYLES.join('", "') + '"'
	    );
	};
	
	RelativeFormat.prototype._selectUnits = function (diffReport) {
	    var i, l, units;
	
	    for (i = 0, l = FIELDS.length; i < l; i += 1) {
	        units = FIELDS[i];
	
	        if (Math.abs(diffReport[units]) < RelativeFormat.thresholds[units]) {
	            break;
	        }
	    }
	
	    return units;
	};
	
	//# sourceMappingURL=core.js.map

/***/ },

/***/ 323:
/***/ function(module, exports) {

	/*
	Copyright (c) 2014, Yahoo! Inc. All rights reserved.
	Copyrights licensed under the New BSD License.
	See the accompanying LICENSE file for terms.
	*/
	
	/* jslint esnext: true */
	
	"use strict";
	
	var round = Math.round;
	
	function daysToYears(days) {
	    // 400 years have 146097 days (taking into account leap year rules)
	    return days * 400 / 146097;
	}
	
	exports["default"] = function (from, to) {
	    // Convert to ms timestamps.
	    from = +from;
	    to   = +to;
	
	    var millisecond = round(to - from),
	        second      = round(millisecond / 1000),
	        minute      = round(second / 60),
	        hour        = round(minute / 60),
	        day         = round(hour / 24),
	        week        = round(day / 7);
	
	    var rawYears = daysToYears(day),
	        month    = round(rawYears * 12),
	        year     = round(rawYears);
	
	    return {
	        millisecond: millisecond,
	        second     : second,
	        minute     : minute,
	        hour       : hour,
	        day        : day,
	        week       : week,
	        month      : month,
	        year       : year
	    };
	};
	
	//# sourceMappingURL=diff.js.map

/***/ },

/***/ 324:
/***/ function(module, exports) {

	/*
	Copyright (c) 2014, Yahoo! Inc. All rights reserved.
	Copyrights licensed under the New BSD License.
	See the accompanying LICENSE file for terms.
	*/
	
	/* jslint esnext: true */
	
	"use strict";
	
	// Purposely using the same implementation as the Intl.js `Intl` polyfill.
	// Copyright 2013 Andy Earnshaw, MIT License
	
	var hop = Object.prototype.hasOwnProperty;
	var toString = Object.prototype.toString;
	
	var realDefineProp = (function () {
	    try { return !!Object.defineProperty({}, 'a', {}); }
	    catch (e) { return false; }
	})();
	
	var es3 = !realDefineProp && !Object.prototype.__defineGetter__;
	
	var defineProperty = realDefineProp ? Object.defineProperty :
	        function (obj, name, desc) {
	
	    if ('get' in desc && obj.__defineGetter__) {
	        obj.__defineGetter__(name, desc.get);
	    } else if (!hop.call(obj, name) || 'value' in desc) {
	        obj[name] = desc.value;
	    }
	};
	
	var objCreate = Object.create || function (proto, props) {
	    var obj, k;
	
	    function F() {}
	    F.prototype = proto;
	    obj = new F();
	
	    for (k in props) {
	        if (hop.call(props, k)) {
	            defineProperty(obj, k, props[k]);
	        }
	    }
	
	    return obj;
	};
	
	var arrIndexOf = Array.prototype.indexOf || function (search, fromIndex) {
	    /*jshint validthis:true */
	    var arr = this;
	    if (!arr.length) {
	        return -1;
	    }
	
	    for (var i = fromIndex || 0, max = arr.length; i < max; i++) {
	        if (arr[i] === search) {
	            return i;
	        }
	    }
	
	    return -1;
	};
	
	var isArray = Array.isArray || function (obj) {
	    return toString.call(obj) === '[object Array]';
	};
	
	var dateNow = Date.now || function () {
	    return new Date().getTime();
	};
	exports.defineProperty = defineProperty, exports.objCreate = objCreate, exports.arrIndexOf = arrIndexOf, exports.isArray = isArray, exports.dateNow = dateNow;
	
	//# sourceMappingURL=es5.js.map

/***/ },

/***/ 325:
/***/ function(module, exports) {

	// GENERATED FILE
	"use strict";
	exports["default"] = {"locale":"en","pluralRuleFunction":function (n,ord){var s=String(n).split("."),v0=!s[1],t0=Number(s[0])==n,n10=t0&&s[0].slice(-1),n100=t0&&s[0].slice(-2);if(ord)return n10==1&&n100!=11?"one":n10==2&&n100!=12?"two":n10==3&&n100!=13?"few":"other";return n==1&&v0?"one":"other"},"fields":{"year":{"displayName":"Year","relative":{"0":"this year","1":"next year","-1":"last year"},"relativeTime":{"future":{"one":"in {0} year","other":"in {0} years"},"past":{"one":"{0} year ago","other":"{0} years ago"}}},"month":{"displayName":"Month","relative":{"0":"this month","1":"next month","-1":"last month"},"relativeTime":{"future":{"one":"in {0} month","other":"in {0} months"},"past":{"one":"{0} month ago","other":"{0} months ago"}}},"day":{"displayName":"Day","relative":{"0":"today","1":"tomorrow","-1":"yesterday"},"relativeTime":{"future":{"one":"in {0} day","other":"in {0} days"},"past":{"one":"{0} day ago","other":"{0} days ago"}}},"hour":{"displayName":"Hour","relativeTime":{"future":{"one":"in {0} hour","other":"in {0} hours"},"past":{"one":"{0} hour ago","other":"{0} hours ago"}}},"minute":{"displayName":"Minute","relativeTime":{"future":{"one":"in {0} minute","other":"in {0} minutes"},"past":{"one":"{0} minute ago","other":"{0} minutes ago"}}},"second":{"displayName":"Second","relative":{"0":"now"},"relativeTime":{"future":{"one":"in {0} second","other":"in {0} seconds"},"past":{"one":"{0} second ago","other":"{0} seconds ago"}}}}};
	
	//# sourceMappingURL=en.js.map

/***/ },

/***/ 326:
/***/ function(module, exports) {

	/* (ignored) */

/***/ },

/***/ 327:
/***/ function(module, exports) {

	// GENERATED FILE
	"use strict";
	exports["default"] = {"locale":"en","pluralRuleFunction":function (n,ord){var s=String(n).split("."),v0=!s[1],t0=Number(s[0])==n,n10=t0&&s[0].slice(-1),n100=t0&&s[0].slice(-2);if(ord)return n10==1&&n100!=11?"one":n10==2&&n100!=12?"two":n10==3&&n100!=13?"few":"other";return n==1&&v0?"one":"other"},"fields":{"year":{"displayName":"Year","relative":{"0":"this year","1":"next year","-1":"last year"},"relativeTime":{"future":{"one":"in {0} year","other":"in {0} years"},"past":{"one":"{0} year ago","other":"{0} years ago"}}},"month":{"displayName":"Month","relative":{"0":"this month","1":"next month","-1":"last month"},"relativeTime":{"future":{"one":"in {0} month","other":"in {0} months"},"past":{"one":"{0} month ago","other":"{0} months ago"}}},"day":{"displayName":"Day","relative":{"0":"today","1":"tomorrow","-1":"yesterday"},"relativeTime":{"future":{"one":"in {0} day","other":"in {0} days"},"past":{"one":"{0} day ago","other":"{0} days ago"}}},"hour":{"displayName":"Hour","relativeTime":{"future":{"one":"in {0} hour","other":"in {0} hours"},"past":{"one":"{0} hour ago","other":"{0} hours ago"}}},"minute":{"displayName":"Minute","relativeTime":{"future":{"one":"in {0} minute","other":"in {0} minutes"},"past":{"one":"{0} minute ago","other":"{0} minutes ago"}}},"second":{"displayName":"Second","relative":{"0":"now"},"relativeTime":{"future":{"one":"in {0} second","other":"in {0} seconds"},"past":{"one":"{0} second ago","other":"{0} seconds ago"}}}}};
	
	//# sourceMappingURL=en.js.map

/***/ },

/***/ 328:
/***/ function(module, exports, __webpack_require__) {

	/* jshint esnext:true */
	
	// TODO: Use `import React from "react";` when external modules are supported.
	"use strict";
	var src$react$$ = __webpack_require__(329), intl$messageformat$$ = __webpack_require__(310), intl$relativeformat$$ = __webpack_require__(320), intl$format$cache$$ = __webpack_require__(330);
	
	// -----------------------------------------------------------------------------
	
	var typesSpec = {
	    locales: src$react$$["default"].PropTypes.oneOfType([
	        src$react$$["default"].PropTypes.string,
	        src$react$$["default"].PropTypes.array
	    ]),
	
	    formats : src$react$$["default"].PropTypes.object,
	    messages: src$react$$["default"].PropTypes.object
	};
	
	function assertIsDate(date, errMsg) {
	    // Determine if the `date` is valid by checking if it is finite, which is
	    // the same way that `Intl.DateTimeFormat#format()` checks.
	    if (!isFinite(date)) {
	        throw new TypeError(errMsg);
	    }
	}
	
	exports["default"] = {
	    statics: {
	        filterFormatOptions: function (obj, defaults) {
	            if (!defaults) { defaults = {}; }
	
	            return (this.formatOptions || []).reduce(function (opts, name) {
	                if (obj.hasOwnProperty(name)) {
	                    opts[name] = obj[name];
	                } else if (defaults.hasOwnProperty(name)) {
	                    opts[name] = defaults[name];
	                }
	
	                return opts;
	            }, {});
	        }
	    },
	
	    propTypes        : typesSpec,
	    contextTypes     : typesSpec,
	    childContextTypes: typesSpec,
	
	    getNumberFormat  : intl$format$cache$$["default"](Intl.NumberFormat),
	    getDateTimeFormat: intl$format$cache$$["default"](Intl.DateTimeFormat),
	    getMessageFormat : intl$format$cache$$["default"](intl$messageformat$$["default"]),
	    getRelativeFormat: intl$format$cache$$["default"](intl$relativeformat$$["default"]),
	
	    getChildContext: function () {
	        var context = this.context;
	        var props   = this.props;
	
	        return {
	            locales:  props.locales  || context.locales,
	            formats:  props.formats  || context.formats,
	            messages: props.messages || context.messages
	        };
	    },
	
	    formatDate: function (date, options) {
	        date = new Date(date);
	        assertIsDate(date, 'A date or timestamp must be provided to formatDate()');
	        return this._format('date', date, options);
	    },
	
	    formatTime: function (date, options) {
	        date = new Date(date);
	        assertIsDate(date, 'A date or timestamp must be provided to formatTime()');
	        return this._format('time', date, options);
	    },
	
	    formatRelative: function (date, options, formatOptions) {
	        date = new Date(date);
	        assertIsDate(date, 'A date or timestamp must be provided to formatRelative()');
	        return this._format('relative', date, options, formatOptions);
	    },
	
	    formatNumber: function (num, options) {
	        return this._format('number', num, options);
	    },
	
	    formatMessage: function (message, values) {
	        var locales = this.props.locales || this.context.locales;
	        var formats = this.props.formats || this.context.formats;
	
	        // When `message` is a function, assume it's an IntlMessageFormat
	        // instance's `format()` method passed by reference, and call it. This
	        // is possible because its `this` will be pre-bound to the instance.
	        if (typeof message === 'function') {
	            return message(values);
	        }
	
	        if (typeof message === 'string') {
	            message = this.getMessageFormat(message, locales, formats);
	        }
	
	        return message.format(values);
	    },
	
	    getIntlMessage: function (path) {
	        var messages  = this.props.messages || this.context.messages;
	        var pathParts = path.split('.');
	
	        var message;
	
	        try {
	            message = pathParts.reduce(function (obj, pathPart) {
	                return obj[pathPart];
	            }, messages);
	        } finally {
	            if (message === undefined) {
	                throw new ReferenceError('Could not find Intl message: ' + path);
	            }
	        }
	
	        return message;
	    },
	
	    getNamedFormat: function (type, name) {
	        var formats = this.props.formats || this.context.formats;
	        var format  = null;
	
	        try {
	            format = formats[type][name];
	        } finally {
	            if (!format) {
	                throw new ReferenceError(
	                    'No ' + type + ' format named: ' + name
	                );
	            }
	        }
	
	        return format;
	    },
	
	    _format: function (type, value, options, formatOptions) {
	        var locales = this.props.locales || this.context.locales;
	
	        if (options && typeof options === 'string') {
	            options = this.getNamedFormat(type, options);
	        }
	
	        switch(type) {
	            case 'date':
	            case 'time':
	                return this.getDateTimeFormat(locales, options).format(value);
	            case 'number':
	                return this.getNumberFormat(locales, options).format(value);
	            case 'relative':
	                return this.getRelativeFormat(locales, options).format(value, formatOptions);
	            default:
	                throw new Error('Unrecognized format type: ' + type);
	        }
	    }
	};
	
	//# sourceMappingURL=mixin.js.map

/***/ },

/***/ 329:
/***/ function(module, exports) {

	/* global React */
	/* jshint esnext:true */
	
	// TODO: Remove the global `React` binding lookup once the ES6 Module Transpiler
	// supports external modules. This is a hack for now that provides the local
	// modules a referece to React.
	"use strict";
	exports["default"] = React;
	
	//# sourceMappingURL=react.js.map

/***/ },

/***/ 330:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports = module.exports = __webpack_require__(331)['default'];
	exports['default'] = exports;


/***/ },

/***/ 331:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var src$es5$$ = __webpack_require__(332);
	exports["default"] = createFormatCache;
	
	// -----------------------------------------------------------------------------
	
	function createFormatCache(FormatConstructor) {
	    var cache = src$es5$$.objCreate(null);
	
	    return function () {
	        var args    = Array.prototype.slice.call(arguments);
	        var cacheId = getCacheId(args);
	        var format  = cacheId && cache[cacheId];
	
	        if (!format) {
	            format = src$es5$$.objCreate(FormatConstructor.prototype);
	            FormatConstructor.apply(format, args);
	
	            if (cacheId) {
	                cache[cacheId] = format;
	            }
	        }
	
	        return format;
	    };
	}
	
	// -- Utilities ----------------------------------------------------------------
	
	function getCacheId(inputs) {
	    // When JSON is not available in the runtime, we will not create a cache id.
	    if (typeof JSON === 'undefined') { return; }
	
	    var cacheId = [];
	
	    var i, len, input;
	
	    for (i = 0, len = inputs.length; i < len; i += 1) {
	        input = inputs[i];
	
	        if (input && typeof input === 'object') {
	            cacheId.push(orderedProps(input));
	        } else {
	            cacheId.push(input);
	        }
	    }
	
	    return JSON.stringify(cacheId);
	}
	
	function orderedProps(obj) {
	    var props = [],
	        keys  = [];
	
	    var key, i, len, prop;
	
	    for (key in obj) {
	        if (obj.hasOwnProperty(key)) {
	            keys.push(key);
	        }
	    }
	
	    var orderedKeys = keys.sort();
	
	    for (i = 0, len = orderedKeys.length; i < len; i += 1) {
	        key  = orderedKeys[i];
	        prop = {};
	
	        prop[key] = obj[key];
	        props[i]  = prop;
	    }
	
	    return props;
	}
	
	//# sourceMappingURL=memoizer.js.map

/***/ },

/***/ 332:
/***/ function(module, exports) {

	"use strict";
	
	// Purposely using the same implementation as the Intl.js `Intl` polyfill.
	// Copyright 2013 Andy Earnshaw, MIT License
	
	var hop = Object.prototype.hasOwnProperty;
	
	var realDefineProp = (function () {
	    try { return !!Object.defineProperty({}, 'a', {}); }
	    catch (e) { return false; }
	})();
	
	var es3 = !realDefineProp && !Object.prototype.__defineGetter__;
	
	var defineProperty = realDefineProp ? Object.defineProperty :
	        function (obj, name, desc) {
	
	    if ('get' in desc && obj.__defineGetter__) {
	        obj.__defineGetter__(name, desc.get);
	    } else if (!hop.call(obj, name) || 'value' in desc) {
	        obj[name] = desc.value;
	    }
	};
	
	var objCreate = Object.create || function (proto, props) {
	    var obj, k;
	
	    function F() {}
	    F.prototype = proto;
	    obj = new F();
	
	    for (k in props) {
	        if (hop.call(props, k)) {
	            defineProperty(obj, k, props[k]);
	        }
	    }
	
	    return obj;
	};
	exports.defineProperty = defineProperty, exports.objCreate = objCreate;
	
	//# sourceMappingURL=es5.js.map

/***/ },

/***/ 333:
/***/ function(module, exports, __webpack_require__) {

	/* jshint esnext:true */
	
	// TODO: Use `import React from "react";` when external modules are supported.
	"use strict";
	var src$react$$ = __webpack_require__(329), src$mixin$$ = __webpack_require__(328);
	
	var FormattedDate = src$react$$["default"].createClass({
	    displayName: 'FormattedDate',
	    mixins     : [src$mixin$$["default"]],
	
	    statics: {
	        formatOptions: [
	            'localeMatcher', 'timeZone', 'hour12', 'formatMatcher', 'weekday',
	            'era', 'year', 'month', 'day', 'hour', 'minute', 'second',
	            'timeZoneName'
	        ]
	    },
	
	    propTypes: {
	        format: src$react$$["default"].PropTypes.string,
	        value : src$react$$["default"].PropTypes.any.isRequired
	    },
	
	    render: function () {
	        var props    = this.props;
	        var value    = props.value;
	        var format   = props.format;
	        var defaults = format && this.getNamedFormat('date', format);
	        var options  = FormattedDate.filterFormatOptions(props, defaults);
	
	        return src$react$$["default"].DOM.span(null, this.formatDate(value, options));
	    }
	});
	
	exports["default"] = FormattedDate;
	
	//# sourceMappingURL=date.js.map

/***/ },

/***/ 334:
/***/ function(module, exports, __webpack_require__) {

	/* jshint esnext:true */
	
	// TODO: Use `import React from "react";` when external modules are supported.
	"use strict";
	var src$react$$ = __webpack_require__(329), src$mixin$$ = __webpack_require__(328);
	
	var FormattedTime = src$react$$["default"].createClass({
	    displayName: 'FormattedTime',
	    mixins     : [src$mixin$$["default"]],
	
	    statics: {
	        formatOptions: [
	            'localeMatcher', 'timeZone', 'hour12', 'formatMatcher', 'weekday',
	            'era', 'year', 'month', 'day', 'hour', 'minute', 'second',
	            'timeZoneName'
	        ]
	    },
	
	    propTypes: {
	        format: src$react$$["default"].PropTypes.string,
	        value : src$react$$["default"].PropTypes.any.isRequired
	    },
	
	    render: function () {
	        var props    = this.props;
	        var value    = props.value;
	        var format   = props.format;
	        var defaults = format && this.getNamedFormat('time', format);
	        var options  = FormattedTime.filterFormatOptions(props, defaults);
	
	        return src$react$$["default"].DOM.span(null, this.formatTime(value, options));
	    }
	});
	
	exports["default"] = FormattedTime;
	
	//# sourceMappingURL=time.js.map

/***/ },

/***/ 335:
/***/ function(module, exports, __webpack_require__) {

	/* jshint esnext:true */
	
	// TODO: Use `import React from "react";` when external modules are supported.
	"use strict";
	var src$react$$ = __webpack_require__(329), src$mixin$$ = __webpack_require__(328);
	
	var FormattedRelative = src$react$$["default"].createClass({
	    displayName: 'FormattedRelative',
	    mixins     : [src$mixin$$["default"]],
	
	    statics: {
	        formatOptions: [
	            'style', 'units'
	        ]
	    },
	
	    propTypes: {
	        format: src$react$$["default"].PropTypes.string,
	        value : src$react$$["default"].PropTypes.any.isRequired,
	        now   : src$react$$["default"].PropTypes.any
	    },
	
	    render: function () {
	        var props    = this.props;
	        var value    = props.value;
	        var format   = props.format;
	        var defaults = format && this.getNamedFormat('relative', format);
	        var options  = FormattedRelative.filterFormatOptions(props, defaults);
	
	        var formattedRelativeTime = this.formatRelative(value, options, {
	            now: props.now
	        });
	
	        return src$react$$["default"].DOM.span(null, formattedRelativeTime);
	    }
	});
	
	exports["default"] = FormattedRelative;
	
	//# sourceMappingURL=relative.js.map

/***/ },

/***/ 336:
/***/ function(module, exports, __webpack_require__) {

	/* jshint esnext:true */
	
	// TODO: Use `import React from "react";` when external modules are supported.
	"use strict";
	var src$react$$ = __webpack_require__(329), src$mixin$$ = __webpack_require__(328);
	
	var FormattedNumber = src$react$$["default"].createClass({
	    displayName: 'FormattedNumber',
	    mixins     : [src$mixin$$["default"]],
	
	    statics: {
	        formatOptions: [
	            'localeMatcher', 'style', 'currency', 'currencyDisplay',
	            'useGrouping', 'minimumIntegerDigits', 'minimumFractionDigits',
	            'maximumFractionDigits', 'minimumSignificantDigits',
	            'maximumSignificantDigits'
	        ]
	    },
	
	    propTypes: {
	        format: src$react$$["default"].PropTypes.string,
	        value : src$react$$["default"].PropTypes.any.isRequired
	    },
	
	    render: function () {
	        var props    = this.props;
	        var value    = props.value;
	        var format   = props.format;
	        var defaults = format && this.getNamedFormat('number', format);
	        var options  = FormattedNumber.filterFormatOptions(props, defaults);
	
	        return src$react$$["default"].DOM.span(null, this.formatNumber(value, options));
	    }
	});
	
	exports["default"] = FormattedNumber;
	
	//# sourceMappingURL=number.js.map

/***/ },

/***/ 337:
/***/ function(module, exports, __webpack_require__) {

	/* jshint esnext:true */
	
	// TODO: Use `import React from "react";` when external modules are supported.
	"use strict";
	var src$react$$ = __webpack_require__(329), src$mixin$$ = __webpack_require__(328);
	
	var FormattedMessage = src$react$$["default"].createClass({
	    displayName: 'FormattedMessage',
	    mixins     : [src$mixin$$["default"]],
	
	    propTypes: {
	        tagName: src$react$$["default"].PropTypes.string,
	        message: src$react$$["default"].PropTypes.string.isRequired
	    },
	
	    getDefaultProps: function () {
	        return {tagName: 'span'};
	    },
	
	    render: function () {
	        var props   = this.props;
	        var tagName = props.tagName;
	        var message = props.message;
	
	        // Creates a token with a random guid that should not be guessable or
	        // conflict with other parts of the `message` string.
	        var guid       = Math.floor(Math.random() * 0x10000000000).toString(16);
	        var tokenRegex = new RegExp('(@__ELEMENT-' + guid + '-\\d+__@)', 'g');
	        var elements   = {};
	
	        var generateToken = (function () {
	            var counter = 0;
	            return function () {
	                return '@__ELEMENT-' + guid + '-' + (counter += 1) + '__@';
	            };
	        }());
	
	        // Iterates over the `props` to keep track of any React Element values
	        // so they can be represented by the `token` as a placeholder when the
	        // `message` is formatted. This allows the formatted message to then be
	        // broken-up into parts with references to the React Elements inserted
	        // back in.
	        var values = Object.keys(props).reduce(function (values, name) {
	            var value = props[name];
	            var token;
	
	            if (src$react$$["default"].isValidElement(value)) {
	                token           = generateToken();
	                values[name]    = token;
	                elements[token] = value;
	            } else {
	                values[name] = value;
	            }
	
	            return values;
	        }, {});
	
	        // Formats the `message` with the `values`, including the `token`
	        // placeholders for React Element values.
	        var formattedMessage = this.formatMessage(message, values);
	
	        // Split the message into parts so the React Element values captured
	        // above can be inserted back into the rendered message. This
	        // approach allows messages to render with React Elements while keeping
	        // React's virtual diffing working properly.
	        var children = formattedMessage.split(tokenRegex)
	            .filter(function (part) {
	                // Ignore empty string parts.
	                return !!part;
	            })
	            .map(function (part) {
	                // When the `part` is a token, get a ref to the React Element.
	                return elements[part] || part;
	            });
	
	        var elementArgs = [tagName, null].concat(children);
	        return src$react$$["default"].createElement.apply(null, elementArgs);
	    }
	});
	
	exports["default"] = FormattedMessage;
	
	//# sourceMappingURL=message.js.map

/***/ },

/***/ 338:
/***/ function(module, exports, __webpack_require__) {

	/* jshint esnext:true */
	
	// TODO: Use `import React from "react";` when external modules are supported.
	"use strict";
	var src$react$$ = __webpack_require__(329), src$escape$$ = __webpack_require__(339), src$mixin$$ = __webpack_require__(328);
	
	var FormattedHTMLMessage = src$react$$["default"].createClass({
	    displayName: 'FormattedHTMLMessage',
	    mixins     : [src$mixin$$["default"]],
	
	    propTypes: {
	        tagName: src$react$$["default"].PropTypes.string,
	        message: src$react$$["default"].PropTypes.string.isRequired
	    },
	
	    getDefaultProps: function () {
	        return {tagName: 'span'};
	    },
	
	    render: function () {
	        var props   = this.props;
	        var tagName = props.tagName;
	        var message = props.message;
	
	        // Process all the props before they are used as values when formatting
	        // the ICU Message string. Since the formatted message will be injected
	        // via `innerHTML`, all String-based values need to be HTML-escaped. Any
	        // React Elements that are passed as props will be rendered to a static
	        // markup string that is presumed to be safe.
	        var values = Object.keys(props).reduce(function (values, name) {
	            var value = props[name];
	
	            if (typeof value === 'string') {
	                value = src$escape$$["default"](value);
	            } else if (src$react$$["default"].isValidElement(value)) {
	                value = src$react$$["default"].renderToStaticMarkup(value);
	            }
	
	            values[name] = value;
	            return values;
	        }, {});
	
	        // Since the message presumably has HTML in it, we need to set
	        // `innerHTML` in order for it to be rendered and not escaped by React.
	        // To be safe, all string prop values were escaped before formatting the
	        // message. It is assumed that the message is not UGC, and came from
	        // the developer making it more like a template.
	        //
	        // Note: There's a perf impact of using this component since there's no
	        // way for React to do its virtual DOM diffing.
	        return src$react$$["default"].DOM[tagName]({
	            dangerouslySetInnerHTML: {
	                __html: this.formatMessage(message, values)
	            }
	        });
	    }
	});
	
	exports["default"] = FormattedHTMLMessage;
	
	//# sourceMappingURL=html-message.js.map

/***/ },

/***/ 339:
/***/ function(module, exports) {

	/* jshint esnext:true */
	
	/*
	HTML escaping implementation is the same as React's (on purpose.) Therefore, it
	has the following Copyright and Licensing:
	
	Copyright 2013-2014, Facebook, Inc.
	All rights reserved.
	
	This source code is licensed under the BSD-style license found in the LICENSE
	file in the root directory of React's source tree.
	*/
	"use strict";
	var ESCAPED_CHARS = {
	    '&' : '&amp;',
	    '>' : '&gt;',
	    '<' : '&lt;',
	    '"' : '&quot;',
	    '\'': '&#x27;'
	};
	
	var UNSAFE_CHARS_REGEX = /[&><"']/g;
	
	exports["default"] = function (str) {
	    return ('' + str).replace(UNSAFE_CHARS_REGEX, function (match) {
	        return ESCAPED_CHARS[match];
	    });
	};
	
	//# sourceMappingURL=escape.js.map

/***/ },

/***/ 340:
/***/ function(module, exports) {

	/* (ignored) */

/***/ },

/***/ 341:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(180);
	var ReactIntl = __webpack_require__(308);
	var IntlMixin = ReactIntl.IntlMixin;
	var FormattedMessage = ReactIntl.FormattedMessage;
	
	var Component = React.createClass({
	  displayName: 'Component',
	
	  mixins: [IntlMixin],
	  render: function render() {
	    return React.createElement(FormattedMessage, {
	      message: this.getIntlMessage('user.info'),
	      name: 'Test',
	      count: 10000,
	      time: new Date()
	    });
	  }
	});
	
	module.exports = Component;

/***/ }

});
//# sourceMappingURL=react-intl.js.map