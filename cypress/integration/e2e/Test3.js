/// <reference types ="Cypress" />

describe('Second Test',function() {
    it('Verify web controls', function() {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()


        //window alert
        cy.on('window:alert', (str) => {
            expect(str).to.be.equal('Hello , share this practice page and share your knowledge')
        })

        // window confirm
        cy.on('window:confirm', (str) => {
            expect(str).to.be.equal('Hello , Are you sure you want to confirm?')       
        })

        cy.get('#opentab').invoke('removeAttr','target').click()

        cy.go('back')
        cy.go('forward')






})
    })



