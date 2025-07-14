import { RoomSearchPage } from '../pageObjects/pages/roomSearch.page';
import { test as baseTest, expect } from './baseFixture';
type MyFixtures = {
  authBefore: void;
  roomSearchPage: RoomSearchPage;
};

export const test = baseTest.extend<MyFixtures>({
  authBefore: [
    async ({ page, signInPage, login, password }, use) => {
      await page.goto('/');
      await signInPage.signIn(login, password);
      await expect(page).toHaveURL(/\/contract-search/);
      await use();
    },
    { auto: true },
  ],
  roomSearchPage: async ({ page }, use) => {
    await use(new RoomSearchPage(page));
  },
});

export { expect } from '@playwright/test';
