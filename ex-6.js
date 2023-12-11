const carCollection = ["toyota", "fiat", "honda", "bmw"];

function updateCarCollection(carBrand) {
  // Start coding here
  if (carCollection.includes(carBrand)) {
    let position = 1 + carCollection.indexOf(carBrand)
    return carBrand + " already exists in position "+ position +" of the car collection."
  } else {
    return carCollection.push(carBrand) && "new car collection is: toyota, fiat, honda, bmw, " + carBrand + "."
  }
}


//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ยังไม่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("audi")); //new car collection is : toyota,fiat,honda,bmw,audi.

//ในกรณีที่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("toyota")); //toyota has already existed in the 1 position of car collection.

/*
console.log(updateCarCollection("audi"));
console.log(updateCarCollection("fiat"));
console.log(updateCarCollection("honda"));
console.log(updateCarCollection("bmw"));
console.log(updateCarCollection("tesla"));
*/

