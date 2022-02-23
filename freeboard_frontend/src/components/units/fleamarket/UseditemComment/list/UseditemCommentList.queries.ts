import { gql } from "@apollo/client";

export const FETCH_USEDITEM_QUESTIONS = gql`
    fetchUseditemQuestions ($page: Int useditemId: ID!) {
        fetchUseditemQuestions (page: $page useditemId: $useditemId) {
            _id
        }
    }
`;
