import React from 'react';
import PieMenu, { Slice } from 'react-pie-menu';
export default class Menu extends React.Component {
  render() {
    return(

    <PieMenu
      radius='125px'
      centerRadius='30px'
      centerX={600}
      centerY={700}
    >
      {/* Contents */}
      <Slice></Slice>
      <Slice onSelect={() => window.open('https://www.facebook.com', '_blank')}>
        
      </Slice>
      <Slice onSelect={() => window.open('https://www.twitter.com', '_blank')}>
       
      </Slice>
      <Slice onSelect={() => window.open('https://www.linkedin.com', '_blank')}>
       
      </Slice>
      <Slice onSelect={() => window.open('https://github.com/psychobolt/react-pie-menu', '_blank')}>
       
      </Slice>
      <Slice onSelect={() => window.open('https://en.wikipedia.org/wiki/RSS', '_blank')}>
       
      </Slice>
      <Slice onSelect={() => window.open('https://www.pinterest.com/', '_blank')}>
      
      </Slice>
      <Slice></Slice>
    </PieMenu>
    )
  }
}


  