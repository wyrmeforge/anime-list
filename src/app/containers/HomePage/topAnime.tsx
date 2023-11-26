import React from "react";
import { createSelector } from "reselect";
import styled from "styled-components";
import { useAppSelector } from "../../hooks";
import { makeSelectAnimePage } from "./selectors";
import {GetAnimePage} from "../../services/animeService/__generated__/GetAnimePage";

const HotAnimeContainer = styled.div`
  max-width: 1280px;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 50px;
`;

const AnimeItemContainer = styled.div`
  width: 17em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AnimeCover = styled.div`
  width: auto;
  height: 15em;

  img {
    width: auto;
    height: 100%;
  }
`;

const AnimeTitle = styled.h2`
  margin-top: 8px;
  font-size: 16px;
  text-align: center;
  color: #000;
  font-weight: 500;
  margin-bottom: 10px;
`;

const AnimeScore = styled.div`
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-weight: 700;
`

const stateSelector = createSelector(makeSelectAnimePage, (animePage: GetAnimePage["Page"]) => ({
    animePage,
}));

const TopAnime = () => {
    const { animePage } = useAppSelector(stateSelector);

    const isEmptyAnimePage =
        !animePage || !animePage.media || animePage.media.length === 0;

    if (isEmptyAnimePage) return <div>Loading...</div>;

    return (
        <HotAnimeContainer>
            {animePage?.media?.map((anime, idx) => (
                    <AnimeItemContainer key={idx}>
                        <AnimeCover>
                            <img alt={anime?.title?.english || 'anime cover'} src={anime?.coverImage?.extraLarge || ""} />
                        </AnimeCover>
                        <AnimeTitle>{anime?.title?.english}</AnimeTitle>
                        <AnimeScore>Average Score: {anime?.averageScore}</AnimeScore>
                    </AnimeItemContainer>
                ))}
        </HotAnimeContainer>
    );
}

export default TopAnime