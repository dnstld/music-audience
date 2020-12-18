import Layout from './layouts/Layout';
import Home from './layouts/Home';

import GlobalStyles from './styles/global/globalStyles';

function App() {
  return (
    <Layout>
      <GlobalStyles />

      <Home />
    </Layout>
  );
}

export default App;
