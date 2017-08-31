import { NfsShopPage } from './app.po';

describe('nfs-shop App', () => {
  let page: NfsShopPage;

  beforeEach(() => {
    page = new NfsShopPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
