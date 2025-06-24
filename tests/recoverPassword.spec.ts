import {expect, test} from "./baseFixture";

test.describe('Страница авторизации', () => {
  test.beforeEach(async ({page}) => {
    await page.goto('/')
  })
  test('Пользователь восстаналивает аккаунт для существующего аккаунта', async ({ signInPage, login, page }) => {
    await signInPage.forgotPasswordButton.click()
    await signInPage.usernameRecoverInput.fill(login)
    await signInPage.recoverButton.click()
    await signInPage.alert.waitFor()
    expect(signInPage.alert).toContainText('Ссылка на изменение пароля отправлена на почту')
  });

  test('Пользователь восстаналивает аккаунт для НЕсуществующего аккаунта', async ({ signInPage, login,  }) => {
    await signInPage.forgotPasswordButton.click()
    await signInPage.usernameRecoverInput.fill('randomLogin')
    await signInPage.recoverButton.click()
    await signInPage.alert.waitFor()
    expect(signInPage.alert).toContainText('Пользователь не найден.')
  });
  
});
