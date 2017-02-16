import { TempusTrakusPage } from './app.po';

describe('tempus-trakus App', function() {
  let page: TempusTrakusPage;

  beforeEach(() => {
    page = new TempusTrakusPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('tt works!');
  });
});
