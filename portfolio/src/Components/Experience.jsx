import React from 'react'

const Experience = () => {
  const experience =[
    {
      id: 0,
      role: "Fullstack Developer",
      company: "Webverse Digital",
      date: "oct 2025 - Present",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        " Next Js",
      ],
    }
  ]
  return (
    <section
      id="experience"
      className="py-24 px-[12vw] md:px-[7vw] bg-skill-gradient bg-gradient-to-br dark:from-gray-900 dark:to-gray-800"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">Experience</h2>
        <div className="w-45 h-1 bg-purple-600 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience
        </p>
      </div>

      <div className="relative">
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

        {experience.map((experience, index) => (
          <div
            key={experience.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
            }`}
          >
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full sm:w-1/2">
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                {experience.role}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {experience.company} | {experience.date}
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">{experience.desc}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {experience.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-purple-600 text-white px-2 py-1 rounded text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
