import PageMeta from "../../components/common/PageMeta";
import AuthLayout from "./AuthPageLayout";
import SignUpForm from "../../components/auth/SignUpForm";

export default function SignUp() {
  return (
    <>
      <PageMeta
        title="Painel de Cadastro React.js | Modelo de Painel Administrativo Next.js"
        description="Esta é a página do painel de controle de tabelas de inscrição em React.js - Modelo de painel de administração React.js Tailwind CSS"
      />
      <AuthLayout>
        <SignUpForm />
      </AuthLayout>
    </>
  );
}
