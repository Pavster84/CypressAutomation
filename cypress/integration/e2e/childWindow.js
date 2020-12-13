/// <reference types ="Cypress" />

describe('Second Test',function() {
    it('Verify web controls', function() {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#opentab').then(function(el)
        {
            const url = el.prop('href')
            cy.log(url)
            //cy.visit(url)
        })
})
})
  
    

    



