
describe('MoseOver features', function(){

    it('Verify the name of the title', function(){
    
        cy.visit('https://www.amazon.in/')

        cy.get("#nav-logo").should("be.visible")

        cy.get("#nav-tools a").eq(0).trigger("mouseover")


    })
})
