import { DevexPage } from './app.po';

describe('devex App', function() {
  let page: DevexPage;

  beforeEach(() => {
    page = new DevexPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
