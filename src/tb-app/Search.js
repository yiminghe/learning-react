import React from 'react';
import Select, { Option } from 'antd/lib/select';
import jsonp from 'jsonp';
import querystring from 'querystring';
import { History } from 'react-router';

const Search = React.createClass({
  mixins: [History],

  getInitialState() {
    return {
      data: [],
      value: '',
    };
  },

  onKeyDown(e) {
    if (e.keyCode === 13) {
      console.log('onEnter', this.state.value);
      this.jump(this.state.value);
    }
  },

  onSelect(value) {
    console.log('select ', value);
    this.jump(value);
  },

  jump(v) {
    setTimeout(() => {
      this.history.pushState(null, `/list/${v}`);
    }, 30);
  },

  fetchData(value) {
    this.setState({
      value,
    });
    const queryStr = querystring.encode({
      code: 'utf-8',
      q: value,
    });
    jsonp(`http://suggest.taobao.com/sug?${queryStr}`, (err, d) => {
      const result = d.result;
      const data = [];
      result.forEach((singleResult) => {
        data.push({
          value: singleResult[0],
          text: <b>{singleResult[0]}</b>,
        });
      });
      this.setState({
        data,
      });
    });
  },

  render() {
    const data = this.state.data;
    const options = data.map((od) => {
      const ret = <Option key={od.value}>{od.text}</Option>;
      return ret;
    });
    return (<div style={{ textAlign: 'center' }} onKeyDown={this.onKeyDown}>
      <Select
        style={{ width: 500 }}
        combobox
        value={this.state.value}
        placeholder="淘你喜欢"
        optionLabelProp="value"
        defaultActiveFirstOption={false}
        showArrow={false}
        notFoundContent=""
        onChange={this.fetchData}
        onSelect={this.onSelect}
        filterOption={false}
      >
        {options}
      </Select>
    </div>);
  },
});

export default Search;
