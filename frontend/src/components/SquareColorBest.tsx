import { useState } from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';

const COLOR_OPTIONS = [
  { value: 'rouge', label: 'Rouge', bg: 'bg-red-500', text: 'text-red-500' },
  { value: 'bleu', label: 'Bleu', bg: 'bg-blue-500', text: 'text-blue-500' },
  { value: 'vert', label: 'Vert', bg: 'bg-green-500', text: 'text-green-500' },
] as const;

const COLORS_MAP = {
  rouge: 'bg-red-500',
  bleu: 'bg-blue-500',
  vert: 'bg-green-500',
} as const;

function SquareColor() {
  const [color, setColor] = useState<string>('bg-white');

  const handleChangeColor = (couleur: string) => {
    setColor(COLORS_MAP[couleur as keyof typeof COLORS_MAP] || 'bg-white');
  };

  return (
    <div className="flex flex-col gap-4">
      <Select onValueChange={handleChangeColor}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Choisir une couleur" />
        </SelectTrigger>
        <SelectContent>
          {COLOR_OPTIONS.map(({ value, label, bg, text }) => (
            <SelectItem key={value} value={value}>
              <div className="flex items-center gap-2">
                <div className={cn('h-4 w-4 rounded-full', bg)} />
                <span className={cn('font-medium', text)}>{label}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <div className="w-[300px]">
        <AspectRatio ratio={1 / 1}>
          <div className={cn('flex items-center justify-center h-full rounded-md transition-colors duration-300', color)}>
            <span className={cn('font-bold transition-colors', color === 'bg-white' ? 'text-gray-800' : 'text-white')}>Contenu au centre du carré</span>
          </div>
        </AspectRatio>
      </div>
    </div>
  );
}

export default SquareColor;
