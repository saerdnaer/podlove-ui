const { setState } = require('../helpers/state')
const domSelectors = require('../selectors')

describe('Files Tab', () => {
  let selectors

  beforeEach(cy.bootstrap)
  beforeEach(() => {
    selectors = domSelectors(cy)
  })

  describe('Audio Files', () => {
    it('renders the audio container', function() {
      cy.window().then(setState(this.episode, this.audio, this.show, this.runtime, this.files))
      cy.tab('files')
      selectors.tabs.files.container()
      selectors.tabs.files.audio()
    })

    it('renders a list of audio files', function() {
      cy.window().then(setState(this.episode, this.audio, this.show, this.runtime, this.files))
      cy.tab('files')
      selectors.tabs.files.container()
      selectors.tabs.files
        .audio()
        .get('.files-entry')
        .should('have.length', 2)
    })

    it('renders a copy link button', function() {
      cy.window().then(setState(this.episode, this.audio, this.show, this.runtime, this.files))
      cy.tab('files')
      selectors.tabs.files.container()
      selectors.tabs.files
        .audio()
        .get('.files-entry a')
        .eq(0)
        .should('have.attr', 'href', this.audio.audio[0].url)
      selectors.tabs.files
        .audio()
        .get('.files-entry a')
        .eq(1)
        .should('have.attr', 'href', this.audio.audio[1].url)
    })

    it('renders a copy button', function() {
      cy.window().then(setState(this.episode, this.audio, this.show, this.runtime, this.files))
      cy.tab('files')
      selectors.tabs.files.container()
      selectors.tabs.files
        .audio()
        .get('.files-entry button')
        .eq(0)
      selectors.tabs.files
        .audio()
        .get('.files-entry button')
        .eq(1)
    })
  })
})
