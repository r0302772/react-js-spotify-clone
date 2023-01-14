import {Spinner} from 'react-bootstrap'
import styled from 'styled-components'

const CenteredDiv = styled.div`
  display: flex;
  align-content: center;
`

const Loading = ({spinnerText}) => {
    return (
        <CenteredDiv>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
            <span className={'ms-4'}>{spinnerText}</span>
        </CenteredDiv>
    )
}

export default Loading
