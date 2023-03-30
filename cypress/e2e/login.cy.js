/// <reference types="Cypress" />
import { expect } from "chai";
import { loginpage } from "../page_object/loginPOM"


const {email, password} = Cypress.env();

describe('login', ()=>{
    it('Successfull login' ,()=>{
        cy.visit('/login');
        loginpage.emailInputField.should('be.visible');
        loginpage.PasswordInputField.should('be.visible');
        loginpage.SubmitBtn.should('be.visible');
        loginpage.emailInputField.type(email)
        loginpage.PasswordInputField.type(password);
        loginpage.SubmitBtn.click();
        cy.url().should('not.contain', '/login');
    });
    it.only('Create new organization', () => {
     
        loginpage.login(email, password);
        loginpage.AddNewBtn.click();
        loginpage.AddNewOrgBtn.click();
        loginpage.EnterNameInputField.type('Vukasin');
        loginpage.NextBtn.click();
        loginpage.NextBtn.click();
        loginpage.Sidebar.should('contain', 'Vukasin');
    });
    it('Login via API',() => {
        cy.request({
            method: 'POST',
            url: 'https://cypress.vivifyscrum-stage.com/',
            body: {
                email: email,
                password: password
            }
        }).then((response) => {
            
        })
    })
})
