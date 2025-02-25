import styled from "styled-components";
import { AnalyticsColors, device } from "../../constants";

export const Wrapper = styled.div``;

export const Head = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    border: 1px solid ${AnalyticsColors.grey};
    box-shadow: 0px 0px 5px 0px ${AnalyticsColors.grey};

    h1 {
        width: 100%;
        text-align: center;
        font-weight: normal;
        font-size: 24px;
        line-height: 34px;

        color: ${AnalyticsColors.black};
    }
`;

export const Main = styled.main`
    padding: 80px 80px;

    font-family: Inter;
    font-style: normal;

    span {
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;

        color: #78787f;
    }

    h5 {
        margin: 0;

        font-weight: normal;
        font-size: 22px;
        line-height: 32px;

        color: ${AnalyticsColors.black};
    }

    @media ${device.xs} {
        padding: 80px 80px 0px 80px;
    }
`;

export const Content = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 40px;

    position: relative;

    font-family: Inter;
    font-style: normal;

    select {
        width: 271px;
        height: 58px;
        background: ${AnalyticsColors.lightGrey};
        padding: 0px 16px;

        border: none;
        appearance: none;

        border-radius: 2px;

        font-weight: 600;
        font-size: 16px;
        line-height: 19px;

        color: ${AnalyticsColors.black};
    }

    &::after {
        content: "▼";
        font-size: 1rem;
        top: 20px;
        right: 24px;
        position: absolute;

        @media ${device.xs} {
            top: 90px;
        }
    }

    h3 {
        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 2px;
        margin: 0;
        border: 1px solid ${AnalyticsColors.grey};

        width: 270px;
        height: 58px;

        font-weight: bold;
        font-size: 24px;
        line-height: 29px;

        color: ${AnalyticsColors.black};
    }

    @media ${device.xs} {
        flex-direction: column;
        height: 130px;
    }
`;
