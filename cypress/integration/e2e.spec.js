/// <reference types="cypress" />
import EnderecoPage from "../support/page_objects/endereco.page"

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */


        beforeEach(() => {
            cy.visit('produtos')
        });
    
      it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta - Usando Comandos Customizados', () => {
        cy.addProdutos('Arcadio Gym Short', '34', 'Black', 1)
        cy.visit('produtos')
        cy.addProdutos('Aether Gym Pant', '33', 'Blue', 1)
        cy.visit('produtos')
        cy.addProdutos('Abominable Hoodie', 'S', 'Red', 1)
        cy.visit('produtos')
        cy.addProdutos('Aero Daily Fitness Tee', 'S', 'Black', 1)
    
        cy.get('.woocommerce-message > .button').click()
        cy.get('.checkout-button').click()
    
        EnderecoPage.editarEnderecoFaturamento('Marcia', 'Melo', 'Globo', 'Brasil', 'Av. das Américas', '4660', 'Rio De Janeiro', 'Rio De Janeiro','22640102', '21965370099', 'marcia22@gmail.com')
        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
      })
    })