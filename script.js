document.querySelectorAll('*').forEach(element => {
    element.style.border = '2px solid #000000'; // Mengubah border menjadi hitam pekat
});

// Mengubah warna bg div menjadi warna favorit
document.getElementById("container1").style.backgroundColor = "#aee2c0";
document.getElementById("container2").style.backgroundColor = "#aee2c0";

// Mengubah atribut href pada tag <a> dari "#" menjadi https://www.google.com
document.querySelector("a").href = "https://www.google.com";

// Menggunakan loop untuk mengubah text, style, size, dan warna background pada container2
const container2Items = document.querySelectorAll("#container2 .list");
container2Items.forEach((item, index) => {
    item.textContent = `List ${index + 1}`; // Mengubah teks
    item.style.fontSize = "18px"; // Mengubah ukuran font
    item.style.backgroundColor = "#aab2dd"; // Mengubah semua list dengan satu warna background
});
