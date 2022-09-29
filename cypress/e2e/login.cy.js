describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:8000/login')
    cy.get('body')
    cy.get('#uname').type('admin@gmail.com')
    cy.get('#pwd').type('admin')
    cy.get('.btn').click()
    cy.get('form > .dropdown-item').click()

  })
})