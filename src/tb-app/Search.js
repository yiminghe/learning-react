

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

  render() {
    const data = this.state.data;
    const options = data.map((d) => {
      return <Option key={d.value}>{d.text}</Option>;
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

  fetchData(value) {
    const q = querystring.encode({
      code: 'utf-8',
      q: value,
    });
    jsonp('http://suggest.taobao.com/sug?' + q, (err, d) => {
      const result = d.result;
      const data = [];
      result.forEach((r)=> {
        data.push({
          value: r[0],
          text: <b>{r[0]}</b>,
        });
      });
      this.setState({
        data: data,
      });
    });
  },
});

export default Search;
