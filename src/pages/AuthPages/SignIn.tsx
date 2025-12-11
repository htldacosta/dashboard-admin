import PageMeta from "../../components/common/PageMeta";
import AuthLayout from "./AuthPageLayout";
import SignInForm from "../../components/auth/SignInForm";

export default function SignIn() {
  return (
    <>
      <PageMeta
        title="React.js Painel de Login | - Modelo de Painel Administrativo Next.js"
        description="página do painel de controle com tabelas de login em React.js e next.js"
      />
      <AuthLayout>
        <SignInForm />
      </AuthLayout>
    </>
  );
}
