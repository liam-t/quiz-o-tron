import Film from 'models/Film';

interface Header {
  id: keyof Film;
  name: string; // lock this down to film name?
  formatter?: (input: number) => string;
}

export default Header;
