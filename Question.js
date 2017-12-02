'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Answer = require('./Answer');

var _Answer2 = _interopRequireDefault(_Answer);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Question = function Question(_ref) {
    var instruction = _ref.instruction,
        text = _ref.text,
        answers = _ref.answers,
        selectedAnswer = _ref.selectedAnswer,
        onAnswer = _ref.onAnswer,
        _ref$customClassNames = _ref.customClassNames,
        customClassNames = _ref$customClassNames === undefined ? {} : _ref$customClassNames;

    var instructionClassName = (0, _classnames2.default)('rq-Question-instruction', customClassNames['rq-Question-instruction']);
    var textClassName = (0, _classnames2.default)('rq-Question-text', customClassNames['rq-Question-text']);
    var answerListClassName = (0, _classnames2.default)('rq-Question-answerList', customClassNames['rq-Question-answerList']);

    var renderText = function renderText() {
        var lines = Array.isArray(text) ? text : [text];

        return lines.map(function (line, i) {
            return _react2.default.createElement(
                'p',
                { key: i, className: textClassName, style: { margin: 0 } },
                line
            );
        });
    };

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'p',
            { className: instructionClassName },
            instruction
        ),
        renderText(),
        _react2.default.createElement(
            'ol',
            { className: answerListClassName },
            answers.map(function (a, i) {
                return _react2.default.createElement(
                    _Answer2.default,
                    { customClassNames: customClassNames,
                        key: i,
                        active: i === selectedAnswer,
                        onClick: function onClick() {
                            return onAnswer(i);
                        } },
                    a
                );
            })
        )
    );
};

Question.propTypes = {
    instruction: _propTypes2.default.string,
    text: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array]).isRequired,
    answers: _propTypes2.default.array.isRequired,
    selectedAnswer: _propTypes2.default.number,
    onAnswer: _propTypes2.default.func
};

exports.default = Question;