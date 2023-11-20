import Title from "../Title";
import Features from "./Features/Features";
import { Cards } from "./cards/Cards";
import photo01 from "/med.svg";
import Band from "./Band/band";
import Footer from "./Footer/Footer";

const Menu = () => {
  return (
    <>
      <section className="about-project">
        <div className="text">
          <h2>Health Tag</h2>
          <p>
            A HealthTag é uma inovadora solução de gestão de saúde, apresentando braceletes tecnológicos que armazenam e facilitam o acesso a informações médicas cruciais.
          </p>
          <a href="/login">Saiba mais.</a>
        </div>
        <div className="img">
          <img src={photo01} alt="" />
        </div>
      </section>
      <Title
        title="Features"
        caption="HealthTag: sua saúde, em constante evolução."
        text="
        O HealthTag pode fornecer informações médicas vitais aos usuários, o que pode ajudar a prevenir doenças e melhorar o tratamento."
      />
      <Cards />
      <Band />
      <Title title='' caption="Sua jornada de cuidados de saúde em uma evolução constante." text=''/>
      <Features />
      <Footer />
    </>
  );
};
export default Menu;
