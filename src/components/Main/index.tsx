import * as Style from './styles';

const Main = () => (
  <Style.Wrapper>
    <Style.Logo
      src="/img/logo.svg"
      alt="Imagem de um atomo e React Avancado escrito ao lado"
    />
    <Style.Title>React Avançado</Style.Title>
    <Style.Description>
      Typescript, ReactJS, NextJS e Styled Components
    </Style.Description>
    <Style.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para a tela com codigo"
    />
  </Style.Wrapper>
);

export default Main;
