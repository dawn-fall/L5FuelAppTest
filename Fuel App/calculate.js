function calculate()
{
    let carEconomy = document.getElementById("carEconomy").value;
    let distance = document.getElementById("distance").value;
    let fuelCost = document.getElementById("fuelCost").value;

    let litreCost = (carEconomy * fuelCost) / 100;

    document.getElementById("display").innerHTML = "This trip will cost you $" + Math.round(litreCost * distance);

}