describe('API Test', function(){

    it('My first API Test',function() {
        cy.request('POST','https://rahulshettyacademy.com/Library/Addbook.php',{
            "name":"Learn Appium Automation with Java",
            "isbn":"bcd",
            "aisle":"227821",
            "author":"John foe"
        }).then(function(response)
    {
        expect(response.body).to.have.property("Msg", "successfully added")
        expect(response.status).to.eq(200)
    })
})
})