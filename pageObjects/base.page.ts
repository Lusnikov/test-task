import { Locator, Page } from '@playwright/test';

export class BasePage {
  protected readonly page: Page;
  readonly body: Locator;
  readonly alert : Locator;
  readonly avatarIcon : Locator;
  readonly profilePopUp: Locator;
  readonly emailLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.body = this.page.locator('body')
    this.alert = this.page.getByRole('alert')
    this.avatarIcon = this.page.locator("//span[contains(@class, 'avatar-icon-bg')][contains(@class, 'el-tooltip__trigger')]")
    this.avatarIcon =   this.page.locator('//div[@id="header-chat-icon"]/following-sibling::span[contains(@class, "el-avatar--circle")]')
    this.profilePopUp = this.page.locator("//div[contains(@class,'el-popover')][.//a[contains(., 'Выход')]]")
    this.emailLink = this.profilePopUp.locator('//a[contains(@href, "user")]')
  }

  /**
   * Открыть указанный URL
   */
  async open(url: string): Promise<void> {
    await this.page.goto(url);
  }
}
