/// <reference types="Cypress" />
// tslint:disable: semicolon

import { Page } from '../support/Page'

describe('Admin page', () => {
    beforeEach(() => {
        Page.visitBB()
    })

    it('check admin is rendered properly', () => {
        Page.checkAdmin()
    })
})
