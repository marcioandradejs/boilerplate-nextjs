import * as S from './styles'

const Main = ({
  title = 'Boilerplate NextJS',
  description = 'A simple project starter to work with TypeScript, NextJS, Styled Components, Jest, React Testing Library, Storybook, Eslint, Prettier and PlopJS Generators'
}) => (
  <S.Wrapper>
    <S.Illustration
      src="/img/programmer.svg"
      alt="A developer working on the computer."
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
)
export default Main
