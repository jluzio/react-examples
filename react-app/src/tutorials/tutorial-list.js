import React, { Component } from 'react';

import Game from './tic-tac-toe/game';
import CounterExamples from './state/counter-examples';
import JsE6Test from './js-e6/js-e6-test';

export default class TutorialList extends Component {
    render() {
        return (
            <div className="tutorial-list">
                <h2>Tutorials</h2>
                <div id="accordion">
                    <div className="card tutorial-item">
                        <div className="card-header" id="headingTicTacToe">
                            <h5 className="mb-0">
                                <button className="btn btn-link" data-toggle="collapse" data-target="#collapseTicTacToe" aria-expanded="true" aria-controls="collapseTicTacToe">
                                    Tic-Tac-Toe
                                </button>
                            </h5>
                        </div>
                        <div id="collapseTicTacToe" className="collapse show" aria-labelledby="headingTicTacToe" data-parent="#accordion">
                            <div className="card-body">
                                <Game />
                            </div>
                        </div>
                    </div>
                    <div className="card tutorial-item">
                        <div className="card-header" id="headingState">
                            <h5 className="mb-0">
                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseState" aria-expanded="false" aria-controls="collapseState">
                                    Counter State
                                </button>
                            </h5>
                        </div>
                        <div id="collapseState" className="collapse" aria-labelledby="headingState" data-parent="#accordion">
                            <div className="card-body">
                                <CounterExamples />
                            </div>
                        </div>
                    </div>
                    <div className="card tutorial-item">
                        <div className="card-header" id="headingJsE6">
                            <h5 className="mb-0">
                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseJsE6" aria-expanded="false" aria-controls="collapseJsE6">
                                    Js E6
                                </button>
                            </h5>
                        </div>
                        <div id="collapseJsE6" className="collapse" aria-labelledby="headingJsE6" data-parent="#accordion">
                            <div className="card-body">
                                <JsE6Test />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}