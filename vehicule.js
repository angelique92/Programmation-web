class Vehicule{
	constructor(maCouleur)
	{
		this.nom="vehicule";
		this.fonction="déplacement";
		this.typeDeDeplacement="roulant";	
		this.roues=0;
		this.placePassager=0;
		this.moteur={};
		this.marche=false;
		this.couleur=maCouleur;
	}	
}
						
class Velo extends Vehicule {
	constructor()
	{
		super();
		this.nom="velo";
		this.roues=2;
		this.couleur="jaune";
		this.placePassager=1;	
	}
	pedale(){
		console.log("ton velo pédale ");
		this.marche=true;
	}
	freine(){
		console.log(" ton vélo freine ");
		this.marche=false;
	}
		
}
class Voiture extends Vehicule {
	constructor()
	{
		super();
		this.nom="voiture";
		this.roues=4;
		this.moteur={ puissance:450 };
		this.couleur="noir";
		this.placePassager=4;	
	}
	mettreLeConctat(){
		console.log(" Le moteur est allumée ");
		this.marche=true;
	}
	couperLeMoteur(){
		console.log(" Le moteur est éteint ");
		this.marche=false;
	}
	
	avance(){
		console.log("la voiture avance");
	}
	
	recule(){
		consolog.log("la voiture recule ");
	}
}
class Camion extends Vehicule {
	constructor (maChargeMax)
	{
		super();
		this.name="camion";
		this.roues=16;
		this.moteur={ puissance: 2400};
		this.placePassager=3;
		this.chargeMaxDuCamion=maChargeMax;
		this.chargeRestantePossible=maChargeMax;
	}
	
	
	demandeDeChargementDuCamion(charge) {
		if (charge > this.chargeMaxDuCamion)
		{
			console.log ( " la charge demandé est supérieur à la charge possible ");
		}
		else 
		{
			console.log (" la charge demandé peut être chargé ");
		}
	}
	
	chargerLeCamion (charge) {
		this.chargeRestantePossible=this.chargeRestantePossible-charge;
		
	}

	visualiserMaChargeRestante(){
		if ( this.chargeRestantePossible < 0)
		{
			console.log(" Il y a aucune place possible pour ta charge ");
		}
		else
			console.log("La charge restante disponible du camion est : " + this.chargeRestantePossible);
	}
}
let monVelo=new Velo("jaune");
console.log("mon velo a comme couleur " + monVelo.couleur);

let maVoiture= new Voiture("rouge");
console.log("ma voiture a comme couleur : " + maVoiture.couleur); 

let monCamion= new Camion(3);

//monCamion.chargeMaxDuCamion(3);
monCamion.demandeDeChargementDuCamion(5);
monCamion.chargerLeCamion(5);
monCamion.visualiserMaChargeRestante();




							
