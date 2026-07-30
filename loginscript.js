// script.js - Logika Interaktif Absensi Mahasiswa Kampus Youth
document.addEventListener('DOMContentLoaded', () => {
    const formLogin = document.forms[0];
    const formAbsen = document.forms[1];

    if (formAbsen) {
        formAbsen.addEventListener('submit', (e) => {
            e.preventDefault();

            const email = document.getElementById('email')?.value || 'mahasiswa@youth.ac.id';
            const nama = formAbsen.querySelector('input[name="Nama"]').value;
            const kelas = formAbsen.querySelector('select[name="Kelas"]').value;
            const statusRadio = formAbsen.querySelector('input[name="Kehadiran"]:checked');
            const status = statusRadio ? statusRadio.value : 'Hadir';

            if (!nama) {
                alert('Harap isi Nama Mahasiswa terlebih dahulu!');
                return;
            }

            const waktu = new Date().toLocaleTimeString('id-ID');
            alert(`✅ Absensi Berhasil Dikirim!\n\nNama: ${nama}\nKelas: ${kelas}\nStatus: ${status}\nWaktu: ${waktu} WIB`);

            // Reset form
            formAbsen.reset();
        });
    }
});