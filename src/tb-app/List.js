import React from 'react';
import jsonp from 'jsonp';
import Table from 'antd/lib/table';
import querystring from 'querystring';
import fakeData from './data.json';

/* react/no-multi-comp: 0*/

const columns = [{
  title: '名称',
  dataIndex: 'raw_title',
}, {
  title: '图片',
  dataIndex: 'pic_url',
  render(data) {
    return <img src={data} width="100" height="100"/>;
  },
}];

const List = React.createClass({
  propTypes: {
    params: React.PropTypes.object,
  },

  getInitialState() {
    return {
      loading: true,
      data: [],
    };
  },
  componentDidMount() {
    const queryStr = querystring.encode({
      ajax: 'true',
      q: this.props.params.q,
    });
    jsonp(`https://s.taobao.com/search?${queryStr}`, () => {
      const data = fakeData;
      data.forEach((d2, index) => {
        d2.key = index;
      });
      this.setState({
        loading: false,
        data,
      });
    });
  },
  render() {
    if (this.state.loading) {
      return false;
    }

    return <Table dataSource={this.state.data} columns={columns}/>;
  },
});

export default List;
