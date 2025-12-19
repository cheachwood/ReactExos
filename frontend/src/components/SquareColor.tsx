import { useState } from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils'; // Utilitaire Shadcn pour les classes

function SquareColor() {
  const [color, setColor] = useState('white');

  const handleChangeColor = (couleur: string) => {
    switch (couleur) {
      case 'rouge':
        setColor('bg-red-500');
        break;
      case 'bleu':
        setColor('bg-blue-500');
        break;
      case 'vert':
        setColor('bg-green-500');
    }
  };

  return (
    <>
      <Select onValueChange={handleChangeColor}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Choisir une couleur" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="rouge">
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded-full bg-red-500" />
              <span className="font-medium text-red-500">Rouge</span>
            </div>
          </SelectItem>
          <SelectItem value="bleu">
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded-full bg-blue-500" />
              <span className="font-medium text-blue-500">Bleu</span>
            </div>
          </SelectItem>
          <SelectItem value="vert">
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded-full bg-green-500" />
              <span className="font-medium text-green-500">Vert</span>
            </div>
          </SelectItem>
        </SelectContent>
      </Select>
      <div className="w-[300px]">
        <AspectRatio ratio={1 / 1}>
          {/* On utilise cn() pour fusionner les classes fixes et la variable dynamique */}
          <div className={cn('flex items-center justify-center h-full rounded-md transition-colors duration-300', color)}>
            <span className="text-white font-bold">Contenu au centre du carré</span>
          </div>
        </AspectRatio>
      </div>
    </>
  );
}
export default SquareColor;
