import React from 'react'

const Skill = () => {
  const langauge = [
    {
      id: 0,
      title: "Frontend",
      skills: [
        "HTML", 
        "CSS",
         "JavaScript", 
         "React.js",
          "Tailwind CSS"
        ]
    },
    {
      id: 1,
      title: "Backend",
      skills: ["Node.js",
         "Express.js", 
         "MongoDB"
        ]
    },
    {
      id: 2,
      title: "Tools",
      skills: ["GitHub",
         "VS Code",
          "Figma",
          "Netlify"
        ]
    }
  ]

  return (
    <section
      id='skill'
      className='min-h-screen  py-20 px-6 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500'
    >


      <div className='text-center mb-18'>
        <h2 className='text-4xl font-bold text-gray-800 dark:text-white mb-4 animate-bounce'>
          Skills
        </h2>
        <div className="w-25 h-1  bg-purple-600 mx-auto mt-4"></div>
        <p className='text-gray-600 pt-10 dark:text-gray-400 max-w-2xl mx-auto'>
          A collection of my technical skills and expertise honed through various projects and experiences.
        </p>
      </div>



      <div className='flex flex-col items-center gap-12 max-w-2xl mx-auto '>
        {langauge.map((lang) => (
          <div
            key={lang.id}
            className='w-full bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300'
          >
            <h3 className='text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4 text-center'>
              {lang.title}
            </h3>
            <div className='flex flex-wrap justify-center gap-2'>
              {lang.skills.map((skill, index) => (
                <span
                  key={index}
                  className='bg-purple-600 hover:bg-purple-700 text-white px-4 py-3.5 rounded-full text-sm font-medium transition-colors duration-300'
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skill
