import { test as baseTest } from '@playwright/test';
import { SigningPage } from '../pageObjects/signIn.page';
import { MainPage } from '../pageObjects/main.page';

type MyFixtures = {
  login: string;
  password: string;
  signInPage: SigningPage;
  mainPage: MainPage;
};

export const test = baseTest.extend<MyFixtures>({
  login: async ({}, use) => {
    await use('dumbledore@sct.team'); 
  },

  password: async ({}, use) => {
    await use('12345678qQ1'); 
  },

  signInPage: async ({page}, use) => {
    await use(new SigningPage(page)); 
  },
  mainPage: async ({page}, use) => {
    await use(new MainPage(page)); 
  }
});

export { expect } from '@playwright/test';
