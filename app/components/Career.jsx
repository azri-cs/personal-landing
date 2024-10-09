import React from 'react';

function Career() {
    const experiences = [
        {
            title: 'Web Developer',
            company: 'Hayat Technologies Sdn Bhd',
            period: 'July 2023 - Now',
            responsibilities: [
                'Led frontend development for 2 projects using Laravel, including preparing foundational setup and managing a junior developer.',
                'Conducted training on Laravel framework for frontend and backend developers to upskill the team.',
                'Performed risk assessment and provided 2 proposals for mass patching of servers to mitigate potential vulnerabilities.',
                'Managed technical resources allocation and oversight for 2 projects.',
                'Assist the development of mobile-first gamified LMS project for the user-facing side.',
                'Assist the development of interactive learning syllabus of a LMS project for the student side.'
            ]
        },
        {
            title: 'Web Developer',
            company: 'Appsploration Sdn Bhd',
            period: 'November 2022 - June 2023',
            responsibilities: [
                'Collaborated with other Web developer to develop and implement new features for existing projects, utilizing Laravel 5.6+, Bootstrap 3+, and JavaScript.',
                'Collaborated with QA tester to solve existing and new tickets.',
                'Collaborated with Mobile developer to build a seamless experience Web app.'
            ]
        },
        {
            title: 'IT Executive',
            company: 'Institute of Corporate Directors Malaysia',
            period: 'February 2020 - November 2022',
            responsibilities: [
                'Monitoring, maintaining, testing, and improving 2 Wordpress websites, 1 Laravel website.',
                'Supporting existing IT infrastructure in ICDM including but not limited to server administration, network operations and configuration, backup/recovery, system access security, email administration and application administration.',
                'Managing, maintaining log and/or list and providing technical support and troubleshooting of hardware and software problem to 35 end-users.',
                'Identifying and preparing hardware for disposal when appropriate and ensuring hardware stripped and secured before disposal.',
                'Working closely with other departments over the creatives items in the organisation using Adobe Illustrator and Acrobat.',
                'Patching 3 company websites and 1 VPS based on penetration test report from external vendor.',
                'Undertaking ad-hoc assignments or duties assigned by superior when required.',
                'Developing website or webpages for multiple series of virtual event using Laravel or WordPress.'
            ]
        },
        {
            title: 'Full Stack Developer',
            company: 'Freelancer',
            period: 'September 2019 - November 2022',
            responsibilities: [
                'Build and manage a customized inventory management system for TD-Cargo Services Sdn Bhd as a full-stack developer freelancer.',
                'Build and manage a customized payslip management system for TD-Cargo Services Sdn Bhd as a full-stack developer freelancer.',
                'Build and manage a customized device loan management system for GMK Group Sdn Bhd with another developer and a project manager.',
                'Build and manage a document listing management system for GMK Group Sdn Bhd with a project manager.'
            ]
        }
    ];

    return (
        <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-teal-600">Career</h2>
            {experiences.map((exp, index) => (
                <div key={index} className="mb-6 bg-white p-6 rounded-lg shadow">
                    <h3 className="text-xl font-semibold text-cyan-600">{exp.title}</h3>
                    <p className="text-gray-600">{exp.company}</p>
                    <p className="text-gray-500 mb-2">{exp.period}</p>
                    <ul className="list-disc pl-5">
                        {exp.responsibilities.map((resp, idx) => (
                            <li key={idx} className="text-gray-700 mb-1">{resp}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    );
}

export default Career;