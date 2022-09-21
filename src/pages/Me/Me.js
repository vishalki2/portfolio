import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph, Pill } from '../../styles';
import { ProfileLink } from './styles';

const Me = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>About Me</SectionTitle>
        <Paragraph>I am Assistant Engineer at UPPCL</Paragraph>
      </div>
      <div>
        <SectionTitle>Skills</SectionTitle>
        <div>
          <h4>Java </h4>
          <h4>React</h4>
          <h4>C++</h4>
        </div>
      </div>
      
    </Layout>
  );
};

export default Me;
