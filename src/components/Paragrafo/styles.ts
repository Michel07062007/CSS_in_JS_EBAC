import styled from 'styled-components'

import { Props } from '.';

export const P = styled.h3<Props>`
    font-size: 14px;
    line-height: 22px;
    color: ${(props) => (props.tipo === 'principal' ? '#282a35' : '#949494')};
`
