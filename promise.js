function fetchData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const data = {message:"Data fetched successfully"};
            resolve(data);
        },2000)
    });
}
fetchData()
.then(data=>{
    console.log('success:',data);
})
.catch(error =>{
    console.error('error:',error);
})