import { ImageSourcePropType } from "react-native";

export interface Product {
  idProduto: number;
  nome: string;
  descricao: string;
  valor?: number;
  vlTotal?: number;
  foto: ImageSourcePropType;
}
