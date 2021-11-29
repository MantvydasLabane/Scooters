import Scooter from "./Scooter";

function Scooters({ scooters, deleteScooter, modal}) {
    return (
        // Grąžina masyvą, suformuotą susiejant kiekvieną masyvo (-ų) reikšmę su nauja reikšme
        <div className='extra-list'>
            {scooters.map(scooter => <Scooter key={scooter.id} scooter={scooter} deleteScooter={deleteScooter} modal={modal} ></Scooter>)}
        </div>
    );

}
export default Scooters;