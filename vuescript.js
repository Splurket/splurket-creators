var profile_id;
var itemval;
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
      profile_id= data.encryptedstring;

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
  vuetify: new Vuetify(),
  data: () => ({
    dialog: false,
    dialogDelete: false,
    pagination: {
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

    desserts: [],
    editedIndex: -1,
    editedItem: {
      name: '',
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0 },

    defaultItem: {
      name: '',
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0 } }),



  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'New Item' : 'Product Options';
    } },


  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    } },


  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.desserts = product_data},

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
      itemval = item;

    },
    deleteprod(){

    }
    updateprod(){

    }
    unpublishprod(){

    }
    discount(){

    }
    coupon(){

    }
    clearanal(){
      
    }

    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.desserts.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;

      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();

    } } });