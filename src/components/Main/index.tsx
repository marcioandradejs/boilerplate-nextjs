import * as S from './styles'

const Main = ({
  title = 'Boilerplate create-next-app',
  description = 'TypeScript, NextJS, Styled Components, Jest, React Testing Library, Storybook, Eslint, Prettier and PlopJS Generators',
}) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com código."
    />
  </S.Wrapper>
)
export default Main
