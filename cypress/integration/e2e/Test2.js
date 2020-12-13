/// <reference types ="Cypress" />

describe('Second Test',function() {
    it('Verify web controls', function() {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // select check box
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')

        // unselect check box
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

        // select multiple check boxes
        cy.get('input[type="checkbox"]').check(['option2', 'option3'])

        // handling static drop downs
        cy.get('select').select('option2').should('have.value', 'option2')

        // dynamic drop down
        cy.get('#autocomplete').type('Ind')

        cy.get('.ui-menu-item div').each(($el, index, $list) => {
            if($el.text() ==="India")
            {
                $el.click()
            }

        cy.get('#autocomplete').should('have.value','India')

        //visible invisible
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')




})
    })
})


