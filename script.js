// If, Else
// Contoh 1
let nilaiUlangan = 75;

if (nilaiUlangan >= 80) {
    console.log("Nilai Anda sangat baik. Selamat!");
} else {
    console.log("Anda perlu belajar lebih keras untuk meningkatkan nilai Anda.");
}

// Contoh 2
let kecepatan = 100; // Kecepatan kendaraan dalam km/jam

if (kecepatan <= 60) {
  console.log("Kendaraan bergerak sedang.");
} else {
  console.log("Kendaraan bergerak dengan kecepatan tinggi.");
}


// Nested If
// Contoh 1
let weather = "berangin"; // Anda bisa mengganti nilai ini dengan cuaca yang berbeda

if (weather === "cerah") {
    console.log("Cuaca cerah. Gunakan sepeda atau berjalan kaki.");
} else if (weather === "hujan") {
    console.log("Hujan. Gunakan payung atau transportasi roda empat.");
} else if (weather === "berangin") {
    console.log("Cuaca berangin. Gunakan jaket dan pertimbangkan penggunaan transportasi.");
} else {
    console.log("Cuaca tidak teridentifikasi. Silakan cek kondisi cuaca.");
}

// Contoh 2
let nilai = 85;

if (nilai >= 75) {
  console.log("Selamat Anda lulus!");
  
  if (nilai >= 90) {
    console.log("Dengan predikat nilai A");
  } else if (nilai >= 80) {
    console.log("Dengan predikat nilai B");
  } else {
    console.log("Dengan predikat nilai C");
  }
} else {
  console.log("Maaf Anda belum lulus");
}


// Switch Case
let hari = "Senin";
let kegiatan;

switch (hari) {
    case "Senin":
        kegiatan = "Meeting pagi jam 9.";
        break;

    case "Selasa":
        kegiatan = "Kerja proyek baru.";
        break;

    case "Rabu":
        kegiatan = "Makan siang bersama tim.";
        break;

    case "Kamis":
        kegiatan = "Review dan perencanaan.";
        break;

    case "Jumat":
        kegiatan = "Menyelesaikan laporan mingguan.";
        break;

    default:
        kegiatan = "Tidak ada jadwal khusus hari ini.";
}

console.log(`Pada hari ${hari}, kegiatan yang dijadwalkan: ${kegiatan}`);


// For Statement
// Contoh 1: Iterasi dari angka 5 sampai 20 dengan penambahan 2 pada setiap iterasi
for (let i = 5; i <= 20; i += 2) {
    console.log(i);
}

// Contoh 2: Iterasi melalui elemen array
let fruits = ["Apple", "Banana", "Orange", "Grapes"];
for (let j = 1; j < fruits.length; j++) {
    console.log(fruits[j]);
}


// While Statement
// Contoh 1: Pernyataan while untuk menampilkan nama buah hingga jumlah tertentu
let jumlahBuah = 3;

while (jumlahBuah < 5) {
  console.log("Apel");
  jumlahBuah++;
}

// Contoh 2: Pernyataan while menggunakan elemen array
let barang = ["Buku", "Pensil", "Penggaris", "Kertas"];
let index = 0;

while (index < barang.length) {
  console.log("Barang di indeks " + index + ": " + barang[index]);
  index++;
}

console.log("Proses pengecekan barang selesai.");


// Do While Statement
// Contoh 1: Do-while untuk menampilkan angka dari 25 hingga 30 while counter >= 20
let counter = 25;

do {
  console.log(counter);
  counter++;
} while (counter >= 20);

// Contoh 2: Do-while menggunakan elemen array dengan penambahan 2 di setiap iterasi array
let angka = [2, 5, 8, 11, 14, 20, 24, 35, 42, 50];
let indeks = 0;

do {
  console.log("Elemen di indeks " + indeks + ": " + angka[indeks]);
  indeks += 2;
} while (indeks < angka.length);



// Function
function hitungLuasPersegiPanjang(panjang, lebar) {
    return panjang * lebar;
  } // Deklarasi fungsi untuk menghitung luas persegi panjang

  const panjangPersegiPanjang = 12;
  const lebarPersegiPanjang = 8;
  
  // Memanggil fungsi dan menyimpan hasilnya dalam variabel 'luas'
  const luas = hitungLuasPersegiPanjang(panjangPersegiPanjang, lebarPersegiPanjang);
  
  console.log("Luas Persegi Panjang:", luas);
