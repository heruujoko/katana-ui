import React from 'react';
import Box from './ui/atoms/Box';
import Paragraph from './ui/atoms/Paragraph';
import Title from './ui/atoms/Title';

const App: React.FC = () => {
  return (
    <div className="App">
      <Box style={{ marginTop: "20px" }}>
        <Title>Card Content</Title>
        <Paragraph>This content is styled</Paragraph>
      </Box>
    </div>
  );
}

export default App;
