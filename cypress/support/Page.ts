/// <reference types="Cypress" />
// tslint:disable: semicolon

export class Page {
    static visitBB(): void {
        cy.visit('/#/admin')
        cy.get('input#username')
            .type('admin')
        cy.get('input#password')
            .type('password')
        cy.get('button#doLogin')
            .click()
        cy.get('#brandingLink')
            .click()
    }

    static checkFrontpage(): void {
        cy.visit('/')
        cy.get('.text-muted > a:nth-child(5)')
            .contains('Admin panel')
    }

    static checkAdmin(): void {
        cy.get('.branding-form')
        cy.get('#updateBranding')
            .click()
        cy.get('.ReactModalPortal')
        cy.get('.ReactModalPortal div > button')
            .should('exist')
        cy.get('.ReactModalPortal div > p')
            .contains('Branding updated!')
        cy.get('.ReactModalPortal div > button')
            .click()
        cy.get('.ReactModalPortal div > button')
            .should('not.exist')
    }

    static updBranding__byForm(): void {
        cy.get('.branding-form input#name')
            .clear()
            .type(' ')
        cy.get('#updateBranding')
            .click()
        cy.get('.alert-danger')
        cy.get('.alert > p')
            .contains('Name should not be blank')
        cy.get('.alert > p')
            .contains('size must be between 3 and 100')
    }

    static updBranding__byPut(inputName: string): void {
        cy.request({
            method: 'PUT',
            url: 'https://team2.automationintesting.online/branding/',
            body:
            {
                name: inputName,
                map: { latitude: 52.6351204, longitude: 1.2733774 },
                logoUrl: 'https://www.mwtestconsultancy.co.uk/img/rbp-logo.png',
                description: 'Welcome to Shady Meadows, a delightful Bed & Breakfast nestled in the hills on Newingtonfordburyshire. A place so beautiful you will never want to leave. All our rooms have comfortable beds and we provide breakfast from the locally sourced supermarket. It is a delightful place.',
                contact: {
                    name: 'Shady Meadows B&B',
                    address: 'The Old Farmhouse, Shady Street, Newfordburyshire, NE1 410S',
                    phone: '012345678901',
                    email: 'fake@fakeemail.com'
                }
            }
        }).should(response1 => {
            expect(response1.status)
                .to
                .eq(202)
        })
    }

    static updBranding__byPut_invalidate(): void {
        cy.request({
            method: 'PUT',
            url: 'https://team2.automationintesting.online/branding/',
            failOnStatusCode: false,
            body:
            {
                name: 'Team two rocks! ë',
                map: { latitude: 52.6351204, longitude: 1.2733774 },
                logoUrl: 'https://www.mwtestconsultancy.co.uk/img/rbp-logo.png',
                description: 'Welcome to Shady Meadows, a delightful Bed & Breakfast nestled in the hills on Newingtonfordburyshire. A place so beautiful you will never want to leave. All our rooms have comfortable beds and we provide breakfast from the locally sourced supermarket. It is a delightful place.',
                contact: {
                    name: 'Shady Meadows B&B',
                    address: 'The Old Farmhouse, Shady Street, Newfordburyshire, NE1 410S',
                    phone: '012345678901',
                    email: 'fake@fakeemail.com'
                }
            }
        }).then(response => {
            expect(response.status)
                .to
                .eq(400)
        })
    }
}
