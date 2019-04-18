import React from 'react';
import './Product.css';
import logo from './logo.svg';
import './App.css';


class Product extends React.Component {
  render() {
      return (
          <div className="prdct">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="ungu"> Hello {this.props.nama} world from Component (class)</h1>
            <div className="table">
            <table >
              <tbody>
                <td><img src={logo} className="App-logo" alt="logo" />
            <h1 className="ungu"> Harga HP</h1>
            <h3>Rp 10.000</h3></td>
                <td><img src={logo} className="App-logo" alt="logo" />
            <h1 className="ungu"> Harga HP</h1><h3>Rp 10.000</h3></td>
                <td><img src={logo} className="App-logo" alt="logo" />
            <h1 className="ungu"> Harga HP</h1><h3>Rp 10.000</h3></td>
                <td><img src={logo} className="App-logo" alt="logo" />
            <h1 className="ungu"> Harga HP</h1><h3>Rp 10.000</h3></td>
                
              </tbody>
            </table>
          </div>
          </div>
          
      );
  }
}

export default Product;
