import LocatorOrString = CodeceptJS.LocatorOrString;

export = function() {
  return actor({
    clearAndFillField(locator: LocatorOrString, text: CodeceptJS.StringOrSecret): void {
      this.clearField(locator);
      this.fillField(locator, text);
    },
    mockResponse(): void {
    this.usePlaywrightTo("Mock response", async ({page}) => {
      await page.route('*/**/api/v1/fruits', async (route) => {
        const json = [{ name: 'Strawberry', id: 21 }];
        await route.fulfill({ json });
      })
    });
  }
  });
}
