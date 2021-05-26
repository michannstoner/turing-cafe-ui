describe('Homepage', () => {

  beforeEach(() => {
    cy.intercept('http://localhost:3001/api/v1/reservations', [
      {
        'id': '1',
        'name': 'Name',
        'date': '05/26',
        'time': '6:00',
        'number': 2
      },
      {
        'id': '2',
        'name': 'Another Name',
        'date': '05/27',
        'time': '4:00',
        'number': 4
      }
    ])
      .visit('http://localhost:3000/')
  })

  it('should display the page title', () => {
    cy.get('h1').contains('Turing Cafe Reservations')
  })

  it('should display a form', () => {
    cy.get('form > input[name="name"]').type('Third Name').should('have.value', 'Third Name')
      .get('input[name="date"]').type('05/28').should('have.value', '05/28')
      .get('input[name="time"]').type('4:00').should('have.value', '4:00')
      .get('input[name="number"]').type(5).should('have.value', 5)
  })

  it('should display existing reservations', () => {
    cy.get('.resCard').contains('Name')
      .get('.resCard').contains('Another Name')
      .get('.resCard').should('have.length', 2)
  })


})