interface useLoginProps {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}

export function useLogin({
  email,
  setEmail,
  password,
  setPassword,
}: useLoginProps) {
  const handleEmailChange = (text: string) => setEmail(text);

  const handlePasswordChange = (text: string) => setPassword(text);

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Senha:", password);
  };

  return {
    handleEmailChange,
    handlePasswordChange,
    handleLogin,
  };
}
