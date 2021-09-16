var productid;
var product_type;
var product_status
  function getParameterByName(name, url = window.location.href) {
            name = name.replace(/[\[\]]/g, '\\$&');
            var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }
productid= getParameterByName('product');
product_type = getParameterByName('type');
product_status = getParameterByName('status');
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
var docRef = db.collection("requests").doc(product_status).collection(product_type).doc(productid);
//console.log(docRef)
        docRef.get().then((doc) => {
          if (doc.exists) {
            var doc= doc.data();
            images.push(doc.product_cover)
            var images1=doc.product_images
            images2=images1.split(',');
            images2.forEach((images3) => {images.push(images3)});
            document.getElementById('mainpicture').src=doc.product_cover;
            //document.write(JSON.stringify(doc))
            reviewsn1=parseFloat(doc.product_reviewsn)
            var push_data2 = {value: false, id: `${doc.product_id}`, name:`${doc.product_name}`, price: `${doc.product_price}`, date: `${doc.creation_date}`, reviewsn: reviewsn1, creator: `${doc.product_creator}`, image: `${doc.product_cover}`, creatorpic: `${doc.product_creatorpic}`, desc: `${doc.product_description}`, iframe: `./arctest?product=${doc.product_id}`}
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
    db.collection("requests").doc(product_status).collection(product_type).doc(productid).get().then((doc2) => {
    doc = doc
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
    mounted() {
    // Code that will run only after the
    // entire view has been rendered
          // hide the overlay when everything has loaded
      // you could choose some other event, e.g. if you're loading
      // data asynchronously, you could wait until that process returns

    var timer = window.setInterval(function(){
   // var in1 = document.getElementById('app').innerHTML
    if(in1.includes('No data available')) {
     document.getElementById('loading-wrapper').style.display = "block";
     document.getElementById('app').style.display = "none";
     //console.log(in1)
  }else{
      document.getElementById('loading-wrapper').style.display = "none";
     document.getElementById('app').style.display = "block";
     window.clearInterval(timer);
    }
}, 100);

    },

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


