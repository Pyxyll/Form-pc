import { call } from 'file-loader';
import Layout from '../components/layout.js';
import { getData } from '../services/Api/index.js';

// Check for valid response
const getStuff = async () => {
  try {
    const response = await getData();
    if (response.status !== 200) return;
    return response.data;
  } catch (e) {
    console.info(e.message);
  }
};

// Handle response
const getUiInfo = async () => {
  const stuff = await getStuff();

  const title = stuff[0].title;
  const compArr = stuff[1].components;
  console.log('Hi: ', compArr);
};

getUiInfo();

/**
 * Main component - all others rendered from here.
 */
const Index = props => (
  <div>
    <Layout>
      <h1>Form PC</h1>
    </Layout>
    <div>
      <p>Test hello yes this is dog</p>
      <p>Thats not a boomer meme leave me alone</p>
    </div>
  </div>
);
export default Index;
