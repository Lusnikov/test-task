import { test as baseTest } from '@playwright/test';
import { SigningPage } from '../pageObjects/pages/signIn.page';

type MyFixtures = {
  login: string;
  password: string;
  signInPage: SigningPage;
};

export const test = baseTest.extend<MyFixtures>({
  login: async ({}, use) => {
    await use('testing@pre.alacarte.ae');
  },

  password: async ({}, use) => {
    await use('B\\SO?2r)Cd');
  },
  signInPage: async ({ page }, use) => {
    await use(new SigningPage(page));
  },
});

export { expect } from '@playwright/test';
