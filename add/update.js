var product_id;
function getParameterByName(name, url = window.location.href) {
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

var pname= getParameterByName('product');

var product_name = document.getElementById('name');
       if(typeof product_name == 'undefined'){
           var product_name = "";
}

  var product_price = document.getElementById('price');
       if(typeof product_price == 'undefined'){
           var product_price = "";
}

  var product_category = document.getElementById('category');
       if(typeof product_category == 'undefined'){
           var product_category = "";
}

  var product_subcategory = document.getElementById('subcategory');
       if(typeof product_subcategory == 'undefined'){
           var product_subcategory = "";
}


  //var product_cover = get_link;

  var product_downloadlink = document.getElementById('DownloadLink');
       if(typeof product_downloadlink == 'undefined'){
           var product_downloadlink = "";
}

  var product_file = document.getElementById('productupload');
       if(typeof product_file == 'undefined'){
           var product_file = "";
}

  var product_ship_selection = document.getElementById('shipping-selection');
       if(typeof product_ship_selection == 'undefined'){
           var product_ship_selection = "";
}

  var product_ship_template = document.getElementById('shipping-template');
       if(typeof product_ship_template == 'undefined'){
           var product_ship_template = "";
}
  var product_description = document.getElementById('product_description');
       if(typeof product_description == 'undefined'){
           var product_description = "";
}

var firebaseConfig = {
    apiKey: "AIzaSyC-BUGGSsvUX8z4W1LcsJzS59yrL4__EsE",
    authDomain: "splurket-66df1.firebaseapp.com",
    databaseURL: "https://splurket-66df1-default-rtdb.firebaseio.com",
    projectId: "splurket-66df1",
    storageBucket: "splurket-66df1.appspot.com",
    messagingSenderId: "286706779903",
    appId: "1:286706779903:web:fd91c29319f9804e192eca",
    measurementId: "G-QWQ2M658KL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  db.settings({ timestampsInSnapshots: true });
  firebase.analytics();
  var user;
  var email1;
  firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        user = firebase.auth().currentUser;
        //splurket@gmail.com
        email1 = user.email;
    }
  var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Accept", "application/json, /;q=0.5");

        var raw = JSON.stringify({
          "stringtoencrypt": `${pname}&${user.email}`
        });
        console.log(raw)
        //document.write(raw)
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };

        fetch("https://americanrivergold.com/fluffybunnyin", requestOptions)
          .then(function (response) {
              return response.json();
          })
          .then(function (data) {
            var strings5= data.encryptedstring;
            var strings4 = data.encryptedstring.split('&')
            product_id = strings4[0];
          })
        })
    

//Handle Image Upload
function imagelink(get_link1){
	get_link = get_link1;
}

  var user;
  var email1;
  firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        user = firebase.auth().currentUser;
        //splurket@gmail.com
        email1 = user.email;
    }
    var product_id;
     var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Accept", "application/json, /;q=0.5");

        var raw = JSON.stringify({
          "stringtoencrypt": `${pname}&${user.email}`
        });
        console.log(raw)
        //document.write(raw)
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };

        fetch("https://americanrivergold.com/fluffybunnyin", requestOptions)
          .then(function (response) {
              return response.json();
          })
          .then(function (data) {
            var strings5= data.encryptedstring;
            var strings4 = data.encryptedstring.split('&')
            console.log(strings4)
            product_id = strings4[0];

            //document.write(JSON.stringify(data.encryptedstring))
            db.collection("products").doc(strings5).get().then((doc) => {
              if (doc.exists) {
                console.log(JSON.stringify(doc.data()))
                  product_name.value = doc.product_name;
                  product_price.value = doc.product_price;
                  //product_category.value = doc.product_category;
                  //product_subcategory.value = doc.product_subcategory;
                  product_cover = get_link = doc. product_cover;
                  product_downloadlink.value = doc.product_downloadlink;
                  product_ship_selection.value = doc.product_ship_selection;
                  product_ship_template.value = doc.product_ship_template;
                  product_description.value = doc.product_description;
           
              } else {
                
              }
          }).catch((error) => {
              console.log("Error getting document:", error);
          });
        })
      })



function Addproduct() {
	var product_name = document.getElementById('name').value;
       if(typeof product_name == 'undefined'){
           var product_name = "";
}

	var product_price = document.getElementById('price').value;
       if(typeof product_price == 'undefined'){
           var product_price = "";
}

	var product_category = document.getElementById('category').value;
       if(typeof product_category == 'undefined'){
           var product_category = "";
}

	var product_subcategory = document.getElementById('subcategory').value;
       if(typeof product_subcategory == 'undefined'){
           var product_subcategory = "";
}


	var product_cover = get_link;

	var product_downloadlink = document.getElementById('DownloadLink').value;
       if(typeof product_downloadlink == 'undefined'){
           var product_downloadlink = "";
}

	var product_file = document.getElementById('productupload').value;
       if(typeof product_file == 'undefined'){
           var product_file = "";
}

	var product_ship_selection = document.getElementById('shipping-selection').value;
       if(typeof product_ship_selection == 'undefined'){
           var product_ship_selection = "";
}

	var product_ship_template = document.getElementById('shipping-template').value;
       if(typeof product_ship_template == 'undefined'){
           var product_ship_template = "";
}
	var product_description = document.getElementById('product_description').value;
       if(typeof product_description == 'undefined'){
           var product_description = "";
}
          var myHeaders = new Headers();
	        myHeaders.append("Content-Type", "application/json");
	        myHeaders.append("Accept", "application/json, /;q=0.5");

	        var raw = JSON.stringify({
	          "stringtoencrypt": `${user.email}`
	        });
	        console.log(raw)
	        //document.write(raw)
	        var requestOptions = {
	          method: 'POST',
	          headers: myHeaders,
	          body: raw,
	          redirect: 'follow'
	        };

	        fetch("https://americanrivergold.com/fluffybunnyin", requestOptions)
	          .then(function (response) {
	              return response.json();
	          })
	          .then(function (data) {
	          	var profile_id= data.encryptedstring;
	          	let [month, date, year]    = new Date().toLocaleDateString("en-US").split("/")
          //document.write(JSON.stringify(data.encryptedstring))
            db.collection('users').doc(profile_id).collection('myproducts').doc(product_id).update({
                    product_name: product_name,
                    product_creator: email1,
                    product_price: product_price,
                    product_category: product_category,
                    product_subcategory: product_subcategory,

            });
            document.getElementById('product_form').style.display = "none";
            document.getElementById('product_submitted').style.display = "block";
            });
          };