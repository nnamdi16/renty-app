import styled from 'styled-components';
import AppSection from '../../elements/AppSection';
import Logo from './Logo';

import React, {Fragment} from 'react'

export default function Header() {
    return ( <div>
      <HeaderSection>
          <HeaderLogo/>
      </HeaderSection>
    </div>
    )
}

const HeaderSection = styled(AppSection)`
    width:100%;
    height: 5rem;
    background-color:#FEFFFF;
    display: grid;
    grid-template-columns: 1fr 2fr 3fr 4fr;

`

const HeaderLogo = styled(Logo) `
   display: grid;
   grid-column:2/3;
`

