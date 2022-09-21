import React from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowRight16 } from '@carbon/icons-react';

import { HeaderContainer, Header, Image, ViewResumeLink } from './styles';

const UserHeader = ({ user }) => {
  const location = useLocation();

  return (
    <HeaderContainer isHome={location.pathname === '/'}>
      <Header>
        
        {<img src="./img.jpeg" alt="" />}
        <div>
          <h2>VISHAL NISHAD</h2>
          <h4>
            <a
              href={``}
              target="_blank"
              rel="noreferrer noopener"
            >
              @vishalnishad
            </a>
          </h4>
          
          <p>SDO at Hathras, DVVNL</p>
          <p>2 years of experience as a SDO</p>
          <p>Learning Full Stack Web Development</p>
          
        </div>
      </Header>
      <div>
        <ViewResumeLink
          href={``}
          
        >
          <span>View Résumé</span>
          <ArrowRight16 />
        </ViewResumeLink>
      </div>
    </HeaderContainer>
  );
};

export default UserHeader;
