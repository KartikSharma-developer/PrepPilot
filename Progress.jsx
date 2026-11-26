
function Progress() {
  const sessions = [
    { name: "Session 1", score: 45 },
    { name: "Session 2", score: 58 },
    { name: "Session 3", score: 62 },
    { name: "Session 4", score: 72 },
    { name: "Session 5", score: 80 },
  ];

  const skills = [
    { name: "React", score: 82 },
    { name: "JavaScript", score: 76 },
    { name: "Async JavaScript", score: 42 },
    { name: "Communication", score: 84 },
  ];

  const chartPoints = sessions
    .map((session, index) => {
      const x = 35 + index * 100;
      const y = 165 - session.score * 1.35;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <div className="setup-page progress-page">
      <p className="eyebrow">PROGRESS REPORT</p>

      <h1>Your Improvement</h1>

      <p className="subtitle">
        Track your interview performance and identify areas to improve.
      </p>

      {/* Overview cards */}
      <div className="progress-report">
        <div className="report-card">
          <span>Overall Readiness</span>
          <strong>72%</strong>
          <small>Interview readiness</small>
        </div>

        <div className="report-card">
          <span>Practice Sessions</span>
          <strong>5</strong>
          <small>Demo sessions</small>
        </div>

        <div className="report-card">
          <span>Latest Score</span>
          <strong>80%</strong>
          <small>Latest demo session</small>
        </div>
      </div>

      {/* Performance graph */}
      <div className="improvement-card">
        <p className="eyebrow">PERFORMANCE ANALYTICS</p>

        <h2>Interview Score Trend</h2>

        <p>
          Your scores across five practice sessions.
        </p>

        <div className="progress-chart">
          <div className="chart-y-axis">
            <span>100%</span>
            <span>75%</span>
            <span>50%</span>
            <span>25%</span>
            <span>0%</span>
          </div>

          <svg
            viewBox="0 0 470 190"
            className="chart-svg"
            role="img"
            aria-label="Interview scores increasing from 45 to 80 percent"
          >
            {[30, 63, 96, 129, 162].map((y) => (
              <line
                key={y}
                x1="25"
                y1={y}
                x2="435"
                y2={y}
                stroke="#e2e8f0"
                strokeDasharray="5 5"
              />
            ))}

            <polyline
              points={chartPoints}
              fill="none"
              stroke="#6366f1"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {sessions.map((session, index) => {
              const x = 35 + index * 100;
              const y = 165 - session.score * 1.35;

              return (
                <circle
                  key={session.name}
                  cx={x}
                  cy={y}
                  r="5"
                  fill="#6366f1"
                />
              );
            })}
          </svg>
        </div>

        <div className="chart-x-axis">
          {sessions.map((session) => (
            <span key={session.name}>
              {session.name}
              <strong>{session.score}%</strong>
            </span>
          ))}
        </div>
      </div>

      {/* Skill analysis */}
      <div className="improvement-card">
        <p className="eyebrow">SKILL ANALYSIS</p>

        <h2>Skill-wise Performance</h2>

        {skills.map((skill) => (
          <div className="progress-skill" key={skill.name}>
            <div className="progress-skill-info">
              <span>{skill.name}</span>
              <strong>{skill.score}%</strong>
            </div>

            <div className="progress-skill-track">
              <div
                className="progress-skill-fill"
                style={{ width: `${skill.score}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Recommendation */}
      <div className="improvement-card">
        <p className="eyebrow">NEXT RECOMMENDATION</p>

        <h2>Focus on Async JavaScript</h2>

        <p>
          Async JavaScript is currently your lowest-scoring skill
          at 42%. Practice Promises, async/await and error handling
          to strengthen your understanding.
        </p>
      </div>
    </div>
  );
}

export default Progress;

