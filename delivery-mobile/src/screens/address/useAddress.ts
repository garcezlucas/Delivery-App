import { AddressNavigationProp } from "./Address";

interface useAddressProps {
  navigation: AddressNavigationProp;
  address: string;
  setAddress: React.Dispatch<React.SetStateAction<string>>;
  complement: string;
  setComplement: React.Dispatch<React.SetStateAction<string>>;
  neighborhood: string;
  setNeighborhood: React.Dispatch<React.SetStateAction<string>>;
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  cep: string;
  setCep: React.Dispatch<React.SetStateAction<string>>;
}

export function useAddress({
  navigation,
  address,
  setAddress,
  complement,
  setComplement,
  neighborhood,
  setNeighborhood,
  city,
  setCity,
  state,
  setState,
  cep,
  setCep,
}: useAddressProps) {
  const handleAddressChange = (text: string) => setAddress(text);
  const handleComplementChange = (text: string) => setComplement(text);
  const handleNeighborhoodChange = (text: string) => setNeighborhood(text);
  const handleCityChange = (text: string) => setCity(text);
  const handleStateChange = (text: string) => setState(text);
  const handleCepChange = (text: string) => setCep(text);

  const handleCreateAccount = () => {
    console.log({
      address,
      complement,
      neighborhood,
      city,
      state,
      cep,
    });
    navigation.navigate("login");
  };

  return {
    handleAddressChange,
    handleComplementChange,
    handleNeighborhoodChange,
    handleCityChange,
    handleStateChange,
    handleCepChange,
    handleCreateAccount,
  };
}
