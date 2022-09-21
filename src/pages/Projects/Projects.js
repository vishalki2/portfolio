import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Pill } from '../../styles';
import { ProjectItem, ProjectTitle, SkillContainer } from './styles';

const Projects = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>Skills</SectionTitle>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Java Script</li>
          <li>React JS</li>
          <li>Java</li>
        </ul>
      </div>
    </Layout>
  );
};

export default Projects;
