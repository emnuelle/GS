
import { IoAccessibilityOutline } from "react-icons/io5";
import { IoPencilOutline } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";

const data = [
  {
    title:'Empoderando Pacientes Especiais com Autonomia',
    text:'Pode ajudar pessoas com necessidades especiais a ter mais autonomia.',
    img: <IoAccessibilityOutline />
  },
  {
    title:'Inovação para Cuidados de Saúde Personalizados',
    text:'Armazena informações médicas vitais de forma personalizada e segura.',
    img: <IoPencilOutline />
  },  {
    title:'Acessibilidade Sem Compromissos',
    text:'Tecnologia inovadora que tem o potencial de revolucionar o cuidado da saúde.',
    img: <IoStarOutline />
  }
]
function Features() {
  return (
    <section className="features">
      <div className="additional-info">
        {data.map((info, index)=>(
          <div key={index} className="info">
            <h3>{info.title}</h3>
            {info.img}
            <p>{info.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Features;
