/// <reference types="Cypress" />
// tslint:disable: semicolon

import { Page } from '../support/Page'

describe('Check website renders properly', () => {
    it('check frontpage', () => {
        Page.checkFrontpage()
    })
})
