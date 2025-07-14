import { Locator, Page } from '@playwright/test';

export class BasePage {
  protected readonly page: Page;
  readonly body: Locator;
  readonly alert: Locator;
  readonly avatarIcon: Locator;
  readonly profilePopUp: Locator;
  readonly emailLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.body = this.page.locator('body');
  }

  /**
   * Открыть указанный URL
   */
  async open(url: string): Promise<void> {
    await this.page.goto(url);
  }
}
