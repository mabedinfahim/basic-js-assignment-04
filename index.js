// Problem No-01

function anaToVori(ana) {
    //type checking 
    if (typeof ana === "number") {
        let vori = ana / 16;
        return vori;
    } else {
        //type checking alart
        return "Please enter your vaild ana";
    }
}

//calling function for cheaking
console.log(anaToVori(16));

// Problem No-02

function pandaCost(singaraQuantity, somosaQuantity, jelapiQuantity) {
    if ((typeof singaraQuantity === "number" && typeof somosaQuantity === "number") && (typeof jelapiQuantity === "number")) {
        // per item price
        let singaraPerPrice = 7;
        let somosaPerPrice = 10;
        let jelapiPerPrice = 15;

        //total items price
        let totalSingaraPrice = singaraPerPrice * singaraQuantity;
        let totalSomosaPrice = somosaPerPrice * somosaQuantity;
        let totalJelapiPrice = jelapiPerPrice * jelapiQuantity;

        //cart price
        let totalPrice = totalSingaraPrice + totalSomosaPrice + totalJelapiPrice;
        //returnign the hole items price;
        return totalPrice;
    } else {
        return "Please enter your vaild items quntity"
    }

}

//calling function for cheaking
console.log(pandaCost(2, 4, "3"))


// Problem No-03

function picnicBudget(people) {
    // type checking 
    if (typeof people === "number") {
        let totalBudget;
        if (people > 0 && people <= 100) {
            // first condition
            totalBudget = people * 5000;
        } else if (people > 100 && people <= 200) {
            // second condition
            totalBudget = (100 * 5000) + ((people - 100) * 4000);
        } else {
            // i can apply condition but else autometicaly take it 
            totalBudget = (100 * 5000) + (100 * 4000) + ((people - 200) * 3000)
        }
        return totalBudget;
    } else {
        // wrong info alart
        return "You put wrong info, Please try onece more with right info";
    }
}

//calling function for cheaking
console.log(picnicBudget(400))



// Problem No-04

function oddFriend(friends) {
    //for loop
    for (const friend of friends) {
        //length checking
        if (typeof friend === "string") {
            if (friend.length % 2 != 0) {
                //returning the value
                return friend;
            }
        } else {
            return "You put wrong input"
        }
    }
}

//calling function for check
let friendName = ["fardin", 5, 12, "mainul"];
console.log(oddFriend(friendName))