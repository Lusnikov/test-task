import { Locator, Page } from '@playwright/test';
import { BasePage } from './base.page';

export class SigningPage extends BasePage {
  readonly usernameInput: Locator = this.page.getByRole('textbox', { name: 'Email' });

  readonly passwordInput: Locator = this.page.getByRole('textbox', { name: 'Password' });
  readonly signInButton: Locator = this.page.locator('//button[@type="submit"]');

  constructor(page: Page) {
    super(page);
  }

  override async open(): Promise<void> {
    await this.page.goto('/login');
  }

  /**
   * Выполняет вход по логину и паролю
   */
  async signIn(username: string, password: string): Promise<void> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.signInButton.click();
  }
}
