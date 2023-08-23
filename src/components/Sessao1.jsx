import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Esportes from '../assets/images/esportes.jpg'
import Nacional from '../assets/images/nacional.jpg'
import Politica from '../assets/images/politica.jpg'
import Musica from '../assets/images/musica.jpg'
import Tech from '../assets/images/tech.jpg'
import Entretenimento from '../assets/images/entretenimento.jpg'
import Internacional from '../assets/images/internacional.jpg'
import Saude from '../assets/images/saude.jpg'
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

        

            <Box sx={{width: '80%', margin: '0 auto', padding: '2rem'}}>

                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xl={4} md={4}>
                        <Card sx={{ maxWidth: 350, maxHeight: 350, marginBottom: '2rem', borderRadius: '1rem' }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image={Esportes}
                                title="Esportes"
                            />
                            <CardContent>
                                <Typography gutterBottom variant='h5' component="div">
                                    {sessoes[0].titulo}
                                </Typography>
                                <StyleTypography>
                                    {sessoes[0].conteudo}
                                </StyleTypography>
                            </CardContent>
                            <CardActions>
                                <Button variant='contained' onClick={() => navigate("/noticias/sports")}>Entrar</Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item  xl={4} md={4}>
                        <Card sx={{ maxWidth: 350, maxHeight: 350, marginBottom: '2rem', borderRadius: '1rem' }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image={Politica}
                                title="Política"
                            />
                            <CardContent>
                                <Typography gutterBottom variant='h5' component="div">
                                    {sessoes[1].titulo}
                                </Typography>
                                <StyleTypography>
                                    {sessoes[1].conteudo}
                                </StyleTypography>
                            </CardContent>
                            <CardActions>
                                <Button variant='contained' onClick={() => navigate("/noticias/politics")}>Entrar</Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item  xl={4} md={4}>
                        <Card sx={{ maxWidth: 350, maxHeight: 350, marginBottom: '2rem', borderRadius: '1rem' }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image={Entretenimento}
                                title="Entretenimento"
                            />
                            <CardContent>
                                <Typography gutterBottom variant='h5' component="div">
                                    {sessoes[2].titulo}
                                </Typography>
                                <StyleTypography>
                                    {sessoes[2].conteudo}
                                </StyleTypography>
                            </CardContent>
                            <CardActions>
                                <Button variant='contained' onClick={() => navigate("/noticias/entertainment")}>Entrar</Button>
                            </CardActions>
                        </Card>
                    </Grid>



                    <Grid item xl={4} md={4}>
                        <Card sx={{ maxWidth: 350, maxHeight: 350, marginBottom: '2rem', borderRadius: '1rem' }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image={Internacional}
                                title="Geral"
                            />
                            <CardContent>
                                <Typography gutterBottom variant='h5' component="div">
                                    {sessoes[3].titulo}
                                </Typography>
                                <StyleTypography>
                                    {sessoes[3].conteudo}
                                </StyleTypography>
                            </CardContent>
                            <CardActions>
                                <Button variant='contained' onClick={() => navigate("/noticias/general")}>Entrar</Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xl={4} md={4}>

                        <Card sx={{ maxWidth: 350, maxHeight: 350, marginBottom: '2rem', borderRadius: '1rem' }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image={Saude}
                                title="Saúde"
                            />
                            <CardContent>
                                <Typography gutterBottom variant='h5' component="div">
                                    {sessoes[4].titulo}
                                </Typography>
                                <StyleTypography>
                                    {sessoes[4].conteudo}
                                </StyleTypography>
                            </CardContent>
                            <CardActions>
                                <Button variant='contained' onClick={() => navigate("/noticias/health")}>Entrar</Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xl={4} md={4}>

                        <Card sx={{ maxWidth: 350, maxHeight: 350, marginBottom: '2rem', borderRadius: '1rem' }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image={Tech}
                                title="Tecnologia"
                            />
                            <CardContent>
                                <Typography gutterBottom variant='h5' component="div">
                                    {sessoes[5].titulo}
                                </Typography>
                                <StyleTypography>
                                    {sessoes[5].conteudo}
                                </StyleTypography>
                            </CardContent>
                            <CardActions>
                                <Button variant='contained' onClick={() => navigate("/noticias/technology")}>Entrar</Button>
                            </CardActions>
                        </Card>
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