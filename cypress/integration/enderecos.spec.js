/// <reference types="cypress"/>
var faker = require('faker-br');
const Faker = require('faker-br/lib');

describe('Funcionalidade cadastro de endereços', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')

    });

    it('Deve fazer login com sucesso', () => {

        cy.get('#username').type('luigi@nintendo.com')
        cy.get('#password').type('mario@mario.!')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, luigi')

        cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
        cy.get('h2').should('contain', 'My Addresses')

        cy.get(':nth-child(1) > .title > .edit').click()
        cy.get('#billing_first_name').clear().type(faker.name.firstName())
        cy.get('#billing_last_name').clear().type(faker.name.lastName())

        cy.get('#select2-billing_country-container').click()
        cy.contains('Brasil').click({ force: true })

        cy.get('#billing_address_1').clear().type(faker.address.streetName())
        cy.get('#billing_city').clear().type(faker.address.city())
        

        cy.get('#select2-billing_state-container').click()
        cy.contains('São Paulo').click({force: true})
        
        cy.get('#billing_postcode').clear().type(faker.address.zipCodeValid())
        cy.get('#billing_phone').clear().type(faker.phone.phoneNumber())
        cy.get(':nth-child(2) > .button').click()

        cy.get('.woocommerce-message').should('contain' , 'Endereço alterado com sucesso.')
        cy.get('.woocommerce-MyAccount-navigation-link--customer-logout > a').click()
        


    })


})