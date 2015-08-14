require('rc-calendar/assets/index.css');

const React = require('react');
const Calendar = require('rc-calendar');
const DatePicker = Calendar.Picker;
const zhCn = require('gregorian-calendar/lib/locale/zh-cn'); // spm error
const DateTimeFormat = require('gregorian-calendar-format');
const GregorianCalendar = require('gregorian-calendar');
const CalendarLocale = require('rc-calendar/lib/locale/zh-cn');
const now = new GregorianCalendar(zhCn);
now.setTime(Date.now());

const defaultCalendarValue = new GregorianCalendar(zhCn);
defaultCalendarValue.setTime(Date.now());
defaultCalendarValue.addMonth(-1);

const Test = React.createClass({
  propTypes: {
    formatter: React.PropTypes.object,
    defaultValue: React.PropTypes.object,
  },

  getDefaultProps() {
    return {
      formatter: new DateTimeFormat('yyyy-MM-dd HH:mm:ss'),
    };
  },

  getInitialState() {
    return {
      time: Date.now(),
      showTime: true,
      disabled: false,
      value: this.props.defaultValue,
    };
  },

  onShowTimeChange(e) {
    this.setState({
      showTime: e.target.checked,
    });
  },

  onChange(value) {
    console.log('DatePicker change: ' + (value && this.props.formatter.format(value)));
  },

  onCalendarSelect(value) {
    console.log('calendar select: ' + (value && this.props.formatter.format(value)));
    // controlled value
    this.setState({
      time: Date.now(),
      value: value,
    });
  },

  onCalendarOk(value) {
    console.log('calendar ok: ' + (value && this.props.formatter.format(value)));
    // controlled value
    this.setState({
      time: Date.now(),
      value: value,
    });
  },


  render() {
    const state = this.state;
    const calendar = (<Calendar locale={CalendarLocale}
                               orient={['top', 'left']}
                               defaultValue={defaultCalendarValue}
                               showTime={this.state.showTime}
                               showOk={true}
                               onOk={this.onCalendarOk}
                               onSelect={this.onCalendarSelect}
                               onClear={this.onCalendarSelect.bind(this, null)} showClear={true}/>);
    return (<div style={{width: 240, margin: 20}} data-time={this.state.time}>
      <div style={{marginBottom: 10}}>
        <span>
          <input type="checkbox" checked={this.state.showTime} onChange={this.onShowTimeChange}/>
          showTime
        </span>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <label><input checked={state.disabled} onChange={this.toggleDisabled} type="checkbox"/> disabled </label>
      </div>
      <div style={{
        'boxSizing': 'border-box',
        'position': 'relative',
        'display': 'block',
        'lineHeight': 1.5,
        marginBottom: 22,
      }}>
        <DatePicker
          adjustOrientOnCalendarOverflow={true}
          animation="slide-up"
          disabled={state.disabled}
          trigger={<span className="rc-calendar-picker-icon" />}
          formatter={this.props.formatter} calendar={calendar}
          value={state.value} onChange={this.onChange}>
          <input className="rc-calendar-picker-input" style={{width: 200}} disabled={state.disabled}
                 placeholder="请选择日期"/>
        </DatePicker>
      </div>
    </div>);
  },

  toggleDisabled() {
    this.setState({
      disabled: !this.state.disabled,
    });
  },
});

React.render(<Test />, document.getElementById('react-content-input'));
