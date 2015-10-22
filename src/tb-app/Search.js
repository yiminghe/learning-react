

import React from 'react';
import Select, {Option} from 'antd/lib/select';
import jsonp from 'jsonp';
import querystring from 'querystring';
import {History} from 'react-router';

const Search = React.createClass({
  mixins: [History],

  getInitialState() {
    return {
      data: [],
    };
  },

  onSelect(value) {
    this.history.pushState(null, `/list/${value}`);
  },

  fetchData(value) {
    const queryStr = querystring.encode({
      code: 'utf-8',
      q: value,
    });
    jsonp('http://suggest.taobao.com/sug?' + queryStr, (err, d) => {
      const result = d.result;
      const data = [];
      result.forEach((singleResult)=> {
        data.push({
          value: singleResult[0],
          text: <b>{singleResult[0]}</b>,
        });
      });
      this.setState({
        data: data,
      });
    });
  },

  render() {
    const data = this.state.data;
    const options = data.map((od) => {
      return <Option key={od.value}>{od.text}</Option>;
    });
    return (<div style={{textAlign: 'center'}}>
      <Select
        style={{width: 500}}
        combobox
        showArrow={false}
        notFoundContent=""
        onChange={this.fetchData}
        onSelect={this.onSelect}
        filterOption={false}>
        {options}
      </Select>
    </div>);
  },
});

export default Search;
