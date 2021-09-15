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
var docRef = db.collection("products").doc(productid);
        docRef.get().then((doc) => {
          if (doc.exists) {
            var doc= doc.data();

/*document.getElementsByTagName("head")[0].innerHTML=`
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"><link rel="stylesheet" href="./arcflashstyle.css">
  <!-- Favicon -->
  <!--<link rel="shortcut icon" href="../assets/images/favicon.ico" type="image/x-icon" />-->

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;700&display=swap" rel="stylesheet" />
  <!-- Animate On Scroll -->
  <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

  <!-- Custom StyleSheet -->
  <link rel="stylesheet" href="styles.css" />
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Splurket: Imagine No Limts™</title>
  <link href="https://fonts.googleapis.com/css?family=Karla:400,700&display=swap" rel="stylesheet">
  <link rel="icon" src="/assets/images/Logo.ico">
  <link rel="stylesheet" href="https://cdn.materialdesignicons.com/4.8.95/css/materialdesignicons.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/vuetify@2.4.11/dist/vuetify.min.css">
  <link rel="stylesheet" href="./styles.css">
      <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!--Firebase-->
  <link rel="icon" type="image/x-icon" href="../assets/images/Logo.png" />
  <!-- Font Awesome Icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossorigin="anonymous" />
  <!-- css -->
  <link href='https://fonts.googleapis.com/css?family=Shadows Into Light Two' rel='stylesheet'>
      <!-- css -->
  <link href='https://fonts.googleapis.com/css?family=Shadows Into Light Two' rel='stylesheet'>
  <link href="https://unpkg.com/vueperslides/dist/vueperslides.css" rel="stylesheet">
    <meta property="og:locale" content="en_US">
    <meta property="og:type" content="website">
    <meta property="og:title" content="${doc.product_name}">
    <meta property="og:description" content="${doc.product_description}">
    <meta property="og:site_name" content="Splurket">
    <meta property="og:image" content="${doc.product_cover}">
    <meta itemprop="name" content="Splurket">
    <meta itemprop="image" content="${doc.product_cover}">
    <meta property="og:url" content="http://www.Splurket.com">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@splurket_store">
    <meta name="twitter:description" content="${doc.product_description}">
    <meta name="twitter:title" content="Splurket">
    <meta name="twitter:image" content="${doc.product_cover}">`*/

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
    db.collection("products").doc(productid).collection('reviews').get().then((querySnapshot) => {
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
    var in1 = document.getElementById('app').innerHTML
    if(in1.includes('No data available')) {
     document.getElementById('loading-wrapper').style.display = "block";
     document.getElementById('app').style.display = "none";
     console.log(in1)
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


