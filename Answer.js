'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Answer = function Answer(_ref) {
    var active = _ref.active,
        onClick = _ref.onClick,
        children = _ref.children,
        _ref$customClassNames = _ref.customClassNames,
        customClassNames = _ref$customClassNames === undefined ? {} : _ref$customClassNames;

    var answerClassName = (0, _classnames2.default)('rq-Answer', customClassNames['rq-Answer']);
    var answerButtonClassName = (0, _classnames2.default)('rq-Answer-button', customClassNames['rq-Answer-button'], _defineProperty({ 'rq-Answer-button--active': active
    }, customClassNames['rq-Answer-button--active'], active));

    return _react2.default.createElement(
        'li',
        { className: answerClassName },
        _react2.default.createElement(
            'button',
            { onClick: onClick,
                className: answerButtonClassName },
            children
        )
    );
};

Answer.propTypes = {
    active: _propTypes2.default.bool.isRequired,
    onClick: _propTypes2.default.func,
    children: _propTypes2.default.node.isRequired
};

exports.default = Answer;