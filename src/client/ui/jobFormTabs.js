import React from "react";
import store from "store";

require('assets/styles/jobTabs.scss');

export default React.createClass({
	getInitialState:function() {
		return {
			class1: "active",
			class2: "tab",
			class3: "tab"
		}
	},

	componentWillMount: function () {
      this.unsubscribe = store.subscribe(function(){
        let currentStore = store.getState();
        this.setState({
        	class1: currentStore.classReducer.class1,
        	class2: currentStore.classReducer.class2,
        	class3: currentStore.classReducer.class3
        })
      }.bind(this));
    },

    componentWillUnmount:function() {
    	this.unsubscribe();
    },

	onStep1:function() {
		store.dispatch({
			type: "SHOW_TAB",
			tab1: true,
			tab2: false,
			tab3: false
		})
		store.dispatch({
			type:"CLASS_TAB",
			class1: "active",
			class2: "tab",
			class3: "tab"
		})
		
	},
	onStep2:function() {
		store.dispatch({
			type: "SHOW_TAB",
			tab1: false,
			tab2: true,
			tab3: false
		})
		store.dispatch({
			type:"CLASS_TAB",
			class1: "tab",
			class2: "active",
			class3: "tab"
		})
	},

	onStep3:function() {
		store.dispatch({
			type: "SHOW_TAB",
			tab1: false,
			tab2: false,
			tab3: true
		})
		store.dispatch({
			type:"CLASS_TAB",
			class1: "tab",
			class2: "tab",
			class3: "active"
		})
	},

	render:function() {
		return (
			<ul className="tabs">	
				<li className={this.state.class1} onClick={this.onStep1}> Step 1 </li>
				<li className={this.state.class2} onClick={this.onStep2}> Step 2 </li>
				<li className={this.state.class3} onClick={this.onStep3}> Step 3 </li>
			</ul>
		)
	}
})