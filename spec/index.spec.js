describe("hello-protractor", function () {
  describe("index", function () {
    it("should display the correct title", function () {
      browser.get('/index.html');
      expect(browser.getTitle()).toBe('hello protractor');
    });
  });
});