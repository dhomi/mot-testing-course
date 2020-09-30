/// <reference types="Cypress" />
// tslint:disable: semicolon

import { Page } from '../support/Page'

describe('Branding page', () => {
  const inputName = 'Team two rocks'

  beforeEach(() => {
    Page.visitBB()
  })

  it('Update Branding by form', () => {
    Page.updBranding__byForm()
  })

  it('Update Valid data by PUT request', () => {
    Page.updBranding__byPut(inputName)
  })

  // it('check branding details are updated properly', () => {
  //   cy.get('.branding-form')
  //   .find('#name')
  //   .its('text')
  //   .then(res => {
  //     cy.log('res', res[0])
  //   })

  // })

  it('Update Invalid data by PUT request', () => {
    Page.updBranding__byPut_invalidate()
  })

})
