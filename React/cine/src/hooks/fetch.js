function Fetchi(){
    fetch('https://api.themoviedb.org/3/search/movie?api_key=6a60a0cafaa3e9cbdd7ad635f6aae7ab&language=en-US&query=a&page=1&include_adult=false&year=2023',{
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    })
    .then((res)=>{
        if(res.ok){
            return res.json()
        }else{
            throw Error('La respuesta falla')
        }
    }).then((data)=>{
        console.log(data.results)
    }).catch((e)=>{
        console.log('todo mal' + e.message)
    });
}

export default Fetchi;