export default function Resume() {
  const resumeData = {
    summary: "Passionate AI Engineer with expertise in machine learning, deep learning, and modern web technologies. Currently completing UCF Software Development capstone project.",
    education: [
      {
        degree: "Software Development Capstone",
        school: "University of Central Florida (UCF)",
        year: "2025",
        status: "In Progress"
      }
    ],
    skills: {
      frontend: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"],
      tools: ["Git", "GitHub", "VS Code", "npm", "Vite"],
      concepts: ["Component Architecture", "State Management", "React Router", "Form Validation"]
    },
    experience: [
      {
        title: "AI Engineer",
        company: "Personal Projects & Portfolio",
        period: "2024 - Present",
        responsibilities: [
          "Built 5+ responsive web applications using React and modern JavaScript",
          "Implemented clean, maintainable code following best practices",
          "Created interactive games and financial tracking applications",
          "Focused on accessibility and user experience",
          "Developed AI/ML solutions for various real-world problems"
        ]
      }
    ]
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-8">
      <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">
        Resume
      </h2>

      {/* Professional Summary */}
      <section className="mb-8">
        <h3 className="text-xl font-bold mb-3 text-primary">Professional Summary</h3>
        <p className="text-slate-600 dark:text-slate-400">{resumeData.summary}</p>
      </section>

      {/* Education */}
      <section className="mb-8">
        <h3 className="text-xl font-bold mb-3 text-primary">Education</h3>
        {resumeData.education.map((edu, index) => (
          <div key={index} className="mb-4">
            <h4 className="font-bold text-slate-900 dark:text-white">{edu.degree}</h4>
            <p className="text-slate-600 dark:text-slate-400">{edu.school}</p>
            <p className="text-sm text-slate-500">{edu.year} - {edu.status}</p>
          </div>
        ))}
      </section>

      {/* Technical Skills */}
      <section className="mb-8">
        <h3 className="text-xl font-bold mb-3 text-primary">Technical Skills</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Frontend</h4>
            <div className="flex flex-wrap gap-2">
              {resumeData.skills.frontend.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Tools</h4>
            <div className="flex flex-wrap gap-2">
              {resumeData.skills.tools.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Key Concepts</h4>
            <div className="flex flex-wrap gap-2">
              {resumeData.skills.concepts.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section>
        <h3 className="text-xl font-bold mb-3 text-primary">Experience</h3>
        {resumeData.experience.map((exp, index) => (
          <div key={index} className="mb-4">
            <h4 className="font-bold text-slate-900 dark:text-white">{exp.title}</h4>
            <p className="text-slate-600 dark:text-slate-400">{exp.company}</p>
            <p className="text-sm text-slate-500 mb-2">{exp.period}</p>
            <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-400">
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
}
