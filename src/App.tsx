import { Provider } from "react-redux";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HomePage from "./components/modules/home/HomePage";
import store from "./store/store";

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Header />
      <HomePage />
      <Footer />
    </Provider>
  );
}

export default App;
