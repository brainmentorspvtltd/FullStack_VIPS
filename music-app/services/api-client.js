async function getData(singerName="Sonu Nigam"){
    console.log('Call Made')
    try{
        const URL=`https://itunes.apple.com/search?term=${singerName}&limit=10`;
        const response=await fetch(URL);
        console.log('Respopnse ',response);      
          const object=await response.json();
          return object;
        // return callBackFn(object);
    }
    catch(err){
        console.log('Error ',err);
        throw err;
    }
}
export default getData;