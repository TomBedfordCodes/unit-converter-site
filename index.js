
/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
 1 kilogram = 2.204 pound
*/

const meterFeetRatio = 3.281
const literGallonRatio = 0.264
const kiloPoundRatio = 2.204

const convertBtn = document.getElementById("convert-btn")
const inputField = document.getElementById("input-field")
const meterFeetPara = document.getElementById("meter-feet-para")
const literGallonPara = document.getElementById("liter-gallon-para")
const kiloPoundPara = document.getElementById("kilo-pound-para")

inputField.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        convertBtn.click()
    }
})

convertBtn.addEventListener("click", function() {
    let value = parseFloat(inputField.value)
    if (isNaN(value)) {
        return
    }
    mF = multiplyConversion(value, meterFeetRatio)
    fM = divideConversion(value, meterFeetRatio)
    // [mF, fM] = getConversion(value, meterFeetRatio)
    meterFeetPara.textContent = `${value} meters = ${mF.toFixed(3)} feet | ${value} feet = ${fM.toFixed(3)} meters`

    lG = multiplyConversion(value, literGallonRatio)
    gL = divideConversion(value, literGallonRatio)
    // [lG, gL] = getConversion(value, literGallonRatio)
    literGallonPara.textContent = `${value} liters = ${lG.toFixed(3)} gallons | ${value} gallons = ${gL.toFixed(3)} liters`

    kP = multiplyConversion(value, kiloPoundRatio)
    pK = divideConversion(value, kiloPoundRatio)
    // [kP, pK] = getConversion(value, kiloPoundRatio)
    kiloPoundPara.textContent = `${value} liters = ${kP.toFixed(3)} gallons | ${value} gallons = ${pK.toFixed(3)} liters`

})



function multiplyConversion(num, conversionRate) {
    return num * conversionRate
}

function divideConversion(num, conversionRate) {
    return num / conversionRate
}

// function getConversion(num, conversionRate) {
//     return [(num * conversionRate), (num / conversionRate)]
// }



