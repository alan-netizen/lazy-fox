const darkModeToggle = document.getElementById('dark-mode-checkbox');
const body = document.body;

darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
        body.classList.add('dark-mode');
        form.classList.add('dark-mode-form');
        
    } else {
        body.classList.remove('dark-mode');
        form.classList.remove('dark-mode-form');
    }
});

document.getElementById('tempConverterForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Dapatkan input pengguna
    let temperature = parseFloat(document.getElementById('temperature').value);
    let unit = document.getElementById('unit').value;

    // Validasi input
    if (isNaN(temperature)) {
        alert('Masukkan suhu yang valid.');
        return;
    }

    // Konversi suhu
    let convertedTemp;
    if (unit === 'celsius') {
        convertedTemp = (temperature * 9/5) + 32;
        document.getElementById('conversionResult').innerText = `${temperature} Celsius sama dengan ${convertedTemp} Fahrenheit.`;
        document.getElementById('explanation').innerText = 'Untuk mengonversi Celsius ke Fahrenheit, kalikan suhu dengan 9/5 dan tambahkan 32.';
    } else if (unit === 'fahrenheit') {
        convertedTemp = (temperature - 32) * 5/9;
        document.getElementById('conversionResult').innerText = `${temperature} Fahrenheit sama dengan ${convertedTemp} Celsius.`;
        document.getElementById('explanation').innerText = 'Untuk mengonversi Fahrenheit ke Celsius, kurangi 32 dari suhu dan kemudian kalikan dengan 5/9.';
    }
});
