import { Briefcase, GraduationCap, ShieldCheck, CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-background min-h-screen pb-24">
      {/* 1. Profile Header */}
      <section className="bg-primary pt-24 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Profile Image Wrapper */}
          <div className="relative inline-block mb-8">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-xl mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600&h=600" 
                alt="Accountant Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Name and Title */}
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            David Anderson
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 font-medium tracking-wide">
            Certified Public Accountant (CPA)
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="-mt-16 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            
            {/* 2. Introduction */}
            <div className="p-10 md:p-12 border-b border-gray-100">
              <h2 className="text-2xl font-heading font-bold text-text-primary mb-6">
                Introduction
              </h2>
              <div className="text-lg text-text-secondary leading-relaxed space-y-4">
                <p>
                  Hello, I’m David Anderson. With a passion for numbers and a commitment to helping people thrive financially, I specialize in providing tailored tax and accounting services to individuals and growing businesses alike.
                </p>
                <p>
                  Navigating the ever-changing landscape of tax codes and financial compliance can be overwhelming. My goal is to simplify this process, offering clear, actionable, and secure financial strategies so that you can focus on what matters most—running your business and planning your future.
                </p>
              </div>
            </div>

            {/* 3. Experience */}
            <div className="p-10 md:p-12 border-b border-gray-100 bg-gray-50">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white text-primary rounded-lg shadow-sm border border-gray-100">
                  <Briefcase size={24} />
                </div>
                <h2 className="text-2xl font-heading font-bold text-text-primary">
                  Experience
                </h2>
              </div>
              <ul className="space-y-6">
                <li className="relative pl-6 before:absolute before:left-0 before:top-2.5 before:w-2 before:h-2 before:bg-primary before:rounded-full">
                  <h4 className="font-heading font-bold text-text-primary mb-1">Senior Accountant — Elite Financial Partners</h4>
                  <p className="text-text-secondary font-medium mb-2">2018 – Present</p>
                  <p className="text-text-secondary leading-relaxed">Lead tax preparation for over 200 corporate clients, identifying critical deductions and managing complex multi-state GST filings.</p>
                </li>
                <li className="relative pl-6 before:absolute before:left-0 before:top-2.5 before:w-2 before:h-2 before:gray-300 before:bg-gray-300 before:rounded-full">
                  <h4 className="font-heading font-bold text-text-primary mb-1">Tax Consultant — Apex Advisory Group</h4>
                  <p className="text-text-secondary font-medium mb-2">2013 – 2018</p>
                  <p className="text-text-secondary leading-relaxed">Advised small-to-medium enterprises on tax compliance, audit representation, and effective bookkeeping strategies.</p>
                </li>
              </ul>
            </div>

            {/* 4. Qualifications */}
            <div className="p-10 md:p-12 border-b border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-50 text-primary rounded-lg">
                  <GraduationCap size={24} />
                </div>
                <h2 className="text-2xl font-heading font-bold text-text-primary">
                  Qualifications
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-gray-100 p-6 rounded-xl">
                  <h4 className="font-heading font-bold text-text-primary mb-2">Certified Public Accountant</h4>
                  <p className="text-text-secondary">Licensed CPA with active standing since 2014.</p>
                </div>
                <div className="border border-gray-100 p-6 rounded-xl">
                  <h4 className="font-heading font-bold text-text-primary mb-2">Master of Accountancy</h4>
                  <p className="text-text-secondary">University of Finance & Economics, Graduated with Honors.</p>
                </div>
                <div className="border border-gray-100 p-6 rounded-xl">
                  <h4 className="font-heading font-bold text-text-primary mb-2">Enrolled Agent (EA)</h4>
                  <p className="text-text-secondary">Federally-authorized tax practitioner empowered by the U.S. Department of the Treasury.</p>
                </div>
                <div className="border border-gray-100 p-6 rounded-xl">
                  <h4 className="font-heading font-bold text-text-primary mb-2">QuickBooks ProAdvisor</h4>
                  <p className="text-text-secondary">Certified expert in QuickBooks management and setup.</p>
                </div>
              </div>
            </div>

            {/* 5. Why people trust him */}
            <div className="p-10 md:p-12 bg-gray-50">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white text-primary rounded-lg shadow-sm border border-gray-100">
                  <ShieldCheck size={24} />
                </div>
                <h2 className="text-2xl font-heading font-bold text-text-primary">
                  Why People Trust Me
                </h2>
              </div>
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                Trust is the foundation of any financial relationship. Over the years, my clients have continually prioritized my services because of my commitment to:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "100% Data Security & Confidentiality",
                  "Transparent & Upfront Pricing",
                  "Zero Hidden Fees or Surprise Charges",
                  "Direct Access and Timely Responses",
                  "Proactive Over Reactive Tax Planning",
                  "Ethical and Honest Advising"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="text-primary shrink-0" size={20} />
                    <span className="text-text-primary font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
