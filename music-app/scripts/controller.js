import getData from "../services/api-client.js";
window.addEventListener('load',bindEvents);
function bindEvents(){
    document.getElementById('search').addEventListener('click',searchSongs);
}
async function searchSongs(){
    const singerName=document.getElementById('search-name').value;
   const songObject=await getData(singerName);
   console.log('SSSS',songObject);
   printData(songObject);
}
function songCard(song){
    /*
    <div class="col-4">
    <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  </div>
</div> */
const coldiv=document.createElement('div');
coldiv.className='col-4'
const cardDiv=document.createElement('div');
cardDiv.className='card';
cardDiv.style.width='18rem';
coldiv.appendChild(cardDiv);
const imgTag=document.createElement('img');
imgTag.className='card-img-top';
imgTag.src=song['artworkUrl100'];
cardDiv.appendChild(imgTag);
const cardBody=document.createElement('audio');
cardBody.controls='controls';
cardBody.src=song['previewUrl']
cardBody.className='card-body';
cardDiv.appendChild(cardBody);
document.getElementById('songs').appendChild(cardDiv);
}
function printData(songObject){
    console.log('Print Songs Object',songObject)
    document.getElementById('songs').innerHTML='';
    const songs=songObject['results'];
    songs.forEach(song=>songCard(song));
}