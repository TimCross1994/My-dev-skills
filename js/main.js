$("#button").on("click", function(evt) {
   const newSkill =  $('#input').val()
   const input = `
   <tr>
   <td><button class="remove">X</button> ${newSkill}</td>
   </tr>
   `
   $(input).appendTo($("table"));
   $('.remove').on('click', removeSkill)
   });
   function removeSkill(evt){
      $(evt.target).parent().remove()
      console.log('hit')
   }