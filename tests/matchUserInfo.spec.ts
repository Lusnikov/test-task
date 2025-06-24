import { expect, test } from "./authedFixture";


test('Текущий авторизованный пользователь совпадает с пользователем, который указан Руководителем в компании', async ({ mainPage, page, context }) => {
    const studyCenterTitle = 'Учебный центр'
    const companySubitem = mainPage.getSubMenuItemByMenuAndSubmenuItems(studyCenterTitle, 'Компания')
    await mainPage.openMenuByText(studyCenterTitle)
    await expect(companySubitem).toBeVisible()
    await companySubitem.click()
   
    await mainPage.avatarIcon.click()

    await mainPage.emailLink.waitFor()
    const emailTextInPopUp = await mainPage.emailLink.textContent()
    if (!emailTextInPopUp) throw new Error();

    const [newPage] = await Promise.all([context.waitForEvent('page'),  mainPage.clickUserProfileLink()])
    
    await expect(newPage).toHaveURL(/user\/.*/)
    await expect(newPage.locator('body')).toContainText(emailTextInPopUp)
  });