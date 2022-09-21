import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph } from '../../styles';
import { WorkItem, WorkTitle, JobTitle } from './styles';

const Work = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>Contact Me</SectionTitle>
        <ul>
          <li>Mobile No : 7786855709</li>
          <li>Twitter : @twitter</li>
          <li>GitHub : @github.com</li>
        </ul>
      </div>
    </Layout>
  );
};

export default Work;
