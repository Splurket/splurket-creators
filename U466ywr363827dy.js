var product_items;
var catshit;
var product_data = [];
var user;
var email1;
     db.collection("products").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {

            if (doc.exists) {
              var doc= doc.data();
              catshit = doc.product_category;
              var push_data1 = {value: false, id: `${doc.product_id}`, name:`${doc.product_name}`, price: `${doc.product_price}`, date: `${doc.creation_date}`, reviewsn: `${doc.product_reviewsn}`, creator: `${doc.product_creator}`, image: `${doc.product_cover}`, creatorpic: `${doc.product_creatorpic}`, desc: `${doc.product_description}`}
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
new Vue({
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
                    
