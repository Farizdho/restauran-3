import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
          <div class="content">
          <div id="restaurant" class="restaurants">
         
          
          </div>
      </div>
        `;
  },

  async afterRender() {
    const restaurant = await RestaurantDbSource.getRestaurant();
    // console.log(restaurant);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurant.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantTemplate(restaurant);
    });
  },
};

export default Home;
