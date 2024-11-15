import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant-title">${restaurant.name}</h2>
  <img class="restaurant-poster lazyload" data-src="${
    CONFIG.BASE_IMAGE_URL + restaurant.pictureId
  }" alt="${restaurant.name}" crossorigin="anonymous" />
  <div class="restaurant-info">
    <h4>Description</h4>
    <p>${restaurant.description}</p>
    <h4>City</h4>
    <p>${restaurant.city}</p>
    <h4>Address</h4>
    <p>${restaurant.address}</p>
    <h4>Rating</h4>
    <p>${restaurant.rating}</p>
    <h3>Foods Menu</h3>
    <span id="food">
    <p>${restaurant.menus.foods.map((food) => food.name).join(', ')}</p>
    </span>
    <h3>Drinks Menu</h3>
    <span id="drink">
    <p>${restaurant.menus.drinks.map((drink) => drink.name).join(', ')}</p>
    </span>
     <div class="review"><h3>Customer Reviews</h3> 
  ${restaurant.customerReviews
    .map(
      (review) => `
      <p>
        <span class="name">${review.name}</span> &bull; <span class="date">${review.date}</span>
      </p>
      <p>${review.review}</p>
    `
    )
    .join('')}
</div>  
  </div>

 
`;

const createRestaurantTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
      <img class="restaurant-item__header__poster lazyload" alt="${
        restaurant.name
      }"
           data-src="${
             restaurant.pictureId
               ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId
               : 'images/heros/hero-image_2.jpg'
           }" alt="${restaurant.name}" crossorigin="anonymous">
      <div class="restaurant-item__header__rating">
        <p>⭐️<span class="restaurant-item__header__rating__score">${
          restaurant.rating
        }</span></p>
      </div>
    </div>
    <div class="restaurant-item__content">
      <h3><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
      <p>${restaurant.city}</p>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
