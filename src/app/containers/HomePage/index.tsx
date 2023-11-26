import React, { useEffect} from 'react';
import styled from "styled-components";
import animeService from "../../services/animeService/animeService";
import {GetAnimePage} from "../../services/animeService/__generated__/GetAnimePage";
import {setAnimePage} from "./homePageSlice";
import {AppDispatch} from "../../store";
import {useAppDispatch} from "../../hooks";
import TopAnime from "./topAnime";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  > h1 {
    margin-bottom: 40px;
  }
`;

const actionDispatch = (dispatch: AppDispatch) => ({
    setAnimePage: (page: GetAnimePage["Page"]) => dispatch(setAnimePage(page)),
});


const HomePage = () => {
    const {setAnimePage} = actionDispatch(useAppDispatch());

    const fetchAnimePage = async () => {
        const animePage = await animeService.getAnimePage(0);

        if(animePage) {
            setAnimePage(animePage)
        }
    }

    useEffect(() => {
        fetchAnimePage();
    }, [])

    return (
        <Container>
            <h1>Top Anime</h1>
            <TopAnime />
        </Container>
    );
};

export default HomePage;