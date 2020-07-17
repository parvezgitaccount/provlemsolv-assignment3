// start convart FUnction ON ffeet to mailes /

function FeetToMile(feet) {
    if (feet > 0) {
        return feet / 5280;

    }

    if (feet <= 0) {
        return "That Value Is Don't accepted I need Posetive Value";

    }

    return MileCalculute;
}

let MileREesult = FeetToMile(5300);
console.log("This Is your Result :", MileREesult);



// result = result.toFixed(3); //if you do't like this toFixed option you will remove this 
// end conart feetTOMile











// start Wood Calculute option

function CharWoodCalulator(char) {
    let TotalCharWood = char * 1;
    return TotalCharWood;
}

function TableWoodcalulator(table) {
    let TotalTableWood = table * 2;
    return TotalTableWood;
}

function KhatWoodCalculator(khat) {
    let TotalKhatWood = khat * 5;
    return TotalKhatWood;
}





let ChairResult = CharWoodCalulator(03);
let TableResult = TableWoodcalulator(02);
let KhatResult = KhatWoodCalculator(06);





if (ChairResult > 0) {
    console.log("This is Your Char wood ", ChairResult, "Feet");
}
if (ChairResult <= 0) {
    console.log("Please Enter Your ChairWood Posetive Value :")
}
if (TableResult > 0) {

    console.log("This Is Your Table Wood  ", TableResult, "Feet");
}
if (TableResult <= 0) {
    console.log("Please Enter Your TableWood Posetive Value")
}
if (KhatResult > 0) {

    console.log("This is Your Khat Wood  ", KhatResult, "Feet")
}
if (KhatResult <= 0) {
    console.log("Please Enter Your KhatWood Posetive Value")
}
let woodneed = ChairResult + TableResult + KhatResult;
console.log(" Your Total Furniture Wood  ", woodneed, "feet");
// end the wood function







// start brickCalculator

function brickCalculator(eit) {
    if (eit <= 20) {
        if (eit <= 10) {
            let FirstTenFloor = 15000;
            for (let i = 1; i <= eit; i++) {
                let result = eit * FirstTenFloor;
                return result;
            }
        } else {
            let SecendTenFloor = 12000;
            for (let i = 1; i < eit; i++) {
                let RmFirstTenFloor = eit - 10;
                let SecendFloor = RmFirstTenFloor * SecendTenFloor;
                let TotalTwentyFloor = SecendFloor + 150000;
                return "Your Need Total Bricks Eit on YOur Brilling  : ", TotalTwentyFloor;
            }
        }
    } else {
        let AbobeTwentyFloor = 10000;
        for (i = 1; i < eit; i++) {
            let RmTwentyFloor = eit - 20;
            let TwentyUpResult = RmTwentyFloor * AbobeTwentyFloor;
            let TwentyFloorUp = TwentyUpResult + 270000;
            return "Your Need Total Bricks Eit on YOur Brilling  : ", TwentyFloorUp;
        }
    }
    if (eit <= 0) {
        return "Please Enter  your Current floor lavel This Value is Nagicative  I need Posetive value"
    }
}
let HowMuchFloor = brickCalculator(556);
console.log(" You need a total of bricks :", HowMuchFloor);


// End brickCalculator function








// this is small TinyFriends function Start 

function TinyFriend(friend) {

    let MinFriend = friend[0];
    for (Total of friend) {
        if (Total < MinFriend) MinFriend = Total;
    }
    return [MinFriend];
}
console.log(TinyFriend(['parvez ', 'salma', 'nasir', "shakhawat", "ira", "tangina", "murad"]));

// end thiny friend function