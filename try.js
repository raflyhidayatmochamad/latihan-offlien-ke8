function cetakNama(nama) {
    return `Halo , nama saya  ${nama}`;
}
const pi = 3.14;
let mahassiswa = {
    nama: 'Rafli',
    alamat:'Garut',
    cetakMhs(){
        return `Halo , nama saya ${this.nama}, alamat saya di ${this.alamat}`;
    }   
};

module.exports.cetakNama = cetakNama;
module.exports.pi = pi;
module.exports.mhs = mahassiswa;
// module.exports = cetakNama;

