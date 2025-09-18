const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
}); 

// Membuat folder data jika belum ada
const dirpath = './data';
if (!fs.existsSync(dirpath)) {
    fs.mkdirSync(dirpath);
}

// Membuat file contacts.json jika belum ada
const filepath = './data/contacts.json';
if (!fs.existsSync(filepath)) {
    fs.writeFileSync(filepath, JSON.stringify([]));
}

rl.question('Masukkan nama anda : ', (nama) => {
    rl.question('Masukkan No hp anda : ', (nohp) => {
        const contact = { nama: nama, nohp: nohp };
        const file = fs.readFileSync(filepath, 'utf-8');
        const contacts = JSON.parse(file);
        contacts.push(contact);
        // Menulis ulang file contacts.json dengan data yang baru
        fs.writeFileSync(filepath, JSON.stringify(contacts, null, 2));
        console.log('Terima kasih, data sudah disimpan.');
        rl.close();
    });
});