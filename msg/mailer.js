import nodemailer from 'nodemailer';

// Configuration du service de messagerie
export const sendEmail = (to, subject, text) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Vous pouvez utiliser un autre service comme Outlook, Yahoo, etc.
    auth: {
      user: process.env.EMAIL_USER, // Votre adresse e-mail
      pass: process.env.EMAIL_PASS, // Votre mot de passe ou token d'application
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER, // Adresse email de l'expéditeur
    to: to, // Adresse email du destinataire
    subject: subject, // Sujet de l'email
    text: text, // Contenu de l'email en texte brut
  };

  // Envoi de l'email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Erreur lors de l\'envoi de l\'email: ', error);
    } else {
      console.log('Email envoyé avec succès: ' + info.response);
    }
  });
};

