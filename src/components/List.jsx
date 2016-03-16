var React = require('react');
var ListItem=require('./Listitem.jsx');

var ingredients=[{"id":1,"text":"ham"},{"id":2,"text":"chesse"},{"id":3,"text":"Pup"}];

var List=React.createClass({
  render:function() {
       var listitems=ingredients.map(function(item) {
          return <ListItem key={item.id} ingredient={item.text}/>;
       });
return (<ul>{listitems}</ul>);

  }
});
module.exports=List;
