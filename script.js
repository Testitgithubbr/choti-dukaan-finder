function showTypes(category){

let container = document.getElementById("typeContainer");

let types = [];

if(category === "kirana"){

types = ["Grocery Shop","Mini Mart","Wholesale Kirana","General Store"];

}

else if(category === "fruit"){

types = ["Fruit Stall","Vegetable Vendor","Fruit Cart"];

}

else if(category === "tea"){

types = ["Tea Stall","Coffee Stall","Chai Tapri"];

}

else if(category === "food"){

types = ["Street Food","Fast Food","Snack Stall"];

}

else if(category === "medical"){

types = ["Pharmacy","Medical Store","Chemist Shop"];

}

else if(category === "salon"){

types = ["Hair Salon","Beauty Parlour","Men Salon"];

}

else if(category === "stationery"){

types = ["Book Store","Stationery Shop","Printing Shop"];

}

else if(category === "mobile"){

types = ["Mobile Shop","Mobile Repair","Accessories Shop"];

}

container.innerHTML = "";

types.forEach(type =>{

let btn = document.createElement("button");

btn.innerText = type;

btn.className = "type-btn";

container.appendChild(btn);

});

}
