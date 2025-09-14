function convertTemp() {
      let temp = parseFloat(document.getElementById("tempInput").value);
      let conversionType = document.querySelector('input[name="conversion"]:checked');
      let resultDiv = document.getElementById("result");

      if (!conversionType) 
        {
            resultDiv.innerHTML = "⚠️ Select a unit";
            return;
      }

      let result;
      if (conversionType.value === "CtoF") 
        {
            result = (temp * 9/5) + 32;
            resultDiv.innerHTML = `${temp}°C = ${result.toFixed(2)}°F`;
      }     
      else 
        {
            result = (temp - 32) * 5/9;
            resultDiv.innerHTML = `${temp}°F = ${result.toFixed(2)}°C`;
      }
    }