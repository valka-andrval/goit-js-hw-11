import axios from 'axios';
import Notiflix from 'notiflix';

const KEY = '38762660-3c7c79a3ef1bb9373a81a96ed';

const pageLimit = 20;

axios.defaults.baseURL = 'https://pixabay.com/api/';

const fetchImages = async (queryToFetch, pageToFetch) => {
  const { data } = await axios({
    params: {
      key: KEY,
      q: queryToFetch,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: pageLimit,
      page: pageToFetch,
    },
  });
  return data;
};

export { fetchImages, pageLimit };