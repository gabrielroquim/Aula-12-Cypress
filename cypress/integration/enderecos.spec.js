/// <reference types="cypress" />

describe('Funcionalidade Endereços -  Faturamento e Entregas', () => {

    // Quando visitar minha conta, sistema faz o login só para depois iniciar os testes
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados =>{
            cy.login(dados.usuario, dados.senha)
        })

    });

    it('Deve fazer cadastro de faturamento com sucesso na página', () => {
            

    })


})