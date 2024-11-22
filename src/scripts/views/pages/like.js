// import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
// import { createRestaurantTemplate } from '../templates/template-creator';

// const Like = {
//   async render() {
//     return `
//       <div class="content">
//         <h2 class="content__heading">Your Liked Restaurants</h2>
//         <div id="restaurants" class="restaurants">

//         </div>
//       </div>
//     `;
//   },

//   async afterRender() {
//     const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
//     const restaurantsContainer = document.querySelector('#restaurants');

//     restaurants.forEach((restaurant) => {
//       restaurantsContainer.innerHTML += createRestaurantTemplate(restaurant);
//     });
//   },
// };

import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import FavoriteRestaurantView from './liked-restaurants/like-restaurant-view';
import FavoriteRestaurantSearchPresenter from './liked-restaurants/like-restaurant-search';
import FavoriteRestaurantShowPresenter from './liked-restaurants/like-restaurant-show';

const view = new FavoriteRestaurantView();

const Like = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    // eslint-disable-next-line no-new
    new FavoriteRestaurantShowPresenter({
      view,
      favoriteRestaurants: FavoriteRestaurantIdb,
    });
    // eslint-disable-next-line no-new
    new FavoriteRestaurantSearchPresenter({
      view,
      favoriteRestaurants: FavoriteRestaurantIdb,
    });
  },
};

export default Like;
