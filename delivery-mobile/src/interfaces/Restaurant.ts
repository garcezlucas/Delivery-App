import { ImageSourcePropType } from "react-native";

export interface Restaurant {
  id: number;
  nome: string;
  endereco: string;
  logotipo: ImageSourcePropType;
}
