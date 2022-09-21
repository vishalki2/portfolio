import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph } from '../../styles';
import { EducationItem, Institution, Degree } from './styles';

const Education = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>Experiance</SectionTitle>
        <p>I work as a SDO in UPPCL. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio earum veniam minus corporis officia repellendus dolore suscipit doloribus exercitationem doloremque iusto enim vitae eius, dolores magni ipsam eveniet odit aperiam!</p>
      </div>
    </Layout>
  );
};

export default Education;
