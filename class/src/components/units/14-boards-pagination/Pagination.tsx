import { useState } from "react";
import styled from "@emotion/styled";

const ChangeColor = styled.span`
  color: ${(props) =>
    props.clickPage === props.index + props.startPage ? "#FFD400" : "black"};
`;
const ButtonPrev = styled.button``;

const ButtonNext = styled.button``;

export default function Pagination(props) {
  const [character] = useState("<");
  const [startPage, setStartPage] = useState(1);
  const [clickPage, setClickPage] = useState(1);
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(false);

  const onClickPage = (event) => {
    setClickPage(Number(event.target.id));
    props.refetch({ page: Number(event.target.id) });
  };

  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
    setClickPage(startPage - 10);
    props.refetch({ page: startPage - 10 });
    setNextDisabled(false);
    if (startPage - 10 <= 1) {
      setPrevDisabled(true);
    } else {
      setPrevDisabled(false);
    }
  };

  const onClickNextPage = () => {
    if (startPage + 10 > props.lastPage) return;
    setStartPage((prev) => prev + 10);
    setClickPage(startPage + 10);
    props.refetch({ page: startPage + 10 });
    setPrevDisabled(false);
    if (startPage + 20 >= props.lastPage) {
      setNextDisabled(true);
    } else {
      setNextDisabled(false);
    }
  };

  return (
    <div>
      <ButtonPrev onClick={onClickPrevPage} disabled={prevDisabled}>
        {character}
      </ButtonPrev>
      {new Array(10).fill(1).map(
        (_, index) =>
          index + startPage <= props.lastPage && (
            <ChangeColor
              key={index + startPage}
              onClick={onClickPage}
              id={String(index + startPage)}
              clickPage={clickPage}
              index={index}
              startPage={startPage}
            >
              {` ${index + startPage} `}
            </ChangeColor>
          )
      )}
      <ButtonNext onClick={onClickNextPage} disabled={nextDisabled}>
        &gt;
      </ButtonNext>
    </div>
  );
}
