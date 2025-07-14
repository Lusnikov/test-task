import { Locator } from 'playwright';
import { BaseComponentControl } from './BaseComponentControl';

export class SelectWithDroppedInput extends BaseComponentControl {
  /**
   * @param root  - передается combobox элемент
   */

  readonly selectTextInput: Locator;
  constructor(root: Locator) {
    super(root);
    this.selectTextInput = this.root
      .page()
      .locator(
        '//span[contains(@class, "select2-search--dropdown")]//input[contains(@class, "select2-search__field")]'
      );
  }

  async openOptions() {
    await this.root.click();
  }

  async selectHotelByName(hotelNameString: string) {
    await this.openOptions();
    await this.selectTextInput.fill(hotelNameString);
    await this.getListItemByText(hotelNameString).click();
  }
}
