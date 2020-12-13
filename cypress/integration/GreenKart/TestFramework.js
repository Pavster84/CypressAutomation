/// <reference types ="Cypress" />
import Homepage from '../../support/pageObjects/Homepage'
import ProductPage from '../../support/pageObjects/ProductsPage'

describe('Second Test',function() {
    before(function() {

        cy.visit(Cypress.env('url')+'/angularpractice/')

        cy.fixture('example.json').then(function(data)
        {
        this.data=data
    })
})
    it('Verify web controls', function() {
        
        // create object for that class
        const homePage=new Homepage()
        const productPage=new ProductPage()

        homePage.getEditBox().type(this.data.name)

        homePage.getGender().select(this.data.gender)

        // validation 1
        homePage.getTwoWayDataBinding().should('have.value', this.data.name)

        // validation 2
        homePage.getEditBox().should('have.attr','minlength','2')

        // validation 3
        homePage.getEntrepreneaur().should('be.disabled')

        homePage.getShopTab().click()

        this.data.productName.forEach(function(element){
            cy.selectProduct(element)
        })

        productPage.checkOutButton().click()
        let sum =0

        cy.get('tr > td:nth-child(4) strong').each((el, index, list) =>
        {
            const aText = el.text()
            cy.log(aText)
            let res = aText.split(" ")
            res = res[1].trim()
            sum = Number(sum)+Number(res)
            

        }).then(function()
        {
            cy.log(sum)
        })

        cy.get('h3 strong').then(function(element) {
            const amount = element.text()
            let res = amount.split(" ")
            let total = res[1].trim()
            expect(Number(total)).to.equal(sum)
        })

        cy.contains('Checkout').click()

        cy.get('#country').type('India')
        cy.get('.suggestions > ul > li > a').click()

        cy.get('#checkbox2').click({force:true})
        cy.get('input[type="submit"]').click()

        //cy.get('.alert').should('have.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).')
        cy.get('.alert').then(function(element)
        {
            const actualText = element.text()
            expect(actualText.includes("Success")).to.be.true
        })
        

    
        })
        

    })


