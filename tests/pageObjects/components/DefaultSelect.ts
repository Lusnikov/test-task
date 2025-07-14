import { Locator } from 'playwright';
import { BaseComponentControl } from './BaseComponentControl';

export class DefaultSelect extends BaseComponentControl {
  constructor(root: Locator) {
    super(root);
  }

  async selectOption(optionText: string, isLabel = true) {
    await this.root.selectOption(
      isLabel
        ? {
            label: optionText,
          }
        : optionText
    );
  }
}
