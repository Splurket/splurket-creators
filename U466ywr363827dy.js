var product_items;
var catshit;
var product_data = [];
var user;
var email1;
     db.collection("requests").doc('unclaimed').collection('products').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {

            if (doc.exists) {
              var docid = doc.id
              var doc= doc.data();
              catshit = doc.product_category;
              var push_data1 = {value: false, frontid: `front${docid}`, backid: `backfuck${docid}`, id: `${docid}`, name:`${doc.name}`, price: `${doc.price}`, date: `${doc.date}`, /*reviewsn: `${doc.product_reviewsn}`, creator: `${doc.product_creator}`, image: `${doc.product_cover}`, creatorpic: `${doc.product_creatorpic}`,*/ desc: `${doc.description}`, skills: `${doc.skills}`, permissions: `${doc.permissions}`, payment:`${doc.payment}`, category:`${doc.category}`, image: `${doc.cover}`}
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
                  reviews: 'N/A',
                  status: 'N/A' }]
            }
          })
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    db.collection("requests").doc('unclaimed').collection('products')
    .onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
            if (change.type === "added" && change.doc.data().status === "New") {
               db.collection("requests").doc('unclaimed').collection('products').doc(change.doc.id).update({
               status: "read"
            })
            .then(() => {                //console.log("New city: ", change.doc.data());
                var docid = change.doc.id
                var doc = change.doc.data()
                var push_data1 = {value: false, frontid: `front${docid}`, backid: `backfuck${docid}`, id: `${docid}`, name:`${doc.name}`, price: `${doc.price}`, date: `${doc.date}`, /*reviewsn: `${doc.product_reviewsn}`, creator: `${doc.product_creator}`, image: `${doc.product_cover}`, creatorpic: `${doc.product_creatorpic}`,*/ desc: `${doc.description}`, skills: `${doc.skills}`, permissions: `${doc.permissions}`, payment:`${doc.payment}`, category:`${doc.category}`, image: `${doc.cover}`}
                if (product_data.includes('{')){
                var push_data = ','+push_data1;
                product_data.push(push_data)


              }else{
                var push_data = push_data1;
                product_data.push(push_data)

              }//document.write(product_data)
              app.items = product_data
            })
            }

            //if (change.type === "modified") {
                //console.log("Modified city: ", change.doc.data());
            //}
            if (change.type === "removed" && change.doc.data().status === "Swiped!") {
                //console.log("Removed city: ", change.doc.data());
                try{
                document.getElementById('card' +change.doc.id).style.backgroundColor = "red"
                document.getElementById('card1' +change.doc.id).style.backgroundColor = "red"
                document.getElementById('snatchThis' + change.doc.id).onclick = ''
                document.getElementById('snatchThis' + change.doc.id).style.cursor= 'not-allowed'
                document.getElementById('snatchThis' + change.doc.id).style.backgroundColor= 'red'
                document.getElementById('snatchThis' + change.doc.id).innerText= 'Taken!'
              }catch(err){
                console.log(err)
              }
            }
        });
    });
app = new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  data() {
    return {
      itemsPerPageArray: [15, 25, 50],
      search: '',
      filter: {},
      sortDesc: false,
      page: 1,
      itemsPerPage: 15,
      sortBy: 'name',
      keys1: [
      'Name',
      'Price',
      'Ratings'
      ],
      keys: [
      'Name',
      'Price',
      'Ratings'
      ],
      keys2: [
      'Name',
      'Price',
      'Date',
      'Skills',
      'Payment',
      'Category',

      ],
      frontKeys: [
      'Date',
      'Skills',
      'Payment',
      'Category',
      'Permissions',

      ],


      items: product_data};},
  computed: {
    numberOfPages() {
      return Math.ceil(this.items.length / this.itemsPerPage);
    },
    filteredKeys() {
      return this.keys.filter(key => key !== 'Name');
    } },

  methods: {
    nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1;
    },
    formerPage() {
      if (this.page - 1 >= 1) this.page -= 1;
    },
    updateItemsPerPage(number) {
      this.itemsPerPage = number;
    } } });




 /*fetch('https://script.google.com/macros/s/AKfycbynD4nHvW7hQMWjRWA1KOgyHwkZq_G-ZebfhYS1_Cotc-GsAxHmIADxlgeUGC2pkwpe/exec')
                      .then(function (response) {
                          return response.json();
                      })
                      .then(function (data) {
                        data='{'+data+'}'
                        document.write((data))

                        var data2=(Object.keys(data))
                          appendData4(data2);
                      })
                      .catch(function (err) {
                          console.log('error: ' + err);
                      });
                    function appendData4(data1) {
                        var dipwad = document.getElementById("w3-container4");
                        var mainContainer = document.getElementById("myData4");
                        
                        for (var i = 0; i < data1.length; i++) {
                          var catname= data1[i]
                          var div2 = document.createElement("div");


                            div2.className = "card content";
                            div2.id = "cardw"
                          
                            div2.innerHTML = `
                                 <div width="100%" style="background-color:#52b36c">
                                      <div class="card__title" style="max-height:45px; overflow:hidden; text-overflow: ellipsis; max-width:100px;">${data1[i].name}</div>
                                    </div>
                                  </div>
                                  `
                            mainContainer.appendChild(div2);
                        }
                    }*/
  var doc
function Snatch(firebase_id){

  var id = firebase_id.replace('snatchThis',"")
  console.log(id)
  db.collection("requests").doc('unclaimed').collection('products').doc(id).update({
   status: "Swiped!"
  })
  .then(() => {
    removeDoc(id)

  })
}
function removeDoc(id){
    
  db.collection("requests").doc('unclaimed').collection('products').doc(id).get().then((doc) => {
    doc = doc
    console.log("Document data:", doc.data())
    console.log(doc)

    db.collection("requests").doc('claimed').collection('products').doc(id).set(doc.data())
      .then(() => {
          db.collection("requests").doc('unclaimed').collection('products').doc(id).delete().then(() => {
              console.log("Document successfully deleted!");
          }).catch((error) => {
              console.error("Error removing document: ", error);
          });
      })
      .catch((error) => {
          console.error("Error writing document: ", error);
      });

  }).catch((error) => {
      console.log("Error getting document:", error);
  });

  
}
function hoverHandler(backside){
  document.getElementById(backside).style.display = 'none';
  document.getElementById('backfuck'+backside).style.display = 'block'

}
function handleOut(backside){
  backside1 = backside.replace('backfuckchuck',"")
  console.log(backside1)
  document.getElementById(`backfuck${backside1}`).style.display = 'none'
  document.getElementById(backside1).style.display = 'block';


}
                    
