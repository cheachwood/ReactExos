import { useState } from 'react';

const Compteur = () => {
  const [compteur, setCompteur] = useState(0);
  const [paire, setPaire] = useState(0);
  const [impaire, setImpaire] = useState(0);

  // 🔧 Fonction helper pour vérifier si une valeur est déjà enregistrée
  const estDejaEnregistre = (valeur: number): boolean => {
    return (valeur % 2 === 0 && valeur === paire) || (valeur % 2 !== 0 && valeur === impaire);
  };

  // 🔧 Fonction pour calculer le nouveau compteur selon l'action
  const calculerNouveauCompteur = (action: string): number => {
    let nouveau = compteur;

    switch (action) {
      case 'plus':
        nouveau = compteur + 1;
        // Si la valeur suivante existe déjà, sauter de 2
        if (estDejaEnregistre(nouveau)) {
          nouveau = compteur + 2;
        }
        break;

      case 'moins':
        nouveau = Math.max(0, compteur - 1);
        // Si la valeur précédente existe déjà, sauter de 2
        if (nouveau > 0 && estDejaEnregistre(nouveau)) {
          nouveau = Math.max(0, compteur - 2);
        }
        break;

      case 'reset':
        nouveau = 0;
        break;
    }

    return nouveau;
  };

  // 🔧 Fonction pour mettre à jour paire/impaire
  const mettreAJourPaireImpaire = (valeur: number) => {
    if (valeur === 0) {
      setPaire(0);
      setImpaire(0);
    } else if (valeur % 2 === 0) {
      setPaire(valeur);
    } else {
      setImpaire(valeur);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const action = e.currentTarget.name;
    const nouveauCompteur = calculerNouveauCompteur(action);

    setCompteur(nouveauCompteur);
    mettreAJourPaireImpaire(nouveauCompteur);
  };

  return (
    <div className="w-full flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20 max-w-md w-full">
        {/* Affichage du compteur */}
        <div className="text-center mb-8">
          <h2 className="text-white/70 text-sm uppercase tracking-wider mb-2">Compteur</h2>
          <div className="text-white text-5xl font-bold mb-2">
            {paire}
            <span className="text-purple-400 mx-2">/</span>
            {impaire}
          </div>
          {/* 🎁 Bonus : affichage Pair/Impair */}
          {compteur > 0 && (
            <div className={`inline-block px-4 py-1 rounded-full text-sm font-semibold mt-2 ${compteur % 2 === 0 ? 'bg-blue-500/20 text-blue-300 border border-blue-400/30' : 'bg-orange-500/20 text-orange-300 border border-orange-400/30'}`}>
              {compteur % 2 === 0 ? '✓ Pair' : '✓ Impair'}
            </div>
          )}
        </div>

        {/* Boutons */}
        <div className="flex gap-3 justify-center">
          <button
            onClick={handleClick}
            name="plus"
            className="px-6 py-3 bg-green-500 hover:bg-green-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold rounded-lg transition-all transform hover:scale-105 active:scale-95 shadow-lg"
          >
            + Plus
          </button>

          <button
            onClick={handleClick}
            name="moins"
            disabled={compteur === 0}
            className="px-6 py-3 bg-red-500 hover:bg-red-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold rounded-lg transition-all transform hover:scale-105 active:scale-95 shadow-lg disabled:opacity-50"
          >
            - Moins
          </button>

          <button
            onClick={handleClick}
            name="reset"
            disabled={compteur === 0}
            className="px-6 py-3 bg-purple-500 hover:bg-purple-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold rounded-lg transition-all transform hover:scale-105 active:scale-95 shadow-lg disabled:opacity-50"
          >
            ↻ Reset
          </button>
        </div>

        {/* Indicateur visuel */}
        <div className="mt-6 text-center text-white/50 text-xs">
          <p>Le compteur saute automatiquement les valeurs déjà visitées</p>
        </div>
      </div>
    </div>
  );
};

export default Compteur;
