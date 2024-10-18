export const getData = async (url) => {
    try{
        const res = await fetch(url)
        const finalRes = await res.json()
        return {success:true,data:finalRes}

    }catch(e){
        return {success:false,message:e.message}
    }

}
export const addData = async (url,payload) => {
    try{
        const res = await fetch(url,{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json' 
            },
            body:JSON.stringify(payload)
        })
        const finalRes = await res.json()
        return {success:true,data:finalRes}

    }catch(e){
        return {success:false,message:e.message}
    }

}