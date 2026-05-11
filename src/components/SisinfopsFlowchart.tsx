import React from 'react';
import { useTranslation } from 'react-i18next';

const SisinfopsFlowchart: React.FC = () => {
  const { t } = useTranslation();

  const steps = [
    { number: '1', title: t('pipeline.step1Title'), desc: t('pipeline.step1Desc') },
    { number: '2', title: t('pipeline.step2Title'), desc: t('pipeline.step2Desc') },
    { number: '3', title: t('pipeline.step3Title'), desc: t('pipeline.step3Desc') },
  ];

  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="section-label">
            <div className="section-label-line" />
            <span className="section-label-text">{t('pipeline.sectionLabel')}</span>
            <div className="section-label-line" />
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-emerald-200/30" />
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="relative text-center">
                <div className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold relative z-10 shadow-lg">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-body">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SisinfopsFlowchart;
