function get(){
  let myRequest = new XMLHttpRequest(),
    url = 'https://reqres.in/api/users?page=2';

    myRequest.open('GET' , url , true);

    myRequest.onreadystatechange = function (){
      if (this.readyState === 4 && this.status === 200) {
        var MyResponse = JSON.parse(this.responseText);
        var get = MyResponse.data;
        let table = document.querySelector(".table1");
        let section = "" ;
        console.log(MyResponse)
        for(var i=0 ; i < get.length ; i++){
          var id = get[i].id;
          var name = get[i].first_name+get[i].last_name;
          var email = get[i].email;
          var img = get[i].avatar;

          section +=
          `<tr>
              <th scope="row">${id}</th>
              <td>${name}</td>
              <td>${email}</td>
              <td><img src="${img}" alt="" width="80px"></td>
            </tr>`
        }
        table.innerHTML = section;
      }else if(this.readyState ===4){
        console.log("couldn't fetch the data");
      }
    };


    myRequest.send();

}
get();