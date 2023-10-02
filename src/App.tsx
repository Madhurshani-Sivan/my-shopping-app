import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HomePage from "./components/modules/home/HomePage";
import ProductPage from "./components/modules/product/ProductPage";
import store from "./store/store";

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:productId" element={<ProductPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
