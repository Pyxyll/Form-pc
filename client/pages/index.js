import { call } from 'file-loader';
import Layout from '../components/layout.js';
import { getData } from '../services/Api/index.js';

const getStuff = async () => {
  const temp = await getData();
  const responseData = temp.data;

  console.log(responseData);
};

getStuff();

/**
 * Main component - all others rendered from here.
 */
const Index = () => (
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
