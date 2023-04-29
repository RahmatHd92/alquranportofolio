fetch('https://api.banghasan.com/quran/format/json/surat')
   .then(response => response.json())
   .then(response => {
      const hasil = response.hasil;
       let data1 = '';
      //  console.log(hasil);
      hasil.forEach(m => data1 += showCards(m));
       const cards = document.querySelector('.quran-container');
       cards.innerHTML= data1;
      
   })
.catch((err)=>{
   console.log(err)
 })

 function showCards (m){
    return `<div class="col-md-4">
            <div class="card mt-4">
               <h5 class="card-header"> ${m.asma}</h5>
                 <div class="card-body">
                   <h5 class="card-title">Artinya : ${m.arti}</h5>
                      <p class="card-text"> Jumlah: ${m.ayat} Ayat</p>
          <a href="#" class="btn btn-primary">Cek keterangan Ayat</a>
           </div>
         </div> 
  </div> `;
    }
  
