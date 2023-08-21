import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { keyframes } from 'styled-components';
import { MaquinaDeEscrever } from './MaquinaDeEscrever';
import { Button } from '@mui/material';
import Sessao1 from './Sessao1'
import { useNavigate } from "react-router-dom";

function Pagina() {
    const navigate = useNavigate();

    const StyleTypography = styled(Typography)`
        font-size: 3rem;
        border: none;
        color: white;
    `;

    const StyleBox = styled(Box)`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: black;
    `
    const StyleButton = styled(Button)`
        width: 15%;
        border-radius: 1rem;
        color: black;
        margin-top: 1.5rem;
        background-color: white;
        &:hover {
            color: white;
            background-color: black;
        }
    `
   
        return (
            <StyleBox>
                <StyleTypography>
                 News Insight
                </StyleTypography>

                <StyleTypography>
                   <MaquinaDeEscrever text=" O maior portal de notícias do país" />
                </StyleTypography>

                <StyleButton onClick={() => navigate("/sessao1")}>Entrar</StyleButton>

        </StyleBox>
        )
    }

    export default Pagina