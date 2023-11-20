import { detailsData, requirementsData } from "./CardsData";

export const Cards = () => {
  return (
    <div className="cards-body">
      <section className="main-section">
        <div className="project-description">
          <section className="project-info">
            <div className="info-description">
              <h2>Sobre o<br />Health Tag</h2>
              <p>Saúde sempre à mão!</p>
            </div>
            <div className="info-details">
              {detailsData.map((detail, index)=>(
                <div key={index} className="detail">
                  <p>{detail.p}</p>
                  <span>{detail.span}</span>
                </div>
              ))}
            </div>
          </section>
          <section className="bottom-card">
            <div className="name">
              <img src="/logo-sembg.svg" alt="" />
            </div>
            <div className="card">
              <h3>Tecnologia Inovadora para o Cuidado da Saúde</h3>
              <p>
              O HealthTag é um bracelete inteligente que atende às necessidades individuais, integra-se aos sistemas de saúde e é acessível a todos.
              </p>
            </div>
          </section>
        </div>

        <div className="requirements">
          {requirementsData.map((data, index)=>(
            <div key={index} className="card">
              <h3>{data.title}</h3>
              <p>{data.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
