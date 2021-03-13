import React from 'react';
import styled from 'styled-components';
import TextLoop from "react-text-loop";

const Header = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  text-transform: uppercase;
  color: white;
  &:after {
    display: inline-block;
    content: "";
    border-bottom: 2px solid #e0bc8f;
    width: 50%;
    margin-left: 1rem;
    transform: translateY(-0.6rem);
  }
`;

const Skill = styled.p`
  display: block;
  width: auto;
  color: #e0bc8f;
  font-size: 2.4rem;
  font-weight: 400;
  text-transform: uppercase;
`;

function WordScroller() {
  const skills = [
    "Node JS", 
    "React JS", 
    "UI Design", 
    "Web Development", 
    "Version Control", 
    "Responsive Design", 
  ];

  const renderSkillList = () => {
    return skills.reverse().map(skill => <Skill>{skill}</Skill>)
  }

  
  return (
    <div className="mt-5 invisible lg:visible">
      <Header>Skills</Header>
      <TextLoop springConfig={{ stiffness: 200, damping: 12 }}>
        {renderSkillList()}
      </TextLoop>
    </div>
  );
}

export default WordScroller;
