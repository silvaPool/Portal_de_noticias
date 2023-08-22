import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import sessoes from "../data/Cards";
import { Box, Button, CircularProgress } from '@mui/material';
import Typography from '@mui/material/Typography';
import api from '../services/api';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from '@mui/material/Link';
import  IconButton from '@mui/material/IconButton';
import ShareIcon from '@mui/icons-material/Share';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { styled } from '@mui/material/styles';


function filterSessao(sessao) {
    const data = sessoes?.find(item => item.titulo === sessao);
    //  console.log(data);
    //  console.log(sessao);
    return data;
}

function getCategoryData(category) {
      return api
     .get('/doc/doc', { params: { query: `${category} sourcecountry:BR`, sourcecountry: 'BR', mode: 'ArtList', format: 'json' } })

    }




function Noticias() {
    const navigate = useNavigate();
    const [article, setArticle] = useState([]);
    const { type } = useParams();
    const [stateData, setStateData] = useState({});
    const [apiData, setApiData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [copySuccess, setCopySuccess] = useState('');
    const [open, setOpen] = useState(false);

    

    useEffect(() => {
        const dataFilter = filterSessao(type);
        setStateData(dataFilter ?? {});
        
        // console.log(stateData);
        // console.log(dataFilter);
    }, [sessoes, type]);

   

    useEffect(() => {
        getCategoryData(type)
        .then((response) => {
          setArticle(response.data.articles)
          console.log(response);
      })
    }, [type]);

    // useEffect(() => {
    //     // chamada à API para buscar os dados

    //     const fetchApiData = async () => {
    //         try {
    //             const response = await fetch('https://api.gdeltproject.org/api/v2/doc/doc');
    //             const data = await response.json();
    //             setApiData(data);
    //             setLoading(false);
    //         } catch (error) {
    //             console.error('Erro ao buscar os dados da API:', error);
    //         }
    //     };
    //     fetchApiData();
    // }, []);

    const handleShare = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const handleTwitterShare = (contentLink) => {
    const shareText = `Confira este conteúdo interessante! ${contentLink}`;
        const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;
        window.open(twitterShareUrl, '_blank');
    }

    const handleInstagramShare = (imageURL, caption) => {
        const instagramShareUrl = `https://www.instagram.com/share?url=${encodeURIComponent(imageURL)}&caption=${encodeURIComponent(caption)}`;
        window.open(instagramShareUrl, '_blank');
      };

    function capitalizeWords(str = "") {
        // Dividir a string em um array de palavras
        let words = str.split(" ");

        // Percorrer cada palavra e capitalizar a primeira letra
        for (let i = 0; i < words.length; i++) {
            let word = words[i];

            // Verificar se a palavra não é vazia
            if (word.length > 0) {
                // Obter a primeira letra da palavra em maiúscula
                let capitalized = word[0].toUpperCase();

                // Adicionar o restante da palavra (a partir do segundo caractere)
                capitalized += word.slice(1);

                // Substituir a palavra original pela palavra capitalizada
                words[i] = capitalized;
            }
        }

        // Juntar as palavras novamente em uma única string
        let result = words.join(" ");


        // Retornar a string com as iniciais em maiúsculas
        return result;
    }

    const StyleButton = styled(Button)`
        width: 10%;
        color: black;
        border: 1px solid black;
    `

    return (
        <Box sx={{ width: '90%', margin: '1rem auto 1rem', padding: '2rem' }}>
            <Typography variant="h2" sx={{ position: 'relative', right: '2%', color:'white' }}>
                {capitalizeWords(stateData?.titulo)}
            </Typography>

            <Typography variant="body2" sx={{ marginBottom: '1rem', fontSize: '1.2rem', color:'white' }}>
                {stateData?.conteudo}
            </Typography>

            {article.map(item => (

                <div>
                    <Accordion sx={{ backgroundColor: '#DCDCDC', color: 'black', marginBottom: '1.2rem' }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"

                        >
                            <Typography>{capitalizeWords(item.title)}</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ backgroundColor: 'white' }}>
                            <Typography sx={{ marginBottom: '0.5rem' }}>
                                Data de publicação: {item.publishedAt}
                            </Typography>
                            <Typography variant="h2" sx={{ fontSize: '1.2rem', position: 'relative', right: '2%' }}>
                                Clique no botão e veja a notícia completa
                            </Typography>

                            {loading ? (
                                <CircularProgress /> // Exibe um indicador de progresso enquanto os dados são carregados
                            ) : (
                                apiData && (
                                    <>
                                        <Typography component='a' href={item.url} target="_blank" >
                                            <StyleButton onClick={() => navigator.clipboard.writeText('copy this text to clipboard')}>Notícia</StyleButton>
                                        </Typography>

                                        <IconButton onClick={handleShare} aria-label="Compartilhar">
                                            <ShareIcon />
                                        </IconButton>
                                        <Dialog open={open} onClose={handleClose}>
                                            <DialogTitle>Compartilhar em suas redes</DialogTitle>
                                            <DialogContent>
                                            <Button onClick={() => handleTwitterShare(item.url)} color="primary"><TwitterIcon /></Button>
                                            <Button onClick={handleInstagramShare} color="primary">< InstagramIcon /></Button>
                                            </DialogContent>
                                            <DialogActions>
                                                <Button onClick={handleClose} color="primary">
                                                    Fechar
                                                </Button>
                                            </DialogActions>
                                        </Dialog>


                                    </>
                                )
                            )}



                        </AccordionDetails>
                    </Accordion>
                </div>


            ))
            }

            <Button variant="outlined" color="secondary" onClick={() => navigate("/sessao1")}>Voltar para a página principal</Button>

        </Box >
    )
}

export default Noticias