import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const About = () => (
  <Main meta={<Meta title="Absa sports" description="absa sports" />}>
    <Content>
      <p>
        Bienvenidos a Absa Sports, tu fuente confiable de noticias deportivas en
        México. Nos enorgullece presentarte la última información y análisis en
        el mundo del deporte, con un enfoque especial en el béisbol y el fútbol
        mexicano. Estamos dedicados a mantener a nuestros lectores actualizados
        sobre las últimas novedades y emocionantes acontecimientos en la Liga
        Mexicana del Pacífico (LMP), la Liga Mexicana de Béisbol (LMB) y el
        fútbol mexicano.
      </p>
      <h2>Béisbol Mexicano</h2>
      <p>
        Absa Sports es tu destino principal para todo lo relacionado con el
        béisbol mexicano. Nos apasiona seguir de cerca a los equipos y jugadores
        de la Liga Mexicana del Pacífico y la Liga Mexicana de Béisbol. Nuestros
        reporteros expertos brindarán cobertura detallada de los juegos, las
        estadísticas, las transacciones y todo lo que necesitas saber sobre este
        emocionante deporte en México.
      </p>
      <h2>Fútbol Mexicano</h2>
      <p>
        Además del béisbol, el fútbol mexicano ocupa un lugar especial en
        nuestro corazón. Estamos comprometidos a mantenerte informado sobre las
        últimas noticias, partidos, transferencias y análisis de la Liga MX. Ya
        seas fanático de las Chivas, los Pumas, el América o cualquier otro
        equipo, encontrarás contenido relevante y apasionante en Absa Sports.
      </p>
      <h2>Equipos Destacados</h2>
      <p>
        Dos equipos merecen un seguimiento especial en Absa Sports: los Charros
        de Béisbol y los Mariachis de Guadalajara. Estamos orgullosos de ser
        seguidores apasionados de estos equipos y ofreceremos una cobertura
        extensa sobre sus actuaciones y logros. Si eres un apasionado de los
        Charros o los Mariachis, ¡este es tu lugar! En Absa Sports, estamos
        comprometidos con la excelencia periodística y la imparcialidad en
        nuestra cobertura deportiva. Nuestro objetivo es brindarte una
        experiencia informativa enriquecedora y entretenida que te mantenga al
        tanto de todo lo que sucede en el emocionante mundo del deporte
        mexicano.
      </p>
    </Content>
  </Main>
);

export default About;
