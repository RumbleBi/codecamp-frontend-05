import styled from '@emotion/styled'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Wrapper = styled.div`
  font-family: 'AppleFontEN';
  font-family: 'AppleFontKO';
  width: 1200px;
`
const SliderWrapper = styled.div`
  margin-top: 60px;
  div {
    width: 1200px;
    height: 650px;
  }
`
const SliderImg1 = styled.div`
  background-image: url(/images/SliderImg1.jpeg);
  background-size: cover;
  display: flex;
`
const SliderImg2 = styled.div`
  background-image: url(/images/SliderImg2.jpeg);
  background-size: cover;
  display: flex;
`
const SliderImg3 = styled.div`
  background-image: url(/images/SliderImg3.jpeg);
  background-size: cover;
  display: flex;
`
export default function HomePage() {
  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: false,
    fade: true,
    dot: false,
  }
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Wrapper>
        <SliderWrapper>
          <Slider {...settings}>
            <div>
              <SliderImg1></SliderImg1>
            </div>
            <div>
              <SliderImg2></SliderImg2>
            </div>
            <div>
              <SliderImg3></SliderImg3>
            </div>
          </Slider>
        </SliderWrapper>
      </Wrapper>
    </div>
  )
}
