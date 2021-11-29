import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import NewScooter from "./Components/NewScooter";
import Scooters from "./Components/Scooters";
import Modal from "./Components/Modal";

function App () {


useEffect(() => {
  axios.get('http://localhost:3003/test')
    .then(res => {
      console.log(res.data);
    })
}, [])

const [lastUpdate, setLastUpdate] = useState(Date.now());
const [scooters, setScooters] = useState([]);

useEffect(() => {
  axios.get('http://localhost:3003/scooters')
      .then(res => {
        setScooters(res.data)
      console.log(res.data);
      })
}, [lastUpdate])


const deleteScooter = (id) => {
  // setShowModal(false);
  axios.delete('http://localhost:3003/scooters/' + id)
    .then(res => {
      // add message
      // addMsg('Scooter was deleted!')
      setLastUpdate(Date.now())
      console.log(res.data);
    })
}
// Create

const create = scooter => {
  axios.post('http://localhost:3003/scooters', scooter)
    .then(res => {
      // add message
      // addMsg('Scooter was created!')
      setLastUpdate(Date.now())
      console.log(res.data);
    })
}

// Modal

  // cia nurodoma kada modalas pasirodys ir kada ne
  const [showModal, setShowModal] = useState(false);

  // cia aprasoma kas bus parodyta modalo lange
  const [modalElement, setModalElement] = useState({
    registration_code: '',
    is_busy: false,
    last_use_time: '',
    total_ride_kilometers: '',
    one_day_ride: ''
  });

  // cia yra modalo valdymo funkcionalumas
  const modal = (scooter) => {
    setShowModal(true);
    setModalElement(scooter);
  }

  // funkcionalumas paspaudus mygtuka hide modalo langas dings
  const hide = () => {
    setShowModal(false);
  }
  // -------------------------------------------------
  // Edit node
  const edit = (scooter, id) => {
    setShowModal(false);
    axios.put('http://localhost:3003/scooters/' + id, scooter)
      .then(res => {
        // add message
        // addMsg('Scooter was edited!')
        setLastUpdate(Date.now())
        console.log(res.data);
      })
  }

return (
  <div>
    <NewScooter create={create} />
    <Modal showModal={showModal} hide={hide} modalElement={modalElement} deleteScooter={deleteScooter} edit={edit} />
    <Scooters scooters={scooters} deleteScooter={deleteScooter} modal={modal} />
  </div>
);
}


export default App;
