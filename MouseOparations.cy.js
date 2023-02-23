import 'cypress-iframe'
require ('@4tw/cypress-drag-drop')

describe('MouseOparation', function(){

    it('MouseHover', ()=>{

        cy.visit('https://demo.opencart.com/')
        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click()
        cy.get('div.container:nth-child(1) nav.navbar.navbar-expand-lg.navbar-light.bg-primary div.collapse.navbar-collapse ul.nav.navbar-nav li.nav-item.dropdown:nth-child(1) div.dropdown-menu div.dropdown-inner ul.list-unstyled li:nth-child(2) > a.nav-link')
        .should('be.visible')

    })

    it('Right click', ()=>{

        //Approuch-1
        cy.visit('http://swisnl.github.io/jQuery-contextMenu/demo.html')
        // cy.get('[class="context-menu-one btn btn-neutral"]').trigger('contextmenu')
        // cy.get('.context-menu-icon-copy').should('be.visible')

        //Approuch-2
        cy.get('[class="context-menu-one btn btn-neutral"]').rightclick()
        cy.get('.context-menu-icon-copy').should('be.visible')

    })

    it('Double click', ()=>{

        cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3')
        cy.frameLoaded('#iframeResult') //Load the frame

        //Approch1- trigger()
        // cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").trigger('dblclick')
        // cy.iframe('#iframeResult').find('#field2').should('have.value','Hello World!')

        //Approch2 - trigger()
        cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").dblclick()
        cy.iframe('#iframeResult').find('#field2').should('have.value','Hello World!')


    })

    it('Drag and Drop using plugin', ()=>{

        cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')

        cy.get('#box6').should('be.visible')
        cy.get('#box106').should('be.visible')

        cy.wait(3000)
        cy.get('#box6').drag('#box106',{force:true})


    })

    it('Scrolling Page', ()=>{

        cy.visit('https://www.countries-ofthe-world.com/flags-of-the-world.html')

        //Indian flag
        cy.get(':nth-child(1) > tbody > :nth-child(86) > :nth-child(1)').scrollIntoView({duration:2000})
        cy.get(':nth-child(1) > tbody > :nth-child(86) > :nth-child(1)').should('be.visible')

        cy.get(':nth-child(1) > tbody > :nth-child(4) > :nth-child(1) > img').scrollIntoView({duration:3000})
        cy.get(':nth-child(1) > tbody > :nth-child(4) > :nth-child(1) > img').should('be.visible')

        cy.wait(2000)
        cy.get('#footer').scrollIntoView();


    })
})