import styled from 'styled-components'

const Wrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
    margin-top: 5px;
    margin-bottom: 40px;
    
    
  }
  
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }
  h1 {
    font-weight: 700;
    span {
      color: #617A55;
    }
  }
  p {
    color: var(--grey-600);
  }
  .main-img {
    display: none;
    color: yellow;
    
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
    background-color: #FFEAD2;
  }
`
export default Wrapper
