var productid;
  function getParameterByName(name, url = window.location.href) {
            name = name.replace(/[\[\]]/g, '\\$&');
            var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }
productid= getParameterByName('product');
function getDocHeight(doc) {
    doc = doc || document;
    // stackoverflow.com/questions/1145850/
    var body = doc.body, html = doc.documentElement;
    var height = Math.max( body.scrollHeight, body.offsetHeight, 
        html.clientHeight, html.scrollHeight, html.offsetHeight );
    return height;
}
function setHeight(id){
    var ifrm = document.getElementById(id);
    var doc = ifrm.contentDocument? ifrm.contentDocument: 
        ifrm.contentWindow.document;
    ifrm.style.visibility = 'hidden';
    ifrm.style.height = "10px"; // reset to minimal height ...
    // IE opt. for bing/msn needs a bit added or scrollbar appears
    ifrm.style.height = getDocHeight( doc ) + 4 + "px";
    ifrm.style.visibility = 'visible';
  }
  var products=[];
  var images=[];
  var reviews=[];
var docRef = db.collection("requests").doc('unclaimed').collection('products').doc(productid);
        docRef.get().then((doc) => {
          if (doc.exists) {
            var doc= doc.data();
            //document.getElementById('mainpicture').src=doc.product_cover;
            //document.write(JSON.stringify(doc))
            //reviewsn1=parseFloat(doc.product_reviewsn)
            var push_data2 = {value: false, id: `${doc.product_id}`, name:`${doc.name}`, price: `${doc.price}`, date: `${doc.date}`, /*reviewsn: reviewsn1,*/ creator: `${doc.creator}`, image: `${doc.product_cover}`, creatorpic: `${doc.product_creatorpic}`, desc: `${doc.description}`, iframe: `./arctest?product=${doc.product_id}`, user: `${doc.user}`}
            if (products.includes('{')){
              var push_data = ','+push_data2;
              products.push(push_data)


            }else{
              products.push(push_data2)

            }//document.write(JSON.stringify(product_data)
        }
          //document.write(JSON.stringify(products))
        }).catch((error) => {
            //document.write(JSON.stringify(error))
      // An error happened.
    });
   /* db.collection("products").doc(productid).collection('reviews').get().then((querySnapshot) => {
    querySnapshot.forEach((doc2) => {
      if (doc2.exists) {
        var doc= doc2.data();
        var reviewrate=parseFloat(`${doc.rate}`)
        var reviewdata = {value: false, name: `${doc.name}`, reviewer:`${doc.Reviewer}`, desc: `${doc.Description}`, rate: reviewrate};
        if (reviews.includes('{')){
            var push_data = ','+reviewdata;
            reviews.push(push_data)


          }else{
            reviews.push(reviewdata)

          }//document.write(product_data)
        } else {
            // doc.data() will be undefined in this case
            reviews=[{
              value: false,
              name: 'No Reviews Found',
              reviewer: 'N/A',
              desc: 'N/A',
              rate: 'N/A' }]
        }
      })

    })*/
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
      reviews:reviews,
      images:images,
      products: products};},
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


