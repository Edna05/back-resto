import express from 'express'

class Menu {
  constructor(idMenu, idPlat, idBoisson) {
    this.idMenu = idMenu;
    this.idPlat = idPlat;
    this.idBoisson = idBoisson;
  }
}

class Boisson {
  constructor(idBoisson, nom, description, prix, imageUrl, categorieBoisson) {
    this.idBoisson = idBoisson;
    this.nom = nom;
    this.description = description;
    this.prix = prix;
    this.imageUrl = imageUrl;
    this.categorieBoisson = categorieBoisson;
  }
}

class User {
  constructor(idUser, pseudo, email, motDePasse) {
    this.idUser = idUser;
    this.pseudo = pseudo;
    this.email = email;
    this.motDePasse = motDePasse;
  }
}

class Role {
  constructor(idRole, nomRole) {
    this.idRole = idRole;
    this.nomRole = nomRole;
  }
}

class UserRole {
  constructor(idUser, idRole) {
    this.idUser = idUser;
    this.idRole = idRole;
  }
}

class Autorisation {
  constructor(idAutorisation, nom, idRole) {
    this.idAutorisation = idAutorisation;
    this.nom = nom;
    this.idRole = idRole;
  }
}

export default module;
  
  