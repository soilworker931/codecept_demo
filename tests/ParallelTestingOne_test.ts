Feature("Parallel testing One");

Scenario("test on @somethingInParallel", ({I: I}) => {
    I.amOnPage("https://www.google.com")
    I.say("Good news");
    I.click("not existing locator")
})