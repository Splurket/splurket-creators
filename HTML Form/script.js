
function next1() {
  var Username= document.getElementById('demo_username').value;
  var name= document.getElementById('demo_name').value;
  var email= document.getElementById('demo_email').value;
  var phone= document.getElementById('demo_phone').value;
  document.getElementById("username").style.display = "none";
  document.getElementById("name").style.display = "none";
  document.getElementById("email").style.display = "none";
  document.getElementById("phone").style.display = "none";
  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
  localStorage.setItem("phone", phone);
  localStorage.setItem("username", Username);
  document.getElementById("job_options").style.display = "block";
  document.getElementById("back1").style.display = "block";
  document.getElementById("next1").style.display = "none";
  document.getElementById("next2").style.display = "block";
}
function back1() {
  document.getElementById("job_type").style.display = "none";
  document.getElementById("username").style.display = "block";
  document.getElementById("name").style.display = "block";
  document.getElementById("email").style.display = "block";
  document.getElementById("phone").style.display = "block";
  var name = localStorage.getItem("name");
  document.geteElementById("demo_name").value = name;
  var email = localStorage.getItem("email");
  document.geteElementById("demo_email").value = email;
  var phone = localStorage.getItem("phone");
  document.geteElementById("demo_phone").value = phone;
  var username = localStorage.getItem("username");
  document.geteElementById("demo_username").value = username;
}
function next2(job_type) {
  var jtype = job_type;
  if (job_type == "New Product Request") {
    document.getElementById("New Product Request").style.display = "block";
    document.getElementById("job_options").style.display = "none";

  }
  if (job_type == "Get A Quote") {
    document.getElementById("quote_menu").style.display = "block";
    document.getElementById("job_options").style.display = "none";
  }

  if (job_type == "Hire A Developer") {
    document.getElementById("dhire").style.display = "block";
    document.getElementById("job_options").style.display = "none";
  }
}
function quotemenu(qselect) {
if (qselect == "Cost To Hire A Developer") {
  document.getElementById("dquote").style.display = "block";
  document.getElementById("quote_menu").style.display = "none";
}
if (qselect == "The Cost Of A New Product") {
  document.getElementById("pquote").style.display = "block";
  document.getElementById("quote_menu").style.display = "none";
  }
}
function ppermissions(ppermissions) {
var ppermission = ppermissions;
}
function ppay(ppay) {
var ppayment = ppay;
}
function pcard() {
  var cardurl = 'https://api.trello.com/1/cards?key=aa8ab2f4e1bf7b8f82f74196837c7d07&token=5b6aff50ab19f53f363bfade341c7e57fa2c0e8a4dad2e0db6d1a19f93c57868';
  var listid = '5fcfa030511b292fe2f58bf7';
  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
  localStorage.setItem("phone", phone);
  var ppayment = ppay;
  var ppermissions = ppermissions;
  var name ='&name=' + name;
  var email = '&name=' + email;
  var phone = '&name=' + phone;
  var pname = '&name=' + document.geteElementById("pname").value;
  var pcat = document.geteElementById("pcategory").value
  var pskills = document.geteElementById("pskills").value
  var pdescription = '&desc=' +document.geteElementById("pdescription").value
  pcard1();

    pcard1() {
  //Create A card
    var requestOptions = {
      method: 'POST',
      dataType: 'jsonp',
      redirect: 'follow'
    };
      fetch(cardurl+ '&idList=' + listid + pdescription, requestOptions)
          .then(response => response.json())
          .then(data => {
            console.log('Success:', data);
            document.getElementById("demo").innerHTML = data.id;
            var cardid = data.id;
            pchecklist();

            //Add Checklist To the card


              function pchecklist() {
                  var checklisturl = 'https://api.trello.com/1/checklists?key=aa8ab2f4e1bf7b8f82f74196837c7d07&token=5b6aff50ab19f53f363bfade341c7e57fa2c0e8a4dad2e0db6d1a19f93c57868'
                  var requestOptions = {
                      method: 'POST',
                      dataType: 'jsonp',
                      redirect: 'follow'
                    };
                      fetch(checklisturl+ '&idCard=' + cardid+ '&name=More Info About Request', requestOptions)
                          .then(response => response.json())
                          .then(data => {
                            console.log('Success:', data);
                            document.getElementById("demo").innerHTML = data.id;
                            var checklistid = data.id;
                            pnamefield();

                            //Add First FIELD

                              function pnamefield() {
                                
                                var checklisturl = 'https://api.trello.com/1/checklists/'+checklistid+'/checkItems?key=aa8ab2f4e1bf7b8f82f74196837c7d07&token=5b6aff50ab19f53f363bfade341c7e57fa2c0e8a4dad2e0db6d1a19f93c57868'
                                var requestOptions = {
                                    method: 'POST',
                                    dataType: 'jsonp',
                                    redirect: 'follow'
                                  };
                                    fetch(checklisturl + name, requestOptions)
                                        .then(response => response.json())
                                        .then(data => {
                                          console.log('Success:', data);
                                          pnamefield2();

                                          
                                          //ADD SECOND CHECKITEM

                                            
                                            function pnamefield2() {
                                              var checklisturl = 'https://api.trello.com/1/checklists/'+checklistid+'/checkItems?key=aa8ab2f4e1bf7b8f82f74196837c7d07&token=5b6aff50ab19f53f363bfade341c7e57fa2c0e8a4dad2e0db6d1a19f93c57868'
                                              var requestOptions = {
                                                  method: 'POST',
                                                  dataType: 'jsonp',
                                                  redirect: 'follow'
                                                };
                                                  fetch(checklisturl+ email, requestOptions)
                                                      .then(response => response.json())
                                                      .then(data => {
                                                        console.log('Success:', data);
                                                        pnamefield3();

                                                          
                                                          // ADD THIRD CHECKITEM

                                                          function pnamefield3() {
                                                              var checklisturl = 'https://api.trello.com/1/checklists/'+checklistid+'/checkItems?key=aa8ab2f4e1bf7b8f82f74196837c7d07&token=5b6aff50ab19f53f363bfade341c7e57fa2c0e8a4dad2e0db6d1a19f93c57868'
                                                              var requestOptions = {
                                                                  method: 'POST',
                                                                  dataType: 'jsonp',
                                                                  redirect: 'follow'
                                                                };
                                                                  fetch(checklisturl + phone, requestOptions)
                                                                      .then(response => response.json())
                                                                      .then(data => {
                                                                        console.log('Success:', data);
                                                                        pnamefield4();

                                                                        //Add Fourth CHECKITEM


                                                                          function pnamefield4() {
                                                                            
                                                                            var checklisturl = 'https://api.trello.com/1/checklists/'+checklistid+'/checkItems?key=aa8ab2f4e1bf7b8f82f74196837c7d07&token=5b6aff50ab19f53f363bfade341c7e57fa2c0e8a4dad2e0db6d1a19f93c57868'
                                                                            var requestOptions = {
                                                                                method: 'POST',
                                                                                dataType: 'jsonp',
                                                                                redirect: 'follow'
                                                                              };
                                                                                fetch(checklisturl + pname, requestOptions)
                                                                                    .then(response => response.json())
                                                                                    .then(data => {
                                                                                      console.log('Success:', data);
                                                                                      pnamefield5();

                                                                                      //Add Fifth Field

                                                                                        function pnamefield5() {
                                                                                        
                                                                                          var checklisturl = 'https://api.trello.com/1/checklists/'+checklistid+'/checkItems?key=aa8ab2f4e1bf7b8f82f74196837c7d07&token=5b6aff50ab19f53f363bfade341c7e57fa2c0e8a4dad2e0db6d1a19f93c57868'
                                                                                          var requestOptions = {
                                                                                              method: 'POST',
                                                                                              dataType: 'jsonp',
                                                                                              redirect: 'follow'
                                                                                            };
                                                                                              fetch(checklisturl+ pcat, requestOptions)
                                                                                                  .then(response => response.json())
                                                                                                  .then(data => {
                                                                                                    console.log('Success:', data);
                                                                                                    pnamefield6();

                                                                                                    
                                                                                                    //ADD Sixth CHECKITEM

                                                                                                      
                                                                                                      function pnamefield6() {
                                                                                                      
                                                                                                        var checklisturl = 'https://api.trello.com/1/checklists/'+checklistid+'/checkItems?key=aa8ab2f4e1bf7b8f82f74196837c7d07&token=5b6aff50ab19f53f363bfade341c7e57fa2c0e8a4dad2e0db6d1a19f93c57868'
                                                                                                        var requestOptions = {
                                                                                                            method: 'POST',
                                                                                                            dataType: 'jsonp',
                                                                                                            redirect: 'follow'
                                                                                                          };
                                                                                                            fetch(checklisturl+ pskills, requestOptions)
                                                                                                                .then(response => response.json())
                                                                                                                .then(data => {
                                                                                                                  console.log('Success:', data);
                                                                                                                  pnamefield7();

                                                                                                                    
                                                                                                                    // ADD Seventh CHECKITEM

                                                                                                                    function pnamefield7() {
                                                                                                       
                                                                                                                        var checklisturl = 'https://api.trello.com/1/checklists/'+checklistid+'/checkItems?key=aa8ab2f4e1bf7b8f82f74196837c7d07&token=5b6aff50ab19f53f363bfade341c7e57fa2c0e8a4dad2e0db6d1a19f93c57868'
                                                                                                                        var requestOptions = {
                                                                                                                            method: 'POST',
                                                                                                                            dataType: 'jsonp',
                                                                                                                            redirect: 'follow'
                                                                                                                          };
                                                                                                                            fetch(checklisturl + ppermission, requestOptions)
                                                                                                                                .then(response => response.json())
                                                                                                                                .then(data => {
                                                                                                                                  console.log('Success:', data);
                                                                                                                                  pnamefield8();

                                                                                                                                  //Add Eight CHECKITEM


                                                                                                                                    function pnamefield8() {
                                                                                                                                   
                                                                                                                                      var checklisturl = 'https://api.trello.com/1/checklists/'+checklistid+'/checkItems?key=aa8ab2f4e1bf7b8f82f74196837c7d07&token=5b6aff50ab19f53f363bfade341c7e57fa2c0e8a4dad2e0db6d1a19f93c57868'
                                                                                                                                      var requestOptions = {
                                                                                                                                          method: 'POST',
                                                                                                                                          dataType: 'jsonp',
                                                                                                                                          redirect: 'follow'
                                                                                                                                        };
                                                                                                                                          fetch(checklisturl+ ppayment, requestOptions)
                                                                                                                                              .then(response => response.json())
                                                                                                                                              .then(data => {
                                                                                                                                                console.log('Success:', data);
                                                                                                                                              })
                                                                                          
}
})
}
})                                           
}         
})                                        
}
})                    
}
})   
}
}
}
}
}