function calculateAge(date){    //calculates my current age, format as ('YYYY, MM - 1, DD, HH, MM, SS')
    
    var ageDiff = Date.now() - date.getTime();
    var age = new Date(ageDiff);
    //console.log("Date: " + age);
    return Math.abs(age.getUTCFullYear() - 1970);
}

function calculateNicksAge(){
    return calculateAge(new Date(1998, 9, 3));
}

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById("nickAge").innerHTML = calculateNicksAge();
});