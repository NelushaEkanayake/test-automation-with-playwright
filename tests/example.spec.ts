import { test, expect } from '@playwright/test';


test('Verify that user can expand the subjects', async ({ page }) => {

  const expand = '//*[@id="accordionHeader-1"]';
  const text1 = '//*[@id="b25bbdef-9c40-4084-b6c0-89231e6c42670"]/div[1]/ul/li[1]/a/span';
  const text2 = '//*[@id="b25bbdef-9c40-4084-b6c0-89231e6c42670"]/div[1]/ul/li[2]/a/span';
  const text3 = '//*[@id="b25bbdef-9c40-4084-b6c0-89231e6c42670"]/div[2]/ul/li/a/span';

  //Navigate to the wiley online library
  await page.goto('https://onlinelibrary.wiley.com/');

  // Expect a title to contain the text "Wiley Online Library | Scientific research articles, journals, books, and reference works."
  await expect(page).toHaveTitle("Wiley Online Library | Scientific research articles, journals, books, and reference works");

  //Click on expand icon in the subject name buttons
  await page.locator(expand).click();

  // Expect a to have the text "Agriculture".
  await expect(page.locator(text1)).toHaveText('Agriculture');
  // Expect a to have the text "Aquaculture, Fisheries & Fish Science".
  await expect(page.locator(text2)).toHaveText('Aquaculture, Fisheries & Fish Science');
  // Expect a to have the text "Food Science & Technology".
  await expect(page.locator(text3)).toHaveText('Food Science & Technology');


 
});

test('Verify that user can search publications,articles, keywords using search bar', async ({ page }) => {

  const searchbar = '//*[@id="searchField1"]';
  const keyword = 'covid';
  const searchIcon = '//*[@id="main-content"]/div/div/div/div/div[1]/div/div/div[1]/div[1]/div/div/form/button';
  const searchResult = '//*[@id="main-content"]/div/div/div[1]/div/div/div[2]/div/div/div[1]/div/div[1]';

  
  //Navigate to the wiley online library
  await page.goto('https://onlinelibrary.wiley.com/');

  // Expect a title to contain the text "Wiley Online Library | Scientific research articles, journals, books, and reference works."
  await expect(page).toHaveTitle("Wiley Online Library | Scientific research articles, journals, books, and reference works");

  //Enter keyword into the search bar
  await page.locator(searchbar).pressSequentially(keyword);
  
  //Click on the search icon
  await page.locator(searchIcon).click();

  //Expect to have the text "result for "covid" anywhere"
  await expect(page.locator(searchResult)).toContainText('result for "${keyword}" anywhere');

  
 
});


test('Verify that user can navigate to the advanced search page', async ({ page }) => {

  const advancedSearch = '//*[@id="main-content"]/div/div/div/div/div[1]/div/div/div[1]/div[2]/a';
  const searchResult = '//*[@id="pane-5aab5ec1-e445-4b30-9dd1-5d8bd864384601con"]/span';

  //Navigate to the wiley online library
  await page.goto('https://onlinelibrary.wiley.com/');

  // Expect a title to contain the text "Wiley Online Library | Scientific research articles, journals, books, and reference works."
  await expect(page).toHaveTitle("Wiley Online Library | Scientific research articles, journals, books, and reference works");
  
  //Click on advanced search link
  await page.locator(advancedSearch).click();

  //Expect to have the text 'advanced search' after navigating to the advanced search page
  await expect(page.locator(searchResult)).toHaveText('Advanced Search');

  
 
});


