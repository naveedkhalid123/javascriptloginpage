// clear output

var cities = ["Fasialabad", "Lahore", "Karachi", "Islamabad", "Quetta",]
function Clear() {
    document.getElementById("ot").innerHTML = " ";
    document.getElementById("ot").style.height = "250px"
}


// input column
function Case() {
    document.getElementById("basic-url").innerHTML = " ";
}


function printCities() {
    for (let i = 0; i < cities.length; i++) {
        let num = i + 1 + ") "
        let cityName = cities[i]
        document.getElementById("ot").innerHTML += num + cityName + '</br>'
    }
}





function addCity() {
    let yourCity = document.getElementById("basic-url").value;
    if (!yourCity) {
        return alert("Please Enter Your City Name")
    }
    let firstName = yourCity.slice(0, 1).toUpperCase();
    let lastName = yourCity.slice(1).toLowerCase();
    let fullName = firstName + lastName;
    let ourCity = cities.push(fullName)
    for (let i = 0; i < cities.length; i++) {
        let num = i + 1 + ") "
        let cityName = cities[i]
        document.getElementById("ot").innerHTML += num + cityName + '</br>'
    }
    document.getElementById("ot").style.height = "auto"
}


function checkCity() {
    let yourCity = document.getElementById("basic-url").value;
    if (!yourCity) {
        return alert("Please Enter Some Text!!!!!")
    }
    let firstName = yourCity.slice(0, 1).toUpperCase();
    let lastName = yourCity.slice(1).toLowerCase();
    let fullName = firstName + lastName;
    let cityFound = false;
    for (let i = 0; i < cities.length; i++) {
        if (cities[i] === fullName)
            cityFound = true;
        let html = '<span style="color:red;">"' + fullName + '"</span>';
        document.getElementById("ot").innerHTML = html + "<p>is already added.</p>";
    }
    if (cityFound === false) {
        let name = cities.push(fullName)
        let state = " is succcessfully added."
        document.getElementById("ot").innerHTML = '<span style="color:green;">"' + fullName + '</span>' + state;

    }
}