import { Locator, Page, expect } from '@playwright/test';
import { BasePage } from './base.page';

export class SigningPage extends BasePage {
  readonly usernameInput: Locator = this.page.locator('#sdo-login');
  readonly usernameRecoverInput: Locator = this.page.locator('//label[contains(., "Ваш логин или Email")]/preceding-sibling::input');
  readonly passwordInput: Locator = this.page.locator('#sdo-password');
  readonly signInButton: Locator = this.page.getByRole('button', {
    name: 'Войти'
  });
  readonly recoverButton: Locator = this.page.getByRole('button', {
    name: 'Восстановить'
  });
  readonly forgotPasswordButton: Locator = this.page.getByRole('button', {
    name: 'Забыли пароль'
  });

  constructor(page: Page) {
    super(page);
  }

  /**
   * Выполняет вход по логину и паролю
   */
  async signIn(username: string, password: string): Promise<void> {
    await this.usernameInput.fill(username)
    await this.passwordInput.fill(password)
    await this.signInButton.click()
    // await this.type(this.usernameInput, username);
    // await this.type(this.passwordInput, password);
    // await this.click(this.signInButton);
  }
}