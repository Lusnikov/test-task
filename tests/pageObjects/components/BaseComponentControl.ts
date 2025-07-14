import { Locator } from 'playwright';

export class BaseComponentControl {
  public root: Locator;
  public listitem: Locator;

  constructor(root: Locator) {
    this.root = root;
    this.listitem = this.root.page().getByRole('option');
  }

  getListItemByText(listItemText: string) {
    return this.listitem.filter({
      hasText: listItemText,
    });
  }
}
