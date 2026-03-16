function getdata () {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            const data = {
                name: "Jansi",
                age:21,
            }
            resolve(data)
        },2000)
    })
}

async function fetchdata () {
    try{
        const data = await getdata();
        console.log("User data : ", data);
    }
    catch(error){
        console.log("Error : ",error)
    }
}

fetchdata()