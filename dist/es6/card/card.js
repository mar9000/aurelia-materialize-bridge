import { bindable, customElement } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { bindingMode } from 'aurelia-binding';

@customElement('md-card')
@inject(Element)
export class MdCard {
  @bindable() mdImage = null;
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) mdTitle;

  constructor(element) {
    this.element = element;
  }

  attached() {
    //
  }
}
