import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import * as S from "./LayoutBanner.styles";

export default function LayoutBannerUI() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <S.Wrapper>
      <div>
        <S.DivSlider>
          <Slider {...settings}>
            <div>
              <S.DivImage>
                <S.ImgBox src="/images/banner/horse.png" />
              </S.DivImage>
            </div>
            <div>
              <S.DivImage>
                <S.ImgBox src="/images/banner/horse2.png" />
              </S.DivImage>
            </div>
            <div>
              <S.DivImage>
                <S.ImgBox src="/images/banner/horse3.png" />
              </S.DivImage>
            </div>
            <div>
              <S.DivImage>
                <S.ImgBox src="/images/banner/horse4.png" />
              </S.DivImage>
            </div>
            <div>
              <S.DivImage>
                <S.ImgBox src="/images/banner/horse5.png" />
              </S.DivImage>
            </div>
          </Slider>
        </S.DivSlider>
      </div>
    </S.Wrapper>
  );
}
