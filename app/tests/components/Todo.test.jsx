var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var Todo = require('Todo');

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist();
  });

  it('should call onToggle prop with id on click', () => {
    var data = {
      id: 199,
      text: 'test todo',
      completed: true
    };
    var spy = expect.createSpy();
    var todo = TestUtils.renderIntoDocument(<Todo {...data} onToggle={spy}/>);

    var $el = $(ReactDOM.findDOMNode(todo));
    TestUtils.Simulate.click($el[0]);
    expect(spy).toHaveBeenCalledWith(199);
  });
});
