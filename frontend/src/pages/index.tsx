import Head from "next/head";
import Image from "next/image";
import { Input } from "../components/ui/Input";
import logoImg from "../../public/logo.svg";
import styles from "../../styles/home.module.scss";

export default function Home() {
  return (
    <>
    <Head>
      <title>Pizzaria - Faça seu login</title>
    </Head>
    <div className={styles.containerCenter}>
      <Image src={logoImg} alt="Logo" />

      <div className={styles.login}>
        <form>
          <Input placeholder="Digite seu email" type="text"/>
          <Input placeholder="Digite sua senha" type="text"/>
        </form>
      </div>
    </div>
    </>
  );
};
