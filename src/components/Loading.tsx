import styled from 'styled-components'
import loading from '../assets/loading.gif'

function Loading({ width, height }: { width: number | string; height: number | string }) {
  return (
    <ImageContainer>
      <img alt="loading" height={height} src={loading} width={width} />
    </ImageContainer>
  )
}

export default Loading

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`
