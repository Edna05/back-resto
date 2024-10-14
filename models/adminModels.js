const db = require('../config/db'); 
const bcrypt = require('bcryptjs');

class AdminModel {
    async register(nom, mail, mot_de_pass) {
        const hashedPassword = await bcrypt.hash(mot_de_pass, 10);
        const [result] = await db.execute("INSERT INTO admin (nom, mail, mot_de_pass) VALUES (?, ?, ?)", [nom, mail, hashedPassword]);
        return result;
    }

    async authenticate(mail, mot_de_pass) {
        const [rows] = await db.execute("SELECT * FROM admin WHERE mail = ?", [mail]);
        const admin = rows[0];

        if (admin && await bcrypt.compare(mot_de_pass, admin.mot_de_pass)) {
            return admin;
        }
        return null;
    }
}

module.exports = new AdminModel();
