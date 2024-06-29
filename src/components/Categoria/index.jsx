import styled from "styled-components";
import { Carrucel } from "../Carrucel";
import { Boton, ContenidoParcial } from "../UI/Estilos";

const CategoriaGrupo = styled.section`
`;

const Contenido = styled(ContenidoParcial)`
    padding: 2rem 0;
`;

const Cabecera = styled.div`
    margin-bottom: 2rem;
    color: ${({ theme }) => theme.texto};
    @media screen and (min-width: 768px) {
        width: 282px;
        margin-top: .5em;
        background-color: var(--gris);
        padding: 0 0 1em 0;
        display: flex;
        box-shadow: 6px 6px 6px rgba(255, 255, 255, 255);
        align-items: center;
        gap: 2rem;
    }
`;

const Descripcion = styled.p`
`;

export function Categoria({categoria}) {
    const {nombre, descripcion, color, id} = categoria
    return (
        <CategoriaGrupo>
            <Contenido>
                <Cabecera>
                    <Boton color={color} >{nombre}</Boton>
                    <Descripcion>{descripcion}</Descripcion>
                </Cabecera>
                <Carrucel categoria_id={id} color={color} />
            </Contenido>
        </CategoriaGrupo>
    );
}