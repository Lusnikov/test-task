import { expect, test } from "./authedFixture";


test.only('Текущий авторизованный пользователь совпадает с пользователем, который указан Руководителем в компании', async ({ mainPage, page }) => {
    const studyCenterTitle = 'Учебный центр'
    const companySubitem = mainPage.getSubMenuItemByMenuAndSubmenuItems(studyCenterTitle, 'Компания')
    await mainPage.openMenuByText(studyCenterTitle)
    await expect(companySubitem).toBeVisible()
    await companySubitem.click()
   
    await page.pause()
    await mainPage.avatarIcon.click()

    await mainPage.emailLink.waitFor()
    const emailTextInPopUp = await mainPage.emailLink.textContent()
    if (!emailTextInPopUp) throw new Error();


    await mainPage.clickUserProfileLink()

    await expect(page).toHaveURL(/user\/.*/)
    await expect(mainPage.body).toContainText(emailTextInPopUp)

    await page.pause()
  });