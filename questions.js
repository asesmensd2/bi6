// question.js
const questions = [
    {
        soal: "Contoh karya seni rupa dua dimensi adalah ....",
        gambar: "",
        pilihan: ["Patung", "Vas Bunga", "Lukisan", "Relief"],
        jawabanBenar: "Lukisan"
    },
    {
        soal: "Karya seni rupa yang memiliki panjang, lebar, dan tinggi disebut ....",
        gambar: "",
        pilihan: ["Dua Dimensi", "Tiga Dimensi", "Dimensi Ruang", "Dimensi garis"],
        jawabanBenar: "Tiga Dimensi"
    },
    {
        soal: "Irama pada gambar di bawah terbentuk karena ....",
        gambar: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgrdP2y1QjHTAIE8zKthrVt4FO2aLCPjhX5k7IEsqv2tvlYVSGyuRbxQlAp2m9WWfXaMa0RGJGWbYVjq5fYgoEOB4TGQZcgCfqf7ypPzaksTt84R3ZYDpYTIG_raqOFo40-Bp7Bgo9B71uEfLRCCHd6L8R-Qu4sx72XCkpPAtWpB7UxEDUmG-wCt4QmMR8/s572/Screenshot%202025-12-01%20033629.png",
        pilihan: [
            "Pengulangan karakter bentuk dan warna",
            "Pengulangan bentuk, warna, dan arah yang berbeda", 
            "Pengulangan bentuk, warna, dan arah yang sama",
            "Pengulangan bentuk dengan ukuran yang berbeda dengan warna yang sama"
        ],
        jawabanBenar: "Pengulangan bentuk, warna, dan arah yang sama"
    },
    {
        soal: "Ketika menggambar sebuah benda tetapi tidak terlihat area bayangan, maka langkah yang dapat kalian lakukan adalah ....",
        gambar: "",
        pilihan: [
            "Mengganti objek yang lebih nyata",
            "Mengganti media lukis agar lebih terlihat gambarnya",
            "Mencari sudut pandang lain dengan pencahayaan yang lebih terlihat", 
            "Merubah teknik penggambaran"
        ],
        jawabanBenar: "Mencari sudut pandang lain dengan pencahayaan yang lebih terlihat"
    },
    {
        soal: "Warna hijau diperoleh dari campuran warna ....",
        gambar: "",
        pilihan: ["Kuning dan biru", "Biru dan merah", "Kuning dan hitam", "Biru dan merah"],
        jawabanBenar: "Kuning dan biru"
    },
    {
        soal: "Dalam karya seni rupa, unsur dan prinsip saling ....",
        gambar: "",
        pilihan: ["Bertolak belakang", "Melengkapi", "Berhubungan", "Membutuhkan"],
        jawabanBenar: "Melengkapi"
    },
    {
        soal: "Unsur seni rupa yang berkaitan dengan garis, bentuk, dan arah disebut ....",
        gambar: "",
        pilihan: ["Warna", "Garis", "Tekstur", "Ruang"],
        jawabanBenar: "Ruang"
    },
    {
        soal: "Campuran warna merah dan kuning akan menghasilkan warna ....",
        gambar: "",
        pilihan: ["Hijau", "Orange", "Ungu", "Coklat"],
        jawabanBenar: "Orange"
    },
    {
        soal: "Bentuk yang menyerupai benda nyata disebut bentuk ....",
        gambar: "",
        pilihan: ["Geometris", "Abstrak", "Organik", "Realisitis"],
        jawabanBenar: "Realisitis"
    },
    {
        soal: "Makna dari kata Klasik dalam karya seni kerajinan ini adalah ....",
        gambar: "",
        pilihan: [
            "Memiliki nilai dan mutu yang rendah karena muncul pada zaman tradisional dan lampau",
            "Memiliki nilai dan mutu tinggi dan menjadi tolok ukur kesempurnaan yang abadi",
            "Tidak memiliki nilai karena tidak mengikuti zaman modern saat ini", 
            "Memiliki nilai yang cukup tinggi, karena mampu bertahan dan bersaing di era digital seperti saat ini"
        ],
        jawabanBenar: "Memiliki nilai dan mutu tinggi dan menjadi tolok ukur kesempurnaan yang abadi"
    },
    {
        soal: "Unsur seni rupa yang paling dasar adalah ....",
        gambar: "",
        pilihan: ["Bentuk", "Garis", "Ruang", "Tekstur"],
        jawabanBenar: "Garis"
    },
    {
        soal: "Gabungan antara warna merah dan biru akan menghasilkan warna ....",
        gambar: "",
        pilihan: ["Ungu", "Hijau", "Cokelat", "Kuning"],
        jawabanBenar: "Ungu"
    },
    {
        soal: "Unsur seni rupa yang menunjukkan permukaan benda disebut ....",
        gambar: "",
        pilihan: ["Warna", "Garis", "Ruang", "Tekstur"],
        jawabanBenar: "Tekstur"
    },
    {
        soal: "Warna terdiri dari 3 jenis, yaitu ………….., ………………, …………..,",
        gambar: "",
        pilihan: [
            "Primer, sekunder, dan netral",
            "Primer, sekunder, dan tersier", 
            "Primer, kontras, dan tersier",
            "Primer, dingin, dan panas"
        ],
        jawabanBenar: "Primer, sekunder, dan tersier"
    },
    {
        soal: "Unsur seni rupa yang menunjukkan terang dan gelap disebut ....",
        gambar: "",
        pilihan: ["Warna", "Tekstur", "Gelap terang (value)", "Bidang"],
        jawabanBenar: "Gelap terang (value)"
    },
    {
        soal: "Warna tersier adalah penggabungan dari ....",
        gambar: "",
        pilihan: [
            "Dua warna primer",
            "Dua warna sekunder", 
            "Warna primer dan sekunder",
            "Warna panas dan dingin"
        ],
        jawabanBenar: "Warna primer dan sekunder"
    },
    {
        soal: "Unsur penting dalam membuat suatu benda agar terlihat tiga dimensi adalah ....",
        gambar: "",
        pilihan: [
            "Warna dan tekstur",
            "Garis dan bidang", 
            "Ruang atau kedalaman",
            "Irama dan keseimbangan"
        ],
        jawabanBenar: "Ruang atau kedalaman"
    },
    {
        soal: "Warna orange termasuk jenis warna ....",
        gambar: "",
        pilihan: ["Primer", "Sekunder", "Tersier", "Dingin"],
        jawabanBenar: "Sekunder"
    },
    {
        soal: "Contoh tekstur nyata yang bisa diraba adalah ....",
        gambar: "",
        pilihan: [
            "Tekstur bulu pada kertas gambar",
            "Tekstur halus pada kaca", 
            "Tekstur garis pada sketsa",
            "Tekstur kasar pada batu atau kayu"
        ],
        jawabanBenar: "Tekstur kasar pada batu atau kayu"
    },
    {
        soal: "Garis tebal memberikan gambar terkesan ....",
        gambar: "",
        pilihan: ["Lemah dan lembut", "Jauh dan buram", "Kuat dan tegas", "Ragu dan tipis"],
        jawabanBenar: "Kuat dan tegas"
    },
    {
        soal: "Prinsip seni rupa yang menunjukkan keselarasan antar unsur disebut ....",
        gambar: "",
        pilihan: ["Keseimbangan", "Penekanan", "Kesatuan", "Proporsi"],
        jawabanBenar: "Kesatuan"
    },
    {
        soal: "Komposisi yang seimbang antara sisi kiri dan kanan disebut keseimbangan ....",
        gambar: "",
        pilihan: ["Asimetris", "Simetris", "Sentral", "Radial"],
        jawabanBenar: "Simetris"
    },
    {
        soal: "Prinsip seni rupa yang membuat karya tampak bergerak disebut ....",
        gambar: "",
        pilihan: ["Kesatuan", "Proporsi", "Ritme", "Penekanan"],
        jawabanBenar: "Ritme"
    },
    {
        soal: "Ritme gradasi yang ada dalam sebuah karya seni disebut ....",
        gambar: "",
        pilihan: ["Keseimbangan", "Gradasi atau peralihan", "Harmoni", "Kontras"],
        jawabanBenar: "Gradasi atau peralihan"
    },
    {
        soal: "Warna sekunder adalah penggabungan dari ....",
        gambar: "",
        pilihan: [
            "Dua warna tersier",
            "Dua warna primer", 
            "Warna primer dan sekunder",
            "Warna panas dan dingin"
        ],
        jawabanBenar: "Dua warna primer"
    },
    {
        soal: "Contoh karya seni rupa dua dimensi adalah ....",
        gambar: "",
        pilihan: ["Patung", "Guci", "Meja", "Lukisan"],
        jawabanBenar: "Lukisan"
    },
    {
        soal: "Prinsip seni rupa yang menjadi dasar keindahan dari sebuah karya seni adalah ....",
        gambar: "",
        pilihan: ["Kontras", "Skala", "Harmoni atau keselarasan", "Dominasi"],
        jawabanBenar: "Harmoni atau keselarasan"
    },
    {
        soal: "Ikatan pada tali yang dibuat dengan cara melilitkan, memutar atau menyilangkan bagian-bagiannya disebut ....",
        gambar: "",
        pilihan: ["Menenun", "Mencetak", "Menganyam", "Menyimpul"],
        jawabanBenar: "Menyimpul"
    },
    {
        soal: "Dalam sebuah karya seni rupa, garis dapat digunakan sebagai simbol ....",
        gambar: "",
        pilihan: [
            "Bentuk dan warna",
            "Skala dan ukuran", 
            "Gerak dan karakter",
            "Tekstur dan ruang"
        ],
        jawabanBenar: "Gerak dan karakter"
    },
    {
        soal: "Garis tipis melengkung memberi kesan lemah dan ....",
        gambar: "",
        pilihan: ["Kuat", "Lembut", "Keras", "Tegas"],
        jawabanBenar: "Lembut"
    },
    {
        soal: "Prinsip seni rupa yang didefinisikan sebagai pengulangan (repetisi) dan variasi dari unsur-unsur seni rupa yang diatur sedemikian rupa sehingga menghasilkan kesan gerak, alur, atau perpindahan yang teratur disebut ....",
        gambar: "",
        pilihan: ["Keseimbangan", "Proporsi", "Kesatuan", "Ritme (Irama)"],
        jawabanBenar: "Ritme (Irama)"
    },
    {
        soal: "Seorang pelukis menggunakan warna cerah untuk matahari dan warna gelap untuk area bayangan dalam lukisan pemandangan. Unsur dan prinsip seni rupa yang paling dominan diterapkan adalah ....",
        gambar: "",
        pilihan: [
            "Unsur Garis dan Prinsip Keseimbangan",
            "Unsur Bentuk dan Prinsip Proporsi", 
            "Unsur Warnadan Prinsip Kontras",
            "Unsur Tekstur dan Prinsip Kesatuan"
        ],
        jawabanBenar: "Unsur Warnadan Prinsip Kontras"
    },
    {
        soal: "Berikut adalah dua contoh dari unsur-unsur dasar seni rupa, kecuali ....",
        gambar: "",
        pilihan: [
            "Garis dan Bidang",
            "Warna dan Tekstur", 
            "Ruang dan Gelap Terang (Value)",
            "Irama dan Keseimbangan (Ini adalah Prinsip)"
        ],
        jawabanBenar: "Irama dan Keseimbangan (Ini adalah Prinsip)"
    },
    {
        soal: "Manakah dari pilihan berikut yang seluruhnya merupakan contoh karya seni rupa dua dimensi?",
        gambar: "",
        pilihan: [
            "Patung, Keramik, dan Guci",
            "Lukisan, Sketsa, dan Gambar Foto", 
            "Relief, Mosaik, dan Topeng",
            "Patung, Sketsa, dan Lukisan"
        ],
        jawabanBenar: "Lukisan, Sketsa, dan Gambar Foto"
    },
    {
        soal: "Warna primer adalah warna pokok yang tidak dapat dibentuk dari campuran warna lain. Warna-warna pokok tersebut adalah ....",
        gambar: "",
        pilihan: [
            "Hijau, Orange, dan Ungu",
            "Merah, Kuning, dan Biru", 
            "Hitam, Putih, dan Abu-abu",
            "Merah, Kuning, dan Hijau"
        ],
        jawabanBenar: "Merah, Kuning, dan Biru"
    },
    {
        soal: "Cara utama untuk menciptakan unsur gelap terang (value) pada sebuah gambar benda adalah dengan ....",
        gambar: "",
        pilihan: [
            "Menggunakan garis tebal di seluruh bagian objek.",
            "Mencampur semua warna primer di satu titik.", 
            "Memberikan gradasi warna atau intensitas pensil (shading) yang bervariasi dari terang ke gelap sesuai arah datangnya cahaya.",
            "Menggunakan tekstur yang sangat kasar pada permukaan benda."
        ],
        jawabanBenar: "Memberikan gradasi warna atau intensitas pensil (shading) yang bervariasi dari terang ke gelap sesuai arah datangnya cahaya."
    },
    {
        soal: "Andi membuat patung dari bahan daur ulang. Prinsip seni rupa yang harus diterapkan agar patung tersebut memiliki estetika (keindahan) dan tidak terlihat seperti tumpukan sampah adalah ....",
        gambar: "",
        pilihan: [
            "Irama (Ritme), untuk menunjukkan pengulangan gerak.",
            "Kesatuan (Unity), untuk memastikan semua bagian/unsur daur ulang saling berhubungan dan terpadu secara harmonis.", 
            "Keseimbangan Simetris, untuk membagi bobot visual secara merata.",
            "Proporsi, untuk menjaga perbandingan ukuran yang realistis."
        ],
        jawabanBenar: "Kesatuan (Unity), untuk memastikan semua bagian/unsur daur ulang saling berhubungan dan terpadu secara harmonis."
    },
    {
        soal: "Seorang fotografer ingin membuat jembatan terlihat kuat dan stabil menggunakan prinsip ritme. Ritme atau pengulangan seperti apa yang paling tepat untuk menunjukkan kesan tersebut?",
        gambar: "",
        pilihan: [
            "Ritme yang berliku-liku dan tidak teratur.",
            "Ritme yang cepat, kacau, dan berwarna-warni.", 
            "Ritme yang teratur dan berulang-ulang secara konsisten.",
            "Ritme yang hanya muncul di salah satu sisi jembatan."
        ],
        jawabanBenar: "Ritme yang teratur dan berulang-ulang secara konsisten."
    },
    {
        soal: "Untuk menciptakan ritme (pengulangan) yang kuat dan stabil pada foto jembatan, unsur seni rupa apa yang paling mungkin diulang oleh fotografer?",
        gambar: "",
        pilihan: [
            "Warna cat yang berbeda-beda.",
            "Bentuk tiang penyangga, lengkungan, atau garis lurus yang sejajar.", 
            "Gambar awan di langit.",
            "Tekstur jalan yang halus."
        ],
        jawabanBenar: "Bentuk tiang penyangga, lengkungan, atau garis lurus yang sejajar."
    },
    {
        soal: "Ketika fotografer menggunakan ritme yang teratur (pengulangan bentuk tiang yang sama) pada jembatan, bagaimana hal ini memengaruhi orang yang melihat foto tersebut?",
        gambar: "",
        pilihan: [
            "Orang akan merasa bingung dan pusing.",
            "Orang akan berpikir jembatan itu sedang bergerak.", 
            "Orang akan merasakan bahwa jembatan itu sangat kokoh dan kuat.",
            "Orang hanya akan melihat warna-warni yang indah."
        ],
        jawabanBenar: "Orang akan merasakan bahwa jembatan itu sangat kokoh dan kuat."
    }
];
