import React from 'react'
export default React.createContext({
    fetch : async() => {
        
        
        const data =  await client.query(
            Prismic.Predicates.at("document.tags", ["javascript"])
        )
        return data;
    }
})
