import {test as baseTest, expect} from './baseFixture'
type MyFixtures = {
    authBefore:  void
};

export const test = baseTest.extend<MyFixtures>({
    authBefore: [async ({ page, signInPage, login, password, mainPage}, use) => {
        await page.goto('/');
        await signInPage.signIn(login, password);
        await expect(mainPage.getMenuItemByText('Бухгалтерия')).toBeVisible({timeout: 10_000})
        
        await use();
      }, { auto: true }]
    
});

export { expect } from '@playwright/test';
