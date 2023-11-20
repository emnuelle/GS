import Title from "../Title";
import Features from "./Features/Features";
import { Cards } from "./cards/Cards";
import photo01 from "/Group.png";
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
        caption="Sua experiência fica cada vez melhor com o tempo."
        text="
        Com avanços contínuos, a tecnologia transforma sua jornada em uma evolução constante. Sua experiência melhora progressivamente, inovando a cada momento."
      />
      <Cards />
      <Band />
      <Title title='' caption="Estoque Inteligente para Eficiência Operacional" text=''/>
      <Features />
      <Footer />
    </>
  );
};
export default Menu;
