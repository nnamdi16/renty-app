import styled from 'styled-components';
import AppSection from '../../elements/AppSection';
import {device} from '../../constants';

const Header = styled(AppSection)`
    width:100%;
    height: 5rem;
    background-color:#FEFFFF;
    display: grid;
    grid-template-columns: 1fr 2fr 4fr 3fr 2fr;

    @media ${device.laptop} {
        grid-template-columns: 1fr 2fr 4fr 3fr 1fr;
    }
`


export default Header;