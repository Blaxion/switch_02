let x = ((prompt("Quel météo fait t'il?: Pluvieux , Sec, Ensolleillé, Glissant, Froidsamère, Dégagé, Enneigé")).toUpperCase()).trim().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

switch (x) {
    case "PLUVIEUX":
        alert("Il pleut on devrait prendre un parapluie"); 
    break;
    
    case "SEC":
        alert("Il fait sec, pas besoin de parapluie"); 
    break;

    case "ENSOLLEILLE":
        alert("Pensé à prendre vos lunettes de soleil"); 
    break;

    case "GLISSANT":
        alert("il fait glissant") ;
    break;

    case "FROIDSAMERE":
        alert("Fou ta cagoule tdc");
    break;

    case "DEGAGE":
        alert("Ouvrir les fenêtres et ahérer"); 
    break;

    case "ENNEIGE":
        alert("On fait un Igloo?");  
    break;

    default:
        alert("CE N'EST PAS DEDANS VIEUX CRABE"); 
    break;
}