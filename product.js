
function replaceNewlinesWithBreaks(text) {
    return text.replace(/\n/g, '<br>');
  }
  
  const sellers = ["KOTTY", "ELEGANZA", "STYLO", "TRENDY"];
  const prices = ["₹329", "₹399", "₹499", "₹599"];
  const discounts = ["83%", "75%", "67%", "50%"];
  const ratingsReviews = ["43,249 ratings and 178 reviews", "25,842 ratings and 112 reviews", "15,983 ratings and 89 reviews"];
  const colors = [
    "cyan", "maroon", "red", "yellow", "teal", "blue", "pink", "black",
    "gray", "violet", "green", "orange", "purple", "brown", "khaki",
    "magenta", "white"
  ];
  const sizes = ["26", "28", "30", "32", "34"];
  const offers = [
    "Bank OfferGet ₹50 instant discount on first Eleganza UPI transaction on order of ₹200 and aboveT&C",
    "Bank Offer5% Cashback on Eleganza Axis Bank CardT&C",
    "Special PriceGet extra 17% off (price inclusive of cashback/coupon)T&C",
    "Partner OfferSign-up for Eleganza Pay Later & get free Times Prime Benefits worth ₹20,000*Know More",
    "+1 more offer"
  ];
  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 3);
  
  const sellerRatings = ["3.8", "4.2", "4.0", "3.5"];
  const descriptions = [
    "Type -A-line\nBrand Color -Jet Black\nStyle Code- KTTWOMENSSKIRT57\nColor-Black\nIdeal For-Women\nSuitable For-Western Wear\nFabric-Cotton Blend\nFabric Care-Hand wash\nSales Package-1\nNet Quantity-1\nCasual meets effortlessly cool with our trendy Skirts. Create some fashion ripples in your circle with this stylish rust skirt from the latest collection of Kotty. Beautifully tailored in fine cotton Lycra blend for natural lustre and unmatched drape, it's awesome solid pattern make it a great piece to experiment a variety of combinations with. Pair it with a contrast top for a cool look. Kindly ensure the size chart before buying.\nManufacturing, Packaging and Import Info",
  ];
  
  const urlParams = new URLSearchParams(window.location.search);
  const color = urlParams.get('color');
  const dress = urlParams.get('dress');
  

  const seller = sellers[Math.floor(Math.random() * sellers.length)];
  const price = prices[Math.floor(Math.random() * prices.length)];
  const discount = discounts[Math.floor(Math.random() * discounts.length)];
  const ratingReview = ratingsReviews[Math.floor(Math.random() * ratingsReviews.length)];
  const otherColors = colors.filter(c => c !== color);
  const randomSizes = sizes;
  const selectedOffers = offers;
  const sellerRating = sellerRatings[Math.floor(Math.random() * sellerRatings.length)];
  const description = descriptions[Math.floor(Math.random() * descriptions.length)];
  

  const imagePath = `images/productImg/${color.toLowerCase()} ${dress.toLowerCase()}.jpg`;
  
  const numericalPrice = parseInt(price.replace('₹', '').replace(',', ''), 10);
  const paymentAmount = numericalPrice - 6;
  
  document.getElementById('product-name').innerHTML = `${seller} ${color} ${dress}`;
  document.getElementById('product-image').src = imagePath;
  document.getElementById('product-price').innerHTML = `${price} <span class="strike">₹1,999</span>`;
  document.getElementById('product-discount').innerHTML = `${discount} off`;
  document.getElementById('product-payment').innerHTML = `Or Pay ₹${paymentAmount} + 6 coins`;
  document.getElementById('product-ratings-reviews').innerHTML = ratingReview;
  document.getElementById('product-colors').innerHTML = `Color: ${otherColors.join(', ')}`;
  document.getElementById('product-sizes').innerHTML = `Size: ${randomSizes.join(', ')}`;
  document.getElementById('product-offers').innerHTML = selectedOffers.map(offer => `<p>${offer}</p>`).join('');
  document.getElementById('product-delivery').innerHTML = replaceNewlinesWithBreaks(`Deliver to Chennai - 600001\nDelivery by ${deliveryDate.toDateString()} | Free ₹40?`);
  document.getElementById('product-seller').innerHTML = replaceNewlinesWithBreaks(`Seller: ${seller} ${sellerRating} (some random name)\n10 Days Return Policy`);
  document.getElementById('product-details').innerHTML = replaceNewlinesWithBreaks(description);
  document.getElementById('ratings-reviews').innerHTML = `
      <h3>Ratings & Reviews</h3>
      <p>${ratingReview}</p>
      <p>Rate Product:</p>
      <p>Images uploaded by customers: + 25</p>
      <p>5 star: love think product go for it 🥰</p>
      <p>Pallavi Sharma, Dec 2022</p>
      <p>28626 likes</p>
      <p>Certified Buyer, Shimla</p>
      <p>4 star: like this skirt, this dress is so comfortable 💜💜 thank you Eleganza..... 🤗</p>
      <p>Eleganza Customer, 11 months ago</p>
      <p>373 likes</p>
      <p>Certified Buyer, New Delhi</p>
  `;
  