import chaiInViewport from 'chai-in-viewport'

chai.use(chaiInViewport);

let translationsCache = {};

before(() => {
  // Have the debugger closed by default so that local expectations are according to pipeline
  cy.window({log: false}).then((w) => w.localStorage.debug_state = 0);
  // Prevent local storage remember and caching to mess up tests.
  cy.clearLocalStorage();
});
