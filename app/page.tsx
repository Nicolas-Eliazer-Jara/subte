import {Nav} from './components/nav'
import MapaLeafletWrapper from './components/MapaLeafletWrapper';
import 'leaflet/dist/leaflet.css';


export default function Home() {
  return (
   <div className=" flex">
       <div className=" w-3/9 h-screen">
            <Nav></Nav>
       </div>

       <div className=" w-6/9 h-screen">
            <MapaLeafletWrapper></MapaLeafletWrapper>
       </div>
   </div>
  );
}
