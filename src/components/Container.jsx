import styled from 'styled-components'

const StyledContainer = styled.div`
    margin: 4% auto;
    padding: 4%;
    width: 80%;
    border: 1px solid black;

    .nav-links{
        display: flex;
        justify-content: space-around;
    }

    button{
        width: 20%;
        padding: 1%;
        border-radius: 5px;
        color: white;
        background: red;
        margin: 4% 0;

        &:disabled{
            color: grey;
            border: 1px solid grey;
            background: white;
        }
    }
    img {
        width: 100%;
        margin: 0 auto;
        border-radius: 5px;
    }

    form{
        .instructions{
            padding: 1%;
            border-radius: 1px;
            width: 200px;
            height: 100px;
            text-align: center;
        }
    }
`

export default StyledContainer