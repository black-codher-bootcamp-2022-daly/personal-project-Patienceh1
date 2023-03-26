const mongoose = require("mongoose");
const { Schema } = mongoose;

const bookSchema = new Schema ({
id: {
  $oid: String,
},
kind: String,
id: String,
etag: String,
selfLink: String,
volumeInfo:{
  title: String,
  subtitle: String,
  authors: [
    String
  ],
  publisher: String,
  publishedDate: Number,
  description: String,
  industryIdentifiers: [
    {
      type: String,
      identifier: Number,
    },
    {
      type: String,
      identifier: Number,
    }
  ],
  readingModes: {
    text: Boolean,
    image: Boolean,
  },
  pageCount: Number,
  printType: String,
    categories: [
      String
    ],
    averageRating: Number,
    ratingsCount: Number,
    maturityRating: String,
    allowAnonLogging: Boolean,
    contentVersion: String,
    panelizationSummary: {
    containsEpubBubbles: Boolean,
    containsImageBubbles: Boolean
},
imageLinks: {
  smallThumbnail: String,
  thumbnail: String,
},
language: String,
previewLink: String,
infoLink: String,
canonicalVolumeLink:String,
},
saleInfo: {
country: String,
saleability: String,
isEbook: Boolean,
listPrice: {
  amount: Number,
  currencyCode: String
},
retailPrice: {
  amount: Number,
  currencyCode: String,
},
buyLink: String,
offers: [
  {
    finskyOfferType: Number,
    listPrice: {
      amountInMicros: Number,
      currencyCode: Number
    },
    retailPrice: {
      amountInMicros: Number,
      currencyCode: String
    },
    giftable: Boolean
  }
],
},
accessInfo: {
  country: String,
  viewability: String,
  embeddable: Boolean,
  publicDomain: Boolean,
  textToSpeechPermission: String,
  epub: {
    isAvailable: Boolean,
    acsTokenLink: String
  },
  pdf: {
    isAvailable: Boolean,
  },
  webReaderLink: String,
  accessViewStatus: String,
  quoteSharingAllowed: Boolean
},
searchInfo: {
  textSnippet: String
}})

mongoose.model("books", bookSchema);