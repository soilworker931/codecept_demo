Feature('LoginPage');
const { I } = inject();

Scenario.skip('Mock test',  ({ I: I }) => {
    const json = [{name: 'Banana', id: 21}];
    I.mockRoute();
    I.mockTraffic("*/**/api/v1/fruits", JSON.stringify(json));
    I.amOnPage("https://demo.playwright.dev/api-mocking");
});

const parametrizedTest = new DataTable(["username"]);
parametrizedTest.add(["anton"]);
parametrizedTest.add(["sasha"]);
parametrizedTest.add(["ivan"]);

async function login(username = "default", password = "defaultpassword"): Promise<void> {
    I.fillField("//input[@name='txtUsername']", username);
    I.fillField("//input[@name='txtPassword']", password);
    I.click("//input[@value='Login']");
    await I.grabTextFrom("//br[2]");
}

Scenario("Test login", async ({I:I}) => {
    I.amOnPage("http://vbsca.ca/login/login.asp");
})

Data(parametrizedTest).Scenario("Setting different names @smoke", ({I:I, current}) => {
    I.amOnPage("https://www.amazon.pl/");
    I.fillField("#twotabsearchtextbox", current.username);
    I.wait(3);
})

Scenario("Run test with tag @tagTest", ({I: I}) => {
    I.amOnPage("https://www.google.com")
    I.say("Good news");
})

Scenario("Run another test with tag @tagTest", ({I: I}) => {
    I.amOnPage("https://www.youtube.com")
    I.say("Good news");
})