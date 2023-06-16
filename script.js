let result = document.querySelector(".result");

const myInput = document.getElementById("inputSearch");
const myButton = document.getElementById("btnSearch");

myButton.addEventListener("click", function () {
  const inputCity = myInput.value;

  fetch(`https://api.api-ninjas.com/v1/weather?city=${inputCity}`, {
    method: "GET",
    headers: {
      "X-Api-Key": "US/+cXc7Z4dIBYK8V4eZ5A==9XiSf3WhUJnVXNSx",
    },
  })
    .then((response) => {
      // Periksa kode status respons
      if (!response.ok) {
        throw new Error("Error: Data tidak ditemukan");
      }
      return response.json();
    })
    .then((data) => {
      // Result variables
      const temperature = data.temp;
      const min_temp = data.min_temp;
      const max_temp = data.max_temp;
      const humidity = data.humidity;
      const clouds = data.cloud_pct;
      const wind_speed = data.wind_speed;

      result.innerHTML = `<h2 class="city">city: ${inputCity}</h2>
                          <h4 class="temp"><i class="bi bi-thermometer-half"></i> ${temperature}°С</h4>
                          <p class="temp-minmax">Temperature from ${min_temp}°С to ${max_temp}°С</p>
                          <h5 class="wind">Wind Speed : ${wind_speed}m/s</h5>
                          <h5>Clouds : ${clouds}%</h5>
                          <h5>Humidty : ${humidity}%</h5>`;
    })
    .catch((error) => {
      console.error(error);
      if (inputCity.length == 0) {
        alert("The input value cannot be empty.");
      } else {
        alert("Sorry, this city is not available.");
      }
    });
});
