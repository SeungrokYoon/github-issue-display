import styled from 'styled-components'
import { StyledIssueItem } from '../pages/styles'

interface ImageBannerProps {
  alt: string
  src: string
  link: string
}

function ImageBanner({
  alt = 'alt text',
  src = 'image src',
  link = 'link url of image',
}: ImageBannerProps) {
  return (
    <ImageBannerContainer
      onClick={() => {
        window.open(link)
      }}
    >
      <AdvImage alt={alt} src={src} />
    </ImageBannerContainer>
  )
}

export default ImageBanner

const ImageBannerContainer = styled(StyledIssueItem)`
  justify-content: center;
`

const AdvImage = styled.img`
  cursor: pointer;
`
