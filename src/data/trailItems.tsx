import itachi from '../assets/cursorpics/itachi-square.png';
import spotify from '../assets/cursorpics/spotify-square.png';
import manCity from '../assets/cursorpics/manCity-square.png';
import cheesecake from '../assets/cursorpics/cheesecake-square.png';
import linkinPark from '../assets/cursorpics/linkinPark-square.png';
import naruto from '../assets/cursorpics/naruto-square.png';
import pizza from '../assets/cursorpics/pizza-square.png';
import dumbbell from '../assets/cursorpics/dumbbell-square.png';

const ICONS = [itachi, spotify, manCity, cheesecake, linkinPark, naruto, pizza, dumbbell];

export const trailItems = ICONS.map((src) => (
  <img
    key={src}
    src={src}
    alt=""
    className="aspect-square w-full object-contain"
    draggable={false}
  />
));
