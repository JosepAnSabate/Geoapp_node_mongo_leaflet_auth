const updateForm = document.querySelector('#edit'); //edit is id form
 
updateForm.addEventListener('submit', async(e) => {
  e.preventDefault() // no refresca la pagina
  
  let updatetitle = updateForm.elements['new-name'].value
  //let updatebody = document.querySelector('#new-description').value
  // or
  let updatebody = document.getElementById("new-description").value;
  let id = edit.dataset.id //data-id
  //console.log(updatetitle, updatebody, id)
  
   const data = await  fetch (`/positions/update/${id}`,{
      method: 'PUT',
      headers: { "Content-Type": "application/json" }, //http header fields => application/json if the http response is json data, per forms es diferent
      body: JSON.stringify({title: updatetitle, body: updatebody})
    })
    window.location.reload();
})

  function openForm() {
    document.getElementById("myFormEdit").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myFormEdit").style.display = "none";
  }
  