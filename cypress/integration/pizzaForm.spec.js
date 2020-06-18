//  test that you can add text to the box
//  test that you can select multiple toppings
//  test that you can submit the form

describe('Form inputs', () => {
    it('can navigate to the site', () => {
        cy.visit('http://localhost:3000/pizza')
        cy.url().should('include','localhost', 'pizza')
    })
})

describe('Text input', () => {
    it('can type a name', () => {
        cy.get('input[name="username"]')
          .type('Karen')
          .should('have.value', 'Karen')
    })

    it('can type special instructions', () => {
        cy.get('input[name="instructions"]')
          .type('more pizza')
          .should('have.value', 'more pizza')
    })

    it('can select a size', () => {
        cy.get('select[name="size"]')
          .select('Small')
    })

    it('can select multiple toppings', () => {
        cy.get('input[type="checkbox"]')
          .check()
    })
})

describe('Submitting an order', () => {
    it('can submit an order', () => {
        cy.get('button')
          .click()
    })
})