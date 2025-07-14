import { expect, test } from '../fixtures/authedFixture';

test.describe(() => {
  test('Заполняем поля №1', async ({ signInPage, page, roomSearchPage }) => {
    await signInPage.open();
    await roomSearchPage.sinceDateInput.fillDateInput('01.09.2025');
    await roomSearchPage.nightsInput.fill('10');
    await roomSearchPage.searchDate.fillDateInput('20.07.2025');
    await roomSearchPage.adultsSelect.selectOption('1');
    await roomSearchPage.childrenSelect.selectOption('1');
    await roomSearchPage.getAgeInputByOrder(0).fill('1');
    await Promise.all([
      page.waitForResponse(/contract-search\/data/),
      roomSearchPage.hotelRoomSelect.selectHotelByName('ALILA KOTHAIFARU MALDIVES'),
    ]);

    await roomSearchPage.roomCategoryAutocomplete.selectOption('Sunset Beach Pool Villa');

    await roomSearchPage.mealPlanAutocomplete.selectOption('HB');
    await roomSearchPage.beveragePackageAutocomplete.selectOption('Unlimited Beverage Supplement');
    await roomSearchPage.transferTypeSelect.selectOption('No transfer');

    await roomSearchPage.transferModeAutocomplete.selectOption('SeaPlane');
    await page.getByText('Room Search').click();
  });

  test('Поиск тура и последующая сверка стоимости на странице', async ({
    signInPage,
    roomSearchPage,
    context,
  }) => {
    await signInPage.open();

    await roomSearchPage.sinceDateInput.fillDateInput('01.09.2025');
    await roomSearchPage.nightsInput.fill('10');
    await roomSearchPage.adultsSelect.selectOption('1');
    await roomSearchPage.hotelRoomSelect.selectHotelByName('ALILA KOTHAIFARU MALDIVES');

    await roomSearchPage.searchHotelsButton.click();

    await roomSearchPage.hotelPriceText.first().waitFor();

    const hotelPriceTextExpected = await roomSearchPage.hotelPriceText.first().textContent();

    if (hotelPriceTextExpected === null) {
      throw new Error();
    }

    const [newPage] = await Promise.all([
      context.waitForEvent('page'),
      roomSearchPage.openRoomPageByOrder(0),
    ]);

    await expect(newPage.locator('body')).toContainText(hotelPriceTextExpected);
  });
});
