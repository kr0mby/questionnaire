import React, {Component} from 'react';
import styles from './question.module.css'

class Question extends Component {

    state = { // ["Question asked", Users Rating]

        questionnaire: {
            0:["Question 1: 1",0],
            1:["Question 2: 2",0],
            2:["Question 3: 3",0],
            3:["Question 4: 4",0],
        },
        questionStatus: {
            currentQuestion: 0,
            previousQuestion: 0,
        },
        
    }

    onRadioChangeHandler = (event) => {

        const questionnaireCopy = {...this.state.questionnaire}

        questionnaireCopy[this.state.questionStatus.currentQuestion][1] = parseInt(event.target.value)

        this.setState({
            questionnaire: {...questionnaireCopy},
        })
        console.log(this.state.questionnaire)
    }

    OnSubmissionClick = () => {

        this.setState({
            questionStatus: {
                previousQuestion: (this.state.questionStatus.currentQuestion),
                currentQuestion: ( this.state.questionStatus.currentQuestion + 1),
            }
        })
    }

    viewResultsHandler = () => {
        
        return (
            <div>
                
            </div>
        )
    }

    render () {

        let questionnairUI; 

        if (this.state.questionStatus.currentQuestion >=  Object.keys(this.state.questionnaire).length) {

            questionnairUI = (
                <div  className={styles.Question}>
                    <p>End.</p>
                    <button>Results</button>
                </div>
            )

        } else {

            questionnairUI = (
                <div className={styles.Question}>

                    <p>{this.state.questionnaire[this.state.questionStatus.currentQuestion][0]}</p>     
                    
                    <form>
                        <label className={styles.radioContainer}>
                            <input 
                                type="radio" 
                                value="1"
                                checked={this.state.questionnaire[this.state.questionStatus.currentQuestion][1] === 1 ? true : false} 
                                onChange={this.onRadioChangeHandler}/>
                            <span className={`${styles.circle} ${styles.Red}`}></span>
                        </label>

                        <label className={styles.radioContainer}>
                            <input 
                                type="radio"
                                value="2"  
                                checked={this.state.questionnaire[this.state.questionStatus.currentQuestion][1] === 2 ? true : false} 
                                onChange={this.onRadioChangeHandler}/>
                            <span className={`${styles.circle} ${styles.Orange}`}></span>    
                        </label>
                        
                        <label className={styles.radioContainer}>
                            <input 
                                type="radio" 
                                value="3" 
                                checked={this.state.questionnaire[this.state.questionStatus.currentQuestion][1] === 3 ? true : false} 
                                onChange={this.onRadioChangeHandler}/>
                            <span className={`${styles.circle} ${styles.Yellow}`}></span>
                        </label>

                        <label className={styles.radioContainer}>
                            <input 
                                type="radio" 
                                value="4" 
                                checked={this.state.questionnaire[this.state.questionStatus.currentQuestion][1] === 4 ? true : false} 
                                onChange={this.onRadioChangeHandler}/>
                            <span className={`${styles.circle} ${styles.Green}`}></span>
                        </label>

                        <label className={styles.radioContainer}>
                            <input 
                                type="radio" 
                                value="5" 
                                checked={this.state.questionnaire[this.state.questionStatus.currentQuestion][1] === 5 ? true : false} 
                                onChange={this.onRadioChangeHandler}/>
                            <span className={`${styles.circle} ${styles.Blue}`}></span>
                        </label>

                    </form>

                    <button onClick={this.OnSubmissionClick}>Next</button>

                </div>
            ) 
        }
        

        return (
            <div>
                {questionnairUI}
            </div>
        );
    }
}

export default Question 