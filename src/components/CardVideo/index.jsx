import { Imagen } from "../UI/Estilos";
import styled from "styled-components";

const CardVideoLink = styled.a`

`;

const CarrucelImagen = styled(Imagen)`
    padding: 0 0 1em 0;
    margin-top: .3em;
    width: 282px;
    display: flex;
    flex-direction: column;
    border: 3px solid ${({color}) => color };
    box-sizing: border-box;
`;

export function CardVideo({link, src, color}) {
    return (
        <CardVideoLink href={link} target="__blank" >
            <CarrucelImagen src={src} color={color} ></CarrucelImagen>
        </CardVideoLink>
    );    
}