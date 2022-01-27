import Slider from "react-slick";
import styled from "@emotion/styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 25vh;
  width: 100vw;
  background-color: #ffd400;
`;

const ImgBox = styled.img`
  height: 20vh;
  width: 20vw;
`;

const DivSlider = styled.div`
  width: 20vw;
`;

const DivImage = styled.div`
  display: flex;
  justify-content: center;
`;
export default function LayoutBanner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Wrapper>
      <div>
        <DivSlider>
          <Slider {...settings}>
            <div>
              <DivImage>
                <ImgBox src="/images/banner/horse.png" />
              </DivImage>
            </div>
            <div>
              <DivImage>
                <ImgBox src="/images/banner/horse2.png" />
              </DivImage>
            </div>
            <div>
              <DivImage>
                <ImgBox src="/images/banner/horse3.png" />
              </DivImage>
            </div>
            <div>
              <DivImage>
                <ImgBox src="/images/banner/horse4.png" />
              </DivImage>
            </div>
            <div>
              <DivImage>
                <ImgBox src="/images/banner/horse5.png" />
              </DivImage>
            </div>
          </Slider>
        </DivSlider>
      </div>
    </Wrapper>
  );
}
