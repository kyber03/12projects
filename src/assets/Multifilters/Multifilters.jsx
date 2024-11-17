import React, { useEffect, useState } from "react";
import "./Multifilters.css";
import {items} from "./filters"


export default function Multifilters(){
   return(
    <div>
      <CompletedFilter/>
      <SelfDesignedFilter/>
    </div>
   )
}

//-----------------------------------------------------------------------------

function AllComponentsSimpleMap(){
    return (
        <div>
        {items.map((items,key)=>
          <button>{items.category}
           <button>{items.name}</button></button>
          
       )}
       </div>
    )
}

function SelfDesignedFilter(){
  const [filterclick,setfilterclick] = useState([])
   const [displayitems,setdisplayitems] = useState(items);
   let filters = ["Bags","Sunglasses","Sports","Watches"]
  
   const handleFilterClick = (cgry) =>{
        if(!filterclick.includes(cgry)){
          setfilterclick([...filterclick,cgry])
             console.log(filterclick)
        }
        else{
          let remove = filterclick.filter((el)=>el!=cgry)
          setfilterclick(remove)
          console.log(remove)
          
        }
   }

   useEffect(()=>{
    selectedItems();
   },[filterclick])  

   const selectedItems = () =>{
        if(filterclick.length>0){
          let mapCategory = filterclick.map((category)=>{
              let temp = items.filter((item)=>item.category===category)
             return temp;
          })
          setdisplayitems(mapCategory.flat())
        }
        else{
        setdisplayitems([...items])
        }
       
   }

   return(
    <div className="filter">
       <div className="categories">
         {filters.map((category,idx)=>
        <button 
        className={`button ${filterclick?.includes(category)?"active":""}`}
        onClick={()=>handleFilterClick(category)}
        key={idx}
        >{category}
        </button>
        )}
       </div>
       <div className="items">
       {displayitems.map((item,idx) =>
       <div key={idx} className="item" >
          <p >{item.name}</p>
          <p>{item.category}</p>
       </div>
       )}
       </div>
    </div>
   )
}

function CompletedFilter(){
  const[selectedfilter,setselectedfilter] = useState([])    //to display when filter is selected
  const [filteredItems,setFilteredItems] = useState(items)  // to display items based on filter or display all items
 const [style,setstyle] = useState()
   let filters = ["Bags","Sunglasses","Sports","Watches"]

   // this func is mainly for if category is already clicked and included then secondclick exist if not it will be added
   const handleFilterClick = (selectedcategory) =>{


            if(selectedfilter.includes(selectedcategory)){
               let secondclick = selectedfilter.filter((el)=>el!=selectedcategory)
               setselectedfilter(secondclick)
             
               // console.log(secondclick)
            }
            else{
              setselectedfilter([...selectedfilter,selectedcategory])
             
           //    console.log(selectedcategory)
           //    console.log(selectedfilter)
              
            }
   }
 
   useEffect(()=>{
       filteredItem();
   },[selectedfilter])

// if category is selected and added to selectedfilter then display tempitems or else display only the items    
   const filteredItem = () =>{
         if(selectedfilter.length>0){
           let tempItems = selectedfilter.map((selectedcategory)=>{
               let temp = items.filter((item)=>item.category === selectedcategory)
               return temp;
           })
           setFilteredItems(tempItems.flat())
           console.log(tempItems)
         }
         else{
           setFilteredItems([...items])
         }
   }


   return (
       <div>
           <div className="filter-container">
              {filters.map((category,index)=>
                 <button className={`button ${selectedfilter?.includes(category)? "active":""}`}  
                 onClick={()=>handleFilterClick(category)}
                 key={`filters-${index}`}>
                   {category}
                 </button>
          //className={`button ${selectedfilter?.includes(category)? "active":""}`}

           )}
           </div>

           <div className="items-container">
             {
               filteredItems.map((item,index)=>
                   <div key={`items-${index}`} className="items" >
                       <p className="item-name">{item.name}</p>
                       <p className="category">{item.category}</p>
                   </div>
                    
               )}
           </div>
       </div>
   )
}