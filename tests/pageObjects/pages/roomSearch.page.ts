import { BasePage } from './base.page';
import { DateInput } from '../components/DateInput';
import { Autocomplete } from '../components/Autocomplete';
import { SelectWithDroppedInput } from '../components/SelectWithDroppedInput';
import { DefaultSelect } from '../components/DefaultSelect';

export class RoomSearchPage extends BasePage {
  readonly firstFilterRow = this.page.locator(
    '//form[@id="search_form"]//div[@class="form-group"][contains(., "Price")]'
  );
  readonly roomsBlock = this.page.locator('//fieldset[contains(@class, "rooms")][not(@style)]');
  readonly accommodationBlock = this.page.locator('//fieldset[contains(., "Accommodation")]');
  readonly transferBlock = this.page.locator('//fieldset[contains(., "Transfer")]');

  readonly searchHotelsButton = this.page.locator('//button[@type="submit"]');

  // dateinputs
  readonly sinceDateInput = new DateInput(this.page.locator('//input[@name="since"]'));

  readonly tillDayInput = new DateInput(this.page.locator('//input[@name="until"]'));
  readonly searchDate = new DateInput(this.page.locator('//input[@name="search_date"]'));

  // autocompletes
  readonly roomCategoryAutocomplete = new Autocomplete(
    this.page.locator('//div[contains(@class, "form-group")][contains(., "Room category")]')
  );
  readonly mealPlanAutocomplete = new Autocomplete(
    this.page.locator('//div[contains(@class, "form-group")][contains(., "Meal plan")]')
  );
  readonly beveragePackageAutocomplete = new Autocomplete(
    this.page.locator('//div[contains(@class, "form-group")][contains(., "Beverage package")]')
  );
  readonly transferModeAutocomplete = new Autocomplete(
    this.page.locator('//div[contains(@class, "form-group")][contains(., "Transfer mode")]')
  );
  readonly transferTypeAutocomplete = new Autocomplete(
    this.page.locator('//div[contains(@class, "form-group")][contains(., "Transfer type")]')
  );

  readonly hotelRoomSelect = new SelectWithDroppedInput(
    this.page.locator(
      '// div[contains(@class, "form-group")][contains(., "Hotel")]//span[@role="combobox"]'
    )
  );

  readonly hotelPriceText = this.page.locator('//span[contains(@class,"contract-price")]');

  // default selects

  readonly currencySelect = new DefaultSelect(this.page.locator('//select[@name="currency_id"]'));
  readonly adultsSelect = new DefaultSelect(
    this.roomsBlock.locator('//select[not(contains(@class, "children_count"))]')
  );
  readonly childrenSelect = new DefaultSelect(
    this.roomsBlock.locator('//select[contains(@class, "children_count")]')
  );
  readonly transferTypeSelect = new DefaultSelect(
    this.page.locator('//select[contains(@class, "transfer_direction")]')
  );
  readonly bedroomsSelect = new DefaultSelect(
    this.page.locator('//select[contains(@class, "bedroom_count")]')
  );

  readonly nightsInput = this.page.locator('//input[@name="nights"]');
  readonly ageInput = this.page.locator('//input[contains(@class, "children_ages")]');

  getAgeInputByOrder = (order: number) => {
    return this.ageInput.nth(order);
  };

  async openRoomPageByOrder(hotelOrder: number) {
    await this.hotelPriceText.nth(hotelOrder).locator('//following-sibling::a').click();
  }
}
