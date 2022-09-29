describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:8000/login')
    cy.get('body')
    cy.get('#uname').type('admin@gmail.com')
    cy.get('#pwd').type('admin')
    cy.get('.btn').click()

    cy.get('.selected > .sidebar-link').click()
    cy.get('.customize-input > .btn').click()
    cy.get(':nth-child(1) > .form-group > .form-control').type('santi@gmail.com')
    cy.get(':nth-child(2) > .form-group > .form-control').type('Santi Lansari')
    cy.get(':nth-child(3) > .form-group > .form-control').type('Makasar')
    cy.get(':nth-child(4) > .form-group > .form-control').type('Santi')
    cy.get(':nth-child(5) > .form-group > .form-control').type('Santi')
    cy.get('.text-right > .btn-info').click()
    cy.get('form > .dropdown-item').click()
  })
})