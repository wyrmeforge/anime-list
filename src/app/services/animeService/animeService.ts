import {GetAnimePage} from "./__generated__/GetAnimePage";
import {apolloClient} from "../../graphql";
import {GET_ANIME_PAGE} from "./queries";

class AnimeService {
    async getAnimePage(page: number, perPage:number = 5): Promise<GetAnimePage["Page"]> {
        try {
            const response = await  apolloClient.query({query: GET_ANIME_PAGE, variables: {page, perPage}});

            return response.data.Page
        } catch (error) {
            throw error
        }
    }
}

export default new AnimeService();