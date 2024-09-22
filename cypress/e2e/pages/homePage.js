const URL = "https://practice.automationtesting.in/";
const INFORMATION = '#text-22-sub_row_1-0-1-1-0 > h2';

class HomePage {
    visit() {
        cy.visit(URL);
    }

    shouldShowInformation() {
        cy.get(INFORMATION).contains('new arrivals');
    }
}

export default new HomePage();
