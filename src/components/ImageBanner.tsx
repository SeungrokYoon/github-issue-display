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
      tabIndex={0}
      onClick={() => {
        window.open(link)
      }}
    >
      <Label>AD</Label>
      <AdvImage alt={alt} src={src} />
    </ImageBannerContainer>
  )
}

export default ImageBanner

const ImageBannerContainer = styled(StyledIssueItem)`
  justify-content: center;
  background-color: ${({ theme }) => theme.bgColor_canvas_pure_white};
  &:hover {
    transform: translateY(-0.125rem);
    transition: transform ease-in-out 0.5s;
  }
`

const Label = styled.span`
  font-size: 0.5rem;
  font-weight: 600;
  padding: 0.25rem;
  margin-right: 20px;
  border-radius: 0.25rem;
  background-color: ${({ theme }) => theme.bgColor_label_blue};
`

const AdvImage = styled.img`
  cursor: pointer;
`
