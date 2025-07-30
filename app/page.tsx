import {Nav} from './components/nav'
import {Map} from './components/map'
import 'leaflet/dist/leaflet.css';


export default function Home() {
  return (
   <div className=" flex">
       <div className=" w-3/9 h-screen">
            <Nav></Nav>
       </div>

       <div className=" w-6/9 h-screen">
            <Map></Map>
       </div>
   </div>
  );
}
