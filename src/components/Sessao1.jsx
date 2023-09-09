import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Esportes from '../assets/images/esportes.webp'
import Politica from '../assets/images/politica.webp'
import Tech from '../assets/images/tech.webp'
import Entretenimento from '../assets/images/entretenimento.webp'
import Internacional from '../assets/images/geral.webp'
import Saude from '../assets/images/saude2.webp'
import { useNavigate } from "react-router-dom";
import { Box, Grid } from '@mui/material';
import sessoes from '../data/Cards';
import StyledBoxSessao1 from './StyledBoxSessao1';


function Cards() {
    const navigate = useNavigate();

    const StyleButton = styled(Button)`
   
    color: white;
    border: 1px solid white;
  
   
    `

    const StyleTypography = styled(Typography)`
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
    `

    return (
        <>



            <Box sx={{ width: '80%', margin: '0 auto', padding: '5rem', marginTop: '2rem'}}>

                <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xl={4} md={4}>
                       
                        <a href='/noticias/sports'>
                            <div class="card-container">
                                <div class="card">
                                    <div class="front-content">
                                        <p>{sessoes[0].tituloCard}</p>
                                    </div>
                                    <div class="content">
                                        <p class="heading">{sessoes[0].tituloCard}</p>
                                        <p>
                                            {sessoes[0].conteudo}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </Grid>

                    <Grid item xl={4} md={4}>
                        <a href="/noticias/politics">
                            <div class="card-container">
                                <div class="card">
                                    <div class="front-content">
                                        <p>{sessoes[1].tituloCard}</p>
                                    </div>
                                    <div class="content">
                                        <p class="heading">{sessoes[1].tituloCard}</p>
                                        <p>
                                            {sessoes[1].conteudo}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </Grid>

                    <Grid item xl={4} md={4}>
                        <a href="/noticias/entertainment">
                            <div class="card-container">
                                <div class="card">
                                    <div class="front-content">
                                        <p>{sessoes[2].tituloCard}</p>
                                    </div>
                                    <div class="content">
                                        <p class="heading">{sessoes[2].tituloCard}</p>
                                        <p>
                                            {sessoes[2].conteudo}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </Grid>



                    <Grid item xl={4} md={4}>
                        <a href="/noticias/general">
                            <div class="card-container">
                                <div class="card">
                                    <div class="front-content">
                                        <p>{sessoes[3].tituloCard}</p>
                                    </div>
                                    <div class="content">
                                        <p class="heading">{sessoes[3].tituloCard}</p>
                                        <p>
                                            {sessoes[3].conteudo}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </Grid>

                    <Grid item xl={4} md={4}>
                        <a href="/noticias/health">
                            <div class="card-container">
                                <div class="card">
                                    <div class="front-content">
                                        <p>{sessoes[4].tituloCard}</p>
                                    </div>
                                    <div class="content">
                                        <p class="heading">{sessoes[4].tituloCard}</p>
                                        <p>
                                            {sessoes[4].conteudo}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </Grid>

                    <Grid item xl={4} md={4}>
                        <a href="/noticias/technology">
                            <div class="card-container">
                                <div class="card">
                                    <div class="front-content">
                                        <p>{sessoes[5].tituloCard}</p>
                                    </div>
                                    <div class="content">
                                        <p class="heading">{sessoes[5].tituloCard}</p>
                                        <p>
                                            {sessoes[5].conteudo}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </Grid>

                    <Grid item>
                        <StyleButton onClick={() => navigate("/")}>Voltar para a HOME</StyleButton>
                    </Grid>
                </Grid>




            </Box>

        </>
    )
}

export default Cards