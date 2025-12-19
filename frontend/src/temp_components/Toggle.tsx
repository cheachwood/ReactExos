import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Toggle = () => {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="p-10 flex flex-col items-center gap-4 ">
      <Button onClick={handleToggle} className="w-32 h-12 text-lg font-bold shadow-lg" variant={toggle ? 'default' : 'destructive'}>
        {toggle ? 'ON' : 'OFF'}
      </Button>

      {/* Texte de contrôle pour être sûr que le JS fonctionne */}
      <p className="text-slate-400">
        L'état actuel est : <span className="font-bold uppercase">{toggle ? 'Allumé' : 'Éteint'}</span>
      </p>
    </div>
  );
};

export default Toggle;
