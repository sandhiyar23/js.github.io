const calt = () => {
    const inputtemp = parseFloat(document.getElementById('temp').value);
    const tempselected = document.getElementById('temp_d');
    const valuetemp = tempselected.options[tempselected.selectedIndex].value;

    const celtofah = (cel) => {
        let fahr = ((cel * 9 / 5) + 32).toFixed(1);
        return fahr;
    }

    const fantocel = (fah) => {
        let cels = ((fah - 32) * 5 / 9).toFixed(1);
        return cels;
    }

    if (valuetemp === 'cel') {
        document.getElementById("result").innerHTML = celtofah(inputtemp) + "&#176;Fahrenheit";
    } else {
        document.getElementById("result").innerHTML = fantocel(inputtemp) + "&#176;Celsius";
    }
}
