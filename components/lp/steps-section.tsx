"use client"

import { useState } from "react"
import type { StepData } from "@/data/types"

type StepsSectionProps = {
  steps: StepData[]
  heading?: string
  subtitle?: string
}

export function StepsSection({
  steps,
  heading = "3ステップで売上につなげる",
  subtitle = "友だちを集めて終わりにしない、段階的な顧客育成",
}: StepsSectionProps) {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-5 md:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#1F2937] mb-3 sm:mb-4">
          {heading}
        </h2>
        <p className="text-sm sm:text-base text-center text-[#6B7280] mb-8 sm:mb-12 md:mb-16">
          {subtitle}
        </p>

        {/* Tab Buttons */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(index)}
              className={`flex-1 px-3 sm:px-4 md:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base transition-all duration-300 border-2 ${
                activeStep === index
                  ? "text-white shadow-lg scale-[1.02]"
                  : "bg-white text-[#6B7280] border-[#E5E7EB] hover:border-gray-300"
              }`}
              style={
                activeStep === index
                  ? { backgroundColor: step.color, borderColor: step.color }
                  : {}
              }
            >
              <span className="block text-xs sm:text-sm opacity-80">{step.subtitle}</span>
              <span className="block">{step.title}</span>
            </button>
          ))}
        </div>

        {/* Active Step Content */}
        <div
          className="max-w-3xl mx-auto rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-10 border-2"
          style={{
            backgroundColor: steps[activeStep].colorLight,
            borderColor: steps[activeStep].color,
          }}
        >
          <div className="flex flex-col md:flex-row items-start gap-4 sm:gap-6">
            <div className="flex-1">
              <div
                className="inline-block px-3 py-1 rounded-full text-xs sm:text-sm font-bold text-white mb-3 sm:mb-4"
                style={{ backgroundColor: steps[activeStep].color }}
              >
                {steps[activeStep].subtitle}
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1F2937] mb-2 sm:mb-3">
                {steps[activeStep].title}
              </h3>
              <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed mb-4 sm:mb-6">
                {steps[activeStep].description}
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {steps[activeStep].features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold text-white"
                    style={{ backgroundColor: steps[activeStep].color }}
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
            {/* Step illustration */}
            <div className="w-full md:w-48 flex items-center justify-center">
              <div
                className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-full flex items-center justify-center text-white"
                style={{ backgroundColor: steps[activeStep].color }}
              >
                {steps[activeStep].icon && (() => {
                  const Icon = steps[activeStep].icon
                  return <Icon size={48} className="sm:w-14 sm:h-14 md:w-16 md:h-16" />
                })()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
