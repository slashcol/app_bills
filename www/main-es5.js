function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
      "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
      "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
      "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
      "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
      "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
      "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
      "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
      "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
      "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
      "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
      "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
      "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
      "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
      "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
      "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
      "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
      "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
      "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
      "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
      "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
      "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
      "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
      "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
      "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
      "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
      "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
      "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
      "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
      "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
      "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
      "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
      "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
      "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/regenerator-runtime/runtime.js":
  /*!*****************************************************!*\
    !*** ./node_modules/regenerator-runtime/runtime.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRegeneratorRuntimeRuntimeJs(module, exports, __webpack_require__) {
    /**
     * Copyright (c) 2014-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var runtime = function (exports) {
      "use strict";

      var Op = Object.prototype;
      var hasOwn = Op.hasOwnProperty;
      var undefined; // More compressible than void 0.

      var $Symbol = typeof Symbol === "function" ? Symbol : {};
      var iteratorSymbol = $Symbol.iterator || "@@iterator";
      var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
      var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

      function wrap(innerFn, outerFn, self, tryLocsList) {
        // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
        // .throw, and .return methods.

        generator._invoke = makeInvokeMethod(innerFn, self, context);
        return generator;
      }

      exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
      // record like context.tryEntries[i].completion. This interface could
      // have been (and was previously) designed to take a closure to be
      // invoked without arguments, but in all the cases we care about we
      // already have an existing method we want to call, so there's no need
      // to create a new function object. We can even get away with assuming
      // the method takes exactly one argument, since that happens to be true
      // in every case, so we don't have to touch the arguments object. The
      // only additional allocation required is the completion record, which
      // has a stable shape and so hopefully should be cheap to allocate.

      function tryCatch(fn, obj, arg) {
        try {
          return {
            type: "normal",
            arg: fn.call(obj, arg)
          };
        } catch (err) {
          return {
            type: "throw",
            arg: err
          };
        }
      }

      var GenStateSuspendedStart = "suspendedStart";
      var GenStateSuspendedYield = "suspendedYield";
      var GenStateExecuting = "executing";
      var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
      // breaking out of the dispatch switch statement.

      var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
      // .constructor.prototype properties for functions that return Generator
      // objects. For full spec compliance, you may wish to configure your
      // minifier not to mangle the names of these two functions.

      function Generator() {}

      function GeneratorFunction() {}

      function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
      // don't natively support it.


      var IteratorPrototype = {};

      IteratorPrototype[iteratorSymbol] = function () {
        return this;
      };

      var getProto = Object.getPrototypeOf;
      var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

      if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
        // This environment has a native %IteratorPrototype%; use it instead
        // of the polyfill.
        IteratorPrototype = NativeIteratorPrototype;
      }

      var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
      GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
      GeneratorFunctionPrototype.constructor = GeneratorFunction;
      GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction"; // Helper for defining the .next, .throw, and .return methods of the
      // Iterator interface in terms of a single ._invoke method.

      function defineIteratorMethods(prototype) {
        ["next", "throw", "return"].forEach(function (method) {
          prototype[method] = function (arg) {
            return this._invoke(method, arg);
          };
        });
      }

      exports.isGeneratorFunction = function (genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
      };

      exports.mark = function (genFun) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
        } else {
          genFun.__proto__ = GeneratorFunctionPrototype;

          if (!(toStringTagSymbol in genFun)) {
            genFun[toStringTagSymbol] = "GeneratorFunction";
          }
        }

        genFun.prototype = Object.create(Gp);
        return genFun;
      }; // Within the body of any async function, `await x` is transformed to
      // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
      // `hasOwn.call(value, "__await")` to determine if the yielded value is
      // meant to be awaited.


      exports.awrap = function (arg) {
        return {
          __await: arg
        };
      };

      function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
          var record = tryCatch(generator[method], generator, arg);

          if (record.type === "throw") {
            reject(record.arg);
          } else {
            var result = record.arg;
            var value = result.value;

            if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
              return PromiseImpl.resolve(value.__await).then(function (value) {
                invoke("next", value, resolve, reject);
              }, function (err) {
                invoke("throw", err, resolve, reject);
              });
            }

            return PromiseImpl.resolve(value).then(function (unwrapped) {
              // When a yielded Promise is resolved, its final value becomes
              // the .value of the Promise<{value,done}> result for the
              // current iteration.
              result.value = unwrapped;
              resolve(result);
            }, function (error) {
              // If a rejected Promise was yielded, throw the rejection back
              // into the async generator function so it can be handled there.
              return invoke("throw", error, resolve, reject);
            });
          }
        }

        var previousPromise;

        function enqueue(method, arg) {
          function callInvokeWithMethodAndArg() {
            return new PromiseImpl(function (resolve, reject) {
              invoke(method, arg, resolve, reject);
            });
          }

          return previousPromise = // If enqueue has been called before, then we want to wait until
          // all previous Promises have been resolved before calling invoke,
          // so that results are always delivered in the correct order. If
          // enqueue has not been called before, then it is important to
          // call invoke immediately, without waiting on a callback to fire,
          // so that the async generator function has the opportunity to do
          // any necessary setup in a predictable way. This predictability
          // is why the Promise constructor synchronously invokes its
          // executor callback, and why async functions synchronously
          // execute code before the first await. Since we implement simple
          // async functions in terms of async generators, it is especially
          // important to get this right, even though it requires care.
          previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        } // Define the unified helper method that is used to implement .next,
        // .throw, and .return (see defineIteratorMethods).


        this._invoke = enqueue;
      }

      defineIteratorMethods(AsyncIterator.prototype);

      AsyncIterator.prototype[asyncIteratorSymbol] = function () {
        return this;
      };

      exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
      // AsyncIterator objects; they just return a Promise for the value of
      // the final result produced by the iterator.

      exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
        if (PromiseImpl === void 0) PromiseImpl = Promise;
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
        return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
        : iter.next().then(function (result) {
          return result.done ? result.value : iter.next();
        });
      };

      function makeInvokeMethod(innerFn, self, context) {
        var state = GenStateSuspendedStart;
        return function invoke(method, arg) {
          if (state === GenStateExecuting) {
            throw new Error("Generator is already running");
          }

          if (state === GenStateCompleted) {
            if (method === "throw") {
              throw arg;
            } // Be forgiving, per 25.3.3.3.3 of the spec:
            // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


            return doneResult();
          }

          context.method = method;
          context.arg = arg;

          while (true) {
            var delegate = context.delegate;

            if (delegate) {
              var delegateResult = maybeInvokeDelegate(delegate, context);

              if (delegateResult) {
                if (delegateResult === ContinueSentinel) continue;
                return delegateResult;
              }
            }

            if (context.method === "next") {
              // Setting context._sent for legacy support of Babel's
              // function.sent implementation.
              context.sent = context._sent = context.arg;
            } else if (context.method === "throw") {
              if (state === GenStateSuspendedStart) {
                state = GenStateCompleted;
                throw context.arg;
              }

              context.dispatchException(context.arg);
            } else if (context.method === "return") {
              context.abrupt("return", context.arg);
            }

            state = GenStateExecuting;
            var record = tryCatch(innerFn, self, context);

            if (record.type === "normal") {
              // If an exception is thrown from innerFn, we leave state ===
              // GenStateExecuting and loop back for another invocation.
              state = context.done ? GenStateCompleted : GenStateSuspendedYield;

              if (record.arg === ContinueSentinel) {
                continue;
              }

              return {
                value: record.arg,
                done: context.done
              };
            } else if (record.type === "throw") {
              state = GenStateCompleted; // Dispatch the exception by looping back around to the
              // context.dispatchException(context.arg) call above.

              context.method = "throw";
              context.arg = record.arg;
            }
          }
        };
      } // Call delegate.iterator[context.method](context.arg) and handle the
      // result, either by returning a { value, done } result from the
      // delegate iterator, or by modifying context.method and context.arg,
      // setting context.delegate to null, and returning the ContinueSentinel.


      function maybeInvokeDelegate(delegate, context) {
        var method = delegate.iterator[context.method];

        if (method === undefined) {
          // A .throw or .return when the delegate iterator has no .throw
          // method always terminates the yield* loop.
          context.delegate = null;

          if (context.method === "throw") {
            // Note: ["return"] must be used for ES3 parsing compatibility.
            if (delegate.iterator["return"]) {
              // If the delegate iterator has a return method, give it a
              // chance to clean up.
              context.method = "return";
              context.arg = undefined;
              maybeInvokeDelegate(delegate, context);

              if (context.method === "throw") {
                // If maybeInvokeDelegate(context) changed context.method from
                // "return" to "throw", let that override the TypeError below.
                return ContinueSentinel;
              }
            }

            context.method = "throw";
            context.arg = new TypeError("The iterator does not provide a 'throw' method");
          }

          return ContinueSentinel;
        }

        var record = tryCatch(method, delegate.iterator, context.arg);

        if (record.type === "throw") {
          context.method = "throw";
          context.arg = record.arg;
          context.delegate = null;
          return ContinueSentinel;
        }

        var info = record.arg;

        if (!info) {
          context.method = "throw";
          context.arg = new TypeError("iterator result is not an object");
          context.delegate = null;
          return ContinueSentinel;
        }

        if (info.done) {
          // Assign the result of the finished delegate to the temporary
          // variable specified by delegate.resultName (see delegateYield).
          context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

          context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
          // exception, let the outer generator proceed normally. If
          // context.method was "next", forget context.arg since it has been
          // "consumed" by the delegate iterator. If context.method was
          // "return", allow the original .return call to continue in the
          // outer generator.

          if (context.method !== "return") {
            context.method = "next";
            context.arg = undefined;
          }
        } else {
          // Re-yield the result returned by the delegate method.
          return info;
        } // The delegate iterator is finished, so forget it and continue with
        // the outer generator.


        context.delegate = null;
        return ContinueSentinel;
      } // Define Generator.prototype.{next,throw,return} in terms of the
      // unified ._invoke helper method.


      defineIteratorMethods(Gp);
      Gp[toStringTagSymbol] = "Generator"; // A Generator should always return itself as the iterator object when the
      // @@iterator function is called on it. Some browsers' implementations of the
      // iterator prototype chain incorrectly implement this, causing the Generator
      // object to not be returned from this call. This ensures that doesn't happen.
      // See https://github.com/facebook/regenerator/issues/274 for more details.

      Gp[iteratorSymbol] = function () {
        return this;
      };

      Gp.toString = function () {
        return "[object Generator]";
      };

      function pushTryEntry(locs) {
        var entry = {
          tryLoc: locs[0]
        };

        if (1 in locs) {
          entry.catchLoc = locs[1];
        }

        if (2 in locs) {
          entry.finallyLoc = locs[2];
          entry.afterLoc = locs[3];
        }

        this.tryEntries.push(entry);
      }

      function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
      }

      function Context(tryLocsList) {
        // The root entry object (effectively a try statement without a catch
        // or a finally block) gives us a place to store values thrown from
        // locations where there is no enclosing try statement.
        this.tryEntries = [{
          tryLoc: "root"
        }];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
      }

      exports.keys = function (object) {
        var keys = [];

        for (var key in object) {
          keys.push(key);
        }

        keys.reverse(); // Rather than returning an object with a next method, we keep
        // things simple and return the next function itself.

        return function next() {
          while (keys.length) {
            var key = keys.pop();

            if (key in object) {
              next.value = key;
              next.done = false;
              return next;
            }
          } // To avoid creating an additional object, we just hang the .value
          // and .done properties off the next function object itself. This
          // also ensures that the minifier will not anonymize the function.


          next.done = true;
          return next;
        };
      };

      function values(iterable) {
        if (iterable) {
          var iteratorMethod = iterable[iteratorSymbol];

          if (iteratorMethod) {
            return iteratorMethod.call(iterable);
          }

          if (typeof iterable.next === "function") {
            return iterable;
          }

          if (!isNaN(iterable.length)) {
            var i = -1,
                next = function next() {
              while (++i < iterable.length) {
                if (hasOwn.call(iterable, i)) {
                  next.value = iterable[i];
                  next.done = false;
                  return next;
                }
              }

              next.value = undefined;
              next.done = true;
              return next;
            };

            return next.next = next;
          }
        } // Return an iterator with no values.


        return {
          next: doneResult
        };
      }

      exports.values = values;

      function doneResult() {
        return {
          value: undefined,
          done: true
        };
      }

      Context.prototype = {
        constructor: Context,
        reset: function reset(skipTempReset) {
          this.prev = 0;
          this.next = 0; // Resetting context._sent for legacy support of Babel's
          // function.sent implementation.

          this.sent = this._sent = undefined;
          this.done = false;
          this.delegate = null;
          this.method = "next";
          this.arg = undefined;
          this.tryEntries.forEach(resetTryEntry);

          if (!skipTempReset) {
            for (var name in this) {
              // Not sure about the optimal order of these conditions:
              if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
                this[name] = undefined;
              }
            }
          }
        },
        stop: function stop() {
          this.done = true;
          var rootEntry = this.tryEntries[0];
          var rootRecord = rootEntry.completion;

          if (rootRecord.type === "throw") {
            throw rootRecord.arg;
          }

          return this.rval;
        },
        dispatchException: function dispatchException(exception) {
          if (this.done) {
            throw exception;
          }

          var context = this;

          function handle(loc, caught) {
            record.type = "throw";
            record.arg = exception;
            context.next = loc;

            if (caught) {
              // If the dispatched exception was caught by a catch block,
              // then let that catch block handle the exception normally.
              context.method = "next";
              context.arg = undefined;
            }

            return !!caught;
          }

          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            var record = entry.completion;

            if (entry.tryLoc === "root") {
              // Exception thrown outside of any try block that could handle
              // it, so set the completion value of the entire function to
              // throw the exception.
              return handle("end");
            }

            if (entry.tryLoc <= this.prev) {
              var hasCatch = hasOwn.call(entry, "catchLoc");
              var hasFinally = hasOwn.call(entry, "finallyLoc");

              if (hasCatch && hasFinally) {
                if (this.prev < entry.catchLoc) {
                  return handle(entry.catchLoc, true);
                } else if (this.prev < entry.finallyLoc) {
                  return handle(entry.finallyLoc);
                }
              } else if (hasCatch) {
                if (this.prev < entry.catchLoc) {
                  return handle(entry.catchLoc, true);
                }
              } else if (hasFinally) {
                if (this.prev < entry.finallyLoc) {
                  return handle(entry.finallyLoc);
                }
              } else {
                throw new Error("try statement without catch or finally");
              }
            }
          }
        },
        abrupt: function abrupt(type, arg) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];

            if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
              var finallyEntry = entry;
              break;
            }
          }

          if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
            // Ignore the finally entry if control is not jumping to a
            // location outside the try/catch block.
            finallyEntry = null;
          }

          var record = finallyEntry ? finallyEntry.completion : {};
          record.type = type;
          record.arg = arg;

          if (finallyEntry) {
            this.method = "next";
            this.next = finallyEntry.finallyLoc;
            return ContinueSentinel;
          }

          return this.complete(record);
        },
        complete: function complete(record, afterLoc) {
          if (record.type === "throw") {
            throw record.arg;
          }

          if (record.type === "break" || record.type === "continue") {
            this.next = record.arg;
          } else if (record.type === "return") {
            this.rval = this.arg = record.arg;
            this.method = "return";
            this.next = "end";
          } else if (record.type === "normal" && afterLoc) {
            this.next = afterLoc;
          }

          return ContinueSentinel;
        },
        finish: function finish(finallyLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];

            if (entry.finallyLoc === finallyLoc) {
              this.complete(entry.completion, entry.afterLoc);
              resetTryEntry(entry);
              return ContinueSentinel;
            }
          }
        },
        "catch": function _catch(tryLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];

            if (entry.tryLoc === tryLoc) {
              var record = entry.completion;

              if (record.type === "throw") {
                var thrown = record.arg;
                resetTryEntry(entry);
              }

              return thrown;
            }
          } // The context.catch method must only be called with a location
          // argument that corresponds to a known catch block.


          throw new Error("illegal catch attempt");
        },
        delegateYield: function delegateYield(iterable, resultName, nextLoc) {
          this.delegate = {
            iterator: values(iterable),
            resultName: resultName,
            nextLoc: nextLoc
          };

          if (this.method === "next") {
            // Deliberately forget the last sent value so that we don't
            // accidentally pass it on to the delegate.
            this.arg = undefined;
          }

          return ContinueSentinel;
        }
      }; // Regardless of whether this script is executing as a CommonJS module
      // or not, return the runtime object so that we can declare the variable
      // regeneratorRuntime in the outer scope, which allows this module to be
      // injected easily by `bin/regenerator --include-runtime script.js`.

      return exports;
    }( // If this script is executing as a CommonJS module, use module.exports
    // as the regeneratorRuntime namespace. Otherwise create a new empty
    // object. Either way, the resulting object will be used to initialize
    // the regeneratorRuntime variable at the top of this file.
    true ? module.exports : undefined);

    try {
      regeneratorRuntime = runtime;
    } catch (accidentalStrictMode) {
      // This module should not be running in strict mode, so the above
      // assignment should always work unless something is misconfigured. Just
      // in case runtime.js accidentally runs in strict mode, we can escape
      // strict mode using a global Function call. This could conceivably fail
      // if a Content Security Policy forbids using Function, but in that case
      // the proper solution is to fix the accidental strict mode problem. If
      // you've misconfigured your bundler to force strict mode and applied a
      // CSP to forbid Function, and you're not willing to fix either of those
      // problems, please detail your unique predicament in a GitHub issue.
      Function("r", "regeneratorRuntime = r")(runtime);
    }
    /***/

  },

  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: '',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | tabs-tabs-module */
        "tabs-tabs-module").then(__webpack_require__.bind(null,
        /*! ./tabs/tabs.module */
        "./src/app/tabs/tabs.module.ts")).then(function (m) {
          return m.TabsPageModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"],
        relativeLinkResolution: 'corrected'
      })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
            preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"],
            relativeLinkResolution: 'corrected'
          })],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _services_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./services/user */
    "./src/app/services/user.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _services_category__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./services/category */
    "./src/app/services/category.ts");
    /* harmony import */


    var _services_item__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./services/item */
    "./src/app/services/item.ts");
    /* harmony import */


    var _services_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./services/card */
    "./src/app/services/card.ts");
    /* harmony import */


    var _services_preference__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./services/preference */
    "./src/app/services/preference.ts");
    /* harmony import */


    var _services_cart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./services/cart */
    "./src/app/services/cart.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _services_local_storage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./services/local-storage */
    "./src/app/services/local-storage.ts");
    /* harmony import */


    var _services_installation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./services/installation */
    "./src/app/services/installation.ts");
    /* harmony import */


    var _services_window_ref__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./services/window-ref */
    "./src/app/services/window-ref.ts");
    /* harmony import */


    var _ionic_native_header_color_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @ionic-native/header-color/ngx */
    "./node_modules/@ionic-native/header-color/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var parse__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! parse */
    "./node_modules/parse/index.js");
    /* harmony import */


    var parse__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_17__);
    /* harmony import */


    var _services_slide__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./services/slide */
    "./src/app/services/slide.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _nomadreservations_ngx_stripe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @nomadreservations/ngx-stripe */
    "./node_modules/@nomadreservations/ngx-stripe/__ivy_ngcc__/fesm2015/nomadreservations-ngx-stripe.js");
    /* harmony import */


    var _services_item_variation__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./services/item-variation */
    "./src/app/services/item-variation.ts");
    /* harmony import */


    var angularx_social_login__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! angularx-social-login */
    "./node_modules/angularx-social-login/__ivy_ngcc__/fesm2015/angularx-social-login.js");
    /* harmony import */


    var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @ionic-native/google-plus/ngx */
    "./node_modules/@ionic-native/google-plus/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _services_audio__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./services/audio */
    "./src/app/services/audio.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(platform, router, toastCtrl, alertCtrl, preference, loadingCtrl, cartService, statusBar, headerColor, translate, localStorage, userService, windowRef, installationService, stripeService, googlePlus, authService, audioService, ngZone, splashScreen) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.preference = preference;
        this.loadingCtrl = loadingCtrl;
        this.cartService = cartService;
        this.statusBar = statusBar;
        this.headerColor = headerColor;
        this.translate = translate;
        this.localStorage = localStorage;
        this.userService = userService;
        this.windowRef = windowRef;
        this.installationService = installationService;
        this.stripeService = stripeService;
        this.googlePlus = googlePlus;
        this.authService = authService;
        this.audioService = audioService;
        this.ngZone = ngZone;
        this.splashScreen = splashScreen;
        this.loader = null;
        this.objWindow = null;
        this.cartCount = '';
        this.initializeApp();
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.objWindow = this.windowRef.nativeWindow;
                    this.setupParse();
                    this.setupFacebookSdk();
                    this.user = _services_user__WEBPACK_IMPORTED_MODULE_5__["User"].getCurrent();
                    this.setupLanguage();
                    this.setupEvents();
                    this.setupDesktopAnimations();

                    if (!this.platform.is('cordova')) {
                      _context.next = 15;
                      break;
                    }

                    _context.next = 10;
                    return this.platform.ready();

                  case 10:
                    this.setupStatusBar();
                    this.setupPush();
                    this.setupNativeAudio();
                    this.splashScreen.hide();
                    if (this.platform.is('android')) this.setupHeaderColor();

                  case 15:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "setupParse",
        value: function setupParse() {
          parse__WEBPACK_IMPORTED_MODULE_17__["serverURL"] = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].serverUrl;
          parse__WEBPACK_IMPORTED_MODULE_17__["initialize"](src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].appId);

          _services_slide__WEBPACK_IMPORTED_MODULE_18__["Slide"].getInstance();

          _services_category__WEBPACK_IMPORTED_MODULE_7__["Category"].getInstance();

          _services_item__WEBPACK_IMPORTED_MODULE_8__["Item"].getInstance();

          _services_card__WEBPACK_IMPORTED_MODULE_9__["Card"].getInstance();

          _services_item_variation__WEBPACK_IMPORTED_MODULE_21__["ItemVariation"].getInstance();

          this.loadCart();
        }
      }, {
        key: "setupNativeAudio",
        value: function setupNativeAudio() {
          var path = './assets/audio/pristine.mp3';

          if (this.platform.is('ios')) {
            path = './assets/audio/pristine.m4r';
          }

          this.audioService.preload('ping', path);
        }
      }, {
        key: "setupFacebookSdk",
        value: function setupFacebookSdk() {
          if (!this.platform.is('hybrid')) {
            // Load the Facebook API asynchronous when the window starts loading
            this.objWindow.fbAsyncInit = function () {
              parse__WEBPACK_IMPORTED_MODULE_17__["FacebookUtils"].init({
                appId: src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].fbId,
                cookie: true,
                xfbml: true,
                version: 'v1.0'
              });
            };

            (function (d, s, id) {
              var js,
                  fjs = d.getElementsByTagName(s)[0];

              if (d.getElementById(id)) {
                return;
              }

              js = d.createElement(s);
              js.id = id;
              js.src = "//connect.facebook.net/en_US/all.js";
              fjs.parentNode.insertBefore(js, fjs);
            })(document, 'script', 'facebook-jssdk');
          }
        }
      }, {
        key: "setupHeaderColor",
        value: function setupHeaderColor() {
          this.headerColor.tint(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].androidHeaderColor);
        }
      }, {
        key: "setupDesktopAnimations",
        value: function setupDesktopAnimations() {
          if (this.platform.is('desktop')) {
            var config = new _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Config"]();
            config.set('rippleEffect', false);
            config.set('animated', false);
          }
        }
      }, {
        key: "setupLanguage",
        value: function setupLanguage() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var supportedLangs, browserLang, lang;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.translate.setDefaultLang(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].defaultLang);
                    _context2.prev = 1;
                    supportedLangs = ['en', 'es', 'ar'];
                    browserLang = navigator.language.substr(0, 2);
                    _context2.next = 6;
                    return this.localStorage.getLang();

                  case 6:
                    lang = _context2.sent;

                    if (lang === null && supportedLangs.indexOf(browserLang) !== -1) {
                      lang = browserLang;
                    }

                    lang = lang || src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].defaultLang;

                    if (lang === 'ar') {
                      document.dir = 'rtl';
                    } else {
                      document.dir = 'ltr';
                    }

                    this.localStorage.setLang(lang);
                    this.translate.use(lang);
                    this.preference.lang = lang;
                    _context2.next = 18;
                    break;

                  case 15:
                    _context2.prev = 15;
                    _context2.t0 = _context2["catch"](1);
                    console.warn(_context2.t0);

                  case 18:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this, [[1, 15]]);
          }));
        }
      }, {
        key: "setupEvents",
        value: function setupEvents() {
          var _this = this;

          window.addEventListener('cart:updated', function (e) {
            _this.updateCartCount(e.detail);
          });
          window.addEventListener('cart:expired', function (e) {
            var cart = e.detail;

            _this.updateCartCount(cart);

            cart.save({
              status: 'active'
            });

            _this.translate.get('CART_EXPIRED').subscribe(function (str) {
              return _this.showToast(str);
            });
          });
          window.addEventListener('user:login', function (e) {
            _this.user = e.detail;

            _this.updateInstallation();

            _this.loadCart();
          });
          window.addEventListener('user:logout', function (e) {
            _this.logout();
          });
        }
      }, {
        key: "setupStatusBar",
        value: function setupStatusBar() {
          if (this.platform.is('ios')) {
            this.statusBar.overlaysWebView(true);
            this.statusBar.styleDefault();
          } else {
            this.statusBar.backgroundColorByHexString(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].androidHeaderColor);
          }
        }
      }, {
        key: "loadCart",
        value: function loadCart() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var cart;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.prev = 0;

                    if (!_services_user__WEBPACK_IMPORTED_MODULE_5__["User"].getCurrent()) {
                      _context3.next = 7;
                      break;
                    }

                    _context3.next = 4;
                    return this.cartService.getOne();

                  case 4:
                    cart = _context3.sent;
                    cart = cart || new _services_cart__WEBPACK_IMPORTED_MODULE_11__["Cart"]();
                    this.updateCartCount(cart);

                  case 7:
                    _context3.next = 12;
                    break;

                  case 9:
                    _context3.prev = 9;
                    _context3.t0 = _context3["catch"](0);

                    if (_context3.t0.code === 209) {
                      this.logout({
                        silent: true
                      });
                    }

                  case 12:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this, [[0, 9]]);
          }));
        }
      }, {
        key: "updateCartCount",
        value: function updateCartCount(cart) {
          this.cartCount = cart.items.length;
          this.preference.cartCount = this.cartCount;
        }
      }, {
        key: "setupPush",
        value: function setupPush() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this2 = this;

            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    if (this.objWindow.ParsePushPlugin) {
                      this.objWindow.ParsePushPlugin.resetBadge();
                      this.platform.resume.subscribe(function () {
                        _this2.objWindow.ParsePushPlugin.resetBadge();
                      });
                      this.objWindow.ParsePushPlugin.on('receivePN:news', function (pn) {
                        console.log('[receivePN] News Notification:' + JSON.stringify(pn));
                      });
                      this.objWindow.ParsePushPlugin.on('receivePN:order', function (pn) {
                        console.log('[receivePN] Order Notification:' + JSON.stringify(pn));
                      });
                      this.objWindow.ParsePushPlugin.on('receivePN', function (pn) {
                        console.log('[receivePN] Push notification:' + JSON.stringify(pn));

                        _this2.showNotification(pn);

                        _this2.audioService.play('ping');

                        _this2.objWindow.ParsePushPlugin.resetBadge();
                      });
                      this.objWindow.ParsePushPlugin.on('openPN', function (pn) {
                        console.log('[openPN] Notification:' + JSON.stringify(pn));
                        var page = null;
                        var queryParams = null;

                        if (pn.brandId) {
                          page = '/1/home/items';
                          queryParams = {
                            brand: pn.brandId
                          };
                        } else if (pn.categoryId) {
                          page = '/1/home/items';
                          queryParams = {
                            cat: pn.categoryId
                          };
                        } else if (pn.subcategoryId) {
                          page = '/1/home/items';
                          queryParams = {
                            subcat: pn.subcategoryId
                          };
                        } else if (pn.itemId) {
                          page = '/1/home/items/' + pn.itemId;
                          queryParams = {};
                        }

                        if (page) {
                          _this2.ngZone.run(function () {
                            _this2.router.navigate([page], {
                              queryParams: queryParams
                            });
                          });
                        }

                        _this2.objWindow.ParsePushPlugin.resetBadge();
                      });
                      this.objWindow.ParsePushPlugin.initialize();
                      this.updateInstallation();
                    }

                  case 1:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "updateInstallation",
        value: function updateInstallation() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var payload, id, obj, res;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.prev = 0;

                    if (!this.objWindow.ParsePushPlugin) {
                      _context5.next = 15;
                      break;
                    }

                    payload = {
                      user: null
                    };
                    _context5.next = 5;
                    return this.installationService.getId();

                  case 5:
                    id = _context5.sent;
                    _context5.next = 8;
                    return this.installationService.getOne(id);

                  case 8:
                    obj = _context5.sent;

                    if (obj) {
                      payload.isPushEnabled = obj.isPushEnabled;
                      this.localStorage.setIsPushEnabled(obj.isPushEnabled);
                      this.preference.isPushEnabled = obj.isPushEnabled;
                    }

                    if (this.user) {
                      payload.user = this.user.toPointer();
                    }

                    _context5.next = 13;
                    return this.installationService.save(id, payload);

                  case 13:
                    res = _context5.sent;
                    console.log('Installation updated', res);

                  case 15:
                    _context5.next = 20;
                    break;

                  case 17:
                    _context5.prev = 17;
                    _context5.t0 = _context5["catch"](0);
                    console.warn(_context5.t0);

                  case 20:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this, [[0, 17]]);
          }));
        }
      }, {
        key: "showNotification",
        value: function showNotification(notification) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var _this3 = this;

            var viewText, buttons;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.translate.get('VIEW').toPromise();

                  case 2:
                    viewText = _context6.sent;
                    buttons = null;

                    if (notification.brandId) {
                      buttons = [{
                        side: 'end',
                        text: viewText,
                        handler: function handler() {
                          _this3.ngZone.run(function () {
                            _this3.router.navigate(['/1/home/items'], {
                              queryParams: {
                                brand: notification.brandId
                              }
                            });
                          });
                        }
                      }];
                    } else if (notification.categoryId) {
                      buttons = [{
                        side: 'end',
                        text: viewText,
                        handler: function handler() {
                          _this3.ngZone.run(function () {
                            _this3.router.navigate(['/1/home/items'], {
                              queryParams: {
                                cat: notification.categoryId
                              }
                            });
                          });
                        }
                      }];
                    } else if (notification.subcategoryId) {
                      buttons = [{
                        side: 'end',
                        text: viewText,
                        handler: function handler() {
                          _this3.ngZone.run(function () {
                            _this3.router.navigate(['/1/home/items'], {
                              queryParams: {
                                subcat: notification.subcategoryId
                              }
                            });
                          });
                        }
                      }];
                    } else if (notification.itemId) {
                      buttons = [{
                        side: 'end',
                        text: viewText,
                        handler: function handler() {
                          _this3.ngZone.run(function () {
                            _this3.router.navigate(['/1/home/items/' + notification.itemId]);
                          });
                        }
                      }];
                    }

                    this.showToast(notification.alert, buttons, 5000);

                  case 6:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "showAlert",
        value: function showAlert() {
          var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
          var okText = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'OK';
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var alert;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.alertCtrl.create({
                      header: title,
                      message: message,
                      buttons: [okText]
                    });

                  case 2:
                    alert = _context7.sent;
                    _context7.next = 5;
                    return alert.present();

                  case 5:
                    return _context7.abrupt("return", _context7.sent);

                  case 6:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "showConfirm",
        value: function showConfirm(message) {
          var _this4 = this;

          return new Promise(function (resolve, reject) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var str, confirm;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return this.translate.get(['OK', 'CANCEL']).toPromise();

                    case 2:
                      str = _context8.sent;
                      _context8.next = 5;
                      return this.alertCtrl.create({
                        header: '',
                        message: message,
                        buttons: [{
                          text: str.CANCEL,
                          role: 'cancel',
                          handler: function handler() {
                            return reject(false);
                          }
                        }, {
                          text: str.OK,
                          handler: function handler() {
                            return resolve(true);
                          }
                        }]
                      });

                    case 5:
                      confirm = _context8.sent;
                      confirm.present();

                    case 7:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          });
        }
      }, {
        key: "showLoadingView",
        value: function showLoadingView() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            var str;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return this.translate.get('LOADING').toPromise();

                  case 2:
                    str = _context9.sent;
                    _context9.next = 5;
                    return this.loadingCtrl.create({
                      message: str
                    });

                  case 5:
                    this.loader = _context9.sent;
                    _context9.next = 8;
                    return this.loader.present();

                  case 8:
                    return _context9.abrupt("return", _context9.sent);

                  case 9:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "dismissLoadingView",
        value: function dismissLoadingView() {
          if (this.loader) {
            this.loader.dismiss()["catch"](function (e) {
              return console.log('ERROR CATCH: LoadingController dismiss', e);
            });
          }
        }
      }, {
        key: "showToast",
        value: function showToast(message) {
          var buttons = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3000;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            var closeText, toast;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return this.translate.get('CLOSE').toPromise();

                  case 2:
                    closeText = _context10.sent;
                    _context10.next = 5;
                    return this.toastCtrl.create({
                      message: message,
                      duration: duration,
                      color: 'primary',
                      position: 'bottom',
                      cssClass: 'tabs-bottom',
                      buttons: buttons || [{
                        text: closeText,
                        role: 'cancel'
                      }]
                    });

                  case 5:
                    toast = _context10.sent;
                    _context10.next = 8;
                    return toast.present();

                  case 8:
                    return _context10.abrupt("return", _context10.sent);

                  case 9:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }, {
        key: "goTo",
        value: function goTo(page) {
          this.router.navigate([page]);
        }
      }, {
        key: "logout",
        value: function logout() {
          var ev = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
            var _this5 = this;

            var str, authData;
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.prev = 0;

                    if (ev.silent) {
                      _context11.next = 7;
                      break;
                    }

                    _context11.next = 4;
                    return this.translate.get('LOGOUT_CONFIRMATION').toPromise();

                  case 4:
                    str = _context11.sent;
                    _context11.next = 7;
                    return this.showConfirm(str);

                  case 7:
                    authData = this.user.attributes.authData;
                    _context11.next = 10;
                    return this.showLoadingView();

                  case 10:
                    _context11.next = 12;
                    return this.userService.logout();

                  case 12:
                    window.dispatchEvent(new CustomEvent('user:loggedOut'));
                    this.user = null;
                    this.goTo('/');
                    this.updateCartCount(new _services_cart__WEBPACK_IMPORTED_MODULE_11__["Cart"]());
                    this.dismissLoadingView();
                    this.updateInstallation();
                    this.translate.get('LOGGED_OUT').subscribe(function (str) {
                      return _this5.showToast(str);
                    });

                    if (this.platform.is("hybrid")) {
                      if (authData && authData.google) {
                        this.googlePlus.disconnect();
                      }
                    } else {
                      if (authData && authData.google) {
                        this.authService.signOut(true);
                      }
                    }

                    _context11.next = 25;
                    break;

                  case 22:
                    _context11.prev = 22;
                    _context11.t0 = _context11["catch"](0);
                    this.dismissLoadingView();

                  case 25:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this, [[0, 22]]);
          }));
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_19__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_preference__WEBPACK_IMPORTED_MODULE_10__["Preference"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_cart__WEBPACK_IMPORTED_MODULE_11__["Cart"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_native_header_color_ngx__WEBPACK_IMPORTED_MODULE_16__["HeaderColor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_local_storage__WEBPACK_IMPORTED_MODULE_13__["LocalStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user__WEBPACK_IMPORTED_MODULE_5__["User"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_window_ref__WEBPACK_IMPORTED_MODULE_15__["WindowRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_installation__WEBPACK_IMPORTED_MODULE_14__["Installation"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nomadreservations_ngx_stripe__WEBPACK_IMPORTED_MODULE_20__["StripeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_23__["GooglePlus"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](angularx_social_login__WEBPACK_IMPORTED_MODULE_22__["SocialAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_audio__WEBPACK_IMPORTED_MODULE_24__["AudioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-app");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonApp"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRouterOutlet"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: 'app.component.html'
        }]
      }], function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_19__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }, {
          type: _services_preference__WEBPACK_IMPORTED_MODULE_10__["Preference"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }, {
          type: _services_cart__WEBPACK_IMPORTED_MODULE_11__["Cart"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
        }, {
          type: _ionic_native_header_color_ngx__WEBPACK_IMPORTED_MODULE_16__["HeaderColor"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateService"]
        }, {
          type: _services_local_storage__WEBPACK_IMPORTED_MODULE_13__["LocalStorage"]
        }, {
          type: _services_user__WEBPACK_IMPORTED_MODULE_5__["User"]
        }, {
          type: _services_window_ref__WEBPACK_IMPORTED_MODULE_15__["WindowRef"]
        }, {
          type: _services_installation__WEBPACK_IMPORTED_MODULE_14__["Installation"]
        }, {
          type: _nomadreservations_ngx_stripe__WEBPACK_IMPORTED_MODULE_20__["StripeService"]
        }, {
          type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_23__["GooglePlus"]
        }, {
          type: angularx_social_login__WEBPACK_IMPORTED_MODULE_22__["SocialAuthService"]
        }, {
          type: _services_audio__WEBPACK_IMPORTED_MODULE_24__["AudioService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: HttpLoaderFactory, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    var _fortawesome_fontawes;

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function () {
      return HttpLoaderFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/app-version/ngx */
    "./node_modules/@ionic-native/app-version/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic-native/device/ngx */
    "./node_modules/@ionic-native/device/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ionic-native/facebook/ngx */
    "./node_modules/@ionic-native/facebook/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @ionic-native/native-audio/ngx */
    "./node_modules/@ionic-native/native-audio/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_sign_in_with_apple_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ionic-native/sign-in-with-apple/ngx */
    "./node_modules/@ionic-native/sign-in-with-apple/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @ionic-native/social-sharing/ngx */
    "./node_modules/@ionic-native/social-sharing/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_header_color_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @ionic-native/header-color/ngx */
    "./node_modules/@ionic-native/header-color/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @ionic-native/safari-view-controller/ngx */
    "./node_modules/@ionic-native/safari-view-controller/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @ionic-native/google-plus/ngx */
    "./node_modules/@ionic-native/google-plus/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @fortawesome/fontawesome-svg-core */
    "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
    /* harmony import */


    var _fortawesome_free_brands_svg_icons_faFacebookF__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @fortawesome/free-brands-svg-icons/faFacebookF */
    "./node_modules/@fortawesome/free-brands-svg-icons/faFacebookF.js");
    /* harmony import */


    var _fortawesome_free_brands_svg_icons_faFacebookF__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons_faFacebookF__WEBPACK_IMPORTED_MODULE_21__);
    /* harmony import */


    var _fortawesome_free_brands_svg_icons_faTwitter__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @fortawesome/free-brands-svg-icons/faTwitter */
    "./node_modules/@fortawesome/free-brands-svg-icons/faTwitter.js");
    /* harmony import */


    var _fortawesome_free_brands_svg_icons_faTwitter__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons_faTwitter__WEBPACK_IMPORTED_MODULE_22__);
    /* harmony import */


    var _fortawesome_free_brands_svg_icons_faWhatsapp__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @fortawesome/free-brands-svg-icons/faWhatsapp */
    "./node_modules/@fortawesome/free-brands-svg-icons/faWhatsapp.js");
    /* harmony import */


    var _fortawesome_free_brands_svg_icons_faWhatsapp__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons_faWhatsapp__WEBPACK_IMPORTED_MODULE_23__);
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_24__);
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _nomadreservations_ngx_stripe__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @nomadreservations/ngx-stripe */
    "./node_modules/@nomadreservations/ngx-stripe/__ivy_ngcc__/fesm2015/nomadreservations-ngx-stripe.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @ngx-translate/http-loader */
    "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");
    /* harmony import */


    var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ng-lazyload-image */
    "./node_modules/ng-lazyload-image/__ivy_ngcc__/fesm2015/ng-lazyload-image.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var ngx_img_fallback__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ngx-img-fallback */
    "./node_modules/ngx-img-fallback/__ivy_ngcc__/fesm2015/ngx-img-fallback.js");
    /* harmony import */


    var _angular_service_worker__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/service-worker */
    "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var angularx_social_login__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! angularx-social-login */
    "./node_modules/angularx-social-login/__ivy_ngcc__/fesm2015/angularx-social-login.js");
    /* harmony import */


    var _angular_common_locales_ar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @angular/common/locales/ar */
    "./node_modules/@angular/common/locales/ar.js");
    /* harmony import */


    var _angular_common_locales_ar__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_ar__WEBPACK_IMPORTED_MODULE_36__);
    /* harmony import */


    var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! @angular/common/locales/es */
    "./node_modules/@angular/common/locales/es.js");
    /* harmony import */


    var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_37__);

    var icons = [_fortawesome_free_brands_svg_icons_faFacebookF__WEBPACK_IMPORTED_MODULE_21__["faFacebookF"], _fortawesome_free_brands_svg_icons_faTwitter__WEBPACK_IMPORTED_MODULE_22__["faTwitter"], _fortawesome_free_brands_svg_icons_faWhatsapp__WEBPACK_IMPORTED_MODULE_23__["faWhatsapp"]];

    (_fortawesome_fontawes = _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_20__["library"]).add.apply(_fortawesome_fontawes, icons);

    function HttpLoaderFactory(http) {
      return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_29__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
    }

    Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["registerLocaleData"])(_angular_common_locales_ar__WEBPACK_IMPORTED_MODULE_36___default.a, 'ar');
    Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["registerLocaleData"])(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_37___default.a, 'es');

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_26__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_7__["SplashScreen"], _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_9__["AppVersion"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_10__["Camera"], _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_11__["Device"], _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_12__["Facebook"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_13__["InAppBrowser"], _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_14__["NativeAudio"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_16__["SocialSharing"], _ionic_native_header_color_ngx__WEBPACK_IMPORTED_MODULE_17__["HeaderColor"], _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_18__["SafariViewController"], _ionic_native_sign_in_with_apple_ngx__WEBPACK_IMPORTED_MODULE_15__["SignInWithApple"], _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_19__["GooglePlus"], {
        provide: 'SocialAuthServiceConfig',
        useValue: {
          autoLogin: false,
          providers: [{
            id: angularx_social_login__WEBPACK_IMPORTED_MODULE_35__["GoogleLoginProvider"].PROVIDER_ID,
            provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_35__["GoogleLoginProvider"](_environments_environment__WEBPACK_IMPORTED_MODULE_34__["environment"].googleClientId)
          }]
        }
      }, {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicRouteStrategy"]
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"].forRoot({
        backButtonText: ''
      }), _nomadreservations_ngx_stripe__WEBPACK_IMPORTED_MODULE_27__["NgxStripeModule"].forRoot(_environments_environment__WEBPACK_IMPORTED_MODULE_34__["environment"].stripePublicKey), _app_routing_module__WEBPACK_IMPORTED_MODULE_25__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], angularx_social_login__WEBPACK_IMPORTED_MODULE_35__["SocialLoginModule"], ng_lazyload_image__WEBPACK_IMPORTED_MODULE_30__["LazyLoadImageModule"].forRoot({
        preset: ng_lazyload_image__WEBPACK_IMPORTED_MODULE_30__["scrollPreset"]
      }), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__["TranslateModule"].forRoot({
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__["TranslateLoader"],
          useFactory: HttpLoaderFactory,
          deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]]
        }
      }), _ionic_storage__WEBPACK_IMPORTED_MODULE_31__["IonicStorageModule"].forRoot(), ngx_img_fallback__WEBPACK_IMPORTED_MODULE_32__["ImgFallbackModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_33__["ServiceWorkerModule"].register('ngsw-worker.js', {
        enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_34__["environment"].production
      })]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_26__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _nomadreservations_ngx_stripe__WEBPACK_IMPORTED_MODULE_27__["NgxStripeModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_25__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], angularx_social_login__WEBPACK_IMPORTED_MODULE_35__["SocialLoginModule"], ng_lazyload_image__WEBPACK_IMPORTED_MODULE_30__["LazyLoadImageModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__["TranslateModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_31__["IonicStorageModule"], ngx_img_fallback__WEBPACK_IMPORTED_MODULE_32__["ImgFallbackModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_33__["ServiceWorkerModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_26__["AppComponent"]],
          entryComponents: [],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"].forRoot({
            backButtonText: ''
          }), _nomadreservations_ngx_stripe__WEBPACK_IMPORTED_MODULE_27__["NgxStripeModule"].forRoot(_environments_environment__WEBPACK_IMPORTED_MODULE_34__["environment"].stripePublicKey), _app_routing_module__WEBPACK_IMPORTED_MODULE_25__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], angularx_social_login__WEBPACK_IMPORTED_MODULE_35__["SocialLoginModule"], ng_lazyload_image__WEBPACK_IMPORTED_MODULE_30__["LazyLoadImageModule"].forRoot({
            preset: ng_lazyload_image__WEBPACK_IMPORTED_MODULE_30__["scrollPreset"]
          }), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__["TranslateModule"].forRoot({
            loader: {
              provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__["TranslateLoader"],
              useFactory: HttpLoaderFactory,
              deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]]
            }
          }), _ionic_storage__WEBPACK_IMPORTED_MODULE_31__["IonicStorageModule"].forRoot(), ngx_img_fallback__WEBPACK_IMPORTED_MODULE_32__["ImgFallbackModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_33__["ServiceWorkerModule"].register('ngsw-worker.js', {
            enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_34__["environment"].production
          })],
          providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_7__["SplashScreen"], _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_9__["AppVersion"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_10__["Camera"], _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_11__["Device"], _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_12__["Facebook"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_13__["InAppBrowser"], _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_14__["NativeAudio"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_16__["SocialSharing"], _ionic_native_header_color_ngx__WEBPACK_IMPORTED_MODULE_17__["HeaderColor"], _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_18__["SafariViewController"], _ionic_native_sign_in_with_apple_ngx__WEBPACK_IMPORTED_MODULE_15__["SignInWithApple"], _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_19__["GooglePlus"], {
            provide: 'SocialAuthServiceConfig',
            useValue: {
              autoLogin: false,
              providers: [{
                id: angularx_social_login__WEBPACK_IMPORTED_MODULE_35__["GoogleLoginProvider"].PROVIDER_ID,
                provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_35__["GoogleLoginProvider"](_environments_environment__WEBPACK_IMPORTED_MODULE_34__["environment"].googleClientId)
              }]
            }
          }, {
            provide: _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouteReuseStrategy"],
            useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicRouteStrategy"]
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_26__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/audio.ts":
  /*!***********************************!*\
    !*** ./src/app/services/audio.ts ***!
    \***********************************/

  /*! exports provided: AudioService */

  /***/
  function srcAppServicesAudioTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AudioService", function () {
      return AudioService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic-native/native-audio/ngx */
    "./node_modules/@ionic-native/native-audio/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var AudioService = /*#__PURE__*/function () {
      function AudioService(nativeAudio, platform) {
        _classCallCheck(this, AudioService);

        this.nativeAudio = nativeAudio;
        this.audioType = 'html5';
        this.sounds = [];

        if (platform.is('cordova') && platform.is('ios')) {
          this.audioType = 'native';
        }
      }

      _createClass(AudioService, [{
        key: "preload",
        value: function preload(key, asset) {
          if (this.audioType === 'html5') {
            var audio = {
              key: key,
              asset: asset,
              type: 'html5'
            };
            this.sounds.push(audio);
          } else {
            this.nativeAudio.preloadComplex(key, asset, 0.3, 1, 0);
            var _audio = {
              key: key,
              asset: key,
              type: 'native'
            };
            this.sounds.push(_audio);
          }
        }
      }, {
        key: "play",
        value: function play(key) {
          var audio = this.sounds.find(function (sound) {
            return sound.key === key;
          });

          if (audio.type === 'html5') {
            var audioAsset = new Audio(audio.asset);
            audioAsset.volume = 0.3;
            audioAsset.play();
          } else {
            this.nativeAudio.play(audio.asset).then(function (res) {
              console.log(res);
            }, function (err) {
              console.log(err);
            });
          }
        }
      }]);

      return AudioService;
    }();

    AudioService.ɵfac = function AudioService_Factory(t) {
      return new (t || AudioService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_1__["NativeAudio"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]));
    };

    AudioService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AudioService,
      factory: AudioService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AudioService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_1__["NativeAudio"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/brand.ts":
  /*!***********************************!*\
    !*** ./src/app/services/brand.ts ***!
    \***********************************/

  /*! exports provided: Brand */

  /***/
  function srcAppServicesBrandTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Brand", function () {
      return Brand;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var parse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! parse */
    "./node_modules/parse/index.js");
    /* harmony import */


    var parse__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./category */
    "./src/app/services/category.ts");

    var Brand = /*#__PURE__*/function (_parse__WEBPACK_IMPOR) {
      _inherits(Brand, _parse__WEBPACK_IMPOR);

      var _super = _createSuper(Brand);

      function Brand() {
        _classCallCheck(this, Brand);

        return _super.call(this, 'Brand');
      }

      _createClass(Brand, [{
        key: "load",
        value: function load() {
          var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var query = new parse__WEBPACK_IMPORTED_MODULE_1__["Query"](Brand);

          if (Array.isArray(params.categories)) {
            var categories = params.categories.map(function (id) {
              var obj = new _category__WEBPACK_IMPORTED_MODULE_2__["Category"]();
              obj.id = id;
              return obj;
            });

            if (categories.length) {
              query.containedIn('categories', categories);
            }
          } else if (params.categories && typeof params.categories === 'string') {
            var category = new _category__WEBPACK_IMPORTED_MODULE_2__["Category"]();
            category.id = params.categories;
            query.equalTo('categories', category);
          }

          query.equalTo('status', 'Active');
          query.ascending('name');
          query.doesNotExist('deletedAt');
          return query.find();
        }
      }, {
        key: "name",
        get: function get() {
          return this.get('name');
        }
      }, {
        key: "status",
        get: function get() {
          return this.get('status');
        }
      }, {
        key: "image",
        get: function get() {
          return this.get('image');
        }
      }, {
        key: "imageThumb",
        get: function get() {
          return this.get('imageThumb');
        }
      }], [{
        key: "getInstance",
        value: function getInstance() {
          return this;
        }
      }]);

      return Brand;
    }(parse__WEBPACK_IMPORTED_MODULE_1__["Object"]);

    Brand.ɵfac = function Brand_Factory(t) {
      return new (t || Brand)();
    };

    Brand.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: Brand,
      factory: Brand.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Brand, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();

    parse__WEBPACK_IMPORTED_MODULE_1__["Object"].registerSubclass('Brand', Brand);
    /***/
  },

  /***/
  "./src/app/services/card.ts":
  /*!**********************************!*\
    !*** ./src/app/services/card.ts ***!
    \**********************************/

  /*! exports provided: Card */

  /***/
  function srcAppServicesCardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Card", function () {
      return Card;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var parse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! parse */
    "./node_modules/parse/index.js");
    /* harmony import */


    var parse__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_1__);

    var Card = /*#__PURE__*/function (_parse__WEBPACK_IMPOR2) {
      _inherits(Card, _parse__WEBPACK_IMPOR2);

      var _super2 = _createSuper(Card);

      function Card() {
        _classCallCheck(this, Card);

        return _super2.call(this, 'Card');
      }

      _createClass(Card, [{
        key: "formatBrand",
        value: function formatBrand() {
          return this.brand.toLowerCase().replace(' ', '_');
        }
      }, {
        key: "load",
        value: function load() {
          var query = new parse__WEBPACK_IMPORTED_MODULE_1__["Query"](Card);
          query.equalTo('user', parse__WEBPACK_IMPORTED_MODULE_1__["User"].current());
          query.descending('isDefault');
          query.addAscending('createdAt');
          return query.find();
        }
      }, {
        key: "create",
        value: function create() {
          var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var obj = new Card();
          return obj.save(params);
        }
      }, {
        key: "delete",
        value: function _delete(card) {
          return card.destroy();
        }
      }, {
        key: "toString",
        value: function toString() {
          return "&#8226;&#8226;&#8226;&#8226; ".concat(this.last4);
        }
      }, {
        key: "stripeToken",
        get: function get() {
          return this.get('stripeToken');
        }
      }, {
        key: "brand",
        get: function get() {
          return this.get('brand');
        }
      }, {
        key: "expMonth",
        get: function get() {
          return this.get('expMonth');
        }
      }, {
        key: "expYear",
        get: function get() {
          return this.get('expYear');
        }
      }, {
        key: "last4",
        get: function get() {
          return this.get('last4');
        }
      }, {
        key: "isDefault",
        get: function get() {
          return this.get('isDefault');
        }
      }], [{
        key: "getInstance",
        value: function getInstance() {
          return this;
        }
      }]);

      return Card;
    }(parse__WEBPACK_IMPORTED_MODULE_1__["Object"]);

    Card.ɵfac = function Card_Factory(t) {
      return new (t || Card)();
    };

    Card.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: Card,
      factory: Card.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Card, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();

    parse__WEBPACK_IMPORTED_MODULE_1__["Object"].registerSubclass('Card', Card);
    /***/
  },

  /***/
  "./src/app/services/cart.ts":
  /*!**********************************!*\
    !*** ./src/app/services/cart.ts ***!
    \**********************************/

  /*! exports provided: Cart */

  /***/
  function srcAppServicesCartTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Cart", function () {
      return Cart;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var parse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! parse */
    "./node_modules/parse/index.js");
    /* harmony import */


    var parse__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_1__);

    var Cart = /*#__PURE__*/function (_parse__WEBPACK_IMPOR3) {
      _inherits(Cart, _parse__WEBPACK_IMPOR3);

      var _super3 = _createSuper(Cart);

      function Cart() {
        var _this6;

        _classCallCheck(this, Cart);

        _this6 = _super3.call(this, 'Cart');
        _this6.items = _this6.items || [];
        return _this6;
      }

      _createClass(Cart, [{
        key: "new",
        value: function _new() {
          return new Cart();
        }
      }, {
        key: "empty",
        value: function empty() {
          return this.items.length === 0;
        }
      }, {
        key: "applyCoupon",
        value: function applyCoupon(couponCode) {
          return parse__WEBPACK_IMPORTED_MODULE_1__["Cloud"].run('applyCoupon', {
            couponCode: couponCode
          });
        }
      }, {
        key: "removeCoupon",
        value: function removeCoupon() {
          return parse__WEBPACK_IMPORTED_MODULE_1__["Cloud"].run('removeCoupon');
        }
      }, {
        key: "getOne",
        value: function getOne() {
          var query = new parse__WEBPACK_IMPORTED_MODULE_1__["Query"](Cart);
          query.include('customer');
          query.equalTo('customer', parse__WEBPACK_IMPORTED_MODULE_1__["User"].current());
          return query.first();
        }
      }, {
        key: "calculateSubtotal",
        value: function calculateSubtotal() {
          var subtotal = this.items.reduce(function (sum, item) {
            return sum + item.amount;
          }, 0);
          return subtotal;
        }
      }, {
        key: "items",
        get: function get() {
          return this.get('items');
        },
        set: function set(val) {
          this.set('items', val);
        }
      }, {
        key: "subtotal",
        get: function get() {
          return this.get('subtotal') || 0;
        },
        set: function set(val) {
          this.set('subtotal', val);
        }
      }, {
        key: "shipping",
        get: function get() {
          return this.get('shipping');
        },
        set: function set(val) {
          this.set('shipping', val);
        }
      }, {
        key: "shippingFee",
        get: function get() {
          return this.get('shippingFee') || 0;
        },
        set: function set(val) {
          this.set('shippingFee', val);
        }
      }, {
        key: "total",
        get: function get() {
          return this.get('total') || 0;
        },
        set: function set(val) {
          this.set('total', val);
        }
      }, {
        key: "customer",
        get: function get() {
          return this.get('customer');
        }
      }, {
        key: "status",
        get: function get() {
          return this.get('status');
        },
        set: function set(val) {
          this.set('status', val);
        }
      }, {
        key: "coupon",
        get: function get() {
          return this.get('coupon');
        }
      }]);

      return Cart;
    }(parse__WEBPACK_IMPORTED_MODULE_1__["Object"]);

    Cart.ɵfac = function Cart_Factory(t) {
      return new (t || Cart)();
    };

    Cart.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: Cart,
      factory: Cart.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Cart, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();

    parse__WEBPACK_IMPORTED_MODULE_1__["Object"].registerSubclass('Cart', Cart);
    /***/
  },

  /***/
  "./src/app/services/category.ts":
  /*!**************************************!*\
    !*** ./src/app/services/category.ts ***!
    \**************************************/

  /*! exports provided: Category */

  /***/
  function srcAppServicesCategoryTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Category", function () {
      return Category;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var parse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! parse */
    "./node_modules/parse/index.js");
    /* harmony import */


    var parse__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_1__);

    var Category = /*#__PURE__*/function (_parse__WEBPACK_IMPOR4) {
      _inherits(Category, _parse__WEBPACK_IMPOR4);

      var _super4 = _createSuper(Category);

      function Category() {
        _classCallCheck(this, Category);

        return _super4.call(this, 'Category');
      }

      _createClass(Category, [{
        key: "load",
        value: function load() {
          var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var query = new parse__WEBPACK_IMPORTED_MODULE_1__["Query"](Category);

          if (params.canonical) {
            query.contains('canonical', params.canonical);
          }

          query.equalTo('status', 'Active');
          query.ascending('name');
          query.doesNotExist('deletedAt');
          return query.find();
        }
      }, {
        key: "name",
        get: function get() {
          return this.get('name');
        }
      }, {
        key: "status",
        get: function get() {
          return this.get('status');
        }
      }, {
        key: "slug",
        get: function get() {
          return this.id + '/' + (this.get('slug') || '');
        }
      }, {
        key: "image",
        get: function get() {
          return this.get('image');
        }
      }, {
        key: "imageThumb",
        get: function get() {
          return this.get('imageThumb');
        }
      }, {
        key: "subCategoryCount",
        get: function get() {
          return this.get('subCategoryCount');
        }
      }], [{
        key: "getInstance",
        value: function getInstance() {
          return this;
        }
      }]);

      return Category;
    }(parse__WEBPACK_IMPORTED_MODULE_1__["Object"]);

    Category.ɵfac = function Category_Factory(t) {
      return new (t || Category)();
    };

    Category.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: Category,
      factory: Category.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Category, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();

    parse__WEBPACK_IMPORTED_MODULE_1__["Object"].registerSubclass('Category', Category);
    /***/
  },

  /***/
  "./src/app/services/installation.ts":
  /*!******************************************!*\
    !*** ./src/app/services/installation.ts ***!
    \******************************************/

  /*! exports provided: Installation */

  /***/
  function srcAppServicesInstallationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Installation", function () {
      return Installation;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _window_ref__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./window-ref */
    "./src/app/services/window-ref.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var Installation = /*#__PURE__*/function () {
      function Installation(http, windowRef) {
        _classCallCheck(this, Installation);

        this.http = http;
        this.windowRef = windowRef;
      }

      _createClass(Installation, [{
        key: "getId",
        value: function getId() {
          var _this7 = this;

          return new Promise(function (resolve, reject) {
            _this7.windowRef.nativeWindow.ParsePushPlugin.getInstallationObjectId(function (id) {
              return resolve(id);
            }, function (err) {
              return reject(err);
            });
          });
        }
      }, {
        key: "getOne",
        value: function getOne(id) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('X-Parse-Application-Id', src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].appId);
          var url = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverUrl, "/installations/").concat(id);
          return this.http.get(url, {
            headers: headers
          }).toPromise();
        }
      }, {
        key: "save",
        value: function save(id) {
          var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('X-Parse-Application-Id', src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].appId);
          var bodyString = JSON.stringify(data);
          var url = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverUrl, "/installations/").concat(id);
          return this.http.put(url, bodyString, {
            headers: headers
          }).toPromise();
        }
      }]);

      return Installation;
    }();

    Installation.ɵfac = function Installation_Factory(t) {
      return new (t || Installation)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_window_ref__WEBPACK_IMPORTED_MODULE_2__["WindowRef"]));
    };

    Installation.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: Installation,
      factory: Installation.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Installation, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _window_ref__WEBPACK_IMPORTED_MODULE_2__["WindowRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/item-variation.ts":
  /*!********************************************!*\
    !*** ./src/app/services/item-variation.ts ***!
    \********************************************/

  /*! exports provided: ItemVariation */

  /***/
  function srcAppServicesItemVariationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemVariation", function () {
      return ItemVariation;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var parse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! parse */
    "./node_modules/parse/index.js");
    /* harmony import */


    var parse__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_1__);

    var ItemVariation = /*#__PURE__*/function (_parse__WEBPACK_IMPOR5) {
      _inherits(ItemVariation, _parse__WEBPACK_IMPOR5);

      var _super5 = _createSuper(ItemVariation);

      function ItemVariation() {
        _classCallCheck(this, ItemVariation);

        return _super5.call(this, 'ItemVariation');
      }

      _createClass(ItemVariation, [{
        key: "name",
        get: function get() {
          return this.get('name');
        }
      }, {
        key: "isActive",
        get: function get() {
          return this.get('isActive');
        }
      }], [{
        key: "getInstance",
        value: function getInstance() {
          return this;
        }
      }]);

      return ItemVariation;
    }(parse__WEBPACK_IMPORTED_MODULE_1__["Object"]);

    ItemVariation.ɵfac = function ItemVariation_Factory(t) {
      return new (t || ItemVariation)();
    };

    ItemVariation.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ItemVariation,
      factory: ItemVariation.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemVariation, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();

    parse__WEBPACK_IMPORTED_MODULE_1__["Object"].registerSubclass('ItemVariation', ItemVariation);
    /***/
  },

  /***/
  "./src/app/services/item.ts":
  /*!**********************************!*\
    !*** ./src/app/services/item.ts ***!
    \**********************************/

  /*! exports provided: Item */

  /***/
  function srcAppServicesItemTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Item", function () {
      return Item;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var parse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! parse */
    "./node_modules/parse/index.js");
    /* harmony import */


    var parse__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _brand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./brand */
    "./src/app/services/brand.ts");
    /* harmony import */


    var _category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./category */
    "./src/app/services/category.ts");
    /* harmony import */


    var _sub_category__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./sub-category */
    "./src/app/services/sub-category.ts");

    var Item = /*#__PURE__*/function (_parse__WEBPACK_IMPOR6) {
      _inherits(Item, _parse__WEBPACK_IMPOR6);

      var _super6 = _createSuper(Item);

      function Item() {
        _classCallCheck(this, Item);

        return _super6.call(this, 'Item');
      }

      _createClass(Item, [{
        key: "hasVariations",
        value: function hasVariations() {
          return this.variations && this.variations.length;
        }
      }, {
        key: "loadInCloud",
        value: function loadInCloud() {
          var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          return parse__WEBPACK_IMPORTED_MODULE_1__["Cloud"].run('getItems', params);
        }
      }, {
        key: "loadOne",
        value: function loadOne(id) {
          var query = new parse__WEBPACK_IMPORTED_MODULE_1__["Query"](Item);
          query.include(['category', 'subcategory', 'variations', 'relatedItems', 'brand']);
          query.doesNotExist('deletedAt');
          return query.get(id);
        }
      }, {
        key: "load",
        value: function load() {
          var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var queries = [];

          if (params.tag) {
            var searchQuery = params.tag.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            var queryTag = new parse__WEBPACK_IMPORTED_MODULE_1__["Query"]('Item');
            queryTag.contains('tags', searchQuery);
            queries.push(queryTag);
            var queryCanonical = new parse__WEBPACK_IMPORTED_MODULE_1__["Query"]('Item');
            queryCanonical.contains('canonical', searchQuery);
            queries.push(queryCanonical);
          }

          var mainQuery = new parse__WEBPACK_IMPORTED_MODULE_1__["Query"]('Item');

          if (queries.length) {
            var _parse__WEBPACK_IMPOR7;

            mainQuery = (_parse__WEBPACK_IMPOR7 = parse__WEBPACK_IMPORTED_MODULE_1__["Query"]).or.apply(_parse__WEBPACK_IMPOR7, queries);
          }

          if (params.priceMin) {
            mainQuery.greaterThanOrEqualTo('netPrice', Number(params.priceMin));
          }

          if (params.priceMax) {
            mainQuery.lessThanOrEqualTo('netPrice', Number(params.priceMax));
          }

          if (params.ratingMin) {
            mainQuery.greaterThanOrEqualTo('ratingAvg', Number(params.ratingMin));
          }

          if (params.ratingMax) {
            mainQuery.lessThanOrEqualTo('ratingAvg', Number(params.ratingMax));
          }

          if (params.canonical) {
            mainQuery.contains('canonical', params.canonical);
          }

          if (params.cat) {
            if (Array.isArray(params.cat)) {
              var categories = params.cat.map(function (id) {
                var obj = new _category__WEBPACK_IMPORTED_MODULE_3__["Category"]();
                obj.id = id;
                return obj;
              });

              if (categories.length) {
                mainQuery.containedIn('categories', categories);
              }
            } else {
              var category = new _category__WEBPACK_IMPORTED_MODULE_3__["Category"]();
              category.id = params.cat;
              mainQuery.equalTo('categories', category);
            }
          }

          if (params.subcat) {
            if (Array.isArray(params.subcat)) {
              var subcats = params.subcat.map(function (id) {
                var obj = new _sub_category__WEBPACK_IMPORTED_MODULE_4__["SubCategory"]();
                obj.id = id;
                return obj;
              });

              if (subcats.length) {
                mainQuery.containedIn('subcategories', subcats);
              }
            } else {
              var subcat = new _sub_category__WEBPACK_IMPORTED_MODULE_4__["SubCategory"]();
              subcat.id = params.subcat;
              mainQuery.equalTo('subcategories', subcat);
            }
          }

          if (params.brand) {
            if (Array.isArray(params.brand)) {
              var brands = params.brand.map(function (id) {
                var obj = new _brand__WEBPACK_IMPORTED_MODULE_2__["Brand"]();
                obj.id = id;
                return obj;
              });

              if (brands.length) {
                mainQuery.containedIn('brand', brands);
              }
            } else {
              var brand = new _brand__WEBPACK_IMPORTED_MODULE_2__["Brand"]();
              brand.id = params.brand;
              mainQuery.equalTo('brand', brand);
            }
          }

          if (params.sale === '1') {
            mainQuery.greaterThan('salePrice', 0);
          }

          if (params["new"] === '1') {
            mainQuery.equalTo('isNewArrival', true);
          }

          if (params.featured === '1') {
            mainQuery.equalTo('isFeatured', true);
          }

          if (params.likes) {
            mainQuery.equalTo('likes', parse__WEBPACK_IMPORTED_MODULE_1__["User"].current());
          }

          if (params.limit) {
            mainQuery.limit(params.limit);
          }

          if (params.page && params.limit) {
            mainQuery.skip(params.page * params.limit);
          }

          if (params.sortBy) {
            if (params.sortBy === 'asc') {
              mainQuery.ascending(params.sortByField);
            } else if (params.sortBy === 'desc') {
              mainQuery.descending(params.sortByField);
            }
          } else {
            mainQuery.descending('createdAt');
          }

          mainQuery.equalTo('status', 'Active');
          mainQuery.include(['category', 'subcategory', 'variations', 'brand']);
          mainQuery.doesNotExist('deletedAt');
          return mainQuery.find();
        }
      }, {
        key: "count",
        value: function count() {
          var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var mainQuery = new parse__WEBPACK_IMPORTED_MODULE_1__["Query"](Item);

          if (params.priceRange) {
            mainQuery.greaterThanOrEqualTo('netPrice', params.priceRange.lower);
            mainQuery.lessThanOrEqualTo('netPrice', params.priceRange.upper);
          }

          if (params.rating) {
            mainQuery.greaterThanOrEqualTo('ratingAvg', params.rating.lower);
            mainQuery.lessThanOrEqualTo('ratingAvg', params.rating.upper);
          }

          if (params.isFeatured) {
            mainQuery.equalTo('isFeatured', true);
          }

          if (params.isOnSale) {
            mainQuery.greaterThan('salePrice', 0);
          }

          if (params.cat) {
            if (Array.isArray(params.cat)) {
              var categories = params.cat.map(function (id) {
                var obj = new _category__WEBPACK_IMPORTED_MODULE_3__["Category"]();
                obj.id = id;
                return obj;
              });

              if (categories.length) {
                mainQuery.containedIn('categories', categories);
              }
            } else {
              var category = new _category__WEBPACK_IMPORTED_MODULE_3__["Category"]();
              category.id = params.cat;
              mainQuery.equalTo('categories', category);
            }
          }

          if (params.brand) {
            if (Array.isArray(params.brand)) {
              var brands = params.brand.map(function (id) {
                var obj = new _brand__WEBPACK_IMPORTED_MODULE_2__["Brand"]();
                obj.id = id;
                return obj;
              });

              if (brands.length) {
                mainQuery.containedIn('brand', brands);
              }
            } else {
              var brand = new _brand__WEBPACK_IMPORTED_MODULE_2__["Brand"]();
              brand.id = params.brand;
              mainQuery.equalTo('brand', brand);
            }
          }

          mainQuery.equalTo('status', 'Active');
          mainQuery.doesNotExist('deletedAt');
          return mainQuery.count();
        }
      }, {
        key: "like",
        value: function like(itemId) {
          return parse__WEBPACK_IMPORTED_MODULE_1__["Cloud"].run('likeItem', {
            itemId: itemId
          });
        }
      }, {
        key: "isLiked",
        value: function isLiked(itemId) {
          return parse__WEBPACK_IMPORTED_MODULE_1__["Cloud"].run('isItemLiked', {
            itemId: itemId
          });
        }
      }, {
        key: "trackView",
        value: function trackView(itemId) {
          return parse__WEBPACK_IMPORTED_MODULE_1__["Cloud"].run('trackViewItem', {
            itemId: itemId
          });
        }
      }, {
        key: "objectId",
        get: function get() {
          return this.objectId;
        }
      }, {
        key: "name",
        get: function get() {
          return this.get('name');
        }
      }, {
        key: "status",
        get: function get() {
          return this.get('status');
        }
      }, {
        key: "subcategory",
        get: function get() {
          return this.get('subcategory');
        }
      }, {
        key: "images",
        get: function get() {
          return this.get('images');
        }
      }, {
        key: "price",
        get: function get() {
          return this.get('price');
        }
      }, {
        key: "salePrice",
        get: function get() {
          return this.get('salePrice');
        }
      }, {
        key: "isFeatured",
        get: function get() {
          return this.get('isFeatured');
        }
      }, {
        key: "isNewArrival",
        get: function get() {
          return this.get('isNewArrival');
        }
      }, {
        key: "featuredImageThumb",
        get: function get() {
          return this.get('featuredImageThumb');
        }
      }, {
        key: "featuredImage",
        get: function get() {
          return this.get('featuredImage');
        }
      }, {
        key: "description",
        get: function get() {
          return this.get('description');
        }
      }, {
        key: "category",
        get: function get() {
          return this.get('category');
        }
      }, {
        key: "discount",
        get: function get() {
          return this.get('discount');
        }
      }, {
        key: "slug",
        get: function get() {
          return this.id + '/' + (this.get('slug') || '');
        }
      }, {
        key: "ratingCount",
        get: function get() {
          return this.get('ratingCount');
        }
      }, {
        key: "ratingTotal",
        get: function get() {
          return this.get('ratingTotal');
        }
      }, {
        key: "ratingAvg",
        get: function get() {
          return this.get('ratingAvg');
        }
      }, {
        key: "variations",
        get: function get() {
          return this.get('variations');
        }
      }, {
        key: "brand",
        get: function get() {
          return this.get('brand');
        }
      }, {
        key: "deletedAt",
        get: function get() {
          return this.get('deletedAt');
        }
      }, {
        key: "relatedItems",
        get: function get() {
          var relatedItems = this.get('relatedItems') || [];
          return relatedItems.filter(function (item) {
            return item.status === 'Active' && typeof item.deletedAt === 'undefined';
          });
        }
      }, {
        key: "isNotAvailable",
        get: function get() {
          return this.get('isNotAvailable');
        }
      }], [{
        key: "getInstance",
        value: function getInstance() {
          return this;
        }
      }]);

      return Item;
    }(parse__WEBPACK_IMPORTED_MODULE_1__["Object"]);

    Item.ɵfac = function Item_Factory(t) {
      return new (t || Item)();
    };

    Item.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: Item,
      factory: Item.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Item, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();

    parse__WEBPACK_IMPORTED_MODULE_1__["Object"].registerSubclass('Item', Item);
    /***/
  },

  /***/
  "./src/app/services/local-storage.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/local-storage.ts ***!
    \*******************************************/

  /*! exports provided: LocalStorage */

  /***/
  function srcAppServicesLocalStorageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocalStorage", function () {
      return LocalStorage;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");

    var LocalStorage = /*#__PURE__*/function () {
      function LocalStorage(storage) {
        _classCallCheck(this, LocalStorage);

        this.storage = storage;
      }

      _createClass(LocalStorage, [{
        key: "getLang",
        value: function getLang() {
          return this.storage.get('lang');
        }
      }, {
        key: "setLang",
        value: function setLang(val) {
          return this.storage.set('lang', val);
        }
      }, {
        key: "getIsPushEnabled",
        value: function getIsPushEnabled() {
          return this.storage.get('isPushEnabled');
        }
      }, {
        key: "setIsPushEnabled",
        value: function setIsPushEnabled(val) {
          return this.storage.set('isPushEnabled', val);
        }
      }]);

      return LocalStorage;
    }();

    LocalStorage.ɵfac = function LocalStorage_Factory(t) {
      return new (t || LocalStorage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ionic_storage__WEBPACK_IMPORTED_MODULE_1__["Storage"]));
    };

    LocalStorage.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LocalStorage,
      factory: LocalStorage.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocalStorage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_1__["Storage"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/preference.ts":
  /*!****************************************!*\
    !*** ./src/app/services/preference.ts ***!
    \****************************************/

  /*! exports provided: Preference */

  /***/
  function srcAppServicesPreferenceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Preference", function () {
      return Preference;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var Preference = /*#__PURE__*/function () {
      function Preference() {
        _classCallCheck(this, Preference);
      }

      _createClass(Preference, [{
        key: "lang",
        get: function get() {
          return this._lang;
        },
        set: function set(val) {
          this._lang = val;
        }
      }, {
        key: "cartCount",
        get: function get() {
          return this._cartCount;
        },
        set: function set(val) {
          this._cartCount = val;
        }
      }, {
        key: "isPushEnabled",
        get: function get() {
          return this._isPushEnabled;
        },
        set: function set(val) {
          this._isPushEnabled = val;
        }
      }]);

      return Preference;
    }();

    Preference.ɵfac = function Preference_Factory(t) {
      return new (t || Preference)();
    };

    Preference.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: Preference,
      factory: Preference.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Preference, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/slide.ts":
  /*!***********************************!*\
    !*** ./src/app/services/slide.ts ***!
    \***********************************/

  /*! exports provided: Slide */

  /***/
  function srcAppServicesSlideTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Slide", function () {
      return Slide;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var parse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! parse */
    "./node_modules/parse/index.js");
    /* harmony import */


    var parse__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_1__);

    var Slide = /*#__PURE__*/function (_parse__WEBPACK_IMPOR8) {
      _inherits(Slide, _parse__WEBPACK_IMPOR8);

      var _super7 = _createSuper(Slide);

      function Slide() {
        _classCallCheck(this, Slide);

        return _super7.call(this, 'SlideImage');
      }

      _createClass(Slide, [{
        key: "toString",
        value: function toString() {
          return this.image.url();
        }
      }, {
        key: "image",
        get: function get() {
          return this.get('image');
        }
      }, {
        key: "item",
        get: function get() {
          return this.get('item');
        }
      }, {
        key: "brand",
        get: function get() {
          return this.get('brand');
        }
      }, {
        key: "category",
        get: function get() {
          return this.get('category');
        }
      }, {
        key: "subcategory",
        get: function get() {
          return this.get('subcategory');
        }
      }, {
        key: "url",
        get: function get() {
          return this.get('url');
        }
      }, {
        key: "sort",
        get: function get() {
          return this.get('sort');
        }
      }, {
        key: "isActive",
        get: function get() {
          return this.get('isActive');
        }
      }], [{
        key: "getInstance",
        value: function getInstance() {
          return this;
        }
      }]);

      return Slide;
    }(parse__WEBPACK_IMPORTED_MODULE_1__["Object"]);

    Slide.ɵfac = function Slide_Factory(t) {
      return new (t || Slide)();
    };

    Slide.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: Slide,
      factory: Slide.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Slide, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();

    parse__WEBPACK_IMPORTED_MODULE_1__["Object"].registerSubclass('SlideImage', Slide);
    /***/
  },

  /***/
  "./src/app/services/sub-category.ts":
  /*!******************************************!*\
    !*** ./src/app/services/sub-category.ts ***!
    \******************************************/

  /*! exports provided: SubCategory */

  /***/
  function srcAppServicesSubCategoryTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubCategory", function () {
      return SubCategory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var parse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! parse */
    "./node_modules/parse/index.js");
    /* harmony import */


    var parse__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_1__);

    var SubCategory = /*#__PURE__*/function (_parse__WEBPACK_IMPOR9) {
      _inherits(SubCategory, _parse__WEBPACK_IMPOR9);

      var _super8 = _createSuper(SubCategory);

      function SubCategory() {
        _classCallCheck(this, SubCategory);

        return _super8.call(this, 'SubCategory');
      }

      _createClass(SubCategory, [{
        key: "load",
        value: function load() {
          var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var query = new parse__WEBPACK_IMPORTED_MODULE_1__["Query"](SubCategory);

          if (params.category) {
            query.equalTo('category', params.category);
          }

          if (params.canonical) {
            query.contains('canonical', params.canonical);
          }

          query.equalTo('status', 'Active');
          query.include('category');
          query.ascending('name');
          query.doesNotExist('deletedAt');
          return query.find();
        }
      }, {
        key: "count",
        value: function count() {
          var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var query = new parse__WEBPACK_IMPORTED_MODULE_1__["Query"](SubCategory);

          if (params.category) {
            query.equalTo('category', params.category);
          }

          if (params.canonical) {
            query.contains('canonical', params.canonical);
          }

          query.equalTo('status', 'Active');
          query.doesNotExist('deletedAt');
          return query.count();
        }
      }, {
        key: "name",
        get: function get() {
          return this.get('name');
        }
      }, {
        key: "status",
        get: function get() {
          return this.get('status');
        }
      }, {
        key: "category",
        get: function get() {
          return this.get('category');
        }
      }, {
        key: "imageThumb",
        get: function get() {
          return this.get('imageThumb');
        }
      }, {
        key: "image",
        get: function get() {
          return this.get('image');
        }
      }, {
        key: "slug",
        get: function get() {
          return this.id + '/' + this.get('slug');
        }
      }]);

      return SubCategory;
    }(parse__WEBPACK_IMPORTED_MODULE_1__["Object"]);

    SubCategory.ɵfac = function SubCategory_Factory(t) {
      return new (t || SubCategory)();
    };

    SubCategory.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SubCategory,
      factory: SubCategory.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubCategory, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();

    parse__WEBPACK_IMPORTED_MODULE_1__["Object"].registerSubclass('SubCategory', SubCategory);
    /***/
  },

  /***/
  "./src/app/services/user.ts":
  /*!**********************************!*\
    !*** ./src/app/services/user.ts ***!
    \**********************************/

  /*! exports provided: User */

  /***/
  function srcAppServicesUserTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var parse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! parse */
    "./node_modules/parse/index.js");
    /* harmony import */


    var parse__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_1__);

    var User = /*#__PURE__*/function (_parse__WEBPACK_IMPOR10) {
      _inherits(User, _parse__WEBPACK_IMPOR10);

      var _super9 = _createSuper(User);

      function User() {
        _classCallCheck(this, User);

        return _super9.call(this);
      }

      _createClass(User, [{
        key: "isLoggedInViaPassword",
        value: function isLoggedInViaPassword() {
          return !this.authData;
        }
      }, {
        key: "loginAnonymously",
        value: function loginAnonymously() {
          return parse__WEBPACK_IMPORTED_MODULE_1__["Cloud"].run('createAnonymousUser');
        }
      }, {
        key: "becomeWithSessionToken",
        value: function becomeWithSessionToken(sessionToken) {
          return User.become(sessionToken);
        }
      }, {
        key: "loginWith",
        value: function loginWith(provider) {
          var authData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var extraData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          var user = new User();
          user.set(extraData);
          return user._linkWith(provider, authData);
        }
      }, {
        key: "loginViaFacebook",
        value: function loginViaFacebook() {
          return parse__WEBPACK_IMPORTED_MODULE_1__["FacebookUtils"].logIn(null);
        }
      }, {
        key: "isFacebookLinked",
        value: function isFacebookLinked() {
          return parse__WEBPACK_IMPORTED_MODULE_1__["FacebookUtils"].isLinked(parse__WEBPACK_IMPORTED_MODULE_1__["User"].current());
        }
      }, {
        key: "signIn",
        value: function signIn() {
          var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var user = new User();
          user.username = data.username;
          user.password = data.password;
          return user.logIn();
        }
      }, {
        key: "recoverPassword",
        value: function recoverPassword(email) {
          return parse__WEBPACK_IMPORTED_MODULE_1__["User"].requestPasswordReset(email);
        }
      }, {
        key: "logout",
        value: function logout() {
          return parse__WEBPACK_IMPORTED_MODULE_1__["User"].logOut();
        }
      }, {
        key: "name",
        get: function get() {
          return this.get('name');
        },
        set: function set(val) {
          this.set('name', val);
        }
      }, {
        key: "email",
        get: function get() {
          return this.get('email');
        },
        set: function set(val) {
          this.set('email', val);
        }
      }, {
        key: "phone",
        get: function get() {
          return this.get('phone');
        },
        set: function set(val) {
          this.set('phone', val);
        }
      }, {
        key: "username",
        get: function get() {
          return this.get('username');
        },
        set: function set(val) {
          this.set('username', val);
        }
      }, {
        key: "password",
        get: function get() {
          return this.get('password');
        },
        set: function set(val) {
          this.set('password', val);
        }
      }, {
        key: "authData",
        get: function get() {
          return this.get('authData');
        },
        set: function set(val) {
          this.set('authData', val);
        }
      }, {
        key: "photo",
        get: function get() {
          return this.get('photo');
        },
        set: function set(val) {
          this.set('photo', val);
        }
      }, {
        key: "contactEmail",
        get: function get() {
          return this.get('contactEmail');
        }
      }], [{
        key: "getInstance",
        value: function getInstance() {
          return this;
        }
      }, {
        key: "getCurrent",
        value: function getCurrent() {
          return User.current();
        }
      }]);

      return User;
    }(parse__WEBPACK_IMPORTED_MODULE_1__["User"]);

    User.ɵfac = function User_Factory(t) {
      return new (t || User)();
    };

    User.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: User,
      factory: User.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](User, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();

    parse__WEBPACK_IMPORTED_MODULE_1__["Object"].registerSubclass('_User', User);
    /***/
  },

  /***/
  "./src/app/services/window-ref.ts":
  /*!****************************************!*\
    !*** ./src/app/services/window-ref.ts ***!
    \****************************************/

  /*! exports provided: WindowRef */

  /***/
  function srcAppServicesWindowRefTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WindowRef", function () {
      return WindowRef;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var WindowRef = /*#__PURE__*/function () {
      function WindowRef() {
        _classCallCheck(this, WindowRef);
      }

      _createClass(WindowRef, [{
        key: "nativeWindow",
        get: function get() {
          return window;
        }
      }]);

      return WindowRef;
    }();

    WindowRef.ɵfac = function WindowRef_Factory(t) {
      return new (t || WindowRef)();
    };

    WindowRef.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: WindowRef,
      factory: WindowRef.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WindowRef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      serverUrl: 'https://ionshop.bills.pet/api',
      appUrl: 'https://www.tryion.shop',
      appImageUrl: 'https://www.tryion.shop/assets/imgs/ionshop.png',
      appId: 'hcDzr5W7Qt',
      fbId: '789454091616641',
      stripePublicKey: 'YOUR_STRIPE_PUBLIC_KEY',
      androidHeaderColor: '#222428',
      defaultLang: 'es',
      googleClientId: '597871700054-2e5dbhigvaehei7s5ktlprk0fuuat05k.apps.googleusercontent.com',
      currency: {
        code: 'COP',
        display: 'symbol',
        digitsInfo: '1.2-2'
      }
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\usuario\Downloads\EVANS\IonShop_Recursos\ionshop-3.1.3\app\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map