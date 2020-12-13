import { Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import Homepage from '../../../../support/pageObjects/Homepage'
import ProductPage from '../../../../support/pageObjects/ProductsPage'

const homePage=new Homepage()
const productPage=new ProductPage()
let name 

Given('I open Ecommerce page', ()=>
{
    cy.visit(Cypress.env('url')+'/angularpractice/')
})

When('I add items to cart',function ()
{
    homePage.getShopTab().click()

    this.data.productName.forEach(function(element){
        cy.selectProduct(element)
    })

    productPage.checkOutButton().click() 
})

When('validate the total prices', ()=>
{
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

    
})

Then('select the country submit and verify Thank you', () =>
{
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

When ("I fill the form details",function(dataTable)
{
    let name = dataTable.rawTable[1][0]
    homePage.getEditBox().type(dataTable.rawTable[1][0])

    homePage.getGender().select(dataTable.rawTable[1][1])

})

Then('Validate the forms behaviour', function()
{
        // validation 1
        homePage.getTwoWayDataBinding().should(name)
        // validation 2
        homePage.getEditBox().should('have.attr','minlength','2')    
        // validation 3
        homePage.getEntrepreneaur().should('be.disabled')

})

And('Select the Shop Page', function()
{
    homePage.getShopTab().click()

})


