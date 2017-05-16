import { StaticWebsitePage } from './app.po';

describe('static-website App', () => {
  let page: StaticWebsitePage;

  beforeEach(() => {
    page = new StaticWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
