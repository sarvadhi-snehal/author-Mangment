import "./customScss/custom.scss";
// import 'bootstrap/dist/css/bootstrap.css';
// eslint-disable-next-line no-unused-vars
import bootstrap from "bootstrap";
import { Route, Switch } from "react-router-dom";
import "./App.css";

// redux
import { Provider } from "react-redux";
import store from "./redux/author/store";

// component
import Header from "./pages/Header";
import Home from "./pages/Home";
import Error from "./pages/Error";
import About from "./pages/About";
import Add from "./pages/Add";
import Authors from "./pages/Authors";
import Datatable from "./pages/Datatable";
function App() {

  return (
   
    <Provider store={store}>
      <div>
        <Header />

        <Switch>
          <Route path="/home" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/authors" component={Authors} />
          <Route path="/addauthor"  component={Add} />
          <Route path="/authorslist" component={Datatable} />

          <Route path="/" component={Home} />
          <Route component={Error} />


        </Switch>
      </div>
    </Provider>
  );
}

export default App;
