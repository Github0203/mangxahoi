import React, {} from "react";
import ReactDOM from "react-dom";

const Item = ({ text, onRemove }) => (
  <div>
    {text}
    <button onClick={onRemove}>X</button>
  </div>
);

const ItemList = ({ items, onRemove }) => (
  <div>
    {items.map(item => (
      <Item key={item.id} text={item.text} onRemove={() => onRemove(item.id)} />
    ))}
  </div>
);



class Danhsachnguoibichan extends React.Component {
  state = {
    // starting with 2 items
    items: [{ id: 1, text: "item 1" }, { id: 2, text: "item 2" }]
  };


  onRemove = id => {
    this.setState(state => {
      const { items } = state;
      const filteredItems = items.filter(item => item.id !== id);
      return { items: filteredItems };
    });
  };

  render() {
    const { items } = this.state;
    return (
      <div>
        <ItemList items={items} onRemove={this.onRemove} />
      </div>
    );
  }
}


export default Danhsachnguoibichan