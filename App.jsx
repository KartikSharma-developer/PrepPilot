
import { useState } from "react";
import Progress from "./Progress.jsx";

function App() {
  const [page, setPage] = useState("dashboard");

  const skills = [
    { name: "React", score: 82 },
    { name: "JavaScript", score: 76 },
    { name: "Async JavaScript", score: 42, weak: true },
    { name: "Communication", score: 84 },
  ];

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="logo">
          <span className="logo-mark">P</span>
          <span>PrepPilot</span>
        </div>

        <nav>
          <button
            className={page === "dashboard" ? "active" : ""}
            onClick={() => setPage("dashboard")}
          >
            Dashboard
          </button>

          <button
            className={page === "interviews" ? "active" : ""}
            onClick={() => setPage("interviews")}
          >
            Interviews
          </button>

          <button
            className={page === "practice" ? "active" : ""}
            onClick={() => setPage("practice")}
          >
            Practice
          </button>

          <button
            className={
              page === "progress" ? "active" : ""
            }
            onClick={() => setPage("progress")}
          >
            Progress
          </button>
        </nav>
      </aside>

      <main className="main">
        {/* DASHBOARD */}
        {page === "dashboard" && (
          <>
            <header className="topbar">
              <div>
                <p className="eyebrow">DASHBOARD</p>
                <h1>Good evening, Rahul 👋</h1>
                <p className="subtitle">
                  Let's keep improving your interview readiness.
                </p>
              </div>
            </header>

            <section className="overview-grid">
              <div className="readiness-card">
                <div>
                  <p className="card-label">
                    INTERVIEW READINESS
                  </p>
                  <h2>72%</h2>
                  <p className="positive">
                    ↑ 8% from your last interview
                  </p>
                </div>

                <div className="readiness-ring">
                  <span>72</span>
                </div>
              </div>

              <div className="interview-card">
                <div>
                  <p className="card-label">
                    RECENT INTERVIEW
                  </p>
                  <h3>Frontend Developer</h3>
                  <p className="muted">
                    Yesterday · 10 questions
                  </p>
                </div>

                <div className="interview-score">
                  <strong>72%</strong>
                  <span>Overall score</span>
                </div>

                <button
                  className="secondary-btn"
                  onClick={() => setPage("progress")}
                >
                  View Report →
                </button>
              </div>
            </section>

            <section className="content-grid">
              <div className="skills-section">
                <div className="section-heading">
                  <div>
                    <p className="eyebrow">PERFORMANCE</p>
                    <h2>Your skill profile</h2>
                  </div>

                  <span className="skill-count">
                    4 skills tracked
                  </span>
                </div>

                <div className="skills-list">
                  {skills.map((skill) => (
                    <div className="skill-row" key={skill.name}>
                      <div className="skill-info">
                        <div className="skill-name">
                          <span>{skill.name}</span>

                          {skill.weak && (
                            <span className="warning">
                              Needs focus
                            </span>
                          )}
                        </div>

                        <strong>{skill.score}%</strong>
                      </div>

                      <div className="progress-track">
                        <div
                          className={`progress-fill ${
                            skill.weak ? "weak" : ""
                          }`}
                          style={{
                            width: `${skill.score}%`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="focus-card">
                <div className="focus-icon">!</div>

                <p className="card-label">
                  RECOMMENDED FOCUS
                </p>

                <h2>Async JavaScript</h2>

                <p>
                  This is currently your weakest skill.
                  Targeted practice can help strengthen
                  your understanding.
                </p>

                <div className="focus-score">
                  <span>Current level</span>
                  <strong>42%</strong>
                </div>

                <button
                  className="primary-btn"
                  onClick={() => setPage("practice")}
                >
                  Start Practice →
                </button>
              </div>
            </section>
          </>
        )}

        {/* INTERVIEWS */}
        {page === "interviews" && (
          <InterviewSetup setPage={setPage} />
        )}

        {/* PRACTICE */}
        {page === "practice" && (
          <Practice setPage={setPage} />
        )}

        {/* TARGETED PRACTICE */}
        {page === "targeted-practice" && (
          <TargetedPractice setPage={setPage} />
        )}

        {/* PROGRESS */}
        {page === "progress" && (
          <Progress />
        )}
      </main>
    </div>
  );
}

/* INTERVIEW SETUP */

function InterviewSetup({ setPage }) {
  return (
    <div className="setup-page">
      <p className="eyebrow">NEW INTERVIEW</p>

      <h1>Set up your interview</h1>

      <p className="subtitle">
        Customize your interview based on the role you're preparing for.
      </p>

      <div className="setup-card">
        <div className="form-group">
          <label>Target role</label>

          <select>
            <option>Frontend Developer</option>
            <option>Backend Developer</option>
            <option>Full Stack Developer</option>
            <option>Python Developer</option>
            <option>Data Analyst</option>
          </select>
        </div>

        <div className="form-group">
          <label>Experience level</label>

          <select>
            <option>Fresher</option>
            <option>0–1 years</option>
            <option>1–3 years</option>
          </select>
        </div>

        <div className="form-group">
          <label>Interview type</label>

          <div className="option-grid">
            <button className="option selected">
              Technical
            </button>

            <button className="option">
              Behavioral
            </button>

            <button className="option">
              Mixed
            </button>
          </div>
        </div>

        <div className="form-group">
          <label>Interview length</label>

          <select>
            <option>10 questions · ~15 min</option>
            <option>15 questions · ~25 min</option>
            <option>20 questions · ~35 min</option>
          </select>
        </div>

        <div className="setup-summary">
          <span>AI interview will focus on</span>

          <div>
            <span>React</span>
            <span>JavaScript</span>
            <span>Problem Solving</span>
          </div>
        </div>

        <button
          className="primary-btn start-btn"
          onClick={() => setPage("practice")}
        >
          Start AI Interview →
        </button>
      </div>
    </div>
  );
}

/* PRACTICE */

function Practice({ setPage }) {
  const questions = [
    {
      question:
        "What is the difference between == and === in JavaScript?",
      skill: "JavaScript Fundamentals",
      difficulty: "Easy",
      concepts: [
        { keywords: ["value", "values"], points: 2.5 },
        { keywords: ["type", "data type"], points: 2.5 },
        { keywords: ["loose", "coercion", "conversion"], points: 2.5 },
        { keywords: ["strict"], points: 2.5 },
      ],
      suggestions: [
        "Mention how === checks both value and data type.",
        "Explain type coercion and the difference between loose and strict equality.",
      ],
    },
    {
      question:
        "Explain how async/await works in JavaScript.",
      skill: "Async JavaScript",
      difficulty: "Medium",
      concepts: [
        { keywords: ["async", "asynchronous"], points: 2.5 },
        { keywords: ["promise", "promises"], points: 2.5 },
        { keywords: ["await", "wait"], points: 2.5 },
        { keywords: ["try", "catch", "error"], points: 2.5 },
      ],
      suggestions: [
        "Explain that async functions return Promises.",
        "Explain how await works with a Promise and mention error handling.",
      ],
    },
    {
      question:
        "How would you handle multiple API requests that can run at the same time?",
      skill: "Problem Solving",
      difficulty: "Medium",
      concepts: [
        { keywords: ["parallel", "concurrent", "simultaneously"], points: 2.5 },
        { keywords: ["promise"], points: 2.5 },
        { keywords: ["promise.all", "promise all"], points: 2.5 },
        { keywords: ["error", "catch", "handle"], points: 2.5 },
      ],
      suggestions: [
        "Mention Promise.all() for running independent requests together.",
        "Explain how you would handle failures from the requests.",
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [scores, setScores] = useState([]);

  const question = questions[currentQuestion];

  const evaluateAnswer = () => {
    const normalizedAnswer = answer.toLowerCase();

    let score = 0;
    let matchedConcepts = 0;

    question.concepts.forEach((concept) => {
      const matched = concept.keywords.some((keyword) =>
        normalizedAnswer.includes(keyword)
      );

      if (matched) {
        score += concept.points;
        matchedConcepts++;
      }
    });

    return { score, matchedConcepts };
  };

  const handleSubmit = () => {
    if (answer.trim() === "") return;

    const result = evaluateAnswer();

    setScores((previous) => {
      const updated = [...previous];
      updated[currentQuestion] = result.score;
      return updated;
    });

    setSubmitted(true);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswer("");
      setSubmitted(false);
    } else {
      setFinished(true);
    }
  };

  const getAverageScore = () => {
    const total = scores.reduce(
      (sum, score) => sum + (score || 0),
      0
    );

    return Math.round(total / questions.length);
  };

  if (finished) {
    const overallScore = getAverageScore();
    const asyncScore = scores[1] || 0;
    const technicalScore = scores[0] || 0;
    const problemScore = scores[2] || 0;

    return (
      <div className="setup-page">
        <p className="eyebrow">INTERVIEW EVALUATION</p>

        <h1>Your Interview Report</h1>

        <p className="subtitle">
          Here's how you performed across the interview.
        </p>

        <div className="progress-report">
          <div className="report-card">
            <span>Overall Score</span>
            <strong>{overallScore * 10}%</strong>
            <small>Based on 3 responses</small>
          </div>

          <div className="report-card">
            <span>Technical Knowledge</span>
            <strong>{technicalScore}/10</strong>
            <small>JavaScript fundamentals</small>
          </div>

          <div className="report-card">
            <span>Problem Solving</span>
            <strong>{problemScore}/10</strong>
            <small>Scenario based</small>
          </div>
        </div>

        <div className="improvement-card">
          <p className="eyebrow">WEAK AREA DETECTED</p>

          <h2>Async JavaScript</h2>

          <p>
            Your performance indicates that Async JavaScript
            could benefit from targeted practice.
          </p>

          <div className="skill-meter">
            <div
              className="skill-meter-fill"
              style={{ width: `${asyncScore * 10}%` }}
            />
          </div>

          <div className="skill-score">
            Current skill score: <strong>{asyncScore}/10</strong>
          </div>

          <button
            className="primary-btn"
            onClick={() => setPage("targeted-practice")}
          >
            Start Targeted Practice →
          </button>
        </div>

        <button
          className="back-btn"
          onClick={() => setPage("dashboard")}
        >
          ← Back to Dashboard
        </button>
      </div>
    );
  }

  const evaluation = submitted ? evaluateAnswer() : null;

  return (
    <div className="setup-page">
      <p className="eyebrow">MOCK INTERVIEW</p>

      <h1>Frontend Developer Interview</h1>

      <p className="subtitle">
        Answer naturally. PrepPilot evaluates your response using key concepts.
      </p>

      <div className="question-card">
        <div className="question-top">
          <span>
            Question {currentQuestion + 1} of {questions.length}
          </span>

          <span>{question.difficulty}</span>
        </div>

        <div className="question-skill">
          {question.skill}
        </div>

        <h2>{question.question}</h2>

        {!submitted ? (
          <>
            <textarea
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Type your answer here..."
            />

            <button
              className="primary-btn"
              onClick={handleSubmit}
              disabled={!answer.trim()}
            >
              Submit Answer →
            </button>
          </>
        ) : (
          <div className="feedback-box">
            <div className="feedback-header">
              <div>
                <p className="card-label">
                  PROTOTYPE EVALUATION
                </p>

                <h3>Answer evaluated</h3>
              </div>

              <div className="answer-score">
                {evaluation.score}/10
              </div>
            </div>

            <div className="feedback-good">
              {evaluation.score >= 7
                ? "✓ Good understanding of the main concepts."
                : evaluation.score >= 4
                ? "◐ Partial understanding. Some important concepts are missing."
                : "⚠ Your answer needs more explanation and technical concepts."}
            </div>

            <div className="feedback-suggestion">
              <strong>Improvement suggestion</strong>

              <p>
                {evaluation.score >= 7
                  ? "Try adding a practical example to make your interview answer stronger."
                  : question.suggestions[
                      Math.min(
                        Math.floor(evaluation.score / 2.5),
                        question.suggestions.length - 1
                      )
                    ]}
              </p>
            </div>

            <button
              className="primary-btn"
              onClick={handleNext}
            >
              {currentQuestion === questions.length - 1
                ? "View Evaluation →"
                : "Next Question →"}
            </button>
          </div>
        )}
      </div>

      <div className="interview-progress">
        {questions.map((_, index) => (
          <div
            key={index}
            className={`question-dot ${
              index === currentQuestion ? "current" : ""
            } ${
              index < currentQuestion ? "completed" : ""
            }`}
          >
            {index < currentQuestion ? "✓" : index + 1}
          </div>
        ))}
      </div>

      <button
        className="back-btn"
        onClick={() => setPage("dashboard")}
      >
        ← Exit Interview
      </button>
    </div>
  );
}

/* TARGETED PRACTICE */

function TargetedPractice({ setPage }) {
  const [submitted, setSubmitted] = useState(false);
  const [answer, setAnswer] = useState("");

  return (
    <div className="setup-page">
      <p className="eyebrow">TARGETED PRACTICE</p>

      <h1>Improve your Async JavaScript</h1>

      <p className="subtitle">
        Practice questions are focused on the skill identified
        as a weak area during your interview.
      </p>

      <div className="question-card">
        <div className="question-top">
          <span>Question 1 of 3</span>
          <span>Medium</span>
        </div>

        <div className="question-skill">
          Async JavaScript
        </div>

        <h2>
          Explain how async/await works in JavaScript and why it is useful.
        </h2>

        {!submitted ? (
          <>
            <textarea
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Explain your answer..."
            />

            <button
              className="primary-btn"
              disabled={!answer.trim()}
              onClick={() => setSubmitted(true)}
            >
              Submit Answer →
            </button>
          </>
        ) : (
          <div className="feedback-box">
            <div className="feedback-header">
              <div>
                <p className="card-label">
                  PRACTICE FEEDBACK
                </p>

                <h3>Good attempt</h3>
              </div>

              <div className="answer-score">
                7/10
              </div>
            </div>

            <div className="feedback-good">
              ✓ You understand the basic purpose of async/await.
            </div>

            <div className="feedback-suggestion">
              <strong>Improve this concept</strong>

              <p>
                Explain that async functions return Promises and
                await is used to wait for a Promise to settle.
              </p>
            </div>

            <button
              className="primary-btn"
              onClick={() => setPage("progress")}
            >
              View Improvement →
            </button>
          </div>
        )}
      </div>

      <button
        className="back-btn"
        onClick={() => setPage("dashboard")}
      >
        ← Back to Dashboard
      </button>
    </div>
  );
}

export default App;
