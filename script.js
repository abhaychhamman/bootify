flexbox={

    "b":"space-between",
    "a":"space-around",
    "l":"space-evenly",
    "s":"flex-start",
    "e":"flex-end",
    "c":"center",
    "h":"row",
    "v":"column",
}

window.addEventListener("load",(e) => {

    a=Array.from(document.querySelectorAll("*"))
    a.forEach(element => {
        
        ec=element.classList
        for (let i = 0; i < ec.length; i++) {

            // these set of line work for set the color of give class c-colorname 
            (ec[i].startsWith("c-")==true) && (element.style.color=ec[i].split("c-")[1]);
            
            // these set of line work for set the background color of give class bc-colorname 
            (ec[i].startsWith("bc-")==true) &&( element.style.backgroundColor=ec[i].split("bc-")[1])
            
            // these set of line work for set the width
            if(ec[i].startsWith("w-")==true) 
            element.style.width=ec[i].split("w-")[1]
            
            
            // these set of line work for set the height
            if(ec[i].startsWith("h-")==true)
                console.log("inside")
                 element.style.height=ec[i].split("h-")[1]

            
            // these set of code for form the button  
             if ( ec[i].startsWith("btn-")==true) {
                element.style.width="fit-content"
                element.style.margin=" 1px"
                element.style.cursor=" pointer"
                element.style.boxShadow=" 1px 1px 4px gray"
                

                props=ec[i].split("btn-")[1]
                if(props[2]=="l"){
                    element.style.padding=" 10px 70px"
                }
                else if(props[2]=="s"){
                    element.style.padding=" 5px 15px"
                }
                else if(props[2]=="m"){
                    element.style.padding=" 10px 35px"
                }
                if(props.slice(0,2)=="hr"){
                    element.style.borderRadius=" 0px 17px 0px 17px"
                    element.style.width="fit-content"
                    element.style.margin=" 1px"
                    
                }
                if(props.slice(0,2)=="fr"){
                    element.style.borderRadius=" 8px"
                    
                    
                }
                if(props.slice(0,2)=="nr"){
                    element.style.borderRadius=" 3px"
                    
                    
                }
                
                element.addEventListener("mouseenter",(e)=>{
                    
                    element.style.transform="scale(0.98)"
                    element.style.transition="0.3s"
                        
                })
                element.addEventListener("mouseleave",(e)=>{
                    
                    element.style.transform="scale(1)"
                    
                })
                
            }
            
            if(ec[i].startsWith("f-")==true){
                
                props=ec[i].split("f-")[1]
                element.style.display="flex"
                element.style.justifyContent=flexbox[props[0]]
                element.style.alignItems=flexbox[props[1]]
                element.style.flexDirection=flexbox[props[2]]

                

                console.log(flexbox[props[0]])
             }

            
            
             
            
        } 
        
    });

})