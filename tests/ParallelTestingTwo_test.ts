Feature("Parallel testing Two");

Scenario("test on @somethingInParallel", ({I: I}) => {
    I.amOnPage("https://www.google.com")
    I.say("Good news");
    I.wait(20);
})