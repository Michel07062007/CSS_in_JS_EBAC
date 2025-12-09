import { P } from './styles';

export type Props = {
    children: String
    tipo?: 'principal' | 'secundario'
}


const paragrafo = ({ children, tipo = 'principal'}: Props) => ( <P tipo={tipo}>{children}</P> )
export default paragrafo
