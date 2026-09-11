import React from 'react';
import {GraduationCap,FlaskConical,UsersRound,MapPinned,Sprout,ShieldCheck,Warehouse,Wheat,Calculator,ChartNoAxesCombined,ClipboardCheck,BadgeCheck} from 'lucide-react';

const icons = {
  university: GraduationCap,
  science: FlaskConical,
  people: UsersRound,
  field: MapPinned,
  pasture: Sprout,
  health: ShieldCheck,
  facilities: Warehouse,
  diet: Wheat,
  economy: Calculator,
  production: ChartNoAxesCombined,
  consult: ClipboardCheck,
  quality: BadgeCheck,
};
export default function Icon({name,className='',...props}) {
  const Glyph = icons[name] || BadgeCheck;
  return <span className={`icon-badge ${className}`} aria-hidden="true"><Glyph size={28} strokeWidth={1.75} absoluteStrokeWidth {...props}/></span>;
}
