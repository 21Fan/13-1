import React from 'react';
import PCHeader from './pcHeader';
import PCFooter from './pcFooter';

import PCSider from './PCSider';
import {Layout }from 'antd';
import PCNewsContainer from './pc_newscontainer';

const {
	Header,Footer,Sider,Content,
}=Layout;
export default class PCIndex extends React.Component{
	// constructor() {
    //     super();
    //     this.state = {
    //         collapsed:false,
    //     };
    // }
	// onCollapse  (collapsed)  {
	// 	console.log(collapsed);
	// 	this.setState({ collapsed });
	//   }
	  //压缩功能失败了
	render(){
		return(
        // <div>
        //     <PCHeader></PCHeader>
		// 	<PCSider></PCSider>
			
		// 	<PCFooter></PCFooter>
		// </div>
		<div>
		 <Layout>
      <Header ><PCHeader></PCHeader></Header>
      <Layout>
				
		<Sider style={{background:'#fff'}} width={200} 
		// collapsible
        //   collapsed={this.state.collapsed}
				//   onCollapse={this.onCollapse}
				//左边
		  ><PCSider></PCSider></Sider>
			
        <Content><PCNewsContainer></PCNewsContainer></Content>
      </Layout>
      <Footer style={{ textAlign: 'center' }}><PCFooter></PCFooter></Footer>
    </Layout>
	   </div>
		
		);
	};
}