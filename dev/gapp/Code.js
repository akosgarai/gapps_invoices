function doGet() {
  var result = HtmlService.createTemplateFromFile('invoice');
  // Build and return HTML in IFRAME sandbox mode.
  return result.evaluate()
      .setTitle('invoice app')
      .setSandboxMode(HtmlService.SandboxMode.IFRAME);
}
