import { ChatEasyPage } from './app.po';

describe('chat-easy App', () => {
  let page: ChatEasyPage;

  beforeEach(() => {
    page = new ChatEasyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
