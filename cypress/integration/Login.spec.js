/// <reference types="cypress"/>

context('Funcionalidade Login', () => {

    beforeEach(() => {
     cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        
    });
 
    afterEach(() => {
        cy.screenshot()
    });
    
     it('Deve fazer login com sucesso', () => {        
         cy.get('#username').type('aluno_ebac@teste.com')
         cy.get('#password').type('teste@teste.com')
         cy.get('.woocommerce-form > .button').click()
 
         cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , "Olá, aluno_ebac")
         
     });
 
     it('Deve exiibir mensagem de usuário inválido', () => {
         cy.get('#username').type('alu_ebac@teste.com')
         cy.get('#password').type('teste@teste.com')
         cy.get('.woocommerce-form > .button').click()
 
         cy.get('.woocommerce-error > li').should('contain' , 'Endereço de e-mail desconhecido')
        
     });
 
 
     it('Deve exiibir mensagem de senha inválido', () => {
         cy.get('#username').type('aluno_ebac@teste.com')
         cy.get('#password').type('tee@teste.com')
         cy.get('.woocommerce-form > .button').click()
 
         cy.get('.woocommerce-error > li').should('contain' , 'Erro: A senha')
 
         
     });
     
 });