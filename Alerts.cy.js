
describe('MyTestsuite', function(){

    it('Verify the name of the title', function(){
    
        cy.visit('https://demo.nopcommerce.com/')

        cy.get('[type="submit"]').click()



    })
})