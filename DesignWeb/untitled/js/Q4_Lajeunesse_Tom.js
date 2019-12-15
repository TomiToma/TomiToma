class Sportif {
    constructor(prenom,nom,taille,poids){
        this.prenom=prenom;
        this.nom=nom;
        this.taille=taille;
        this.poids=poids;

    }
    getIndiceMasseCorporelle(){
        imc===(this.poids/(this.taille*this.taille));
        return imc;
    }
    getMangerHamburger(masse){
        masse===this.poids+500;
        return masse;
    }
    getAllerAuGym(heure){
        this.poids-(0.5*heure)
    }

}
let Souleymane=new Sportif(Souleymane,Soumare,1.75,60);


