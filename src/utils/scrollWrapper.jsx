import styled from "styled-components";

const Wrapper = styled.div`
  overflow-x: hidden;
  overflow-y: scroll;
  height: ${props => props.height || 100}vh;
`
const ScrollWrapper = ({height, children}) => {
    return (
        <Wrapper height={height}>
            {children}
        </Wrapper>
    )
}

export default ScrollWrapper;