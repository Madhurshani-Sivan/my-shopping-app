import { Provider } from "react-redux";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HomePage from "./components/modules/home/HomePage";
import store from "./store/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
