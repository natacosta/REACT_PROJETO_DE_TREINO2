import Swal from 'sweetalert2';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';





import Container from './Components/Layout/Container/Container'
import ListaDeGatos from './Components/Pages/ListaDeGatos'
import Formulario from './Components/Pages/Formulario'

import Navbar from './Components/Layout/navBar/navBar';

import { Fomrs } from './Components/Context/Forms'

function App() {


  return (

    <Router>
      <div>

        <Navbar />


        <Container customClass='min-height'>
          <Fomrs>
            <Routes>
              <Route exact path='/' element={<ListaDeGatos />} />
              <Route path='/Formulario' element={<Formulario />} />
              <Route path='/Formulario' element={<Formulario />} />
            </Routes>
          </Fomrs>
        </Container>


      </div>
    </Router>

  );
}

export default App;
