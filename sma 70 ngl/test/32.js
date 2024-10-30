// Menghitung jumlah reaksi
let reactionCount = 0;

// Pilih semua tombol emoji
const reactionButtons = document.querySelectorAll(".reaction");

// Loop untuk menambahkan event listener klik
reactionButtons.forEach(button => {
    button.addEventListener("click", function() {
        // Tambah jumlah reaksi setiap kali emoji diklik
        reactionCount++;
        
        // Animasi ketika tombol emoji diklik
        button.classList.add("clicked");

        // Setelah 0.3 detik, hapus kelas "clicked" untuk efek bounce
        setTimeout(() => {
            button.classList.remove("clicked");
        }, 300);

        // Perbarui tampilan jumlah reaksi
        document.getElementById("emoji-count").innerText = reactionCount;
    });
});
