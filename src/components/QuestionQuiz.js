import React, { useState } from 'react'
import './QuestionPage.css'
import Button from 'react-bootstrap/Button';

    
function QuestionQuiz() {
    
    const TestQuestions = [
		{
			questionText: 'From 1-4, I enjoy taking leadership roles in projects?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '2', isCorrect: false },
				{ answerText: '3', isCorrect: true },
				{ answerText: '4', isCorrect: false },
			],
		},
		{
			questionText: 'From 1-4, you always prepare for potential obstacles in advance?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '2', isCorrect: false },
				{ answerText: '3', isCorrect: true },
				{ answerText: '4', isCorrect: false },
			],
		},
		{
			questionText: ' From 1-4, you stay calm under pressure?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '2', isCorrect: false },
				{ answerText: '3', isCorrect: true },
				{ answerText: '4', isCorrect: false },
			],
		},
		{
			questionText: 'From 1-4, you rarely meet new people?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '2', isCorrect: false },
				{ answerText: '3', isCorrect: true },
				{ answerText: '4', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < TestQuestions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
    return (
        <div className='container ' style={{ marginTop: '200px'}}>
			{showScore ? (
				<div className='text-center containerCard' style={{paddingTop: '20px'}}>
					{/* You scored {score} out of {questions.length} */}
                    <h2>Continue into your dashboard.</h2> 
                    <br></br>
                    <Button href="Dashboard" variant="danger">Continue</Button>
				</div>
			) : (
				<>
                <div className="containerCard" style={{ paddingRight: '40px', paddingLeft: '40px'}}>
					<div className='' style={{ paddingTop: '20px'}}>
						<div className=''>
							<span>Question {currentQuestion + 1}</span>/{TestQuestions.length}
						</div>
						<div className=''>{TestQuestions[currentQuestion].questionText}</div>
					</div>
					<div className=''>
						{TestQuestions[currentQuestion].answerOptions.map((answerOption) => (
							<Button variant="danger-outline" style={{ border: '2px ridge', marginBottom: '10px'}} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>
                                {answerOption.answerText}
                            </Button>
						))}
					</div>
                    </div>
				</>
			)}
		</div>
    )
}

export default QuestionQuiz
