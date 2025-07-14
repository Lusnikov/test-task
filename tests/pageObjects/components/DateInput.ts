import { Locator } from 'playwright';
import { BaseComponentControl } from './BaseComponentControl';

export class DateInput extends BaseComponentControl {
  /**
   *
   * @param root - инпут
   */
  constructor(root: Locator) {
    super(root);
  }

  async fillDateInput(date: string) {
    await this.root.pressSequentially(date);
    await this.root.page().locator('//td[@class="active day"]').click();
  }
}
