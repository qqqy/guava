import React from 'react';
import SortableTree from 'react-sortable-tree';
import 'react-sortable-tree/style.css';

export default class SortableTreeDemo extends React.Component {

  state = {
    treeData: [{title: "Mah Man" , children: [{title: "Mah Son"}]}]
  }
  
  render(){
    return (
      <div style={{height: 400}}>
        <SortableTree
          treeData={this.state.treeData}
          onChange={treeData => this.setState({treeData})}
        />
      </div>
    )
  }
}