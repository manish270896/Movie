import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import MovieDetails from './components/MovieDetails/MovieDetails';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Footer from './components/Footer/Footer';

function App() {
  var data = {
    name: "Priya",
    getName: function () {
      return this.name;
    }
  }

  var a = {
    name: "Manish"
  }
  //this.name = "manish"
  var copy = data.getName.bind(a);
  console.log(copy());
  copy();

  var arr = [1, 2, 3, 4, 5];
var length = 2;

function highSum(arr, length) {
    //var max = 0;
    var res = [];
    var l = arr.length;
    for (let i = 0; i < length; i++) {
        res[i] = max(arr, l--);
    }
    return res;
}
console.log(highSum(arr, length));
function max(arr, l) {
    var maximum = 0;
    var index =0;
    for (let i = 0; i < l; i++) {
        if (arr[i] > maximum) {
            index = i;
            maximum = arr[i];
        }
    }
    return index;
}

  //console.log(x);
  // console.log("Start");
  // let p = new Promise((resolve, reject) => {
  //   let a = 1 + 1;
  //   console.log("ín process");
  //   if (a === 2) {
  //     resolve("Success");
  //   }
  //   else {
  //     reject('Failed');
  //   }
  // })
  // p.then((message) => {
  //   console.log('This ' + message);
  // }).catch((message) => {
  //   console.log('This ' + message);
  // })
  return (
    <div className="app">

      <Router>
        <Header></Header>
        <div className="container">
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/movie/:imdbID" component={MovieDetails}></Route>
            <Route component={PageNotFound}></Route>
          </Switch>
        </div>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
