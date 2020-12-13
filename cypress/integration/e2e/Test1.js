/// <reference types="Cypress" />

describe('My First Test', function() {
    it('Does not do much!', function(){
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

        cy.get('.search-keyword').type('ca')

        cy.wait(2000)
        
        // show 4 products
        //cy.get('.products .product').should('have.length', 4)
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product')
        .should('have.length', 4)

        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
        const textVeg = $el.find('.product-name').text()
        if(textVeg.includes('Carrot'))
        {
        $el.find('button').click()
        }
        })

        // promise with none - cypress code using then method
        cy.get('.brand').then(function(logoElement)
        {
            cy.log(logoElement.text())
        })
       
        cy.get('.cart-icon').click()

        cy.contains('PROCEED TO CHECKOUT').click()

        //cy.contains('Place Order').click()

    }) 
})