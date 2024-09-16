const URL = "https://practice.automationtesting.in/";
const INFORMATION = '#menu-item-50 > a';

class HomePage {
    visit() {
        cy.visit(URL);
    }

    shouldShowInformation() {
        cy.get(INFORMATION).contains('My Accountssss');
    }
}

export default new HomePage();
