const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('showing empty liking restaurant', ({ I }) => {
  I.seeElement('#query');
  I.see(
    'Tidak ada restaurant untuk ditampilkan',
    '#restaurant-item__not__found'
  );
});

Scenario('favoriting one restaurant', async ({ I }) => {
  I.seeElement('#restaurant-list');
  I.see(
    'Tidak ada restaurant untuk ditampilkan',
    '#restaurant-item__not__found'
  );

  I.amOnPage('/');
  I.wait(3);

  I.waitForElement('#restaurant-item');
  I.seeElement('#restaurant-title a');

  const firstRestaurant = locate('#restaurant-title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);
  I.wait(3);

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');
  I.wait(3);

  I.amOnPage('/#/like');
  I.wait(3);
  I.seeElement('#resto-item');
  const favoritedRestaurantTitle = await I.grabTextFrom('#restaurant-title');

  assert.strictEqual(firstRestaurantTitle, favoritedRestaurantTitle);
});

Scenario('unfavoriting one restaurant', async ({ I }) => {
  I.wait(5);
  I.see(
    'Tidak ada restaurant untuk ditampilkan',
    '#restaurant-item__not__found'
  );
  I.amOnPage('/');
  I.wait(3);
  I.waitForElement('#restaurant-item');
  I.seeElement('#restaurant-title a');
  const firstRestaurant = locate('#restaurant-title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);
  I.wait(10);
  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');
  I.wait(3);
  I.amOnPage('/#/like');
  I.wait(3);
  I.seeElement('#restaurant-item a');
  const firstRestaurantlike = locate('#restaurant-title a').first();
  const favoritedRestaurantTitle = await I.grabTextFrom(firstRestaurantlike);
  assert.strictEqual(firstRestaurantTitle, favoritedRestaurantTitle);
  I.click(firstRestaurantlike);
  I.wait(10);
  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');
  I.wait(3);
  I.amOnPage('/#/like');
  I.wait(3);
  I.seeElement('#restaurant-item__not__found');
  const onFav = await I.grabTextFrom('#restaurant-item__not__found');
  assert.strictEqual(onFav, 'Tidak ada restaurant untuk ditampilkan');
});
