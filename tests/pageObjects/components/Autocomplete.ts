import { Locator } from 'playwright';
import { BaseComponentControl } from './BaseComponentControl';

export class Autocomplete extends BaseComponentControl {
  private input: Locator;
  /**
   *
   * @param root - обертка над инпутом
   */
  constructor(root: Locator) {
    super(root);
    this.input = root.locator('input');
  }

  async selectOption(optionText: string) {
    await this.input.fill(optionText);
    await this.getListItemByText(optionText).click();
  }
}
