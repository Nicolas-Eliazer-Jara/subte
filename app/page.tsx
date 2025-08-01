'use client'
import {SubteSelector} from './components/SubteSelector'
import MapaLeafletWrapper from './components/MapaLeafletWrapper';
import 'leaflet/dist/leaflet.css';
import { useState } from 'react';


export default function Home() {

     const [selectedRouteId , setSelectedRouteId] = useState<string>('A');

  return (
   <div className=" flex">
       <div className=" w-3/9 h-screen">
       <SubteSelector setSelectedRouteId={setSelectedRouteId} selectedRouteId={selectedRouteId} />

       </div>

       <div className=" w-6/9 h-screen">
            <MapaLeafletWrapper  />
       </div>
   </div>
  );
}
