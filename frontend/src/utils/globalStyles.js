import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;1,300;1,400&display=swap');
*,*::before, *::after{
    margin:0;
    padding: 0;
    box-sizing: border-box;
}
html{
    font-size: 62.5%;
    --color-mainDark: ${(props) => props.theme.colors.mainDark};
    --color-mainLight: ${(props) => props.theme.colors.mainLight};
    --color-secondaryLight: ${(props) => props.theme.colors.secondaryLight};
    --color-secondaryDark: ${(props) => props.theme.colors.secondaryDark};
    --color-third: ${(props) => props.theme.colors.third};
    



    @media ${(props) => props.theme.mediaQueries.smallest}{
        font-size: 60%;
    }

    @media ${(props) => props.theme.mediaQueries.small}{
        font-size: 55%;
    }
    @media ${(props) => props.theme.mediaQueries.medium}{
        font-size: 40%;
    }
}

body{
    font-family: 'Roboto', sans-serif;
}

`;
