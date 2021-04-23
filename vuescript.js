var product_items;
var product_data = [];
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
      console.log(profile_id)

     db.collection("users").doc(profile_id).collection('myproducts').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {

            if (doc.exists) {
              var doc= doc.data();
              var push_data1 = `{
              value:'false',
              name:${doc.product_name},
              Price:${doc.product_price},
              Date_Added:${doc.creation_date},
              reviews:${doc.reviews},
              purchases: ${doc.purchases},
              status: ${doc.status}
            }`
              if (product_data.includes('{')){
                var push_data = ','+push_data1;
                product_data.push(push_data)
              }else{
                var push_data = push_data1;
                product_data.push(push_data)

              }//document.write(product_data)
              console.log(product_data)




            } else {
                // doc.data() will be undefined in this case
                product_data=[{
                  value: false,
                  name: 'No Products Found',
                  Price: 'N/A',
                  Date_Added: 'N/A',
                  reviews: 'N/A',
                  purchases: 'N/A',
                  status: 'N/A' }]
            }
          })
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
      });
   });



    new Vue({
      el: '#app',
      data: () => ({
        pagination: {
          sortBy: 'name' },

        selected: [],
        search: '',
        isMobile: false,
        headers: [{
          text: 'Product',
          align: 'left',
          value: 'name' },

        {
          text: 'Price',
          value: 'Price' },

        {
          text: 'Date Added',
          value: 'Date_Added' },

        {
          text: 'Reviews',
          value: 'reviews' },

        {
          text: 'Purchases',
          value: 'purchases' },

        {
          text: 'Status',
          value: 'status' }],


        products: product_data}),




      methods: {
        onResize() {
          if (window.innerWidth < 769)
          this.isMobile = true;else

          this.isMobile = false;
        },
        toggleAll() {
          if (this.selected.length) this.selected = [];else
          this.selected = this.desserts.slice();
        },
        changeSort(column) {
          console.log(column);
          if (this.pagination.sortBy === column) {
            this.pagination.descending = !this.pagination.descending;
          } else {
            this.pagination.sortBy = column;
            this.pagination.descending = false;
          }
        } } });
    document.write(product_data)
  