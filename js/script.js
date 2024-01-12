let loginForm = document.getElementById("formData");

let nama = document.getElementById("nama");
let role = document.getElementById("role");
let availability = document.getElementById("availability");
let lokasi = document.getElementById("lokasi");
let usia = document.getElementById("usia");
let email = document.getElementById("email");
let years = document.getElementById("years");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    nama.value? document.getElementById('namaValue').innerHTML = nama.value : console.log("Nama tidak diubah");
    role.value? document.getElementById('roleValue').innerHTML = role.value : console.log("Role tidak diubah");
    availability.value? document.getElementById('availabilityValue').innerHTML = availability.value : console.log("Availability tidak diubah");
    lokasi.value? document.getElementById('lokasiValue').innerHTML = lokasi.value : console.log("Lokasi tidak diubah");
    usia.value? document.getElementById('usiaValue').innerHTML = usia.value : console.log("usia tidak diubah");
    years.value? document.getElementById('yearsValue').innerHTML = years.value : console.log("years tidak diubah");
    email.value? document.getElementById('emailValue').innerHTML = email.value : console.log("email tidak diubah");

    loginForm.reset()
    
    sembunyi()
});

function sembunyi() {
    document.getElementById('form-ubah').hidden = true
}