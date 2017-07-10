import { Angular4ElementosPage } from './app.po';

describe('angular4-elementos App', () => {
  let page: Angular4ElementosPage;

  beforeEach(() => {
    page = new Angular4ElementosPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
