import React, {useState} from 'react';
import { ComposableMap, Geographies, Geography, ZoomableGroup,Marker } from "react-simple-maps";
import {markers1,markers2,markers3,markers4} from './markers';
import Datausage from './Datausage';
import './App.css';
const Map = () => {
  const [data, setData]=useState('1390');
  const [region, setRegion]=useState('USA');
// This is the function for map and markers
  return (
    <>
      <div className="Map" >
       <div style={{height:'550px',borderStyle:"double" ,marginTop:"1rem" }} className="column-1">
     
      <ComposableMap data-tip=''  >
      <ZoomableGroup  zoom={0.9}> 
      {" "}
      <Geographies geography="/feature.json" >
    
        {({ geographies }) => 
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo}  fill="	#E8E8E8" 
            />
         
          ))
    
        }
      </Geographies>    
      {markers1.map(({region,coordinates,id,r,data})=>
      //IT will point the markers with greater data 
     ( <Marker key={id} coordinates={coordinates} >
     <circle r={r}  data={data}
      fill="	#CCCCFF"
            stroke="	#7F00FF"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            fillOpacity={0.7}
            onClick={(e)=>{// when the user will click a particular markup the value of the data will be set to setData hook
        setData(data)
        setRegion(region)
         }
         }
      />
 
      </Marker>
   
     ) )}

     {markers2.map(({region,coordinates,id,r,data,})=>
     ( <Marker key={id} coordinates={coordinates}>
<circle r={r} data={data}
  fill=" #6495ED "
            stroke="#1434A4"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            fillOpacity={0.5}
        
            
         //   transform="translate(-12, -24)"
         onClick={(e)=>{
        
        setData(data)
        setRegion(region)
         }
        
         
         }
    
   
       
/>


      </Marker>
      
     ) )}
     {markers3.map(({region,coordinates,id,r,data})=>
     ( <Marker key={id} coordinates={coordinates}>
      
        <circle r={r}    data={data}
  fill="#87CEEB"
            stroke="#4169E1"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            fillOpacity={0.7}
            onClick={(e)=>{
        
        setData(data)
        setRegion(region)
         }
        
         
         }
/>

      </Marker>
      
     ) )}
     {markers4.map(({region,coordinates,id,r,data})=>
     ( <Marker key={id} coordinates={coordinates}>
        <circle r={r}   data={data}
  fill="#ADD8E6"
            stroke="#89CFF0"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            fillOpacity={0.5}
            onClick={(e)=>{
        
        setData(data)
        setRegion(region)
         }  
         }
/>

      </Marker>
      
     ) )}
      </ZoomableGroup> 
    </ComposableMap></div>
    <Datausage title={region} data={data}    />
    </div> 
    </>
    
  )
}

export default Map ;