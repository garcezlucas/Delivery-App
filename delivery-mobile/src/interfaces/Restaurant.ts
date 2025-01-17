import { ImageSourcePropType } from "react-native";

export interface RestaurantType {
  id: number;
  nome: string;
  endereco: string;
  logotipo: ImageSourcePropType;
}
