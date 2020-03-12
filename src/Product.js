import React from 'react';
// import './Product.css';
import logo from './logo.svg';
import './App.css';

class Product extends React.Component {
	render() {
		return (
			<div className="row">
				<div class="col s3 m3 ">
					<div class="card  ">
						<div class="card-content ">
							<span class="card-title red-text">
								<h5>Aku</h5>
							</span>
							<p>Mahasiswa suka tidur.</p>
						</div>
						<div class="card-action">
							<button class="btn waves-effect waves-light" type="submit" name="action">
								<i class="material-icons right">add</i>Read More
							</button>
						</div>
					</div>
				</div>

				<div class="col m8">
					<div class="col s6 m4">
						<div class="card black-card">
							<div class="card-image">
								{/* <img className="App-logo" src={logo}/> */}
								<span className="card-title ">Nama Anda</span>
							</div>
							<div class="card-content">
								<span>
									<h5 class="card-title green-text">Nama Anda</h5>
								</span>
							</div>
							<div class="card-content blue-text">
								<p>Keterangan anda yang tidak penting</p>
								{/* <button class="btn waves-effect waves-light" type="submit" name="action"><i class="material-icons right">delete</i>Hapus
    
    </button> */}
							</div>
						</div>
					</div>
					<div class="col s6 m4">
						<div class="card">
							<div class="card-image">
								{/* <img className="App-logo" src={logo}/> */}
								<span className="card-title grey-text">Card Title</span>
							</div>
							<div class="card-content">
								<p>
									Ini ceritanya post-post-an
								</p>
							</div>
							<div class="card-action">
								<button class="btn waves-effect waves-light" type="submit" name="action">
									<i class="material-icons right">delete</i>Hapus
								</button>
							</div>
						</div>
					</div>
					<div class="col s6 m4">
						<div class="card">
							<div class="card-image">
								<img className="App-logo" src={logo}/>
								{/* <span className="card-title grey-text">Card Title</span> */}
							</div>
							{/* <div class="card-content">
								<p>
									I am a very simple card. I am good at containing small bits of information. I am
									convenient because I require little markup to use effectively.
								</p>
							</div> */}
							<div class="card-action">
								<button class="btn waves-effect waves-light" type="submit" name="action">
									<i class="material-icons right">delete</i>Buang
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			//   <div className="prdct">
			//     <img src={logo} className="App-logo" alt="logo" />
			//     <h1 className="ungu"> Hello {this.props.nama} world from Component (class)</h1>
			//     <div className="table">
			//     <table >
			//       <tbody>
			//         <td><img src={logo} className="App-logo" alt="logo" />
			//     <h1 className="ungu"> Harga HP</h1>
			//     <h3>Rp 10.000</h3></td>
			//         <td><img src={logo} className="App-logo" alt="logo" />
			//     <h1 className="ungu"> Harga HP</h1><h3>Rp 10.000</h3></td>
			//         <td><img src={logo} className="App-logo" alt="logo" />
			//     <h1 className="ungu"> Harga HP</h1><h3>Rp 10.000</h3></td>
			//         <td><img src={logo} className="App-logo" alt="logo" />
			//     <h1 className="ungu"> Harga HP</h1><h3>Rp 10.000</h3></td>

			//       </tbody>
			//     </table>
			//</div>   </div>
			//   </div>
		);
	}
}

export default Product;
