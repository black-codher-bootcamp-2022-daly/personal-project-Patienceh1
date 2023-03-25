import React from "react";


export default function Container(props) {
  return (
    
    <div className="BookList-Container"
    
    style={{
      backgroundColor: "beige"
      
       }}>
        
      {props.children} 
      
    </div>
  );
  
}
