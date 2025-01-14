import { RegisterNavigationProp } from "./Register";

interface useRegisterProps {
  navigation: RegisterNavigationProp;
  fullName: string;
  setFullName: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  confirmPassword: string;
  setConfirmPassword: React.Dispatch<React.SetStateAction<string>>;
}

export function useRegister({
  navigation,
  fullName,
  setFullName,
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
}: useRegisterProps) {
  const handleFullNameChange = (text: string) => setFullName(text);

  const handleEmailChange = (text: string) => setEmail(text);

  const handlePasswordChange = (text: string) => setPassword(text);

  const handleConfirmPasswordChange = (text: string) =>
    setConfirmPassword(text);

  const handleNextStep = () => {
    console.log({
      fullName,
      email,
      password,
      confirmPassword,
    });
    navigation.navigate("address");
  };

  return {
    handleFullNameChange,
    handleEmailChange,
    handlePasswordChange,
    handleConfirmPasswordChange,
    handleNextStep,
  };
}
