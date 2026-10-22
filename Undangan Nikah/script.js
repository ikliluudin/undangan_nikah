const tombolBuka = document.getElementById("bukaUndangan");

const musikUndangan = document.getElementById("musikUndangan");
const tombolMusik = document.getElementById("tombolMusik");

function putarMusik() {
    musikUndangan.play().then(function() {
        tombolMusik.textContent = "♫ Matikan Musik";
        tombolMusik.setAttribute("aria-pressed", "true");
        tombolMusik.setAttribute("aria-label", "Matikan musik undangan");
    }).catch(function() {
        tombolMusik.textContent = "♫ Putar Musik";
    });
}

function hentikanMusik() {
    musikUndangan.pause();
    tombolMusik.textContent = "♫ Putar Musik";
    tombolMusik.setAttribute("aria-pressed", "false");
    tombolMusik.setAttribute("aria-label", "Putar musik undangan");
}

tombolBuka.addEventListener("click", function() {
    document.getElementById("mempelai").scrollIntoView({ behavior: "smooth" });
    tombolBuka.textContent = "Undangan Dibuka";
    putarMusik();
});

tombolMusik.addEventListener("click", function() {
    if (musikUndangan.paused) {
        putarMusik();
    } else {
        hentikanMusik();
    }
});

const tanggalPernikahan = new Date(2026, 9, 26, 0, 0, 0);

function hitungMundur() {
    const sekarang = new Date();
    const selisih = tanggalPernikahan - sekarang;

    if (selisih <= 0) {
        document.getElementById("hari").textContent = "00";
        document.getElementById("jam").textContent = "00";
        document.getElementById("menit").textContent = "00";
        document.getElementById("detik").textContent = "00";
        return;
    }

    const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
    const jam = Math.floor((selisih / (1000 * 60 * 60)) % 24);
    const menit = Math.floor((selisih / (1000 * 60)) % 60);
    const detik = Math.floor((selisih / 1000) % 60);

    document.getElementById("hari").textContent = hari;
    document.getElementById("jam").textContent = jam;
    document.getElementById("menit").textContent = menit;
    document.getElementById("detik").textContent = detik;
}

hitungMundur();
setInterval(hitungMundur, 1000);

const formRsvp = document.getElementById("formRsvp");

formRsvp.addEventListener("submit", function(event) {
    event.preventDefault();

    const nama = document.getElementById("namaTamu").value.trim();
    const kehadiran = document.getElementById("kehadiran").value;
    const hasil = document.getElementById("hasilRsvp");

    if (nama === "" || kehadiran === "") {
        hasil.textContent = "Nama dan konfirmasi kehadiran wajib diisi.";
    } else {
        hasil.textContent = "Terima kasih, " + nama + ". Konfirmasi kamu: " + kehadiran + ".";
        formRsvp.reset();
    }
});
