// what is the path to the JSON file?
const apiURL = "horsedata.json";

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((myList) => {
    //Once it comes back, display it to the console.
    console.log(myList);
    

    for (i = 0; i < myList.length; i++) {
    
    let myImageTag = document.createElement("img");
    myImageTag.src = myList[i].photo;

    let myCaptionTag = document.createElement("figcaption");
    myCaptionTag.textContent = myList[i].name;
    myCaptionTag.textContent = myList[i]['type'];


    let mySectionTag = document.createElement("section");
    mySectionTag.className = "hotelCard";

    let myFigureTag = document.createElement("figure");
    myFigureTag.className = "imageInfo";



    let myInfoTag = document.createElement("div");
    myInfoTag.className = "hotelInfo";

    // let myAddressTag = document.createElement("span");
    // myAddressTag.className = "addressInfo";
    // let addressIcon = document.createElement("i");
    // addressIcon.innerHTML = `<ion-icon name="car"></ion-icon>`;
    // let address = document.createElement("p");
    // address.innerHTML = myList[i].address;

    let myAddressTag = document.createElement("span");
    myAddressTag.className = "addressInfo";
    // let addressIcon = document.createElement("i");
    // addressIcon.innerHTML = `<ion-icon name="car"></ion-icon>`;
    let address = document.createElement("p");
    address.innerHTML = myList[i].info;


      


    

    let myPhoneTag = document.createElement("span");
    myPhoneTag.className = "phoneInfo";
    // let phoneIcon = document.createElement("i");
    // phoneIcon.innerHTML = `<ion-icon name="call"></ion-icon>`;
    // let phone = document.createElement("p");
    // phone.innerHTML = myList[i].link;
  




    var phone = document.createElement('a');
    var linkText = document.createTextNode("View Types");
    phone.appendChild(linkText);
    phone.title = `${myList[i].link}`;
    phone.href = ("https://animals-nature.netlify.app/" + `${myList[i].link}` + ".html");
    // document.body.appendChild(a);
    


  

    document.getElementById('myCards').appendChild(mySectionTag);

    myFigureTag.appendChild(myImageTag);
    myFigureTag.appendChild(myCaptionTag);


    mySectionTag.appendChild(myFigureTag);
    mySectionTag.appendChild(myInfoTag);

    myInfoTag.appendChild(myAddressTag);
    // myAddressTag.appendChild(addressIcon);
    myAddressTag.appendChild(address);

    myInfoTag.appendChild(myPhoneTag);
    // myPhoneTag.appendChild(phoneIcon);
    myPhoneTag.appendChild(phone);


  }

    // document.getElementById('myCards').appendChild(myFigureTag);
    // document.getElementById('myCards').appendChild(myInfoTag);
    // document.getElementById('myCards').appendChild(mySpanTag);
    
    
}); //end of "then" fat arrow function