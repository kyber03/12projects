import React, { useCallback, useState } from "react";
import products from "./product.js"
import categories from "./categories.js"
import './ef.css';
 

export default function EnhancedFilter(){
 

     
    return (
       <div className="container">
          {
            Object.keys(categories).map((categoryLey)=>{
               const category = categories[categoryLey]

               return (
                <div >
                  <h1 className="title" key={categoryLey}>{category.title}</h1>
                   {Object.keys(category.filters).map((filterKey)=>{
                      const filter = category.filters[filterKey]

                      return (
                        <div className="filters">
                            <h1 key={filterKey}>{filter.filterName}</h1>
                            
                           <ul>{filter.filterList.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                          </ul>
                           
                      
                           
                        </div>
                         
                      )
                   })}
                </div>
                  
               )
            })
          }

       </div>
    )
}

