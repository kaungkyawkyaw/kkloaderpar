export function showloader(){
    const loaderDiv= document.createElement('div');
    loaderDiv.innerHTML=`
    <div class="loader">
    <div class=" vh-100 d-flex justify-content-center align-items-center fixed-top" style="background-color:#ffffffc7">
     <div class="spinner-border text-primary" role="status">
         <span class="visually-hidden">Loading...</span>
     </div>
    </div>
    </div>
    `
    document.body.append(loaderDiv)
}
export function removeloader(){
    const loader = document.querySelector('.loader')
    loader.remove()
}