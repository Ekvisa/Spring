export type CharacterType = {
  id: string;
  sign: string;
  name: string;
  name_ru: string;
  imagePath: string;
  phrase: string;
  problem: string;
};

//Приведение угла к [-180, 180]:
export const normalizeAngle = (deg: number) => {
  while (deg > 180) deg -= 360;
  while (deg < -180) deg += 360;
  return deg;
};
