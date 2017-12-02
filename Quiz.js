'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Question = require('./Question');

var _Question2 = _interopRequireDefault(_Question);

var _ProgressBar = require('./ProgressBar');

var _ProgressBar2 = _interopRequireDefault(_ProgressBar);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _interpolate = require('interpolate');

var _interpolate2 = _interopRequireDefault(_interpolate);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Quiz = function Quiz(_ref) {
    var questions = _ref.questions,
        answers = _ref.answers,
        currentQuestionIndex = _ref.currentQuestionIndex,
        onAnswer = _ref.onAnswer,
        onNext = _ref.onNext,
        onFinish = _ref.onFinish,
        _ref$customClassNames = _ref.customClassNames,
        customClassNames = _ref$customClassNames === undefined ? {} : _ref$customClassNames,
        _ref$customText = _ref.customText,
        customText = _ref$customText === undefined ? {} : _ref$customText;

    var isLastQuestion = currentQuestionIndex + 1 === questions.length;

    var progressTextClassName = (0, _classnames2.default)('rq-Quiz-progressText', customClassNames['rq-Quiz-progressText']);
    var buttonContainerClassName = (0, _classnames2.default)('rq-Quiz-buttonContainer', customClassNames['rq-Quiz-buttonContainer']);
    var nextButtonClassName = (0, _classnames2.default)('rq-Quiz-nextButton', customClassNames['rq-Quiz-nextButton']);

    var finishButtonText = customText['rq-Quiz-nextButton--finish'] || 'Finish';
    var nextButtonText = customText['rq-Quiz-nextButton'] || 'Next';
    var progressText = (0, _interpolate2.default)(customText['rq-Quiz-progressText'] || 'Question {n} of {total}', {
        n: currentQuestionIndex + 1,
        total: questions.length
    });

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'p',
            { className: progressTextClassName },
            progressText
        ),
        _react2.default.createElement(_ProgressBar2.default, { value: currentQuestionIndex + 1,
            max: questions.length,
            customClassNames: customClassNames }),
        _react2.default.createElement(_Question2.default, _extends({ customClassNames: customClassNames,
            onAnswer: onAnswer,
            selectedAnswer: answers[currentQuestionIndex]
        }, questions[currentQuestionIndex])),
        _react2.default.createElement(
            'div',
            { className: buttonContainerClassName },
            isLastQuestion ? _react2.default.createElement(
                'button',
                { className: nextButtonClassName,
                    onClick: function onClick() {
                        return onFinish(answers);
                    },
                    disabled: answers[currentQuestionIndex] === undefined },
                finishButtonText
            ) : _react2.default.createElement(
                'button',
                { className: nextButtonClassName,
                    onClick: onNext,
                    disabled: answers[currentQuestionIndex] === undefined },
                nextButtonText
            )
        )
    );
};

Quiz.propTypes = {
    questions: _propTypes2.default.array.isRequired,
    answers: _propTypes2.default.object.isRequired,
    currentQuestionIndex: _propTypes2.default.number.isRequired,
    onAnswer: _propTypes2.default.func.isRequired,
    onNext: _propTypes2.default.func.isRequired,
    onFinish: _propTypes2.default.func.isRequired,
    progressTextTemplate: _propTypes2.default.string
};

exports.default = Quiz;