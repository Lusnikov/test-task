import { expect, test } from "./baseFixture";

const errorMessage = 'Bad credentials.'
const emailTestCases: { mail: string; messageError: string }[] = [
  { mail: 'userexample.com', messageError: errorMessage},
  { mail: 'user@.com', messageError: errorMessage },
  { mail: '@example.com', messageError: errorMessage },
  { mail: 'user@com', messageError: errorMessage},
  { mail: '', messageError: 'Необходимо заполнить данные' },
  { mail: '   ', messageError: errorMessage },
  { mail: 'user@example.com', messageError: errorMessage },
]

test.describe('Страница авторизации', () => {
  test.beforeEach(async ({page}) => {
    await page.goto('/')
  })
  test('Пользователь входит с корректными данными', async ({ signInPage, login, password, page, mainPage }) => {
    await signInPage.signIn(login, password)
    await page.waitForLoadState('networkidle')
    await expect(mainPage.getMenuItemByText('Бухгалтерия')).toBeVisible()
  });
  
  for (const password of ['12345678qq1', 'jsdakfljsadlfkjkljsf',]) {
    test(`Некорректный пароль - ${password}`, async ({ signInPage , login}) => {
      await signInPage.usernameInput.fill(login)
      await signInPage.passwordInput.fill(password)
      await signInPage.signInButton.click()
      await expect(signInPage.alert).toContainText('Введенный пароль недействителен.')
    });
  }
  test('Если пароль не заполнен - показывает алерт с текстом "Необходимо заполнить данные"', async ({ signInPage, login }) => {
    await signInPage.usernameInput.fill(login)
    await signInPage.passwordInput.fill('')
    await signInPage.signInButton.click()
    await expect(signInPage.alert).toContainText('Необходимо заполнить данные')
  });
  
  for (const {mail, messageError} of emailTestCases) {
    test(`Некорректный email - ${mail}`, async ({ signInPage }) => {
      await signInPage.usernameInput.fill(mail)
      await signInPage.passwordInput.fill('12345')
      await signInPage.signInButton.click()
      await expect(signInPage.alert).toContainText(messageError)
    });
  }
});


