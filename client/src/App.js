
import './App.css';
import Head from './components/Head/Head'
import Body from './components/Body/Body'
import Footer from './components/Footer/Footer'


import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (

    <div className="main-wrapper">

      <>
        <ToastContainer draggable={false} transition={Zoom} autoClose={2000} position={'top-right'} />
      </>

      <Head />

      <Body />

      <Footer />

    </div>

  );
}

export default App;


// 1 - Public view for not logged users
// 2 - Logged view  for logged users only.


// At least 3 pages without counting the about or contacts page.

// Catalog list of the products that are selling - Page 1

// Detailed list of one product and what it contains
// One CRUD collection, it will be probably the order history
// Implement authentication
// Implement Routing
// Use stateless and state full components, bound forms , synthetuc events, Component styling. 
// Use GitHub
// Devide the app in components with separated CSS files. 
// A .md file with waht the program can do.
// Demontrate React Hooks and Contect API


//BONUS

//USE CONTECT API
//Use file storage
//Deploy the application to a server
//Use an API like a wether API or other. 