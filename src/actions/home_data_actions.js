
//this file performs operations for for us
//type is like a unique key word which lets us access specific data in this file
//it's called action.type
//pay load is our data. this data may be coming from an API or server
export function getmovieslistAction(){
    return {
        type:'MOVIES_LIST',
        payload:[
            {id:1,name:"Pulp Fiction"},
            {id:2,name:"Pacific Rim"},
            {id:3,name:"Rambo"} 
        ]
    }
}


export function getdirectorslistAction(){
    return {
        type:'DIR_LIST',
        payload:[
            {id:1,name:"Tarantino"},
            {id:2,name:"Scorsese"}
        ]
    }
}
