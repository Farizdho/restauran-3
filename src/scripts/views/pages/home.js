import RestaurantDbSource from '../../data/restaurantdb-source';

const Home = {
  async render() {
    return `
          <h2>Home</h2>
        `;
  },

  async afterRender() {
    const restaurant = await RestaurantDbSource.home();
    console.log(restaurant);
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Home;
