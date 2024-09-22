import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import HomePage from '../../pages/homePage';

console.log(HomePage);
console.log(HomePage.visit);

When('I open the Webpage', () => {
    HomePage.visit();
});

Then('I should be able to see New Arrivals information', () => {
    HomePage.shouldShowInformation();
});
