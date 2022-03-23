import styled from 'styled-components'

export const Wrapper = styled.main`
  background-color: #211757;
  color: #f2f2f2;
  width: 100%;
  height: 100%;
  padding: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Logo = styled.img`
  width: 25rem;
  margin-bottom: 2rem;
`

export const Title = styled.h1`
  font-size: 5rem;
  margin-bottom: 3rem;
`

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  max-width: 60rem;
  line-height: 1.4;
`

export const Illustration = styled.img`
  margin-bottom: 5rem;
  width: min(30rem, 100%);
  height: min(30rem, 100%);
`
