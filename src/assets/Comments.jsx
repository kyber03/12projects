import react, { useState } from 'react';

const comments = {
    id:1,
    items:[
      {
        id:234,
        name:"hello",
        items:[
          {
            id:212,
            name:"hello",
            items:[
                    {
                      id:256,
                      name:"hello",
                      items:[
                        {
                          id:908,
                          name:"hello",
                          items:[]
                        }
                      ]
                    },
                    {
                      id:637,
                      name:"hello",
                      items:[]
                    }
  
                  ]       
          }
        ]
      
        
      }
      
    ]
  
  
  };
  
export function Comments({comment}){
    const[input,setInput]=useState("")
    return (
        <div>
            <div className={comment.id===1?"input-container":"comment-container"}>
                
                     <>
                     <input type="text" 
                  className='first-input'
                  autoFocus
                  placeholder='type...'
                  value={input}
                  onChange={(e)=>setInput(e.target.value)}
                  />
                  
            
            
            <div className="reply-comment" onClick={onAddComment}>
                 Comment
            </div>
            </>
                
               
                </div> 
            
        </div>
    )
}