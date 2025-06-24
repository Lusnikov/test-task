import { expect, test } from "./authedFixture";


test.describe('Страница авторизации', () => {
  test.beforeEach(async ({page}) => {
    await page.goto('/')
  })
  test('Вкладка компания доступна после авторизации', async ({ mainPage }) => {
    const studyCenterTitle = 'Учебный центр'
    const companySubitem = mainPage.getSubMenuItemByMenuAndSubmenuItems(studyCenterTitle, 'Компания')
    await mainPage.openMenuByText(studyCenterTitle)
    await expect(companySubitem).toBeVisible()
    await companySubitem.click()
  });
});


