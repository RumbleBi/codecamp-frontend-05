import Slider from "react-slick";
import styled from "@emotion/styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Wrapper = styled.div`
  padding-left: 500px;
  padding-right: 500px;
  height: 500px;
  width: 1500px;
  background-color: skyblue;
  font-family: "myFont";
`;

const ImgBox = styled.img`
  height: 350px;
  width: 350px;
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
      <h2>Horse-Image</h2>
      <Slider {...settings}>
        <div>
          <DivImage>
            <ImgBox src="/horse.jpeg" />
          </DivImage>
        </div>
        <div>
          <DivImage>
            <ImgBox src="/horse2.jpeg" />
          </DivImage>
        </div>
        <div>
          <DivImage>
            <ImgBox src="/horse3.jpeg" />
          </DivImage>
        </div>
        <div>
          <DivImage>
            <ImgBox src="/horse4.jpeg" />
          </DivImage>
        </div>
        <div>
          <DivImage>
            <ImgBox src="/horse5.png" />
          </DivImage>
        </div>
      </Slider>
    </Wrapper>
  );
}
