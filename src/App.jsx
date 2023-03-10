import { Provider } from "react-redux";
import "./App.css";
import Layout from "./components/Layout/Layout";
import { store } from "./redux/store,js";

export default function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <Layout />
      </Provider>
    </div>
  );
}
