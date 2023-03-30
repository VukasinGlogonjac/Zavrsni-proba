class LoginPage {
    get emailInputField (){
        return(cy.get("input[type='email']"))
    }
    get PasswordInputField (){
        return(cy.get("input[type='password']"))
    }
    get AddNewOrgBtn (){
        return(cy.contains("Add Organization"))
    }
    get EnterNameInputField () {
        return(cy.get("input[placeholder='Enter name...']"))
    }
    get AddNewBtn (){
        return(cy.contains("Add New"))
    }
    get SubmitBtn (){
        return(cy.get("button[type='submit']"))
    }
    get NextBtn (){
        return(cy.get("button[name='next_btn']"))
    }
    get Sidebar (){
        return(cy.get("div[class='vb-content']"))
    }

    login (email, password) {
        cy.visit('/login');
        loginpage.emailInputField.type(email)
        loginpage.PasswordInputField.type(password);
        loginpage.SubmitBtn.click();
    }
}
export const loginpage = new LoginPage