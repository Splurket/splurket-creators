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
              var push_data1 = {value: false, name:`${doc.product_name}`, Price: `${doc.product_price}`, Date_Added: `${doc.creation_date}`, reviews: `${doc.reviews}`,purchases: `${doc.purchases}`,status: `${doc.status}`}
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
        rowsPerPageItems: [10, 20, 30, 40],
        pagination: {
          rowsPerPage: 20,
          sortBy: 'Date_Added' },

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
          value: 'status'},
        {
          text: 'Options',
          value: 'options',
          sortable: false }],


        products: product_data}),




      methods: {
        initialize() {
          this.products = [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0 },

          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3 },

          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0 },

          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3 },

          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9 },

          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0 },

          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0 },

          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5 },

          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9 },

          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7 }];


        },
          onButtonClick(item) {
            console.log('click on ' + item.no)
          },
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
  