import { ImageSourcePropType } from "react-native";

export interface Order {
  id: number;
  nome: string;
  endereco: string;
  status: string;
  dt_pedido: string;
  vl_total: number;
  logotipo: ImageSourcePropType;
}
