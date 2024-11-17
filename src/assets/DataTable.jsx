import react, { useEffect, useRef, useState } from 'react';

export function DataTable(){
    const [formdata,setformdata] = useState({name:"",gender:"",age:""})
    const [data,setData] = useState([]);
    const [editId,setEditId]= useState(false);
    const[searchTerm,setsearchTerm] = useState("");
    const outsideClick = useRef(false);
    const [currentPage,setCurrentpage] = useState(1);
    const itemsPerPage = 5;
    const indexOfLast = currentPage * itemsPerPage;
    const indexOfFirst = indexOfLast - itemsPerPage;
    let error = "please enter all the fields";
    let filteredItems = data.filter((item)=>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()))
    const filteredData = filteredItems.slice(indexOfFirst,indexOfLast)
    //moving the cursor to the row after clicking edit button

    //when searching values, page set to 1
    useEffect(()=>{
        setCurrentpage(1);
    },[searchTerm])

    useEffect(()=>{
        if(!editId) return;
        
        let selectedItem = document.querySelectorAll(`[id='${editId}']`)
        selectedItem[0].focus();
    },[editId]);

    //outside click and disabling edit button function
  useEffect(()=>{
    const handleClickOutside = (event) =>{
          if (outsideClick.current && !outsideClick.current.contains(event.target)){
            setEditId(false);
          }
    }
         document.addEventListener("click",handleClickOutside)
         return () => {
            document.removeEventListener("click",handleClickOutside)
         }
  },[])

    //adding values in input box
    const handleInput = (e) =>{
    setformdata({...formdata,[e.target.name]:e.target.value})
    
    }

    // add button
    const handleAddClick = () =>{
        if(formdata.name && formdata.gender && formdata.age){
            const newItem = {
                id: Date.now(),
                name:formdata.name,
                gender:formdata.gender,
                age:formdata.age
            }
            setData([...data,newItem])
            setformdata({name:"",gender:"",age:""})
        }
         
    }
    
    //handleDelete
    const handleDelete = (id) =>{

//if all data deleted iin a page move to prev page
        if(filteredData.length===1 && currentPage != 1){
            setCurrentpage((prev)=>prev-1)
        }
        const updatedList = data.filter((item)=> item.id!=id)
        setData(updatedList);
    }
//edit handle
  const handleEdit = (id,updatedData) => {
    if(!editId || editId != id) {return}
    const updatedList = data.map((item)=>
    item.id===id?{...item,...updatedData}:item)
    setData(updatedList)
    
  }
//search handle and filter
const handleSearch  = (e)=>{
  setsearchTerm(e.target.value)
}
// const filteredData = data.filter((item)=>
// item.name.toLowerCase().includes(searchTerm.toLowerCase()))

const paginate = (pageNumber) =>{
    setCurrentpage(pageNumber);
}

 

    return(
        <div>
            <div className='container'>
                {/* adding value */}
                <div className="info-container">
                    <div className="details">
                      <input type="text" 
                      placeholder='name'
                      name='name'
                      value={formdata.name}
                      onChange={handleInput}
                      /> 
               <select name='gender' id="" value={formdata.gender} onChange={handleInput} >Gender
                 <option >Male</option>
                 <option >Female</option>
               </select>
                      {/* <input type="text" 
                      placeholder='Gender'
                      name='gender'
                      value={formdata.gender}
                     onChange={handleInput}
                    /> */}

                      <input type="number" 
                      placeholder='Age'
                      name='age'
                      value={formdata.age}
                      onChange={handleInput}
                      />

                    </div>
                    <button className='Add' onClick={handleAddClick}>Add</button>
                     
                </div>

             {/* search values */}
                <div className="search-container">
                    <input type="text" 
                    className='search-input'
                    placeholder='search by name'
                    value={searchTerm}
                      onChange={handleSearch} 
                      />
                </div>

           {/* //dynamic valus */}
                <table ref={outsideClick}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filteredData.map((item)=>(
                             <tr key={item.id}>
                             <td id={item.id} contentEditable={editId===item.id} 
                             onBlur={(e)=>handleEdit(item.id,{name:e.target.innerText})}>{item.name}</td>

                             <td id={item.id} contentEditable={editId===item.id}
                             onBlur={(e)=>handleEdit(item.id,{gender:e.target.innerText})}>{item.gender}</td>

                             <td id={item.id} contentEditable={editId===item.id}
                             onBlur={(e)=>handleEdit(item.id,{age:e.target.innerText})}>{item.age}</td>

                             <td className='actions'>
                               <button className='edit' onClick={()=>setEditId(item.id)}>Edit</button>
                               <button className='delete' onClick={()=>handleDelete(item.id)}>Delete</button>
                             </td>
                           </tr>
                        ))}
              
                         

                    </tbody>
                </table>

                <div className="pagination">
                    {Array.from({length: Math.ceil(filteredItems.length/itemsPerPage)},(_,index)=>
                   <button key={index+1} 
                   onClick={()=>paginate(index+1)}
                   style={{backgroundColor : currentPage === index+1 && "lightcoral"}}>
                    {index+1}
                   </button> 
                    )}
                </div>
                
            </div>
        </div>
    )
}

 