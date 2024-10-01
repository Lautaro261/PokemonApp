//La entidad pude ser una interface o una clase, depende de:
// ¿Quiero solo una estructura para regir la entidad o quiero que ademas realice (funcion) alguna funcion?

//En este caso solo quiero regir la estructura de la entidad (elijo una interface)

export interface Pokemon {
  id: number;
  name: string;
  types: string[];
  avatar: string;
  sprites: string[];
  color: string;
}
