describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:8000/login')
    cy.get('body')
    cy.get('#uname').type('staff@gmail.com')
    cy.get('#pwd').type('staff')
    cy.get('.btn').click()

    cy.get('.selected > .sidebar-link').click()
    cy.get('.customize-input > .btn').click()
    cy.get(':nth-child(4) > :nth-child(5) > .btn').click()

    cy.get(':nth-child(2) > .form-group > .form-control').type('10002003000489')
    cy.get(':nth-child(3) > .form-group > .form-control').type('Naira Warda Arifa')
    cy.get(':nth-child(4) > .form-group > .form-control').type('Situbondo')
    cy.get(':nth-child(5) > .form-group > .form-control').type('Besuki')
    cy.get('.text-right > .btn-info').click()
    cy.get('form > .dropdown-item').click()
  })
})