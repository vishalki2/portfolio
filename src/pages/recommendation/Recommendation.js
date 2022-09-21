import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Pill } from '../../styles';
import { ProjectItem, ProjectTitle, SkillContainer } from './styles';

const Recommendation = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>Recommendation</SectionTitle>
        <ul>
          <li>Java</li>
          <li>C++</li>
          <li>React JS</li>
        </ul>
      </div>
    </Layout>
  );
};

export default Recommendation;
