import { useState, useEffect } from 'react';

export const InputEffect = () => {
  const [changeur, setChangeur] = useState<string>('');

  const handleChangeur = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChangeur(e.target.value);
  };

  useEffect(() => {
    document.title = changeur || 'Titre par défaut';
  }, [changeur]);

  return (
    <div className="bg-slate-950 p-8">
      <div className="max-w-md mx-auto">
        <h2 className="text-white text-2xl mb-4">Tape quelque chose :</h2>
        <input type="text" className="border-2 border-slate-600 bg-slate-800 text-slate-200 focus:outline-none focus:border-blue-500 w-full p-4 rounded-lg" placeholder="Tape ici..." value={changeur} onChange={handleChangeur} />
        <p className="text-slate-400 mt-4">Titre actuel : {changeur || '(vide)'}</p>
      </div>
    </div>
  );
};
