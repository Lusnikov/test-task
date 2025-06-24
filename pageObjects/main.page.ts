import { Page } from "playwright";
import { BasePage } from "./base.page";

export class MainPage extends BasePage {
    readonly menuItem = this.page.locator('//ul[@role="menubar"]/li[@role="menuitem"]')
    readonly descriptionTitle = this.page.locator('//div[@class="description-title"]')

    readonly getMenuItemByText = (text: string) => this.menuItem.filter({
        hasText: text
    })

    
    readonly getSubMenuItemByMenuAndSubmenuItems = (menuItemText: string, submenuItemText: string) => {
        return this
        .getMenuItemByText(menuItemText)
        .getByRole('menuitem')
        .filter({hasText: submenuItemText})
    }


    constructor(page: Page) {
        super(page)
    }

    async openMenuByText(text: string) {
       await  this.getMenuItemByText(text).click()
    }

    async getRowValueBePrecedingColumnValue (text: string) {    return this.page.locator(`//div[contains(., "${text}")]/following-sibling::div[@class="description-value"]`);
    }

    async clickUserProfileLink () {
        (await this.getRowValueBePrecedingColumnValue('Руководитель')).getByRole('link')
    }
}