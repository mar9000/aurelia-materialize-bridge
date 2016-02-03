System.register(['aurelia-templating', 'aurelia-dependency-injection', '../common/attributes'], function (_export) {
  'use strict';

  var bindable, customElement, inlineView, inject, getBooleanFromAttributeValue, MdSlider;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaTemplating) {
      bindable = _aureliaTemplating.bindable;
      customElement = _aureliaTemplating.customElement;
      inlineView = _aureliaTemplating.inlineView;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_commonAttributes) {
      getBooleanFromAttributeValue = _commonAttributes.getBooleanFromAttributeValue;
    }],
    execute: function () {
      MdSlider = (function () {
        var _instanceInitializers = {};

        _createDecoratedClass(MdSlider, [{
          key: 'mdFillContainer',
          decorators: [bindable()],
          initializer: function initializer() {
            return false;
          },
          enumerable: true
        }, {
          key: 'mdHeight',
          decorators: [bindable()],
          initializer: function initializer() {
            return 400;
          },
          enumerable: true
        }, {
          key: 'mdIndicators',
          decorators: [bindable()],
          initializer: function initializer() {
            return true;
          },
          enumerable: true
        }, {
          key: 'mdInterval',
          decorators: [bindable()],
          initializer: function initializer() {
            return 6000;
          },
          enumerable: true
        }, {
          key: 'mdTransition',
          decorators: [bindable()],
          initializer: function initializer() {
            return 500;
          },
          enumerable: true
        }], null, _instanceInitializers);

        function MdSlider(element) {
          _classCallCheck(this, _MdSlider);

          _defineDecoratedPropertyDescriptor(this, 'mdFillContainer', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'mdHeight', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'mdIndicators', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'mdInterval', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'mdTransition', _instanceInitializers);

          this.element = element;
        }

        MdSlider.prototype.attached = function attached() {
          if (getBooleanFromAttributeValue(this.mdFillContainer)) {
            this.element.classList.add('fullscreen');
          }

          $(this.element).slider({
            height: parseInt(this.mdHeight, 10),
            indicators: getBooleanFromAttributeValue(this.mdIndicators),
            interval: parseInt(this.mdInterval, 10),
            transition: parseInt(this.mdTransition, 10)
          });
        };

        MdSlider.prototype.pause = function pause() {
          $(this.element).slider('pause');
        };

        MdSlider.prototype.start = function start() {
          $(this.element).slider('start');
        };

        MdSlider.prototype.next = function next() {
          $(this.element).slider('next');
        };

        MdSlider.prototype.prev = function prev() {
          $(this.element).slider('prev');
        };

        var _MdSlider = MdSlider;
        MdSlider = inlineView('\n  <template class="slider">\n  <require from="./slider.css"></require>\n  <ul class="slides">\n    <content select="li"></content>\n  </ul>\n  </template>\n')(MdSlider) || MdSlider;
        MdSlider = inject(Element)(MdSlider) || MdSlider;
        MdSlider = customElement('md-slider')(MdSlider) || MdSlider;
        return MdSlider;
      })();

      _export('MdSlider', MdSlider);
    }
  };
});
//# sourceMappingURL=../dist/dev/slider/slider.js.map
